const { Colors } = require("../../const/Colors")

const ColorNameRegExps = Object.keys(Colors).map((colorName) => new RegExp(colorName))
const TargetValuesRegExps = [
  /#(?:[\da-f]{3}|[\da-f]{6})/,
  /rgba/,
  /rgb/,
  /hsla/,
  /hsl/,
  ...ColorNameRegExps,
]

/**
 *
 * @param {{value: string | undefined}} param0
 */
exports.isContainingCodeViolations = ({ value }) => {
  if (value === undefined) return false
  return TargetValuesRegExps.some((regExp) => regExp.test(value))
}
