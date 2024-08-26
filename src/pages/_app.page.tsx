import App from "next/app"

import type { AppProps, AppContext } from "next/app"

type TProps = AppProps

const MyApp = ({ Component, pageProps }: TProps) => (
  <main>
    <Component {...pageProps} />
  </main>
)

MyApp.getInitialProps = async (appContext: AppContext) => {
  const context = await App.getInitialProps(appContext)
  return { context }
}

export default MyApp
