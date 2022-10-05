import {
  listOfOrders,
  listOfTables,
  listOfCooks,
  listOfIngredients,
} from "./Lists/types";

export interface IIngredient {
  name: string;
  amount: number;
}

export interface IPizza {
  name: string;
  listOfIngredients: IIngredient[];
}

export interface IEmployee {
  name: string;
}

export interface ICook extends IEmployee {
  status: "available" | "non available";
}

export interface ITable {
  number: number;
  nrOfSeats: number;
  status: ICook["status"];
}

export interface IOrder {
  id: string;
  listOfOrderedPizzas: IPizza[];
  discount: number;
  price: number;
  status: "Done" | "In preparation" | "In queue";
  payed: boolean;
  table: ITable | "takeaway";
}

export interface IPizzaShop {
  orders: listOfOrders;
  tables: listOfTables;
  cooks: listOfCooks;
  ingredients: listOfIngredients;
  orderPizza(
    listOfPizzas: Array<IPizza>,
    nrOfPeople: number,
    takeaway: boolean,
    discount?: number
  ): void;
  bookTable(nrOfSeats: number): ITable;
  pay(orderNumber: number): void;
  createSinglePizza(listOfIngredients: Array<IIngredient>): void;
  createManyPizzas(listOfPizzas: IPizza[]): boolean;
  findAvailableCook(): ICook | false;
  getIngredientsList(): IIngredient[];
  getAvailableCooks(): ICook[];
  getOrdersInPrep(): IOrder[];
  getOrdersInQueue(): IOrder[];
  getOrdersFinished(): IOrder[];
  getAvailableTables(): ITable[];
  getOccupiedTables(): ITable[];
}
