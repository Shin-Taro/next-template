const { toUpperCaseFirstChar } = require("./modules/toUpperCaseFirstChar")
const { Segments } = require("../../../../const/Segments")

const { TYPES } = Segments

/**
 *
 * @param {string} name
 * @param {string} segment
 * @param {boolean} isComponent
 * @returns string
 * @remarks
 * コンポーネント・型名の先頭を大文字に変換する
 */
const normalizeModuleName = (name, segment, isComponent) =>
  isComponent || segment === TYPES ? toUpperCaseFirstChar(name) : name

exports.normalizeModuleName = normalizeModuleName
