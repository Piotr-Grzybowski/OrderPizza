import { ITable, IList } from "../../types";
import { BasicList } from "../BasicList";
import { Service } from "typedi";

@Service()
export class AvailableTablesList extends BasicList<ITable> {
  private static instance: IList<ITable>;

  private constructor() {
    super();
  }

  public static getInstance(): IList<ITable> {
    if (!this.instance) {
      this.instance = new AvailableTablesList();
    }

    return this.instance;
  }

  findFirstTableWithGivenNrOfSeats(nrOfSeats: number): ITable | false {
    const properTable = this.list.find((item) => {
      return item.nrOfSeats >= nrOfSeats;
    });
    return properTable || false;
  }
}

export default AvailableTablesList.getInstance();
