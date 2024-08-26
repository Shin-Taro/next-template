module.exports = {
  plugins: [
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-no-unsupported-browser-features",
  ],
  rules: {
    "order/properties-order": require("known-css-properties").all,
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-unsupported-browser-features": true,
  },
}
