import express = require("express");

import upload from "../plugin/multer";

import { add, remove, update, query } from "../controller/TodoController";
import { register, login, user, logout } from "../controller/UserController";
import { upload as UploadController } from "../controller/UploadController";

var router = express.Router();

/**
 * user
 */

router.post("/login", login);

router.get("/logout", logout);

router.post("/register", register);

router.get("/user/:id", user);

/**
 * todo
 */
router.post("/todo", add);

router.delete("/todo/:id", remove);

router.patch("/todo/:id", update);

router.get("/todo", query);

// upload
router.post("/upload", upload.array("file"), UploadController);

export default router;
