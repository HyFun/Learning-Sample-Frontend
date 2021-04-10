/*
 * @Author       : HyFun
 * @Date         : 2021-04-10 11:54:18
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-10 17:13:23
 */

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
        title: 'typescript 学习'
    }),
  ],
};