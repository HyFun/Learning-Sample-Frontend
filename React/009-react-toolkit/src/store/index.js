import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todos from "./slice/todos";

const store = configureStore({
  reducer: combineReducers({
    todos,
  }),
});

export default store;
