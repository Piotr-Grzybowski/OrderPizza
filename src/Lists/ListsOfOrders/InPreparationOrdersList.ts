import { BasicList } from "../BasicList";
import { Service, Container } from "typedi";
import "reflect-metadata";
import { IOrder } from "../../Order/Order";

@Service()
export class InPreparationOrdersList extends BasicList<IOrder> {
  constructor() {
    super();
  }
}

export default Container.get(InPreparationOrdersList);
