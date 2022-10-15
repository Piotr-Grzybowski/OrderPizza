import { IIngredient, IPizza } from "../types";
import { v4 } from "uuid";

export class Pizza implements IPizza {
  readonly id: string;
  constructor(readonly listOfIngredients: IIngredient[]) {
    this.id = v4();
  }
}
