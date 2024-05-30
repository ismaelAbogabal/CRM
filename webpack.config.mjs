import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import path from "path";
import SpawnServerPlugin from "spawn-server-webpack-plugin";
import nodeExternals from "webpack-node-externals";

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: ["./src/index.ts"],
  devtool: "inline-source-map",
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
        test: /\.client.js/i,
        type: "asset/resource",
        generator: {
          filename: "assets/js/[name].[hash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name].[hash][ext]",
        },
      },
      {
        test: /\.css$/,
        type: "asset/resource",
        generator: {
          filename: "assets/css/[name].[hash][ext]",
        },
        use: ["postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  externals: [nodeExternals()],
  plugins: [
    new NodePolyfillPlugin(),
    new SpawnServerPlugin({
      command: "node",
      args: ["./dist/server.js"],
      spawnAfter: "emit",
    }),
    // new WebpackManifestPlugin({
    //   fileName: "manifest.json",
    //   publicPath: "/",
    // }),
    // new MiniCssExtractPlugin({
    //   filename: "assets/css/styles.[contenthash].css",
    // }),
  ],
};

export default config;
