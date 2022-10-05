import { ITable } from "./types";

export class Table implements ITable {
  constructor(
    public number: number,
    public nrOfSeats: number,
    public _status: ITable["status"]
  ) {}

  get status(): ITable["status"] {
    return this._status;
  }

  set status(newStatus: ITable["status"]) {
    this._status = newStatus;
  }
}
