---
to: <%= storiesPath %>
---
// FIXME: ファイルパスが正しいか確認してください
// FIXME: View.tsxがある場合はそちらをimportしてください
import { <%= moduleName %> } from "."

import type { Meta, StoryObj } from "@storybook/react"
import type { ComponentPropsWithoutRef } from "react"

type ComponentType = typeof <%= moduleName %>

const meta: Meta<ComponentType> = {
  component: <%= moduleName %>,
}

export default meta
type Story = StoryObj<ComponentType>

const defaultArguments: ComponentPropsWithoutRef<ComponentType> = {

}

export const Default: Story = {
  args: {
    ...defaultArguments,
  },
}

// TODO: コンポーネントが取り得る状態を全て書いてください
