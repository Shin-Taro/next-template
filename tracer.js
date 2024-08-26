const setUpDatadogTracing = () => {
  const { tracer } = require("dd-trace")
  const enableDatadog = Boolean(process.env.ENABLE_DATADOG)
  if (enableDatadog) {
    tracer.init()
  }
  // 読み込みの順番の都合上、ロガーを使うことができない(ロガーを使える状態でinitを実行するとロガーの中の処理がトレースできなくなる)ため、
  console.log(`enable datadog: ${enableDatadog.toString()}`)
}

setUpDatadogTracing()
