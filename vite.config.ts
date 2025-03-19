import { vitePlugin as remix } from "@remix-run/dev";
import type { ConfigEnv, UserConfig } from "vite";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

const TEST = process.env.NODE_ENV === "test";

export default async ({ command }: ConfigEnv): Promise<UserConfig> => {
  const tsconfigPaths = (await import("vite-tsconfig-paths")).default;

  const ssr = {
    external: ["argon2"],
    noExternal: [],
  };

  return {
    server: {
      host: true,
      port: 3000,
    },
    plugins: TEST
      ? [tsconfigPaths()]
      : [
          remix({
            future: {
              v3_fetcherPersist: true,
              v3_lazyRouteDiscovery: true,
              v3_relativeSplatPath: true,
              v3_singleFetch: true,
              v3_throwAbortReason: true,
            },
          }),
          tsconfigPaths(),
        ],
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
      pool: "forks",
    },
    ssr,
  };
};
