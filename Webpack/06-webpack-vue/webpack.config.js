const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  mode: "development",
  entry: ["./src/main.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash:8].js",
    environment: {
      arrowFunction: false,
    },
  },
  devServer: {
    port: 8090,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            transformAssetUrls: {
              video: ['src', 'poster'],
              source: 'src',
              img: 'src',
              image: ['xlink:href', 'href'],
              use: ['xlink:href', 'href']
            }
          }
        }]
      },
      {
        test: /.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /.(sc|sa)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new VueLoaderPlugin()
  ],
};
