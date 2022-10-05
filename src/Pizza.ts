import { IIngredient, IPizza } from "./types";

export class Pizza implements IPizza {
  constructor(public name: string, public listOfIngredients: IIngredient[]) {}
}
