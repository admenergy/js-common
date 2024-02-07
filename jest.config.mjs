// const createJestConfig = nextJest({
//   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//   dir: "./",
// });

const esModules = ["jsondiffpatch"];
const customConfig = {
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["<rootDir>/src/__tests__/**/*.test.(js|jsx)"],
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns: [`/node_modules/(?!(${esModules.join("|")})/)`],
};

export default async () => {
  // const jestConfig = await createJestConfig(customConfig)();
  const jestConfig = customConfig;
  return {
    ...jestConfig,
    transformIgnorePatterns: jestConfig.transformIgnorePatterns.filter(
      (ptn) => ptn !== "/node_modules/",
    ),
  };
};
