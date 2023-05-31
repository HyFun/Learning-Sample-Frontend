// @ts-nocheck

import { RequestHandler } from "express";
import { returnSuccess } from "../utils/response";

export const upload: RequestHandler = (req, res) => {
  // 如果有错误，返回错误信息
  if (req.fileValidationError) {
    return res.status(400).send(req.fileValidationError);
  }
  const { name } = req.body;

  res.send(returnSuccess(name));
};
