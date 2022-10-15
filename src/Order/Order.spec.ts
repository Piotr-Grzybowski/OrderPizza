import { Ingredient } from "../Ingredient/Ingredient";
import { Pizza } from "../Pizza/Pizza";
import { IIngredient, IOrder, IPizza } from "../types";
import { Order } from "./Order";

describe("Testing Order", () => {
  let order: IOrder;
  let ingredient: IIngredient;
  let pizza: IPizza;
  beforeAll(() => {
    ingredient = new Ingredient("cheese", 150);
    pizza = new Pizza([ingredient]);
    order = new Order([pizza]);
  });

  test("Object should be created with given properties", () => {
    expect(order.listOfOrderedPizzas).toStrictEqual([pizza]);
    expect(order.id).toBeDefined();
    expect(order.discount).not.toBeDefined();
  });
});
