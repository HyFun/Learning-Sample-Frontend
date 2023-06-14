/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')

const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 8090,
    hot: true
  }
})
