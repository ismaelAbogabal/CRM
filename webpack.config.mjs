import MiniCssExtractPlugin from "mini-css-extract-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import path from "path";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import nodeExternals from "webpack-node-externals";

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: "./src/index.ts",
  devtool: "source-map",
  target: "node",
  output: {
    filename: "server.js",
    clean: true,

    path: path.resolve(".", "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  externals: [nodeExternals()],
  plugins: [
    new NodePolyfillPlugin(),
    new WebpackManifestPlugin({
      fileName: "manifest.json",
      publicPath: "/",
    }),
    new MiniCssExtractPlugin({ filename: "assets/styles.[contenthash].css" }),
  ],
};

export default config;
