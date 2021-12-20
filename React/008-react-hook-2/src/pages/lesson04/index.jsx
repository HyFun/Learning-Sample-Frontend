// useCallback缓存组件
import React from "react";

import Callback1 from "./Callback1";
import Callback2 from "./Callback2";
import Callback3 from "./Callback3";

export default function Callback() {
  return (
    <div>
      <h3>课时4：使用useCallback缓存函数</h3>
      <Callback1 />
      <Callback2 />
      <Callback3 />
    </div>
  );
}
