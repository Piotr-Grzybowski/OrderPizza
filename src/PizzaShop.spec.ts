import { Pizza } from "./Pizza/Pizza";
import { Table } from "./Table/Table";
import { Cook } from "./Cook/Cook";
import { Ingredient } from "./Ingredient/Ingredient";
import IngredientsList from "./Lists/ListsOfIngredients/IngredientsList";
import AvailableTablesList from "./Lists/ListsOfTables/AvailableTablesList";
import AvailableCooksList from "./Lists/ListsOfCooks/AvailableCooksList";
import PizzaShop from "./PizzaShop";
import { IPizza } from "./types";

let pizza: IPizza, pizza1: IPizza, pizza2: IPizza, pizza3: IPizza;
let pizzaWithNotExistingIngredient: IPizza;

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
  pizzaWithNotExistingIngredient = new Pizza([
    {
      idOfIngredient: "1234",
      amountNeeded: 1000,
    },
  ]);
});

describe("Testing Pizza Shop", () => {
  test("order Pizza to eat In when table found and cook available should go to preparation", () => {
    expect(PizzaShop.orderPizzaToEatIn([pizza], 3, 10)).toBe(true);
    expect(PizzaShop.showListOfOrdersInPreparation().length).toBe(1);
    expect(
      PizzaShop.showListOfOrdersInPreparation()[0].listOfOrderedPizzas[0]
    ).toEqual(pizza);
  });
  test("order Pizza to take away when cook available should go preparation", () => {
    expect(PizzaShop.orderPizzaToTakeAway([pizza1], 10)).toBe(true);
    expect(PizzaShop.showListOfOrdersInPreparation().length).toBe(2);
    expect(
      PizzaShop.showListOfOrdersInPreparation()[1].listOfOrderedPizzas[0]
    ).toEqual(pizza1);
  });
  test("order Pizza to take away when no cook available should go to queue", () => {
    expect(PizzaShop.orderPizzaToTakeAway([pizza2], 10)).toBe(true);
    expect(PizzaShop.showListOfOrdersInQueue().length).toBe(1);
    expect(
      PizzaShop.showListOfOrdersInQueue()[0].listOfOrderedPizzas[0]
    ).toEqual(pizza2);
  });
  test("order Pizza to eat In when table found but no cook available should go to queue", () => {
    expect(PizzaShop.orderPizzaToEatIn([pizza3], 4, 10)).toBe(true);
    expect(PizzaShop.showListOfOrdersInQueue().length).toBe(2);
    expect(
      PizzaShop.showListOfOrdersInQueue()[1].listOfOrderedPizzas[0]
    ).toEqual(pizza3);
  });
  test("order Pizza to eat In when no table available should return false", () => {
    expect(PizzaShop.orderPizzaToEatIn([pizza], 3, 10)).toBe(false);
  });
  test("should throw an error when ingredient in pizza does not exist", () => {
    expect(() =>
      PizzaShop.orderPizzaToTakeAway([pizzaWithNotExistingIngredient], 10)
    ).toThrowError("There is no such an ingredient");
  });
});
