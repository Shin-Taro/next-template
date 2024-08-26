module.exports = {
  roots: ["<rootDir>/src"],
  setupFiles: ["./jest.polyfills.js", "./jest.setupEnv.js"],
  setupFilesAfterEnv: ["@testing-library/jest-dom", "@testing-library/jest-dom/jest-globals"],
  testMatch: ["**/?(*.)test.(ts|js)?(x)"],
  testTimeout: 20000,
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  moduleNameMapper: {
    "^src/(.+)$": "<rootDir>/src/$1",
    uuid: require.resolve("uuid"),
  },
  transform: {
    "^.+\\.(ts|tsx)$": [
      "@swc/jest",
      {
        sourceMaps: true,
        module: {
          type: "commonjs",
        },
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },

          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
}
