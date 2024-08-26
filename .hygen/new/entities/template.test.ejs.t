---
to: <%= testPath %>
---
<% if(segment === "components"){ -%>
import { composeStories } from "@storybook/react"
import { render } from "@testing-library/react"

// FIXME: ファイルパスが正しいか確認してください
import * as stories from "./index.stories"

const { Default } = composeStories(stories)


describe("<%= moduleName %>", () => {
  // FIXME: テストを書いてください
  it("ダミー", async () => {
    const handleClick = jest.fn()

    const renderResult = render(<Default onClick={handleClick} />)
    await Default.play?.({ canvasElement: renderResult.container })
    expect(handleClick).toHaveBeenCalled()
  })
})

<% }else{ -%>
import { <%= moduleName %> } from "."

// hooksをテストする場合は以下を参考にしてください
// import { renderHook } from "@testing-library/react"
// import { act } from "react-dom/test-utils"
//
//  const defaultSample = {
//    name: "sample",
//  }
//  it("引数に渡した値が初期値として返される", () => {
//    const renderResult = renderHook(() => useSample(defaultSample))
//
//    expect(renderResult.result.current.values).toStrictEqual({
//      name: dummyUser.name,
//    })
//  })
//


describe("<%= moduleName %>", () => {
  // FIXME: テストを書いてください
    it("ダミー", () => {
    const parameter = "dummy"
    const expected = "dummy"
    expect(<%= moduleName %>(parameter)).toBe(expected)
  })

})

<% } -%>
