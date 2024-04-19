const esModules = ["jsondiffpatch"];
const customConfig = {
  preset: "ts-jest",
  moduleDirectories: ["node_modules", "src"], // Add src to module directories
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Map TypeScript paths to Jest paths
  },
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
