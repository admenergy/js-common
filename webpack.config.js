const path = require("path");
const packageJson = require("./package.json");

const dependencies = {};
Object.keys(packageJson.dependencies).forEach((dep) => {
  dependencies[dep] = dep;
});

const clientConfig = {
  target: "node",
  optimization: {
    usedExports: false,
    minimize: false,
  },
  entry: packageJson.webpackEntry,
  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname, "dist/js"),
    library: {
      name: packageJson.name,
      type: "umd",
    },
    globalObject: "this",
  },
  externals: dependencies,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "~": path.resolve(__dirname, "app/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
};

module.exports = clientConfig;
