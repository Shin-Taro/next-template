import type { Preview } from "@storybook/react"
import React from "react"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^(?:on|handle)[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    screenshot: {
      // Put global screenshot parameters(e.g. viewport)
    },
  },
  decorators: [
    (Story) => (
      <div id="__next">
        {/* <GlobalStyles /> */}
        <Story />
      </div>
    ),
  ],
}

export default preview
