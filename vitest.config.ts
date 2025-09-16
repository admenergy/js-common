import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
    include: ["app/**/*.test.ts", "app/**/*.test.tsx"],
    exclude: [
      "node_modules",
      "dist",
      "app/entry.*",
      "app/root.tsx",
      "app/routes/**",
      "app/styles/**",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["app/**/*.ts", "app/**/*.tsx"],
      exclude: ["app/**/*.test.ts", "app/**/*.test.tsx"],
    },
  },
  resolve: {
    alias: {
      "~": "/app",
    },
  },
});
