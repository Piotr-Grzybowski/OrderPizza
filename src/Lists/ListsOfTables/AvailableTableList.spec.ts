import AvailableTablesList from "./AvailableTablesList";
import { Table } from "../../Table/Table";

let table = new Table(3);

beforeAll(() => {
  AvailableTablesList.add(table);
});

describe("Testing available tables List", () => {
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
