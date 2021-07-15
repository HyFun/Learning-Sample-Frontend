/*
 * @Author       : HyFun
 * @Date         : 2021-04-10 11:54:18
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-19 22:19:03
 */

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
      arrowFunction: false,
      const: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          // 配置babel-loader
          {
            // 加载器
            loader: "babel-loader",
            options: {
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  {
                    targets: {
                      chrome: "88",
                      ie: "11"
                    },
                    // 指定corejs版本
                    corejs: "3",
                    // 使用corejs的方法
                    //    usage : 按需加载
                    useBuiltIns: 'usage'
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      // 设置less文件处理
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 引入postcss
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'less-loader',
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  // 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
