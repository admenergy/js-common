import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults, defineConfig } from "vitest/config";

export default ({ command }: any) => {
  const ssr = {
    external: [],
    noExternal: [],
  };

  const isTest = process.env.NODE_ENV === "test" || process.env.VITEST;

  return defineConfig({
    server: {
      host: "0.0.0.0",
      port: Number(process.env.PORT || 3000),
      strictPort: true,
    },
    plugins: [
      ...(isTest
        ? []
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
          ]),
      tsconfigPaths({
        ignoreConfigErrors: true,
      }),
    ],
    test: {
      globals: true,
      environment: "jsdom",
      include: ["app/**/*.test.{ts,tsx}"],
      exclude: configDefaults.exclude,
      setupFiles: ["./vitest.setup.js"],
      coverage: {
        provider: "v8",
        reporter: ["text", "json", "html"],
        include: ["app/**/*.ts"],
        exclude: ["app/**/*.test.ts"],
      },
      pool: "forks",
    },
    ssr,
  });
};
