/*
 * @Author       : HyFun
 * @Date         : 2021-04-10 11:54:18
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-12 10:33:54
 */

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false
    }
  },
  devServer: {
    port: 9003,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          // // 配置babel-loader
          // {
          //   // 加载器
          //   loader: "babel-loader",
          //   options: {
          //     presets: [
          //       [
          //         // 指定环境的插件
          //         "@babel/preset-env",
          //         {
          //           targets: {
          //             chrome: "88",
          //             ie: "11"
          //           },
          //           // 指定corejs版本
          //           corejs: "3",
          //           // 使用corejs的方法
          //           //    usage : 按需加载
          //           useBuiltIns: 'usage'
          //         },
          //       ],
          //     ],
          //   },
          // },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ],
  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}
