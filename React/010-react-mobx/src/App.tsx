import React from "react";
import { observer } from "mobx-react";
import store from "./store";

import Product from "./components/Product";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h2>Mobx练习</h2>
      <p>{store.count}</p>
      <button onClick={() => store.increment()}>+</button>
      <h3>Started</h3>
      <Product />
      <Card />
    </div>
  );
}

export default observer(App);
