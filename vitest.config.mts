import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [await import("vite-tsconfig-paths").then((m) => m.default())],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["app/**/*.test.ts", "app/**/*.test.tsx"],
    exclude: configDefaults.exclude,
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["app/**/*.ts", "app/**/*.tsx"],
      exclude: ["app/**/*.test.ts", "app/**/*.test.tsx"],
    },
  },
});
