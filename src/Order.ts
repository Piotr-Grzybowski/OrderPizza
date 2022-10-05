import { Pizza } from "./Pizza";
import { IOrder, ITable } from "./types";
import { uuid } from "uuidv4";

export class Order implements IOrder {
  public id: string;

  constructor(
    public listOfOrderedPizzas: Pizza[],
    public table: ITable,
    public price: number,
    status: IOrder["status"],
    public discount: number = 1
  ) {
    this.status = status;
    this.id = uuid();
    this.payed = false;
  }

  get status(): IOrder["status"] {
    return this.status;
  }

  set status(newStatus: IOrder["status"]) {
    this.status = newStatus;
  }

  get payed(): boolean {
    return this.payed;
  }

  set payed(payed: boolean) {
    this.payed = payed;
  }
}
