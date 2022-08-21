import type { AppProps } from "next/app";
import React from "react";
import { GlobalStyles } from "../modules/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
