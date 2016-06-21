var HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path");
var nodeModulesPath = path.resolve(__dirname, "node_modules");
var webpack = require("webpack")

module.exports = {
  // TODO: Enable sourcemaps for debugging webpack's output. Temporarely disabled, because they cause Webpack to crash. https://github.com/webpack/webpack/issues/1071.
  // TODO: Choose between source-map and eval-source-map.
  devtool: "source-map",
  //devtool: "eval-source-map",
  entry: "./src/index.ts",
  module: {
    loaders: [
      {
        test: /\.ejs$/,
        loader: "ejs-loader"
      },
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ],
    preLoaders: [
      // All output .js files will have any sourcemaps re-processed by source-map-loader.
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  output: {
    path: "dist",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs"
    }),
    new webpack.ProvidePlugin({
        _: "underscore"
    })
  ],
  resolve: {
    // Add .ts as resolvable extensions.
    extensions: ["", ".js", ".ts"]
  }
}
