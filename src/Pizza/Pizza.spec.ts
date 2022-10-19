import { Pizza } from "./Pizza";

describe("Testing Pizza", () => {
  const pizza = new Pizza([
    { idOfIngredient: "ham", amountNeeded: 100 },
    { idOfIngredient: "cheese", amountNeeded: 200 },
  ]);
  test("Object should be created with given properties", () => {
    expect(pizza.listOfIngredients[0].idOfIngredient).toBe("ham");
    expect(pizza.listOfIngredients[0].amountNeeded).toBe(100);
    expect(pizza.listOfIngredients[1].idOfIngredient).toBe("cheese");
    expect(pizza.listOfIngredients[1].amountNeeded).toBe(200);
  });
});
