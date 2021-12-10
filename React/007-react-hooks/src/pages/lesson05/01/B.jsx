import React from "react";
import { context } from "./context";

export default function B() {
  return (
    <div>
      <h4>B...</h4>
      <context.Consumer>{(v) => `Count为：${v}`}</context.Consumer>
    </div>
  );
}
