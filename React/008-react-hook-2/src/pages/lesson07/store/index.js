import { createStore } from "redux";


export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = 0;

function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}


const store = createStore(reducer);

export default store;

