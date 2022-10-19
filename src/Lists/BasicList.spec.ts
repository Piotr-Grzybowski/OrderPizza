import { IList } from "../types";
import { BasicList } from "./BasicList";

type typeForTestingAbstractClass = {
  id: string;
};

const element = {
  id: "111",
};

const element2 = {
  id: "112",
};

class ClassExtendingBasicList extends BasicList<typeForTestingAbstractClass> {
  constructor() {
    super();
  }
}

describe("Testing Basic List, abstract class", () => {
  let BasicListInstance: IList<typeForTestingAbstractClass> =
    new ClassExtendingBasicList();

  test("Add element to the list", () => {
    BasicListInstance.add(element);
    expect(BasicListInstance.findAll()).toHaveLength(1);
    expect(BasicListInstance.findById("111")).toStrictEqual(element);
    expect(BasicListInstance.find(element)).toStrictEqual(element);
  });
  test("Adding element to the list again should throw an error", () => {
    expect(() => BasicListInstance.add(element)).toThrowError(
      "Element is already on the list"
    );
  });
  test("Delete element from the list", () => {
    BasicListInstance.add(element2);
    BasicListInstance.delete(element);
    expect(BasicListInstance.findAll()).toHaveLength(1);
    expect(BasicListInstance.findById("111")).toBe(false);
  });
  test("Deleting element which is not on the list should throw an error", () => {
    expect(() => BasicListInstance.delete(element)).toThrowError(
      "Element can not be removed because it's not on the list"
    );
  });
});
