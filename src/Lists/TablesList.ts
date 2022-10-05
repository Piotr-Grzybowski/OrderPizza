import { BasicListWithStatus } from "./BasicListWithStatus";
import { ITablesList, listOfTables } from "./types";
import { ITable } from "../types";

export class TablesList
  extends BasicListWithStatus<ITable, "status">
  implements ITablesList
{
  private static instance: listOfTables;

  private constructor() {
    super();
  }

  public static getInstance(): listOfTables {
    if (!this.instance) {
      this.instance = new TablesList();
    }

    return this.instance;
  }

  findTableWithNrOfSeats(nrOfSeats: number): ITable | false {
    const properTable = this.list.find((item) => {
      return item.nrOfSeats >= nrOfSeats && item.status === "available";
    });
    return properTable || false;
  }
}
