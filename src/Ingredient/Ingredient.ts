import { IIngredient } from "../types";
import { v4 } from "uuid";

export class Ingredient implements IIngredient {
  readonly id: string;
  constructor(readonly name: string, private amount: number) {
    this.id = v4();
  }

  getAmount(): number {
    return this.amount;
  }

  changeAmount(newAmount: number) {
    if (newAmount >= 0) this.amount = newAmount;
    else throw new Error("There is not enough ingredients!");
  }
}
