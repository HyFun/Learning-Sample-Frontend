import {
  createSlice,
  PayloadAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { Todo } from "../../type";
import { v4 as uuid } from "uuid";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const todoSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<Todo>) => {
        state.unshift(payload);
      },
      prepare: (desc: string) => ({
        payload: {
          id: uuid(),
          desc,
          completed: false,
        },
      }),
    },
    remove(state, { payload }: PayloadAction<{ id: string }>) {
      state.splice(
        state.findIndex((v) => v.id === payload.id),
        1
      );
    },
    update(state, { payload }: PayloadAction<{ id: string; desc: string }>) {
      const todo = state.find((v) => v.id === payload.id);
      if (todo) {
        todo.desc = payload.desc;
      }
    },
    toggle(state, { payload }: PayloadAction<{ id: string }>) {
      const todo = state.find((v) => v.id === payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

const selectedSlice = createSlice({
  name: "selected",
  initialState: null as string | null,
  reducers: {
    select(state, { payload }: PayloadAction<{ id: string | null }>) {
      return payload.id
    },
  },
});

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {},
  extraReducers: {
    [todoSlice.actions.create.type]: (state) => state + 1,
    [todoSlice.actions.update.type]: (state) => state + 1,
    [todoSlice.actions.remove.type]: (state) => state + 1,
    [todoSlice.actions.toggle.type]: (state) => state + 1,
    [selectedSlice.actions.select.type]: (state) => state + 1,
  },
});

const reducer = combineReducers({
  todos: todoSlice.reducer,
  selected: selectedSlice.reducer,
  counter: counterSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getMiddlewares) => getMiddlewares().concat([thunk, logger]),
  devTools: true,
});

export default store;

export type AppDispatchType = typeof store.dispatch;

// hooks
export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
  useSelector;

// creator
export const {
  create: creatorCreateTodo,
  toggle: creatorToggleTodo,
  remove: creatorRemoveTodo,
  update: creatorUpdateTodo,
} = todoSlice.actions;

export const { select: creatorSelectTodo } = selectedSlice.actions;
