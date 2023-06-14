const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader', 'less-loader']
      },
    ]
  },
  plugins: [
    // new OptimizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/index.css`
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
