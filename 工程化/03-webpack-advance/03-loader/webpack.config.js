const { resolve } = require("path");
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'loader-01',
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", resolve(__dirname, "loader")],
  },
};
