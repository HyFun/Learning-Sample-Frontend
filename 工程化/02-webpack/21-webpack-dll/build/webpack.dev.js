/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')

const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 8090,
    hot: true
  },
  /**
   * eval->inline->cheap->...
   * eval-source-map
   * 速度快：
   *    eval-cheap-source-map
   *    eval-source-map
   * 调试更友好：
   *    source-map
   *    cheap-module-source-map
   *    cheap-source-map
   *
   * 最终选择
   * 开发环境：eval-source-map / eval-cheap-module-source-map
   * 生产环境：nosources-source-map / hidden-source-map
   */
  devtool: 'eval-source-map'
})
