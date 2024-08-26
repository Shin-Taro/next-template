import * as BrowserSentry from "@sentry/browser"
import Error from "next/error"

import { IsProductionBrowser } from "src/layers/shared/const/IsProductionBrowser"

import type { NextPage, NextPageContext } from "next"
import type { ErrorProps } from "next/error"

const InternalServerError = 500

// エラーの出しわけが必要なため無効
// eslint-disable-next-line complexity
const captureRenderException = (contextData: NextPageContext) => {
  const { res, err } = contextData

  const statusCode = res?.statusCode
  // 400系の場合は送信しない
  const isClientError = statusCode && statusCode < InternalServerError
  const finalError = err || `_error.js called with falsy error (${err})`

  if (!isClientError) {
    if (IsProductionBrowser) {
      BrowserSentry.captureException(finalError)
    }
  }
}

// TODO: 既存のエラーページへ遷移させる
const CustomErrorComponent: NextPage<ErrorProps> = (props) => {
  const { statusCode } = props
  return <Error statusCode={statusCode} />
}

CustomErrorComponent.getInitialProps = async (contextData) => {
  captureRenderException(contextData)
  return Error.getInitialProps(contextData)
}

export default CustomErrorComponent
