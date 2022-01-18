/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')

const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: '/src/main.ts',
  output: {
    filename: 'js/bundle.[contenthash:10].js',
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
  ]
}
