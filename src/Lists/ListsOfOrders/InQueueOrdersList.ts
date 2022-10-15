import { IOrder, IList } from "../../types";
import { BasicList } from "../BasicList";
import { Service } from "typedi";

@Service()
export class InQueueOrdersList extends BasicList<IOrder> {
  private static instance: IList<IOrder>;

  private constructor() {
    super();
  }

  public static getInstance(): IList<IOrder> {
    if (!this.instance) {
      this.instance = new InQueueOrdersList();
    }

    return this.instance;
  }
}

export default InQueueOrdersList.getInstance();
