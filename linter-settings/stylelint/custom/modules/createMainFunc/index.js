const stylelint = require("stylelint")

const showMessage = (ruleName, message) => (node, result) => {
  stylelint.utils.report({
    ruleName,
    result,
    node,
    message,
  })
}

const parseNode =
  ({ callback, ruleName, messages }) =>
  (parent, result) => {
    const hasError = callback(parent)
    hasError && showMessage(ruleName, messages)(parent, result)
  }

/**
 *
 * @param {string} RuleName
 * @param {string} Messages
 * @param {function} callback
 * @returns
 */
exports.createMainFunc = (RuleName, Messages, callback) => (root, result) => {
  const parseNodeMain = parseNode({
    callback: callback,
    ruleName: RuleName,
    messages: Messages,
  })
  root.nodes.forEach((node) => {
    parseNodeMain(node, result)
  })
}
