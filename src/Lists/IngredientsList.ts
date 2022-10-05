import { BasicList } from "./BasicList";
import { IIngredient } from "../types";
import { IIngredientsList, listOfIngredients } from "./types";

export class IngredientsList
  extends BasicList<IIngredient>
  implements IIngredientsList
{
  private static instance: listOfIngredients;

  private constructor() {
    super();
  }

  public static getInstance(): listOfIngredients {
    if (!this.instance) {
      this.instance = new IngredientsList();
    }

    return this.instance;
  }

  findByName(name: string): IIngredient | false {
    const ingredient = this.list.find((item) => item.name === name);
    return ingredient || false;
  }

  updateAmount(newAmount: number, element: IIngredient): void {
    const foundElement = this.findByName(element.name);
    if (foundElement) {
      foundElement.amount = newAmount;
      return;
    }
    throw new Error("Can't update the amount because item is not on the list");
  }
}
