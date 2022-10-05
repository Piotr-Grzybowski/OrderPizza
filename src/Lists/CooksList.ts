import { BasicListWithStatus } from "./BasicListWithStatus";
import { IWithStatus, listOfCooks } from "./types";
import { ICook } from "../types";

export class CooksList
  extends BasicListWithStatus<ICook, "status">
  implements IWithStatus<ICook, "status">
{
  private static instance: listOfCooks;

  private constructor() {
    super();
  }

  public static getInstance(): listOfCooks {
    if (!this.instance) {
      this.instance = new CooksList();
    }

    return this.instance;
  }
}
