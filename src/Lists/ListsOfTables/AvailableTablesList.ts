import { ITable } from "../../Table/Table";
import { BasicList } from "../BasicList";
import { Service, Container } from "typedi";
import "reflect-metadata";

@Service()
export class AvailableTablesList extends BasicList<ITable> {
  constructor() {
    super();
  }

  findFirstTableWithGivenNrOfSeats(nrOfSeats: number): ITable | false {
    const properTable = this.list.find((item) => {
      return item.nrOfSeats >= nrOfSeats;
    });
    return properTable || false;
  }
}

export default Container.get(AvailableTablesList);
