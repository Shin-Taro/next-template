const { strictDependencies } = require("./rules/strict-dependencies")
const { importNoInternalModulesRules } = require("./rules/import")
const { importOverrides } = require("./overrides/import")

module.exports = {
  plugins: ["strict-dependencies", "import"],
  rules: {
    "strict-dependencies/strict-dependencies": strictDependencies,
    "import/no-internal-modules": importNoInternalModulesRules,
  },
  overrides: importOverrides,
}
