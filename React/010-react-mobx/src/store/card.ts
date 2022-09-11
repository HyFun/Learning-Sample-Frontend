import { observable, action, computed } from "mobx";
import { ProductModel } from "./product";

interface CardProductModel extends ProductModel {
  total: number;
}

export class CardStore {
  @observable cards: CardProductModel[] = [];

  @computed get total() {
    return this.cards.reduce((total, item) => {
      total += item.count * item.price;
      return total;
    }, 0);
  }

  @action.bound add(pro: ProductModel) {
    const cards = this.cards;
    const product = cards.find((v) => pro.id === v.id);
    if (product) {
      product.count++;
    } else {
      cards.push({ ...pro, count: 1, total: 0 });
    }
    this.cards = cards.map((v) => {
      v.total = v.count * v.price;
      return v;
    });
  }

  @action.bound remove(id: number) {
    const cards = this.cards;
    const index = cards.findIndex((v) => v.id === id);
    if (index !== -1) {
      const product = cards[index];
      product.count--;
      if (product.count <= 0) {
        cards.splice(index, 1);
      }
    }
  }

  @action.bound reset() {
    this.cards = [];
  }
}
