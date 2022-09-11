import { action, observable } from "mobx";
import { useLocalStore } from "mobx-react";

import { CardStore } from "./card";
import { ProductStore } from "./product";

class Store {
  @observable card: CardStore;
  @observable product: ProductStore;

  @observable count: number = 0;
  constructor() {
    this.card = new CardStore();
    this.product = new ProductStore();
  }

  @action.bound increment() {
    this.count++;
  }
}

const store = new Store();

export function useStore() {
  return useLocalStore(() => store);
}

export default store;
