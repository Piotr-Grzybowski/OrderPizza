import { v4 } from "uuid";

export class Pizza implements IPizza {
  readonly id: string;
  constructor(readonly listOfIngredients: ingredientForPizza[]) {
    this.id = v4();
  }
}

export type ingredientForPizza = {
  idOfIngredient: string;
  amountNeeded: number;
};
export interface IPizza {
  readonly id: string;
  readonly listOfIngredients: ingredientForPizza[];
}
