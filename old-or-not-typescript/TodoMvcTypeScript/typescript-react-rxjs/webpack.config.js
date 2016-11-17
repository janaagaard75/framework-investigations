module.exports = {
  devtool: "source-map",
  devServer: {
    historyApiFallback: true
  },
  entry: "./src/index.ts",
  module: {
    loaders: [
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
  resolve: {
    // Add .ts as resolvable extensions.
    extensions: ["", ".js", ".ts"]
  }
}
