const express = require("express");

const app = express();

/**
 * 应用中间件
 */
app.get("/", (req, res) => {
  res.send(res._user ?? `can't get user`);
});

// 写在前面，只对后边的路由生效，之前的路由不会生效
app.use((req, res, next) => {
  res._user = { name: "张三", age: 18 };
  next();
});

app.get("/user", (req, res) => {
  res.send(res._user);
});

app.listen(3000, () => {
  console.log(`server start`);
});
