import { IOrder } from "../../Order/Order";
import { BasicList } from "../BasicList";
import { Service, Container } from "typedi";
import "reflect-metadata";

@Service()
export class InQueueOrdersList extends BasicList<IOrder> {
  constructor() {
    super();
  }
}

export default Container.get(InQueueOrdersList);
