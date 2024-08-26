const { RuleNamePrefix } = require("../../const/Common")
const { createPlugin } = require("../../modules/createPlugin")
const { createMainFunc } = require("../../modules/createMainFunc")
const { isContainingCodeViolations } = require("./modules/isContainingCodeViolations")
const stylelint = require("stylelint")

const RuleName = `${RuleNamePrefix}/no-specify-hard-coding-color`
const Message = "Avoid using hard-coded color. Replace with constants."
const Messages = stylelint.utils.ruleMessages(RuleName, {
  expected: Message,
})

const main = createMainFunc(RuleName, Message, isContainingCodeViolations)

module.exports = createPlugin({ RuleName, Messages, main, meta: {} })
