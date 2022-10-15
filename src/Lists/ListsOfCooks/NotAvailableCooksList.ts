import { ICook, IList } from "../../types";
import { BasicList } from "../BasicList";
import { Service } from "typedi";

@Service()
export class NotAvailableCooksList extends BasicList<ICook> {
  private static instance: IList<ICook>;

  private constructor() {
    super();
  }

  public static getInstance(): IList<ICook> {
    if (!this.instance) {
      this.instance = new NotAvailableCooksList();
    }

    return this.instance;
  }
}

export default NotAvailableCooksList.getInstance();
