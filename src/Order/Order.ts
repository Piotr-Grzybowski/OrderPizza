import { IPizza } from "../Pizza/Pizza";
import { v4 } from "uuid";

export class Order implements IOrder {
  readonly id: string;

  constructor(public listOfOrderedPizzas: IPizza[], public discount?: number) {
    this.id = v4();
  }
}

export interface IOrder {
  readonly id: string;
  listOfOrderedPizzas: IPizza[];
  discount?: number;
}
