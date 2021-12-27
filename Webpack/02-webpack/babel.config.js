module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // 此方法不推荐，推荐写在 package.json中 browserlist
        // targets: {
        //   ie: "8",
        //   edge: "17",
        //   firefox: "60",
        //   chrome: "67",
        //   safari: "11.1",
        // },
        corejs: 2,
        useBuiltIns: "usage",
      },
    ],
  ],
};
