/* eslint-disable strict-check/restrict-use-of-process-env */
/* eslint-disable dot-notation */
import { z } from "zod"

import type { ZodTypeAny } from "zod"

type EnvironmentType<T> = Record<keyof T, string | undefined>

const publicEnvironmentSchema = z.object({
  NEXT_PUBLIC_BFF_URL: z.string(),
  NEXT_PUBLIC_NODE_ENV: z.string().default("development"),
} satisfies Record<Uppercase<`NEXT_PUBLIC_${string}`>, ZodTypeAny>)

// NEXT_PUBLIC_ によるブラウザへのインライン展開を有効にするため直接参照している
export const PublicEnvironment = {
  NEXT_PUBLIC_BFF_URL: process.env["NEXT_PUBLIC_BFF_URL"],
  NEXT_PUBLIC_NODE_ENV: process.env["NEXT_PUBLIC_NODE_ENV"],
} as const satisfies EnvironmentType<z.infer<typeof publicEnvironmentSchema>>

publicEnvironmentSchema.parse(PublicEnvironment)
