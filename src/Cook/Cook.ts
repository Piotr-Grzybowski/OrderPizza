import { ICook } from "../types";
import { v4 } from "uuid";

export class Cook implements ICook {
  readonly id: string;
  constructor(readonly name: string) {
    this.id = v4();
  }
}
