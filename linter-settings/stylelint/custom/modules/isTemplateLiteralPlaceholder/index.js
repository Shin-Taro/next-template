const RegExp = /^\$\{[^}]+}$/

/**
 * @function isTemplateLiteralPlaceholder
 * @param {string} value - 判定する文字列
 * @returns {boolean}
 * @description s-c の placeholder ${} かどうかを判定する
 */
exports.isTemplateLiteralPlaceholder = (value) => RegExp.test(value)
