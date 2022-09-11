import { action, observable } from "mobx";

import { CardStore } from "./card";
import { ProductStore } from "./product";

export class Store {
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

export default new Store();
