---
to: <%= viewComponentPath %>
---
import type { FC } from "react"

// childrenが必要な場合はFcWithChildrenをimportしてください
// import type { FCWithChildren } from "src/shared/types/FcWithChildren"

type Props = {}

export const <%= moduleName %>View: FC<Props> = () => {
  return (
    <div>
      <%= moduleName %>View
    </div>
  )
}
