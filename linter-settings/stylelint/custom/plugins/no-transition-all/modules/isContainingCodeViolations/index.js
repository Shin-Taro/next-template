const { all: allProperties } = require("known-css-properties")

/**
 *
 * @param {{prop:string | undefined, value:string | undefined}} params
 * @returns {boolean}
 * @description propertyとvalueのペア毎に走査し、ルールに違反していた場合trueを返す
 */
exports.isContainingCodeViolations = ({ prop, value }) => {
  const isTargetProperty = prop === "transition" || prop === "transition-property"
  if (!isTargetProperty) return false

  const isIndividuallySpecified = value.split(",").every((eachValue) => {
    return allProperties.some((property) => eachValue.includes(property))
  })

  return !isIndividuallySpecified
}
