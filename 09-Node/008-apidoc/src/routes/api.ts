import express = require("express");

import { add, remove, update, query } from "../controller/TodoController";
import { register, login, user, logout } from "../controller/UserController";

var router = express.Router();

/**
 *
 * @api {POST} /api/login 1.登录
 * @apiName 1. 登录
 * @apiGroup 用户模块
 * @apiVersion  1.0.0
 *
 *
 * @apiParam  {String} username 用户名
 * @apiParam  {String} password 密码
 *
 * @apiSuccess (200) {Number} ok 1: 登录成功; 其他:登录失败
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "username": "admin"
 *     "password": "admin"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "ok": 1
 * }
 *
 *
 */
router.post("/login", login);

/**
 *
 * @api {GET} /api/logout 2.登出
 * @apiName 2. 登出
 * @apiGroup 用户模块
 * @apiVersion  1.0.0
 *
 *
 * @apiSuccess (200) {Number} ok 1: 成功; 其他:失败
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "ok": 1
 * }
 *
 *
 */
router.get("/logout", logout);

/**
 *
 * @api {POST} /api/register 3.注册
 * @apiName 注册
 * @apiGroup 用户模块
 * @apiVersion  1.0.0
 *
 *
 * @apiParam  {String} username 用户名
 * @apiParam  {String} password 密码
 * @apiParam  {File} file 头像
 *
 * @apiSuccess (200) {Number} ok 1: 成功; 其他:失败
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "username": "admin",
 *     "password": "admin",
 *     "file": File",
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "ok": 1
 * }
 *
 *
 */
router.post("/register", register);

/**
 *
 * @api {POST} /api/user/{id} 4.用户详情
 * @apiName 用户详情
 * @apiGroup 用户模块
 * @apiVersion  1.0.0
 *
 *
 * @apiParam  {String} id 用户id
 *
 * @apiSuccess (200) {Number} ok 1: 成功; 其他:失败
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "id": "user_id"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "ok": 1,
 *     "data": {
 *        "_id": "xxxxx",
 *        "username":"",
 *        "avatar_url": "头像地址"
 *     }
 * }
 *
 *
 */
router.get("/user/:id", user);

/**
 * todo
 */
router.post("/todo", add);

router.delete("/todo/:id", remove);

router.patch("/todo/:id", update);

router.get("/todo", query);

export default router;
