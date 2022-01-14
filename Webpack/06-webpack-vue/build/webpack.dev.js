const { merge } = require("webpack-merge");

const base = require("./webpack.base");

module.exports = merge(base, {
  mode: "development",
  devServer: {
    port: 8090,
    // open: true,
  },
});
