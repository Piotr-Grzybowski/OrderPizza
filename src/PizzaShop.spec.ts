import { Pizza } from "./Pizza/Pizza";
import { Table } from "./Table/Table";
import { Cook } from "./Cook/Cook";
import { Ingredient } from "./Ingredient/Ingredient";
import IngredientsList from "./Lists/ListsOfIngredients/IngredientsList";
import AvailableTablesList from "./Lists/ListsOfTables/AvailableTablesList";
import AvailableCooksList from "./Lists/ListsOfCooks/AvailableCooksList";
import PizzaShop from "./PizzaShop";
import { IPizza } from "./Pizza/Pizza";

describe("Testing Pizza Shop", () => {
  let pizza: IPizza, pizza1: IPizza, pizza2: IPizza, pizza3: IPizza;

  beforeAll(() => {
    const cheese = new Ingredient("cheese", 5000);
    const table = new Table(4);
    const table2 = new Table(5);
    const cook = new Cook("Jeremy");
    const cook2 = new Cook("Jeremy");
    IngredientsList.add(cheese);
    AvailableCooksList.add(cook);
    AvailableCooksList.add(cook2);
    AvailableTablesList.add(table);
    AvailableTablesList.add(table2);
    const idOfCheese = IngredientsList.findAll()[0].id;
    pizza = new Pizza([
      {
        idOfIngredient: idOfCheese,
        amountNeeded: 50,
      },
    ]);
    pizza1 = new Pizza([
      {
        idOfIngredient: idOfCheese,
        amountNeeded: 50,
      },
    ]);
    pizza2 = new Pizza([
      {
        idOfIngredient: idOfCheese,
        amountNeeded: 50,
      },
    ]);
    pizza3 = new Pizza([
      {
        idOfIngredient: idOfCheese,
        amountNeeded: 50,
      },
    ]);
  });

  test("order Pizza to eat In when table found and cook available should go to preparation", () => {
    const order = PizzaShop.orderPizzaToEatIn([pizza], 3, 10);
    expect(order.status).toBe("success");
    expect(order.message).toBe("Order in preparation");
  });
  test("order Pizza to take away when cook available should go preparation", () => {
    const order = PizzaShop.orderPizzaToTakeAway([pizza1], 10);
    expect(order.status).toBe("success");
    expect(order.message).toBe("Order in preparation");
  });
  test("order Pizza to take away when no cook available should go to queue", () => {
    const order = PizzaShop.orderPizzaToTakeAway([pizza2], 10);
    expect(order.status).toBe("success");
    expect(order.message).toBe("Order in queue");
  });
  test("order Pizza to eat In when table found but no cook available should go to queue", () => {
    const order = PizzaShop.orderPizzaToEatIn([pizza3], 4, 10);
    expect(order.status).toBe("success");
    expect(order.message).toBe("Order in queue");
  });
  test("order Pizza to eat In when no table available should return falsy result", () => {
    const order = PizzaShop.orderPizzaToEatIn([pizza], 3, 10);
    expect(order.status).toBe("failure");
    expect(order.message).toBe("Order can not be completed");
  });
});
