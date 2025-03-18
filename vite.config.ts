import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

export default ({ command }: any) => {
  const ssr = {
    external: ["argon2"],
    noExternal: [],
  };

  return defineConfig({
    server: {
      host: true,
      port: 3000, // Development port must be set here
    },
    plugins: [
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
      environment: "node",
      include: ["app/**/*.test.ts"],
      exclude: configDefaults.exclude,
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
