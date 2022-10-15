import { Ingredient } from "./src/Ingredient/Ingredient";
import { Cook } from "./src/Cook/Cook";
import { Table } from "./src/Table";
import { IngredientsList } from "./src/Lists/IngredientsList";
import { CooksList } from "./src/Lists/ListsOfCooks/AvailableCooksList";
import { TablesList } from "./src/Lists/AvailableTablesList";
import { OrdersList } from "./src/Lists/FinishedOrdersList";
import { PizzaShop } from "./src/PizzaShop";

const ham = new Ingredient("ham", 500);
const cheese = new Ingredient("cheese", 1200);
const tomato = new Ingredient("tomato", 350);

const JohnCook = new Cook("John", "available");
const tableNr2 = new Table(2, 4, "available");
const tableNr1 = new Table(1, 3, "available");

export const pizzaShop = new PizzaShop(
  OrdersList,
  TablesList,
  CooksList,
  IngredientsList
);

pizzaShop.ingredients.add(ham);
pizzaShop.ingredients.add(cheese);
pizzaShop.ingredients.add(tomato);

pizzaShop.cooks.add(JohnCook);

pizzaShop.tables.add(tableNr1);
pizzaShop.tables.add(tableNr2);

// prepare predefined orders for testing purposes

export const pizzaWith100OfHamAnd200OfCheese = {
  name: "hawaiian",
  listOfIngredients: [
    {
      name: "ham",
      amount: 100,
    },
    {
      name: "cheese",
      amount: 200,
    },
  ],
};

export const pizzaWith1000OfHamAnd200OfCheese = {
  name: "hawaiian",
  listOfIngredients: [
    {
      name: "ham",
      amount: 1000,
    },
    {
      name: "cheese",
      amount: 200,
    },
  ],
};
