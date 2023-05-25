const express = require("express");
const path = require("path");

const app = express();
/**
 * 静态资源 中间件
 */

app.use(express.static(path.resolve(__dirname, "./static")));
app.use(express.static(path.resolve(__dirname, "./public")));
// 前缀
// app.use("/static", express.static(path.resolve(__dirname, "./static")));

app.listen(3000, () => {
  console.log(`server start`);
});
