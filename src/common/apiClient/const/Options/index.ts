import type { ZodiosOptions } from "@zodios/core"

export const Options = {
  sendDefaults: false,
  transform: false,
  validate: "response",
} as const satisfies ZodiosOptions
