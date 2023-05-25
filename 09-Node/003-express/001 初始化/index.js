const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Hello world!");
});

app.get("/login", (req, res) => {
  res.send({ name: "zhangsan", age: 12 });
});

app.listen(3000, () => {
  console.log(`server start`);
});
