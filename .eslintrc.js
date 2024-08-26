module.exports = {
  root: false,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "./linter-settings/eslint/strict-check",
    "./linter-settings/eslint/dependencies",
  ],
  ignorePatterns: ["**/.next/**", "*.config.js", "node_modules/**", "**/tracer.js"],
}
