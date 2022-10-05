import { uuid } from "uuidv4";
import {
  ISingleton,
  listOfOrders,
  listOfTables,
  listOfCooks,
  listOfIngredients,
} from "./Lists/types";
import {
  ICook,
  IOrder,
  IPizzaShop,
  ITable,
  IPizza,
  IIngredient,
} from "./types";

export class PizzaShop implements IPizzaShop {
  orders: listOfOrders;
  tables: listOfTables;
  cooks: listOfCooks;
  ingredients: listOfIngredients;

  constructor(
    orders: ISingleton<listOfOrders>,
    tables: ISingleton<listOfTables>,
    cooks: ISingleton<listOfCooks>,
    ingredients: ISingleton<listOfIngredients>
  ) {
    this.orders = orders.getInstance();
    this.tables = tables.getInstance();
    this.cooks = cooks.getInstance();
    this.ingredients = ingredients.getInstance();
  }

  orderPizza(
    listOfPizzas: IPizza[],
    nrOfPeople: number,
    takeaway: boolean,
    discounts?: number | undefined
  ): void {
    const id = uuid();
    const table = takeaway ? "takeaway" : this.bookTable(nrOfPeople);
    const listOfOrderedPizzas = this.createManyPizzas(listOfPizzas)
      ? listOfPizzas
      : [];
    const discount = discounts ? discounts : 0;
    const price = 10;
    const status = this.findAvailableCook() ? "In preparation" : "In queue";
    const payed = false;

    const order: IOrder = {
      id,
      listOfOrderedPizzas,
      table,
      discount,
      price,
      status,
      payed,
    };

    this.orders.add(order);
  }

  bookTable(nrOfSeats: number): ITable {
    const rightTable = this.tables.findTableWithNrOfSeats(nrOfSeats);
    if (rightTable) {
      rightTable.status = "non available";
    }
    if (rightTable) return rightTable;
    throw new Error("No suitable table");
  }

  findAvailableCook(): false | ICook {
    const cook = this.cooks.findItemsWithStatus("available")[0];
    if (cook) {
      cook.status = "non available";
    }
    return cook;
  }

  pay(orderNumber: number): void {
    this.orders.pay(orderNumber);
  }

  createSinglePizza(listOfIngredients: IIngredient[]): void {
    for (let ingredient of listOfIngredients) {
      console.log(ingredient);
      const currentIngredient = this.ingredients.findByName(ingredient.name);

      if (currentIngredient) {
        const currentAmount = currentIngredient.amount;
        this.ingredients.updateAmount(
          currentAmount - ingredient.amount,
          ingredient
        );
      } else {
        throw new Error("There is no such an ingredient");
      }
    }
    return;
  }

  createManyPizzas(listOfPizzas: IPizza[]) {
    for (let pizza of listOfPizzas) {
      this.createSinglePizza(pizza.listOfIngredients);
    }
    return true;
  }

  getIngredientsList(): IIngredient[] {
    return this.ingredients.findAll();
  }

  getAvailableCooks(): ICook[] {
    return this.cooks.findItemsWithStatus("available");
  }

  getOrdersInPrep(): IOrder[] {
    return this.orders.findItemsWithStatus("In preparation");
  }

  getOrdersInQueue(): IOrder[] {
    return this.orders.findItemsWithStatus("In queue");
  }

  getOrdersFinished(): IOrder[] {
    return this.orders.findItemsWithStatus("Done");
  }

  getAvailableTables(): ITable[] {
    return this.tables.findItemsWithStatus("available");
  }

  getOccupiedTables(): ITable[] {
    return this.tables.findItemsWithStatus("non available");
  }
}
