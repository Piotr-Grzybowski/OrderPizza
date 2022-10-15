import { Ingredient } from "./Ingredient";

describe("Testing Ingredient", () => {
  const ingredient = new Ingredient("ham", 150);
  test("Object should be created with given properties", () => {
    expect(ingredient.name).toBe("ham");
    expect(ingredient.id).toBeDefined();
    expect(ingredient.getAmount()).toBe(150);
  });
  test("When change amount is called with valid value, amount should be updated", () => {
    ingredient.changeAmount(200);
    expect(ingredient.getAmount()).toBe(200);
  });
  test("When change amount is called with negative value, function should throw an Error", () => {
    expect(() => ingredient.changeAmount(-2)).toThrowError(
      "There is not enough ingredients!"
    );
  });
});
