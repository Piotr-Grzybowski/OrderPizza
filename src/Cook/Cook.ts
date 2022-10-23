import { v4 } from "uuid";

export class Cook implements ICook {
  readonly id: string;
  constructor(readonly name: string) {
    this.id = v4();
  }
}

export interface ICook {
  readonly id: string;
  readonly name: string;
}
