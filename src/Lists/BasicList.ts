export abstract class BasicList<T extends { id: string }> implements IList<T> {
  constructor(protected list: Array<T> = []) {}

  findAll(): T[] {
    return this.list;
  }

  add(element: T): void {
    if (this.findById(element.id) === false) {
      this.list.push(element);
      return;
    }
    throw new Error("Element is already on the list");
  }

  delete(element: T): void {
    if (this.find(element)) {
      const index = this.findIndex(element);
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

  findById(id: string): T | false {
    const foundElement = this.list.find((listItem) => {
      return listItem.id === id;
    });
    return foundElement || false;
  }

  private findIndex(element: T): number {
    const index = this.list.findIndex((listItem) => {
      return listItem === element;
    });
    return index;
  }
}

export interface IList<T> {
  findAll(): T[];
  add(newElement: T): void;
  find(element: T): T | false;
  findById(id: string): T | false;
  delete(element: T): void;
}
