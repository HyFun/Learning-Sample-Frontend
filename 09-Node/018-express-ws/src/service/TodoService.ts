import TodoModel from "../model/Todo";

export function addTodo(title: string) {
  return TodoModel.create({
    title,
    done: false,
    create_date: new Date().toLocaleString(),
    finish_date: "",
  });
}

export function removeTodo(_id: string) {
  return TodoModel.findByIdAndDelete(_id);
}

export function updateTodo(_id: string, todo: any) {
  return TodoModel.findByIdAndUpdate(_id, todo);
}

export function queryTodos() {
  return TodoModel.find();
}
