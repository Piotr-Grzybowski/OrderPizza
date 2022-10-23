import IngredientsList from "./IngredientsList";
import { ingredientForPizza } from "../../Pizza/Pizza";
import { Ingredient } from "../../Ingredient/Ingredient";

describe("Testing ingredients list", () => {
  describe("Testing upgrade amount function", () => {
    const ham = new Ingredient("ham", 150);
    const cheese = new Ingredient("cheese", 200);
    const listOfIngredients: ingredientForPizza[] = [
      { idOfIngredient: ham.id, amountNeeded: 50 },
      { idOfIngredient: cheese.id, amountNeeded: 100 },
    ];
    beforeAll(() => {
      IngredientsList.add(ham);
      IngredientsList.add(cheese);
    });
    afterAll(() => {
      IngredientsList.delete(ham);
      IngredientsList.delete(cheese);
    });

    test("should change amount of given ingredients", () => {
      IngredientsList.updateIngredientsAmount(listOfIngredients);
      expect(ham.getAmount()).toBe(100);
      expect(cheese.getAmount()).toBe(100);
    });
    test("should throw an error when ingredient is not on the list", () => {
      expect(() =>
        IngredientsList.updateIngredientsAmount([
          {
            idOfIngredient: "notknown",
            amountNeeded: 50,
          },
        ])
      ).toThrowError("There is no such an ingredient");
    });
  });
});
