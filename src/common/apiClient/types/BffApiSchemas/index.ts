import type { schemas } from "src/common/apiClient/libs/bffApiClient"
import type { z } from "zod"

type BffAPiSchemaType = typeof schemas

export type BffApiSchemas = {
  [k in keyof BffAPiSchemaType]: z.infer<BffAPiSchemaType[k]>
}
