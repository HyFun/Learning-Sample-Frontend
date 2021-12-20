import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

export default function Redux() {
  return (
    <div>
      <h3>课时7：useSelector和useDispatch使用</h3>
      <Provider store={store}>
        <Counter1 />
        <Counter2 />
      </Provider>
    </div>
  );
}
