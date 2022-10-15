export interface IIngredient {
  readonly id: string;
  readonly name: string;
  getAmount(): number;
  changeAmount(newAmount: number): void;
}

export interface ICook {
  readonly id: string;
  readonly name: string;
}

export interface ITable {
  readonly id: string;
  readonly nrOfSeats: number;
}

export interface IOrder {
  readonly id: string;
  listOfOrderedPizzas: IPizza[];
  discount?: number;
}

export interface IPizza {
  readonly id: string;
  readonly listOfIngredients: IIngredient[];
}
export interface IPizzaShop {
  orderPizzaToEatIn(
    listOfPizzas: IPizza[],
    nrOfPeople: number,
    discount: number
  ): boolean;
  orderPizzaToTakeAway(listOfPizzas: IPizza[], discount: number): boolean;
  bookTable(nrOfSeats: number): ITable | false;
}

export interface IList<T> {
  findAll(): T[];
  add(newElement: T): void;
  find(element: T): T | false;
  findById(id: string): T | false;
  delete(element: T): void;
}
