const stylelint = require("stylelint")

exports.createPlugin = ({ RuleName, Messages, meta, main }) => {
  const ruleFunction = (primaryOption) => {
    return (root, result) => {
      if (!primaryOption) return
      const validOptions = stylelint.utils.validateOptions(result, RuleName, {})

      if (!validOptions) return

      main(root, result)
    }
  }

  ruleFunction.ruleName = RuleName
  ruleFunction.messages = Messages
  ruleFunction.meta = meta
  return stylelint.createPlugin(RuleName, ruleFunction)
}
