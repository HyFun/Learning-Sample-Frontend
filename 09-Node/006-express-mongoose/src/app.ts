import express from "express";
import session from "express-session";
import createError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes";
import apiRouter from "./routes/api";

import { WHITE_ROUTES } from "./constant";
import { returnFailed } from "../utils/response";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(
  session({
    secret: "talkdesk",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
    },
    rolling: true,
  })
);

app.use((req, res, next) => {
  const user = req.session.user;
  const { pathname } = new URL(req.url, `http://127.0.0.1:${process.env.PORT}`);
  if (user && pathname === "/login") {
    res.redirect("/");
    return;
  }
  if (user || WHITE_ROUTES.includes(pathname)) {
    next();
  } else {
    if (/^\/api/.test(pathname)) {
      res.status(401).send(returnFailed("鉴权失败"));
    } else {
      res.redirect("/login?errMsg=请您先登录");
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
