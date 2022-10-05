import { BasicListWithStatus } from "./BasicListWithStatus";
import { IOrder } from "../types";
import { IOrdersList, IWithStatus, listOfOrders } from "./types";

export class OrdersList
  extends BasicListWithStatus<IOrder, "status">
  implements IWithStatus<IOrder, "status">, IOrdersList
{
  private static instance: listOfOrders;

  private constructor() {
    super();
  }

  public static getInstance(): listOfOrders {
    if (!this.instance) {
      this.instance = new OrdersList();
    }

    return this.instance;
  }

  findOrderByNumber(orderNumber: number): IOrder | false {
    const order = this.list.find((item) => item.id);
    return order || false;
  }

  pay(orderNumber: number) {
    const order = this.findOrderByNumber(orderNumber);
    if (order) {
      order.payed = true;
      return;
    }
    throw new Error("Order not found");
  }
}
