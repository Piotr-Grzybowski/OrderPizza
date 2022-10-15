import { BasicList } from "../BasicList";
import { IIngredient, IList } from "../../types";
import { Service } from "typedi";

@Service()
export class IngredientsList extends BasicList<IIngredient> {
  private static instance: IList<IIngredient>;

  private constructor() {
    super();
  }

  public static getInstance(): IList<IIngredient> {
    if (!this.instance) {
      this.instance = new IngredientsList();
    }

    return this.instance;
  }
}

export default IngredientsList.getInstance();
