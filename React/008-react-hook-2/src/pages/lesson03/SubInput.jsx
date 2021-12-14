import React from "react";

export default React.forwardRef(function SubInput(props, ref) {
  return (
    <div style={{ background: "#888" }}>
      <input type="text" ref={ref} />
    </div>
  );
});
