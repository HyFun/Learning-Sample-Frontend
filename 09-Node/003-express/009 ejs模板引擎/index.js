const express = require("express");
const path = require("path");

const app = express();
/**
 * ejs 模板引擎
 */
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(3000, () => {
  console.log(`server start`);
});
