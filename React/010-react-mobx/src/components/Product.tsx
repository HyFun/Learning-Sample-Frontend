import { observer } from "mobx-react";
import store from "../store";
import { ProductModel } from "../store/product";

const Product = () => {
  const handleAdd = (pro: ProductModel) => {
    store.card.add(pro);
  };

  return (
    <>
      <h3>商品列表</h3>
      <ul style={{ width: 600 }}>
        {store.product.products.map((v) => (
          <li key={v.id} style={{ display: "flex", alignItems: "center" }}>
            <p>{v.name}</p>
            <p style={{ flex: "1", textAlign: "right", marginRight: 10 }}>
              {v.price} * {v.count}
            </p>
            <button disabled={v.count <= 0} onClick={() => handleAdd(v)}>
              +
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default observer(Product);
