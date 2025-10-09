import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJson = JSON.parse(readFileSync("./package.json", "utf8"));

const dependencies = {};
Object.keys(packageJson.dependencies).forEach((dep) => {
  dependencies[dep] = dep;
});

const clientConfig = {
  target: "node",
  experiments: {
    outputModule: true,
  },
  optimization: {
    usedExports: false,
    minimize: false,
  },
  entry: packageJson.webpackEntry,
  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname, "dist/js"),
    library: {
      type: "module",
    },
    environment: {
      module: true,
    },
  },
  externals: packageJson.externals,
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

export default clientConfig;
