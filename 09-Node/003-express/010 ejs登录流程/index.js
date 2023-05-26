const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
/**
 * ejs 模板引擎
 */
const USER_KEY = "USER_KEY";

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

const whiteList = ["/login", "/login/validate", "/404"];

// 路由守卫
app.use((req, res, next) => {
  const username = req.cookies?.[USER_KEY];
  const { pathname } = new URL(req.url, "http://127.0.0.1");
  if (username || whiteList.includes(pathname)) {
    next();
  } else {
    res.redirect("/login?errMsg=请先登录");
  }
});

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/login", (req, res) => {
  const { errMsg } = req.query;
  res.render("login", { title: "我是login页面", errMsg });
});

app.get("/login/validate", (req, res) => {
  const { username, password } = req.query;
  if (username === "admin" && password === "123456") {
    res.cookie(USER_KEY, username);
    res.redirect("/home");
  } else {
    res.redirect("/login?errMsg=用户名/密码错误");
  }
});

app.get("/home", (req, res) => {
  res.render("home", { username: req.cookies[USER_KEY] });
});

app.get("/logout", (req, res) => {
  res.cookie(USER_KEY, "");
  res.redirect("/");
});

app.get("/404", (req, res) => {
  res.render("404");
});

app.use((req, res) => {
  res.redirect("/404");
});

app.listen(3000, () => {
  console.log(`server start`);
});
