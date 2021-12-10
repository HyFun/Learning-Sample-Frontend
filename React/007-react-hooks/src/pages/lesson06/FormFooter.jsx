import React, { useContext } from "react";
import { Context } from "./context";

export default function FormFooter() {
  const { action, dispatchAction } = useContext(Context);

  const dispatch = (type) => {
    return function () {
      dispatchAction({ type });
    };
  };
  return (
    <div>
      <button disabled={action === "all"} onClick={dispatch("all")}>
        ALL
      </button>
      <button disabled={action === "active"} onClick={dispatch("active")}>
        ACTIVE
      </button>
      <button disabled={action === "completed"} onClick={dispatch("completed")}>
        COMPLETED
      </button>
    </div>
  );
}
