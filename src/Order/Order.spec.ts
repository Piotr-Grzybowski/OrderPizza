import { Pizza } from "../Pizza/Pizza";
import { ingredientForPizza, IOrder, IPizza } from "../types";
import { Order } from "./Order";

describe("Testing Order", () => {
  let order: IOrder;
  let ingredient: ingredientForPizza;
  let pizza: IPizza;
  beforeAll(() => {
    ingredient = { idOfIngredient: "cheese", amountNeeded: 150 };
    pizza = new Pizza([ingredient]);
    order = new Order([pizza]);
  });

  test("Object should be created with given properties", () => {
    expect(order.listOfOrderedPizzas).toStrictEqual([pizza]);
    expect(order.id).toBeDefined();
    expect(order.discount).not.toBeDefined();
  });
});
