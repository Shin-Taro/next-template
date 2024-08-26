import { createApiClient } from "src/common/apiClient/libs/bffApiClient"
import { PublicEnvironment } from "src/common/environment/PublicEnvironment"

import { Options } from "../../const/Options"

export const BrowserBffClient = createApiClient(
  PublicEnvironment.NEXT_PUBLIC_BFF_URL ?? "http://localhost:4010",
  Options,
)
