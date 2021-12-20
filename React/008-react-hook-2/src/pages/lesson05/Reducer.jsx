import React, { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>1. useReducer基本使用</h4>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
    </div>
  );
}
