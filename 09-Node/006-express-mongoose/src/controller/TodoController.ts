import { RequestHandler } from "express";

import {
  addTodo,
  removeTodo,
  updateTodo,
  queryTodos,
} from "../service/TodoService";
import { returnFailed, returnSuccess } from "../../utils/response";

export const add: RequestHandler = async (req, res) => {
  const { title } = req.body;
  try {
    await addTodo(title);
    res.send(returnSuccess("添加成功"));
  } catch (error) {
    res.send(returnFailed("添加失败"));
  }
};

export const remove: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await removeTodo(id);
    res.send(returnSuccess("删除成功"));
  } catch (error) {
    res.send(returnFailed("删除失败"));
  }
};

export const update: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await updateTodo(id, req.body);
    res.send(returnSuccess("更新成功"));
  } catch (error) {
    res.send(returnFailed("更新失败"));
  }
};

export const query: RequestHandler = async (req, res) => {
  try {
    const data = await queryTodos();
    res.send(returnSuccess(data));
  } catch (error) {
    res.send(returnFailed("查询失败"));
  }
};
