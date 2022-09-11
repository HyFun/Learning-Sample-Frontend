import { observer } from "mobx-react";
import store from "../store";

const Card = () => {
  const handleRemove = (id: number) => {
    store.card.remove(id);
  };

  return (
    <>
      <h3>购物车</h3>
      <ul style={{ width: 600 }}>
        {store.card.cards.map((v) => (
          <li key={v.id} style={{ display: "flex", alignItems: "center" }}>
            <p style={{ flex: 1 }}>{v.name}</p>
            <p>{v.count}</p>
            <p style={{ margin: "0 10px" }}>total: {v.total} ￥</p>
            <button disabled={v.count <= 0} onClick={() => handleRemove(v.id)}>
              -
            </button>
          </li>
        ))}

        <div style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ flex: 1 }}>total: {store.card.total} ￥</h4>
          {!!store.card.cards.length && (
            <button onClick={() => store.card.reset()}>结算</button>
          )}
        </div>
      </ul>
    </>
  );
};

export default observer(Card);
