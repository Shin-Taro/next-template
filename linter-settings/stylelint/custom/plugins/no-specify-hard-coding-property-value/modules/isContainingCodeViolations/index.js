const { isTemplateLiteralPlaceholder } = require("../../../../modules/isTemplateLiteralPlaceholder")

const targetProperties = ["border-radius", "font-family", "font-size", "font-weight", "z-index"]

/**
 *
 * @param {{prop:string | undefined, value:string | undefined}} params
 * @returns {boolean}
 * @description propertyとvalueのペア毎に走査し、ルールに違反していた場合trueを返す
 */
exports.isContainingCodeViolations = ({ prop, value }) => {
  if (!prop || !value) return false

  const isTarget = targetProperties.some((property) => property === prop)
  if (!isTarget) return false

  const normalizedValues = value.replaceAll(/\n/g, "").split(" ").filter(Boolean)
  const result = !normalizedValues.map(isTemplateLiteralPlaceholder).every(Boolean)
  return result
}
