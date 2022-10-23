import AvailableTablesList from "./AvailableTablesList";
import { Table } from "../../Table/Table";

describe("Testing available tables List", () => {
  let table = new Table(3);
  beforeAll(() => {
    AvailableTablesList.add(table);
  });
  afterAll(() => {
    AvailableTablesList.delete(table);
  });

  describe("Testing method findFirstTableWithGivenNrOfSeats", () => {
    test("should return a table when available", () => {
      expect(AvailableTablesList.findFirstTableWithGivenNrOfSeats(3)).toBe(
        table
      );
    });
    test("should return false when no suitable table", () => {
      expect(AvailableTablesList.findFirstTableWithGivenNrOfSeats(4)).toBe(
        false
      );
    });
  });
});
