import { BasicList } from "../BasicList";
import { IIngredient } from "../../Ingredient/Ingredient";
import { Service, Container } from "typedi";
import "reflect-metadata";
import { ingredientForPizza } from "../../Pizza/Pizza";

@Service()
export class IngredientsList extends BasicList<IIngredient> {
  constructor() {
    super();
  }

  updateIngredientsAmount(listOfIngredients: ingredientForPizza[]) {
    for (let ingredient of listOfIngredients) {
      const currentIngredient = this.findById(ingredient.idOfIngredient);

      if (currentIngredient) {
        const newAmount =
          currentIngredient.getAmount() - ingredient.amountNeeded;
        currentIngredient.changeAmount(newAmount);
      } else {
        throw new Error("There is no such an ingredient");
      }
    }
    return;
  }
}

export default Container.get(IngredientsList);
