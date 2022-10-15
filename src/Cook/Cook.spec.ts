import { Cook } from "./Cook";

describe("Testing Cook", () => {
  const cook = new Cook("John");
  test("Object should be created with given properties", () => {
    expect(cook.name).toBe("John");
    expect(cook.id).toBeDefined();
  });
});
