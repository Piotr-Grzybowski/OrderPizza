import {
  pizzaShop,
  pizzaWith1000OfHamAnd200OfCheese,
  pizzaWith100OfHamAnd200OfCheese,
} from "../prepareTestEnv";

describe("Testing pizza shop abstraction", () => {
  // At the beginning we have 500 of ham, 1200 of cheese and 350 of tomato

  describe("Given person coming to the restaurant and orders pizza", () => {
    // When he orders pizza on site and needs table
    it("table is found", () => {
      expect(pizzaShop.getOrdersInPrep()).toStrictEqual([]);
      pizzaShop.orderPizza([pizzaWith100OfHamAnd200OfCheese], 3, false);
      expect(pizzaShop.getOrdersInPrep()).not.toBe([]);
    });

    it("there is no suitable table", () => {
      expect(() =>
        pizzaShop.orderPizza([pizzaWith100OfHamAnd200OfCheese], 6, false)
      ).toThrow("No suitable table");
    });

    // When he orders pizza on takeaway so table is not needed
    it("there is not enough ingredients to create pizza", () => {
      expect(() =>
        pizzaShop.orderPizza([pizzaWith1000OfHamAnd200OfCheese], 3, true)
      ).toThrow("Amount of ingredient can not be less than zero");
    });

    it("there is no cook available", () => {
      expect(pizzaShop.getOrdersInQueue().length).toBe(0);
      pizzaShop.orderPizza([pizzaWith100OfHamAnd200OfCheese], 3, true);
      expect(pizzaShop.getOrdersInQueue().length).toBe(1);
    });

    it("there is enough ingredients and cook is available", () => {});

    // When order with discount
    it("price should be lowered by amount of discount", () => {});
  });
});
