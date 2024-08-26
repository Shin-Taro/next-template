// TODO: jqueryの対応方針決定次第、scriptタグを削除する
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

import type { DocumentContext, DocumentInitialProps } from "next/document"

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(context)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
