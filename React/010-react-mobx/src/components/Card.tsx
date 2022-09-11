import { Observer } from "mobx-react";
import { useStore } from "../store";

const Card = () => {
  const { card } = useStore();

  const handleRemove = (id: number) => {
    card.remove(id);
  };

  return (
    <Observer>
      {() => (
        <>
          <h3>购物车</h3>
          <ul style={{ width: 600 }}>
            {card.cards.map((v) => (
              <li key={v.id} style={{ display: "flex", alignItems: "center" }}>
                <p style={{ flex: 1 }}>{v.name}</p>
                <p>{v.count}</p>
                <p style={{ margin: "0 10px" }}>total: {v.total} ￥</p>
                <button
                  disabled={v.count <= 0}
                  onClick={() => handleRemove(v.id)}
                >
                  -
                </button>
              </li>
            ))}

            <div style={{ display: "flex", alignItems: "center" }}>
              <h4 style={{ flex: 1 }}>total: {card.total} ￥</h4>
              {!!card.cards.length && (
                <button onClick={() => card.reset()}>结算</button>
              )}
            </div>
          </ul>
        </>
      )}
    </Observer>
  );
};

export default Card;
