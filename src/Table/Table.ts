import { ITable } from "../types";
import { v4 } from "uuid";

export class Table implements ITable {
  readonly id: string;
  constructor(readonly nrOfSeats: number) {
    this.id = v4();
  }
}
