/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')

const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * - 默认情况下，如果entry中引用了其他模块，那么打包的时候，其他模块就会被打包进 entry里边
 * - 如果有多个entry，且每个entry都引入了同一个模块，那么打包的时候每个模块都会被打包进去
 *
 * splitChunks
 *
 */
module.exports = {
  mode: 'development',
  // entry: '/src/main.ts',
  entry: {
    main: '/src/main.ts'
  },
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          'eslint-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          'ts-loader',
          'eslint-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              esModule: false,
              name: 'images/[contenthash:10].[ext]'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        // test: /\.ttf$/,
        type: `asset/resource`,
        generator: {
          filename: `assets/[name].[contenthash:10].[ext]`
        },
        exclude: [/node_modules/, /\.(html|js|ts|css|less|png|gif|jpg|jpeg)$/]
      }
    ]
  },
  plugins: [
    new WebpackBar(),
    new OptimizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/main.[contenthash:10].css`
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
