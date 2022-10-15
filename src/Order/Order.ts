import { IOrder, IPizza } from "../types";
import { v4 } from "uuid";

export class Order implements IOrder {
  readonly id: string;

  constructor(public listOfOrderedPizzas: IPizza[], public discount?: number) {
    this.id = v4();
  }
}
