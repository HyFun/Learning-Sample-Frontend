const express = require("express");

const app = express();

const register = require("./router");

/**
 * 路由中间件
 */

register(app);

app.listen(3000, () => {
  console.log(`server start`);
});
