import { ICook } from "./types";

export class Cook implements ICook {
  constructor(
    public name: string,
    public _status: ICook["status"] = "available"
  ) {}

  get status(): ICook["status"] {
    return this._status;
  }

  set status(newStatus: ICook["status"]) {
    this._status = newStatus;
  }
}
