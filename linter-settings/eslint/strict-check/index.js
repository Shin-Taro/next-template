module.exports = {
  extends: ["strict-check/next-max"],
  rules: {
    // hooksの使用に関するルール
    "strict-check/forbidden-use-react-hooks": [
      "error",
      {
        // atoms配下・View.tsxはhooksを使用しない
        allowPatterns: [/^(?!.*(\/atoms\/|\/View\.tsx)).*$/],
      },
    ],
  },
  overrides: [
    {
      // default exportに関するルール
      files: ["**/pages/**/*.page.{tsx,ts}", "**/*.stories.{ts,tsx}"],
      rules: {
        "import/no-default-export": 0,
      },
    },
  ],
}
