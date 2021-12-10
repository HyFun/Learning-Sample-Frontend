import React, { useRef } from "react";

/**
 * 使用ref绑定dom节点
 * @returns
 */
export default function RefDom() {
  const refInput = useRef(null);

  const show = () => {
    alert(refInput.current.value);
  };
  return (
    <div>
      <input ref={refInput} type="text" />
      <button onClick={show}>点我</button>
    </div>
  );
}
