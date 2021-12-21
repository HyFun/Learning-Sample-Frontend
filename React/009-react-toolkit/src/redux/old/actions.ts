import { Todo } from "../../type";
import { v4 as uuid } from "uuid";

export const TODO_CREATE_ACTION = "TODO_CREATE_ACTION";
export const TODO_SELECT_ACTION = "TODO_SELECT_ACTION";
export const TODO_DELETE_ACTION = "TODO_DELETE_ACTION";
export const TODO_EDIT_ACTION = "TODO_EDIT_ACTION";
export const TODO_TOGGLE_ACTION = "TODO_TOGGLE_ACTION";

interface CreateTodoActionType {
  type: typeof TODO_CREATE_ACTION;
  payload: Todo;
}

export const createTodoActionCreator = (data: {
  desc: string;
}): CreateTodoActionType => {
  const { desc } = data;
  return {
    type: TODO_CREATE_ACTION,
    payload: {
      id: uuid(),
      desc,
      completed: false,
    },
  };
};

interface EditTodoActionType {
  type: typeof TODO_EDIT_ACTION;
  payload: {
    id: string;
    desc: string;
  };
}

export const editTodoActionCreator = ({
  id,
  desc,
}: {
  id: string;
  desc: string;
}): EditTodoActionType => {
  return {
    type: TODO_EDIT_ACTION,
    payload: {
      id,
      desc,
    },
  };
};

interface ToggleTodoActionType {
  type: typeof TODO_TOGGLE_ACTION;
  payload: { id: string };
}

export const toggleTodoActionCreator = ({
  id,
}: {
  id: string;
}): ToggleTodoActionType => {
  return {
    type: TODO_TOGGLE_ACTION,
    payload: { id },
  };
};

interface DeleteTodoActionType {
  type: typeof TODO_DELETE_ACTION;
  payload: { id: string };
}

export const deleteTodoCreator = ({
  id,
}: {
  id: string;
}): DeleteTodoActionType => {
  return {
    type: TODO_DELETE_ACTION,
    payload: {
      id,
    },
  };
};

export  interface SelectTodoActionType {
  type: typeof TODO_SELECT_ACTION;
  payload: {
    id: string;
  };
}

export const selectTodoActionCreator = ({
  id,
}: {
  id: string;
}): SelectTodoActionType => {
  return {
    type: TODO_SELECT_ACTION,
    payload: {
      id,
    },
  };
};

export type TodoActionTypes =
  | CreateTodoActionType
  | EditTodoActionType
  | DeleteTodoActionType
  | SelectTodoActionType
  | ToggleTodoActionType;
