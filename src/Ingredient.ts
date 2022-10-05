import { IIngredient } from "./types";

export class Ingredient implements IIngredient {
  constructor(public name: string, public _amount: number) {}

  get amount(): number {
    return this._amount;
  }

  set amount(newAmount: number) {
    console.log(newAmount);
    if (newAmount < 0) {
      throw new Error("Amount of ingredient can not be less than zero");
    }
    this._amount = newAmount;
  }
}
