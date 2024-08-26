---
to: <%= mainPath %>
---

<% if(segment === "components"){ -%>
import type { FC } from "react"

// childrenが必要な場合はFcWithChildrenをimportしてください
// import type { FCWithChildren } from "src/layers/shared/types/FcWithChildren"

type Props = {}

export const <%= moduleName %>: FC<Props> = () => {
  return (
    <div>
      {/* molecules以上の場合はViewをimportして依存を注入してください */}
      <%= moduleName %>
    </div>
  )
}

<% }else if(segment === "store"){ -%>
import { atom } from "jotai"

type AtomType = {
// ここにatomの型を定義してください
}

export const <%= moduleName %> = atom<AtomType>({
  // ここに初期値を定義してください
})

<% }else if(segment === "styles"){ -%>
import { css } from "styled-components"

export const <%= moduleName %> = css`
  /* ここにスタイルを定義してください */
`

<% }else{ -%>
// template file
<% } -%>
