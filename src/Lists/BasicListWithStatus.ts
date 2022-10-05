import { BasicList } from "./BasicList";
import { IWithStatus, haveStatus } from "./types";

export class BasicListWithStatus<T, U extends keyof T>
  extends BasicList<haveStatus<T, U> & T>
  implements IWithStatus<T, U>
{
  constructor() {
    super();
  }

  updateStatus(status: T[U], element: haveStatus<T, U> & T): void {
    const foundElement = this.find(element);
    if (foundElement) {
      foundElement.status = status;
      return;
    }
    throw new Error("Item not found.");
  }

  findItemsWithStatus(status: T[U]): (haveStatus<T, U> & T)[] {
    const filteredList = this.list.filter((item) => item.status === status);

    return filteredList || [];
  }
}
