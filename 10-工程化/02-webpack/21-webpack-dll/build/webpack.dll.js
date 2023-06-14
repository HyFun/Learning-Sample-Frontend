/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
  mode: 'production',
  entry: {
    vue: 'vue/dist/vue.esm.js'
  },
  // resolve: {
  //   alias: {
  //     vue: 'vue/dist/vue.esm.js'
  //   }
  // },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '../dll'),
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]_[hash]',
      path: resolve(__dirname, '../dll/manifest.json')
    })
  ]
}
