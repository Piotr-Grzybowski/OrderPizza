import AvailableCooksList from "./AvailableCooksList";
import NotAvailableCooksList from "./NotAvailableCooksList";
import { Cook } from "../../Cook/Cook";
jest.mock("../../Cook/Cook.ts", () => {
  return {
    Cook: jest.fn().mockImplementation(() => {
      return {
        id: "123",
        name: "John",
      };
    }),
  };
});

describe("Testing List of available Cooks", () => {
  const listOfCooks = AvailableCooksList;
  const cook = new Cook("John");
  test("Add cook to the list", () => {
    listOfCooks.add(cook);
    expect(listOfCooks.findAll()).toHaveLength(1);
    expect(listOfCooks.findById("123")).toStrictEqual({
      id: "123",
      name: "John",
    });
    expect(listOfCooks.find(cook)).toStrictEqual(cook);
  });
  test("Delete cook from the list", () => {
    listOfCooks.delete(cook);
    expect(listOfCooks.findAll()).toHaveLength(0);
    expect(listOfCooks.findById("123")).toBe(false);
  });
});

describe("Testing List of not available Cooks", () => {
  const listOfCooks = NotAvailableCooksList;
  const cook = new Cook("John");
  test("Add cook to the list", () => {
    listOfCooks.add(cook);
    expect(listOfCooks.findAll()).toHaveLength(1);
    expect(listOfCooks.findById("123")).toStrictEqual({
      id: "123",
      name: "John",
    });
    expect(listOfCooks.find(cook)).toStrictEqual(cook);
  });
  test("Delete cook from the list", () => {
    listOfCooks.delete(cook);
    expect(listOfCooks.findAll()).toHaveLength(0);
    expect(listOfCooks.findById("123")).toBe(false);
  });
});
