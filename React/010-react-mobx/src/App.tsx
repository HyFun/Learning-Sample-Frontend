import React from "react";
import { Observer } from "mobx-react";
import { useStore } from "./store";

import Product from "./components/Product";
import Card from "./components/Card";

function App() {
  const store = useStore();
  return (
    <Observer>
      {() => (
        <div className="App">
          <h2>Mobx练习</h2>
          <p>{store.count}</p>
          <button onClick={() => store.increment()}>+</button>
          <h3>Started</h3>
          <Product />
          <Card />
        </div>
      )}
    </Observer>
  );
}

export default App;
