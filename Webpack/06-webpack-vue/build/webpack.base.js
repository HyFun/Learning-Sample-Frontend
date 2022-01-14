const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const WebpackBar = require("webpackbar");

module.exports = {
  entry: ["/src/main.js"],
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/bundle.js",
    environment: {
      arrowFunction: false,
    },
    assetModuleFilename: 'fonts/[hash].[ext]'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  resolveLoader: {
    extensions: [".js", ".vue", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              transformAssetUrls: {
                video: ["src", "poster"],
                source: "src",
                img: "src",
                image: ["xlink:href", "href"],
                use: ["xlink:href", "href"],
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(sc|sa)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              esModule: false,
              name: `images/[hash:8].[ext]`,
            },
          },
        ],
      },
      {
        test: /.ttf$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/index.css`,
    }),
    new HtmlWebpackPlugin({
      template: "/index.html",
    }),
    new VueLoaderPlugin(),
    new WebpackBar(),
  ],
};
