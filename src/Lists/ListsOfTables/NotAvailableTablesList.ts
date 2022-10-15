import { ITable, IList } from "../../types";
import { BasicList } from "../BasicList";
import { Service } from "typedi";

@Service()
export class NotAvailableTablesList extends BasicList<ITable> {
  private static instance: IList<ITable>;

  private constructor() {
    super();
  }

  public static getInstance(): IList<ITable> {
    if (!this.instance) {
      this.instance = new NotAvailableTablesList();
    }

    return this.instance;
  }
}

export default NotAvailableTablesList.getInstance();
