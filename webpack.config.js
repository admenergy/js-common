const path = require("path");
const packageJson = require("./package.json");

// Create separate externals for CJS and ESM
const cjsExternals = {};
const esmExternals = {};

Object.keys(packageJson.dependencies).forEach((dep) => {
  if (dep === "lodash") {
    cjsExternals[dep] = dep;
  } else if (dep === "lodash-es") {
    esmExternals[dep] = dep;
  } else {
    cjsExternals[dep] = dep;
    esmExternals[dep] = dep;
  }
});

// Base configuration shared between CJS and ESM
const baseConfig = {
  target: "node",
  optimization: {
    usedExports: false,
    minimize: false,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "~": path.resolve(__dirname, "app/"),
    },
  },
};

// Babel configurations
const cjsBabelConfig = {
  presets: [
    ["@babel/preset-env", { modules: "commonjs" }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
const esmBabelConfig = {
  presets: [
    ["@babel/preset-env", { modules: false }], // Preserve ES modules
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};

// CommonJS configuration
const cjsConfig = {
  ...baseConfig,
  entry: packageJson.webpackEntry,
  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname, "dist/cjs"),
    library: {
      type: "commonjs2",
    },
  },
  externals: cjsExternals,
  resolve: {
    ...baseConfig.resolve,
    alias: {
      ...baseConfig.resolve.alias,
      lodash: "lodash", // Ensure CJS uses regular lodash
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: cjsBabelConfig,
        },
      },
    ],
  },
};

// ESM configuration
const esmConfig = {
  ...baseConfig,
  entry: packageJson.webpackEntry,
  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname, "dist/esm"),
    library: {
      type: "module",
    },
  },
  externals: esmExternals,
  resolve: {
    ...baseConfig.resolve,
    alias: {
      ...baseConfig.resolve.alias,
      lodash: "lodash-es", // Redirect lodash imports to lodash-es
    },
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: esmBabelConfig,
        },
      },
    ],
  },
};

module.exports = [cjsConfig, esmConfig];
