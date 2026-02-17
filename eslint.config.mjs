import eslintJs from "@eslint/js";
import eslintImport from "eslint-plugin-import";
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

const bannedTypes = {
  "ZodTypeAny": {
    message:
      "It is deprecated. Use a more specific Zod type or `z.ZodType<unknown>` instead.",
    fixWith: "z.ZodType<unknown>",
  },
  "z.ZodTypeAny": {
    message:
      "It is deprecated. Use a more specific Zod type or `z.ZodType<unknown>` instead.",
    fixWith: "z.ZodType<unknown>",
  },
};

const bannedSyntax = [
  {
    selector: "MemberExpression[property.name='_def']",
    message:
      "Accessing Zod schema by `._def` is not allowed. Use `.def` instead.",
  },
  {
    selector:
      "CallExpression[callee.property.name='url'][callee.object.type='CallExpression'][callee.object.callee.property.name='string']",
    message:
      "Chaining `.string().url()` is not allowed. Use `.string()` or `.url()`, not both.",
  },
];

export default [
  // Global ignores
  {
    ignores: [
      "__tests__/**",
      ".eslintrc.js",
      ".next/**",
      "coverage/**",
      "dist/**",
      "jest.config.mjs",
      "next-env.d.ts",
      "next.config.js",
      "node_modules/**",
      "tsconfig.json",
      "tsconfig.*.json",
      "utility/**",
      "volumes/**",
      "webpack.config.js",
      "babel.config.js",
      "app/entry.client.tsx",
      "app/entry.server.tsx",
      "app/root.tsx",
      "app/routes/**",
      "app/styles/**",
    ],
  },

  // Base recommended rules
  {
    rules: {
      // Yarn PnP + unrs-resolver (eslint-import-resolver-typescript v4) don't work together
      // TypeScript validates these imports; this just silences ESLint's duplicate check
      "import/no-unresolved": [
        "error",
        {
          ignore: ["^(js-common|next-common)(/.*)?$"],
        },
      ],

      ...eslintJs.configs.recommended.rules,
    },
  },

  // JavaScript/JSX Configuration
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals,
    },
    plugins: {
      "security": eslintSecurity,
      "unused-imports": eslintUnusedImports,
      "import": eslintImport,
      "react-hooks": eslintReactHooks,
    },
    rules: {
      ...eslintReactHooks.configs.recommended.rules,
      ...eslintImport.flatConfigs.recommended.rules,
      "unused-imports/no-unused-imports": "warn",
      "no-unused-vars": [
        "warn",
        {
          args: "none",
          argsIgnorePattern:
            "^(args|params|props|request|context|error|resolve|reject)$",
          caughtErrors: "none",
          vars: "all",
          varsIgnorePattern:
            "^(args|params|props|request|context|error|resolve|reject)$",
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.test.json",
        },
      },
    },
  },

  // TypeScript/TSX Configuration
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: eslintTs.parser,
      parserOptions: {
        project: "./tsconfig.test.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals,
    },
    plugins: {
      "security": eslintSecurity,
      "unused-imports": eslintUnusedImports,
      "import": eslintImport,
      "react-hooks": eslintReactHooks,
      "@typescript-eslint": eslintTs.plugin,
    },
    rules: {
      ...eslintReactHooks.configs.recommended.rules,
      ...eslintImport.flatConfigs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-restricted-types": [
        "error",
        {
          types: bannedTypes,
        },
      ],
      "no-restricted-syntax": ["error", ...bannedSyntax],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "unused-imports/no-unused-imports": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "none",
          argsIgnorePattern:
            "^(args|params|props|request|context|error|resolve|reject)$",
          caughtErrors: "none",
          vars: "all",
          varsIgnorePattern: "^(args|params|props|request|context|error)$",
        },
      ],
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": [
        "error",
        { ignoreDeclarationMerge: true },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.test.json",
        },
      },
    },
  },
];
