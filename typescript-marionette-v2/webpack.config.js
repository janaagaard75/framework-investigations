var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  entry: "./src/index.js",
  module: {
    loaders: [
      // All files with a .ts extension will be handled by ts-loader.
      { test: /\.ts$/, loader: "ts-loader" }
    ],

    preLoaders: [
      // All output .js files will have any sourcemaps re-processed by source-map-loader.
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  output: {
    path: "dist",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      title: 'Todos'
    })
  ],
  resolve: {
    // Add .ts as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
  }
}
