import express = require("express");

import { add, remove, update, query } from "../controller/TodoController";
import { register, login, user, logout } from "../controller/UserController";

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

export default router;
