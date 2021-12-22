import { Todo } from "../../type";

import {combineReducers} from 'redux'
import {
  TodoActionTypes,
  SelectTodoActionType,
  TODO_CREATE_ACTION,
  TODO_EDIT_ACTION,
  TODO_DELETE_ACTION,
  TODO_TOGGLE_ACTION,
  TODO_SELECT_ACTION,
} from "./actions";

const initialState: Todo[] = [];
export const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): Todo[] => {
  switch (action.type) {
    case TODO_CREATE_ACTION: {
      return [...state, action.payload];
    }
    case TODO_EDIT_ACTION: {
      const todo = state.find((v) => v.id === action.payload.id);
      todo!.desc = action.payload.desc;
      return [...state];
    }
    case TODO_DELETE_ACTION: {
      state.splice(
        state.findIndex((v) => v.id === action.payload.id),
        1
      );
      return [...state];
    }
    case TODO_TOGGLE_ACTION: {
      const { id } = action.payload;
      return state.map(v=>{
        if(v.id===id) {
          v.completed=!v.completed
        }
        return v
      });
    }
    default:
      return state;
  }
};

export const selectReducer = (
  state: string | null = null,
  action: SelectTodoActionType
) => {
  if (action.type === TODO_SELECT_ACTION) {
    return action.payload.id;
  } else {
    return state;
  }
};



const reducers = combineReducers({
    todo: todoReducer,
    selectedTodo: selectReducer
})


export default reducers