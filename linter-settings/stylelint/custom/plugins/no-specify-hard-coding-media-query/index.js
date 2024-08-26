const { createPlugin } = require("../../modules/createPlugin")
const { createMainFunc } = require("../../modules/createMainFunc")
const { RuleNamePrefix } = require("../../const/Common")
const { isContainingCodeViolations } = require("./modules/isContainingCodeViolations")
const stylelint = require("stylelint")

const RuleName = `${RuleNamePrefix}/no-specify-hard-coding-media-query`
const Message = "Avoid using hard-coded media queries. Replace with constants."
const Messages = stylelint.utils.ruleMessages(RuleName, {
  expected: Message,
})

const main = createMainFunc(RuleName, Message, isContainingCodeViolations)

module.exports = createPlugin({ RuleName, Messages, main, meta: {} })
