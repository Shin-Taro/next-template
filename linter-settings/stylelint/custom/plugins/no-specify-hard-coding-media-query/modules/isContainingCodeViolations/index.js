/**
 *
 * @param {{name:string | undefined}} params
 * @returns {boolean}
 * @description propertyとvalueのペア毎に走査し、ルールに違反していた場合trueを返す
 */
exports.isContainingCodeViolations = ({ name }) => name === "media"
