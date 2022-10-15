import { IOrder, IList } from "../../types";
import { BasicList } from "../BasicList";
import { Service } from "typedi";

@Service()
export class FinishedOrdersList extends BasicList<IOrder> {
  private static instance: IList<IOrder>;

  private constructor() {
    super();
  }

  public static getInstance(): IList<IOrder> {
    if (!this.instance) {
      this.instance = new FinishedOrdersList();
    }

    return this.instance;
  }
}

export default FinishedOrdersList.getInstance();
