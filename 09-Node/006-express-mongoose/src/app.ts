import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes";
import apiRouter from "./routes/api";

import { COOKIE_USER_ID, WHITE_ROUTES } from "./constant";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  const userId = req.cookies[COOKIE_USER_ID];
  const { pathname } = new URL(req.url, "http://127.0.0.1");
  if (userId || WHITE_ROUTES.includes(pathname)) {
    next();
  } else {
    res.redirect("/login?errMsg=请您先登录");
  }
});

app.use("/", indexRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use([
  function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  },
]);

export default app;
