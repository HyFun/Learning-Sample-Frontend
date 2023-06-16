import express from "express";
import createError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes";
import apiRouter from "./routes/api";

import { WHITE_ROUTES } from "./constant";
import { returnFailed } from "./utils/response";
import { verify, generate } from "./utils/jwt";

import "./plugin/multer";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "../public")));

app.use((req, res, next) => {
  const handleResponse = (path: string) => {
    /^\/api/.test(path)
      ? res.status(401).send(returnFailed("用户token验证失败"))
      : res.redirect("/login?errMsg=请您先登录");
  };

  const { pathname } = new URL(req.url, `http://127.0.0.1:${process.env.PORT}`);
  // token
  const token = req.headers["authorization"]?.split(" ")[1];
  if (token) {
    const user = verify(token) as any;
    if (user) {
      // 重新生产token
      const newToken = generate(
        { username: user.username, id: user._id },
        "1h"
      );
      res.setHeader("Authorization", newToken);
      if (pathname === "/login") {
        res.redirect("/");
        return;
      }
      next();
    } else {
      handleResponse(pathname);
    }
  } else {
    if (WHITE_ROUTES.includes(pathname) || !/^\/api/.test(pathname)) {
      next();
    } else {
      handleResponse(pathname);
    }
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
