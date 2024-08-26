module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "block-no-empty": null,
    "color-function-notation": "legacy",
    "declaration-no-important": true,
    "declaration-property-unit-allowed-list": {
      "line-height": [],
    },
    "declaration-property-unit-disallowed-list": {
      "/^(?!.*letter-spacing).*$/": "em",
    },
    "keyframes-name-pattern": "",
    "max-nesting-depth": 2,
    "property-disallowed-list": ["all", "background", "flex", "font", "overflow"],
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: ["box-orient"],
      },
    ],
    "value-no-vendor-prefix": [true, { ignoreValues: ["box"] }],
    "no-descending-specificity": null,
  },
}
