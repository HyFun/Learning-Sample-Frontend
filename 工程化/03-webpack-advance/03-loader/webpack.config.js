const { resolve } = require("path");
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'loader-01',
          'loader-02',
          'loader-03',
        ]
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", resolve(__dirname, "loader")],
  },
};
