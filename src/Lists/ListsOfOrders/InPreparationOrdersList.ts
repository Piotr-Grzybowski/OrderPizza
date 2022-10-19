import { IOrder } from "../../types";
import { BasicList } from "../BasicList";
import { Service, Container } from "typedi";
import "reflect-metadata";

@Service()
export class InPreparationOrdersList extends BasicList<IOrder> {
  constructor() {
    super();
  }
}

export default Container.get(InPreparationOrdersList);
