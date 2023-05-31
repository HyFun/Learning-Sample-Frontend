import { RequestHandler } from "express";

import { registerUser, loginUser, getUser } from "../service/UserService";
import { returnFailed, returnSuccess } from "../utils/response";
import { generate } from "../utils/jwt";
import upload from "../plugin/multer";
import multer from "multer";

export const register: RequestHandler = async (req, res) => {
  upload.single("file")(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return returnFailed(err.message);
    } else if (err) {
      return returnFailed(err.message);
    }
    const fileUrl = req.file?.url;
    const { username, password } = req.body;
    console.log(`fileUrl`, fileUrl);

    try {
      await registerUser(username, password, fileUrl);
      res.send(returnSuccess("注册成功"));
    } catch (error: any) {
      res.send(returnFailed(error.message));
    }
  });
};

export const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await loginUser(username, password);
    if (user) {
      const newToken = generate(
        { username: user.username, id: user._id },
        "1h"
      );
      res.setHeader("Authorization", newToken);
      res.cookie("_user_id_", user.id);
      res.send(returnSuccess(newToken));
    } else {
      throw new Error("用户名/密码错误");
    }
  } catch (error: any) {
    res.send(returnFailed(error.message));
  }
};

export const user: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    if (user) {
      return res.send(returnSuccess(user));
    }
    throw new Error("找不到该用户");
  } catch (error: any) {
    res.send(returnFailed(error.message));
  }
};

export const logout: RequestHandler = async (req, res) => {
  res.cookie("_user_id_", "");
  res.setHeader("Authorization", "");
  res.send(returnSuccess("退出成功"));
};
