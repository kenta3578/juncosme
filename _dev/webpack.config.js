const webpack = require("webpack");
const path = require("path");
// const PrettierPlugin = require('prettier-webpack-plugin');
const config = require("./gulp/config.js");

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  // メインのJS
  entry: {
    main: "./js/main.js"
  },
  // 出力ファイル
  output: {
    path: path.resolve(__dirname, config.path.release.js),
    filename: "[name].bundle.js"
  },

  // devtool: 'source-map',
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  // plugins: [new PrettierPlugin()],
  optimization: {
    minimize: true
  }
};
