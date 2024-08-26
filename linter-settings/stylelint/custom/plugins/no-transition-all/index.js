const { createPlugin } = require("../../modules/createPlugin")
const { createMainFunc } = require("../../modules/createMainFunc")
const { RuleNamePrefix } = require("../../const/Common")
const { isContainingCodeViolations } = require("./modules/isContainingCodeViolations")
const stylelint = require("stylelint")

const RuleName = `${RuleNamePrefix}/no-transition-all`
const Message =
  'Avoid using "all" as a transition value. Specify individual property names instead.'
const Messages = stylelint.utils.ruleMessages(RuleName, {
  expected: Message,
})

const main = createMainFunc(RuleName, Message, isContainingCodeViolations)

module.exports = createPlugin({ RuleName, Messages, main, meta: {} })
