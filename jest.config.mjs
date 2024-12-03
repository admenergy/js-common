// const esModules = ["jsondiffpatch"];
const customConfig = {
  preset: "ts-jest",
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/__tests__/**/*.test.(js|jsx|ts|tsx)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: [
    // `/node_modules/(?!(${esModules.join("|")})/)`
  ],
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
