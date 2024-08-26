import type { Level } from "pino"

/**
 * サーバ環境で必要な環境変数の定義
 */
type PrivateEnvironmentType = {
  BFF_URL: string
  NODE_ENV: string
  LOG_LEVEL: Level
  SENTRY_DSN: string
}

type SatisfiesPrivateEnvironment = Record<keyof PrivateEnvironmentType, string | undefined>

/* eslint-disable strict-check/restrict-use-of-process-env, dot-notation, @typescript-eslint/consistent-type-assertions */
/**
 * サーバサイドの環境変数
 *
 * assertionを使って型を保証しているため、環境変数が設定されていない場合はruntime errorになる。
 */
export const PrivateEnvironment = {
  BFF_URL: process.env["BFF_URL"],
  LOG_LEVEL: process.env["LOG_LEVEL"] || "info",
  NODE_ENV: process.env["NODE_ENV"],
  SENTRY_DSN: process.env["SENTRY_DSN"],
} satisfies SatisfiesPrivateEnvironment as PrivateEnvironmentType
/* eslint-enable strict-check/restrict-use-of-process-env, dot-notation, @typescript-eslint/consistent-type-assertions */
