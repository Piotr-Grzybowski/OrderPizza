import { IOrder, IList } from "../../types";
import { BasicList } from "../BasicList";
import { Service, Container } from "typedi";

import "reflect-metadata";

@Service()
export class FinishedOrdersList extends BasicList<IOrder> {
  constructor() {
    super();
  }
}

export default Container.get(FinishedOrdersList);
