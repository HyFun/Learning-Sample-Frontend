const { resolve } = require("path");
module.exports = {
  // mode: "development",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'loader-01',
            options: {
              name: '法外狂徒-张三'
            }
          },
          {
            loader: 'loader-02',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          'loader-03',
        ]
      }
    ],
  },
  resolveLoader: {
    modules: ["node_modules", resolve(__dirname, "loader")],
  },
};
