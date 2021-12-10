import React from "react";
import ContextClass from "./01/ContextClass";

import ContextUse from "./02/A";
import { Provider } from "./02/context";

import ContextReducer from "./03/ContextReducer";
import { Provider as ContextReducerProvider } from "./03/context";

export default function Context() {
  return (
    <div>
      <h3>课时5：useContext使用</h3>
      <h4>1. 原生使用</h4>
      <ContextClass />
      <hr />
      <h4>2. useContext祖孙组件传递</h4>
      <Provider>
        <ContextUse />
      </Provider>
      <hr />
      <h4>3. useContext结合useReducer</h4>
      <ContextReducerProvider>
        <ContextReducer />
      </ContextReducerProvider>
    </div>
  );
}
