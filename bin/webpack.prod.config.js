const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require('path');

const { TEDDI_CONFIG } = require('./constant');
const appPath = process.cwd();
const teddiConfig = require(path.join(appPath, TEDDI_CONFIG));

module.exports = {
  mode: 'production',
  entry: "./src/index.ts",
  output: {
    filename: "./bundle.js",
  },
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: require.resolve("ts-loader") },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: require.resolve("source-map-loader") },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: teddiConfig.TEMPLATE
    }),
  ]
  // Other options...
};