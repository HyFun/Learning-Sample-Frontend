/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin')

const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()]
  // optimization: {
  //   minimizer: [
  //     new TerserPlugin({
  //       parallel: true
  //     }),
  //     new CssMinimizerPlugin()
  //   ],
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
})
