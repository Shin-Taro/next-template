import { createApiClient } from "src/common/apiClient/libs/bffApiClient"
import { PrivateEnvironment } from "src/common/environment/PrivateEnvironment"

import { Options } from "../../const/Options"

import type { GetServerSidePropsContext } from "next"

export const createServerBffClient = (context?: GetServerSidePropsContext) => {
  const apiClient = createApiClient(PrivateEnvironment.BFF_URL, Options)
  return apiClient
}
