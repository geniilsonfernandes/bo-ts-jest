module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/dist"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/main.tsx",
    "!src/setupTests.tsx",
    "!src/**/*.stories.tsx",
  ],
  maxWorkers: "50%",
  setupFilesAfterEnv: ["<rootDir>/.jest/setupTests.ts"],
  modulePaths: ["<rootDir>/src"],
};
