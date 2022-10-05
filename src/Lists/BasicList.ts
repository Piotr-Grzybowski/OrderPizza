import { IList } from "./types";

export class BasicList<T> implements IList<T> {
  constructor(public list: Array<T> = []) {}

  findAll(): T[] {
    return this.list;
  }

  add(element: T): void {
    if (!this.find(element)) {
      this.list.push(element);
      return;
    }
    throw new Error("Element is already on the list");
  }

  delete(element: T): void {
    if (this.find(element)) {
      const index = this.getIndex(element);
      this.list.splice(index, 1);
      return;
    }
    throw new Error("Element can not be removed because it's not on the list");
  }

  find(element: T): T | false {
    const foundElement = this.list.find((listItem) => element === listItem);
    if (foundElement) return foundElement;
    return false;
  }

  getIndex(element: T): number {
    const index = this.list.findIndex((listItem) => {
      listItem === element;
    });
    return index;
  }
}
