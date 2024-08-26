export async function register() {
  // 起動時にSentryを初期化する、nodejsモジュールに依存しているためnodejsランタイムのみ実行する
  // eslint-disable-next-line dot-notation, strict-check/restrict-use-of-process-env
  if (process.env["NEXT_RUNTIME"] === "nodejs") {
    if (process.env.NODE_ENV === "production") {
      const { init } = await import("@sentry/node")
      init({
        dsn: "",
      })
      console.log("Sentry initialized on the server")
    }
  }
}
