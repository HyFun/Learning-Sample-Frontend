import React, { useContext } from "react";

import { Context } from "./context";
import { INCREMENT, DECREMENT } from "./context";

export default function B() {
  const { state, dispatch } = useContext(Context);
  return (
    <div>
      B...
      <h4>Count: {state.count}</h4>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
    </div>
  );
}
