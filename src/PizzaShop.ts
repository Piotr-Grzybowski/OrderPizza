import { uuid } from "uuidv4";
import { Container, Service } from "typedi";
import {
  IList,
  IPizzaShop,
  ITable,
  ICook,
  IIngredient,
  IPizza,
  IOrder,
} from "./types";
import { AvailableCooksList } from "./Lists/ListsOfCooks/AvailableCooksList";
import { NotAvailableCooksList } from "./Lists/ListsOfCooks/NotAvailableCooksList";
import { AvailableTablesList } from "./Lists/ListsOfTables/AvailableTablesList";
import { NotAvailableTablesList } from "./Lists/ListsOfTables/NotAvailableTablesList";
import { IngredientsList } from "./Lists/ListsOfIngredients/IngredientsList";
import { InPreparationOrdersList } from "./Lists/ListsOfOrders/InPreparationOrdersList";
import { InQueueOrdersList } from "./Lists/ListsOfOrders/InQueueOrdersList";
import { FinishedOrdersList } from "./Lists/ListsOfOrders/FinishedOrdersList";
@Service()
class PizzaShop implements IPizzaShop {
  constructor(
    private availableTables: AvailableTablesList,
    private notAvailableTables: NotAvailableTablesList,
    private availableCooks: AvailableCooksList,
    private notAvailableCooks: NotAvailableCooksList,
    private ordersInPreparation: InPreparationOrdersList,
    private ordersInQueue: InQueueOrdersList,
    private ordersFinished: FinishedOrdersList,
    private ingredients: IngredientsList
  ) {}

  orderPizzaToEatIn(
    listOfPizzas: IPizza[],
    nrOfPeople: number,
    discount: number
  ): boolean {
    const id = uuid();
    const table = this.bookTable(nrOfPeople);
    const listOfOrderedPizzas = this.createOrderedPizzas(listOfPizzas)
      ? listOfPizzas
      : [];
    const order = {
      id,
      listOfOrderedPizzas,
      discount,
    };

    if (table && this.findAvailableCook()) {
      this.ordersInPreparation.add(order);
      return true;
    }

    if (table && !this.findAvailableCook()) {
      this.ordersInQueue.add(order);
      return true;
    }

    return false;
  }

  orderPizzaToTakeAway(listOfPizzas: IPizza[], discount: number): boolean {
    const id = uuid();
    const listOfOrderedPizzas = this.createOrderedPizzas(listOfPizzas)
      ? listOfPizzas
      : [];
    const order = {
      id,
      listOfOrderedPizzas,
      discount,
    };

    if (this.findAvailableCook()) {
      this.ordersInPreparation.add(order);
      return true;
    }

    this.ordersInQueue.add(order);
    return true;
  }

  bookTable(nrOfSeats: number): ITable | false {
    const rightTable =
      this.availableTables.findFirstTableWithGivenNrOfSeats(nrOfSeats);
    if (rightTable) {
      this.moveFromOneListToAnother(
        rightTable,
        this.availableTables,
        this.notAvailableTables
      );
      return rightTable;
    }
    return false;
  }

  private findAvailableCook(): false | ICook {
    const firstAvailableCook = this.availableCooks.findAll()[0];
    if (firstAvailableCook) {
      this.moveFromOneListToAnother(
        firstAvailableCook,
        this.availableCooks,
        this.notAvailableCooks
      );
      return firstAvailableCook;
    }
    return false;
  }

  private createSinglePizza(listOfIngredients: IIngredient[]): void {
    for (let ingredient of listOfIngredients) {
      const currentIngredient = this.ingredients.findById(ingredient.id);

      if (currentIngredient) {
        const newAmount =
          ingredient.getAmount() - currentIngredient.getAmount();
        currentIngredient.changeAmount(newAmount);
      } else {
        throw new Error("There is no such an ingredient");
      }
    }
    return;
  }

  private createOrderedPizzas(listOfPizzas: IPizza[]) {
    for (let pizza of listOfPizzas) {
      this.createSinglePizza(pizza.listOfIngredients);
    }
    return true;
  }

  private moveFromOneListToAnother<T>(
    element: T,
    fromList: IList<T>,
    toList: IList<T>
  ) {
    fromList.delete(element);
    toList.add(element);
  }
}

export default Container.get(PizzaShop);
