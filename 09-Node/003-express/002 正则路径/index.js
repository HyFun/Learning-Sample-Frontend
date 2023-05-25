const express = require("express");

const app = express();

/**
 * 路径支持正则表达式
 */

// 1. 支持数字

app.get(/^\/[0-9]+$/, (req, res) => {
  res.send("number");
});

// 2. 支持字符

app.get(/^\/[a-z]+$/, (req, res) => {
  res.send("letter");
});

app.listen(3000, () => {
  console.log(`server start`);
});
