FROM node:20.11-slim AS base

FROM base AS builder

ARG http_proxy=""
ARG https_proxy=""
WORKDIR /usr/src/app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ ./.yarn/
# CI上で実行する時のみ、yarnに対してプロキシの設定をしている.
RUN if [ -n "$http_proxy" ]; then \
  echo "seting yarn proxy"; \
  echo 'httpProxy: "'$http_proxy'"' >> .yarnrc.yml; \
  echo 'httpsProxy: "'$https_proxy'"' >> .yarnrc.yml; \
  else \
  echo "nothing to do"; \
  fi
RUN yarn install --immutable

# build時に不要な設定ファイルはコピーしない
COPY tsconfig.json next.config.mjs ./
COPY config/ ./config/
COPY public/ ./public/
COPY src/ ./src/

ARG ENV_NAME
ENV ENV_NAME=${ENV_NAME}

ENV NEXT_TELEMETRY_DISABLED 1

RUN NODE_OPTIONS=--max_old_space_size=2048 yarn build

FROM base AS runner

WORKDIR /usr/src/app

COPY --from=builder --chown=node:node /usr/src/app/public/ ./public
COPY --from=builder --chown=node:node /usr/src/app/.next/standalone ./
COPY --from=builder --chown=node:node /usr/src/app/.next/static/ ./.next/static/

# standalone buildに含まれていない tracer.js 内で dd-trace を使うために必要
COPY --from=builder --chown=node:node /usr/src/app/node_modules/ ./node_modules/
COPY ./tracer.js ./

EXPOSE 3000

USER node

CMD ["node", "--require", "./tracer.js", "server.js"]
