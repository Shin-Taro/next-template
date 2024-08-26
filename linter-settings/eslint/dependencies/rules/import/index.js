const COMMON_MODULES = ["**/node_modules/**", "**/shared/**", "**/common/**"]

const importNoInternalModulesRules = [
  "error",
  {
    allow: [...COMMON_MODULES],
  },
]

exports.importNoInternalModulesRules = importNoInternalModulesRules
