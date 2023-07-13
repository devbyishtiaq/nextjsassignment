const { webpackResolver } = require("jest-webpack-resolver");
module.exports = {
  testEnvironment: "jsdom",
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.test.ts?(x)"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  // Use the Webpack resolver to resolve modules
  resolver: webpackResolver,
};
