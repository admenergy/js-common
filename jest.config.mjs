const esModules = ["jsondiffpatch"];
const customConfig = {
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/__tests__/**/*.test.(js|jsx)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [`/node_modules/(?!(${esModules.join("|")})/)`],
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

export default async () => {
  const jestConfig = customConfig;
  return {
    ...jestConfig,
    transformIgnorePatterns: jestConfig.transformIgnorePatterns.filter(
      (ptn) => ptn !== "/node_modules/",
    ),
  };
};
