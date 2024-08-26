/**
 *
 * @param {string} str
 * @returns string
 * @remarks
 * 文字列の先頭を大文字に変換する
 */
const toUpperCaseFirstChar = (str) => str.charAt(0).toUpperCase() + str.slice(1)

exports.toUpperCaseFirstChar = toUpperCaseFirstChar
