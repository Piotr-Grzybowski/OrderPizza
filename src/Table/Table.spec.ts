import { Table } from "./Table";

describe("Testing Table", () => {
  const table = new Table(3);
  test("Object should be created with given properties", () => {
    expect(table.id).toBeDefined();
    expect(table.nrOfSeats).toBe(3);
  });
});
