import { Ingredient } from "../Ingredient/Ingredient";
import { Pizza } from "./Pizza";

describe("Testing Pizza", () => {
  const pizza = new Pizza([
    new Ingredient("ham", 100),
    new Ingredient("cheese", 200),
  ]);
  test("Object should be created with given properties", () => {
    expect(pizza.listOfIngredients[0].name).toBe("ham");
    expect(pizza.listOfIngredients[0].getAmount()).toBe(100);
    expect(pizza.listOfIngredients[1].name).toBe("cheese");
    expect(pizza.listOfIngredients[1].getAmount()).toBe(200);
  });
});
