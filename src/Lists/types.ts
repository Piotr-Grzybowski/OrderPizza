import { ITable, IIngredient, ICook, IOrder } from "../types";

export interface IList<T> {
  list: Array<T>;
  findAll(): T[];
  add(newElement: T): void;
  find(element: T): T | false;
  delete(element: T): void;
  getIndex(element: T): number;
}

export interface IWithStatus<T, U extends keyof T> {
  updateStatus(status: T[U], element: haveStatus<T, U> & T): void;
  findItemsWithStatus(status: T[U]): Array<haveStatus<T, U> & T>;
}

export type haveStatus<T, U extends keyof T> = {
  status: T[U];
};

export interface ISingleton<T> {
  getInstance(): T;
}

export interface ITablesList {
  findTableWithNrOfSeats(nrOfSeats: number): ITable | false;
}

export interface IOrdersList {
  pay(orderNumber: number): void;
}

export interface IIngredientsList {
  findByName(name: string): IIngredient | false;
  updateAmount(amount: number, element: IIngredient): void;
}

export type listOfTables = IList<ITable> &
  IWithStatus<ITable, "status"> &
  ITablesList;

export type listOfOrders = IList<IOrder> &
  IWithStatus<IOrder, "status"> &
  IOrdersList;

export type listOfCooks = IList<ICook> & IWithStatus<ICook, "status">;

export type listOfIngredients = IList<IIngredient> & IIngredientsList;
