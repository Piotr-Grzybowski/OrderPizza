import { uuid } from "uuidv4";
import { Container, Service } from "typedi";
import { ingredientForPizza, IPizza } from "./Pizza/Pizza";
import { ITable } from "./Table/Table";
import { ICook } from "./Cook/Cook";
import { AvailableCooksList } from "./Lists/ListsOfCooks/AvailableCooksList";
import { NotAvailableCooksList } from "./Lists/ListsOfCooks/NotAvailableCooksList";
import { AvailableTablesList } from "./Lists/ListsOfTables/AvailableTablesList";
import { NotAvailableTablesList } from "./Lists/ListsOfTables/NotAvailableTablesList";
import { IngredientsList } from "./Lists/ListsOfIngredients/IngredientsList";
import { InPreparationOrdersList } from "./Lists/ListsOfOrders/InPreparationOrdersList";
import { InQueueOrdersList } from "./Lists/ListsOfOrders/InQueueOrdersList";
import { FinishedOrdersList } from "./Lists/ListsOfOrders/FinishedOrdersList";
import "reflect-metadata";

@Service()
class PizzaShop implements IPizzaShop {
  constructor(
    private readonly availableTables: AvailableTablesList,
    private readonly notAvailableTables: NotAvailableTablesList,
    private readonly availableCooks: AvailableCooksList,
    private readonly notAvailableCooks: NotAvailableCooksList,
    private readonly ordersInPreparation: InPreparationOrdersList,
    private readonly ordersInQueue: InQueueOrdersList,
    private readonly ordersFinished: FinishedOrdersList,
    private readonly ingredientsInStore: IngredientsList
  ) {}

  orderPizzaToEatIn(
    listOfPizzas: IPizza[],
    nrOfPeople: number,
    discount: number
  ): orderResponse {
    const id = uuid();
    const table = this.bookTable(nrOfPeople);
    const cook = this.findAvailableCook();
    const listOfOrderedPizzas = this.createOrderedPizzas(listOfPizzas)
      ? listOfPizzas
      : [];
    const order = {
      id,
      listOfOrderedPizzas,
      discount,
    };

    if (table && cook) {
      this.ordersInPreparation.add(order);
      return {
        status: "success",
        message: "Order in preparation",
      };
    }

    if (table && !cook) {
      this.ordersInQueue.add(order);
      return {
        status: "success",
        message: "Order in queue",
      };
    }

    return {
      status: "failure",
      message: "Order can not be completed",
    };
  }

  orderPizzaToTakeAway(
    listOfPizzas: IPizza[],
    discount: number
  ): orderResponse {
    const id = uuid();
    const listOfOrderedPizzas = this.createOrderedPizzas(listOfPizzas)
      ? listOfPizzas
      : [];
    const cook = this.findAvailableCook();
    const order = {
      id,
      listOfOrderedPizzas,
      discount,
    };

    if (cook) {
      this.ordersInPreparation.add(order);
      return {
        status: "success",
        message: "Order in preparation",
      };
    }

    this.ordersInQueue.add(order);
    return {
      status: "success",
      message: "Order in queue",
    };
  }

  private bookTable(nrOfSeats: number): ITable | false {
    const rightTable =
      this.availableTables.findFirstTableWithGivenNrOfSeats(nrOfSeats);
    if (rightTable) {
      this.availableTables.delete(rightTable);
      this.notAvailableTables.add(rightTable);
      return rightTable;
    }
    return false;
  }

  private findAvailableCook(): ICook | false {
    const cook = this.availableCooks.findFirstAvailableCook();
    if (cook) {
      this.availableCooks.delete(cook);
      this.notAvailableCooks.add(cook);
      return cook;
    }
    return false;
  }

  private createSinglePizza(
    listOfIngredientsForPizza: ingredientForPizza[]
  ): void {
    this.ingredientsInStore.updateIngredientsAmount(listOfIngredientsForPizza);
    return;
  }

  private createOrderedPizzas(listOfPizzas: IPizza[]) {
    for (let pizza of listOfPizzas) {
      this.createSinglePizza(pizza.listOfIngredients);
    }
    return true;
  }
}

export default Container.get(PizzaShop);

export type orderResponse = {
  status: "success" | "failure";
  message: string;
};
export interface IPizzaShop {
  orderPizzaToEatIn(
    listOfPizzas: IPizza[],
    nrOfPeople: number,
    discount: number
  ): orderResponse;
  orderPizzaToTakeAway(listOfPizzas: IPizza[], discount: number): orderResponse;
}
