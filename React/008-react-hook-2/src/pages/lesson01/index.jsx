import React, { useState } from "react";

import Base from "./Base";
import Closure from "./Closure";
import SloveClosure from "./SloveClosure";
import StateInitial from "./StateInitial";
import Merge from "./Merge";

export default function State() {
  return (
    <div>
      <h3>课时1：useState使用</h3>
      <Base />
      <Closure />
      <SloveClosure />
      <StateInitial />
      <Merge />
    </div>
  );
}
