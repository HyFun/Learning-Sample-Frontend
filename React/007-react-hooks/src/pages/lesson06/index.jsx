import React from "react";
import FormInput from "./FormInput";
import FormList from "./FormList";
import { Provider } from "./context";
import FormFooter from "./FormFooter";

export default function index() {
  return (
    <div>
      <h3>课时6: todo-list案例</h3>
      <Provider>
        <FormInput />
        <FormList />
        <FormFooter />
      </Provider>
    </div>
  );
}
