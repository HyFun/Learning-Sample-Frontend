import { observable, computed } from "mobx";
import store from ".";

import datas from "../mocks/product.json";

export type ProductModel = typeof datas[0];

export class ProductStore {
  @observable private _products = datas;

  @computed get products() {
    const result = this._products.map((v) => {
      v = { ...v };
      v.count =
        v.count - (store.card.cards.find((i) => i.id === v.id)?.count || 0);
      return v;
    });
    return result;
  }
}
