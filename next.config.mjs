import dotenv from "dotenv"

dotenv.config({ path: `./config/${process.env.ENV_NAME || "local"}.env` })
console.log(`Using .env file: ${process.env.ENV_NAME || "local"}.env`)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "api.ts"],
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // sentry初期化に使用する
    instrumentationHook: true,
  },
}

export default nextConfig
