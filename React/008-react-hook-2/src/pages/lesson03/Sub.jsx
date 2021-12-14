import React, { forwardRef, useImperativeHandle } from "react";

function Sub(props, ref) {
  useImperativeHandle(ref, () => ({
    show: () => {
      alert(`我是子组件弹框方法`);
    },
  }));
  return <div style={{ background: "#999" }}>我只是一个小小的子组件</div>;
}

export default forwardRef(Sub);
