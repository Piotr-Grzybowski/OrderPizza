import { ICook, IList } from "../../types";
import { BasicList } from "../BasicList";
import { Service } from "typedi";

@Service()
export class AvailableCooksList extends BasicList<ICook> {
  private static instance: IList<ICook>;

  private constructor() {
    super();
  }

  public static getInstance(): IList<ICook> {
    if (!this.instance) {
      this.instance = new AvailableCooksList();
    }

    return this.instance;
  }
}

export default AvailableCooksList.getInstance();
