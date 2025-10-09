import eslintJs from "@eslint/js";
import eslintImport from "eslint-plugin-import";
import eslintJsxA11y from "eslint-plugin-jsx-a11y";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintSecurity from "eslint-plugin-security";
import eslintUnusedImports from "eslint-plugin-unused-imports";
import globalTypes from "globals";
import eslintTs from "typescript-eslint";

const globals = {
  ...globalTypes.node,
  ...globalTypes.browser,
  React: "readonly",
  JSX: "readonly",
  NodeJS: "readonly",
};

export default [
  {
    ignores: [
      "build/",
      "coverage/",
      "dist/",
      "node_modules/",
      "volumes/",
      ".eslintrc.js",
      "tsconfig.json",
      "vite.config.ts",
      "remix.env.d.ts",
      "app/entry.client.tsx",
      "app/entry.server.tsx",
      "app/root.tsx",
      "app/routes/",
      "app/styles/",
    ],
  },

  // Base recommended rules
  {
    rules: {
      ...eslintJs.configs.recommended.rules,
    },
  },

  // JavaScript/JSX Configuration
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals,
    },
    plugins: {
      "security": eslintSecurity,
      "unused-imports": eslintUnusedImports,
      "import": eslintImport,
      "react": eslintReact,
      "react-hooks": eslintReactHooks,
      "jsx-a11y": eslintJsxA11y,
    },
    rules: {
      ...eslintReact.configs.flat.recommended.rules,
      ...eslintReactHooks.configs.recommended.rules,
      ...eslintImport.flatConfigs.recommended.rules,
      ...eslintJsxA11y.flatConfigs.recommended.rules,
      "unused-imports/no-unused-imports": "warn",
      "no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^(args|params|props|request|context|error)$",
          caughtErrors: "none",
          vars: "all",
          // varsIgnorePattern: "^(xxx)$",
        },
      ],
    },
    settings: {
      "react": {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.eslint.json",
        },
      },
    },
  },

  // TypeScript/TSX Configuration
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: eslintTs.parser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: process.cwd(),
      },
      globals,
    },
    plugins: {
      "@typescript-eslint": eslintTs.plugin,
      "import": eslintImport,
      "jsx-a11y": eslintJsxA11y,
      "react-hooks": eslintReactHooks,
      "react": eslintReact,
      "security": eslintSecurity,
      "unused-imports": eslintUnusedImports,
    },
    rules: {
      ...eslintImport.flatConfigs.recommended.rules,
      ...eslintJsxA11y.flatConfigs.recommended.rules,
      ...eslintReact.configs.flat.recommended.rules,
      ...eslintReactHooks.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "unused-imports/no-unused-imports": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^(args|params|props|request|context|error)$",
          caughtErrors: "none",
          vars: "all",
          // varsIgnorePattern: "^(xxx)$",
        },
      ],
    },
    settings: {
      "react": {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.eslint.json",
        },
      },
    },
  },
];
