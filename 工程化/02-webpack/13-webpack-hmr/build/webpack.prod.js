/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()]
})
