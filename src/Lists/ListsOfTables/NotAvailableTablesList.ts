import { ITable } from "../../types";
import { BasicList } from "../BasicList";
import { Service, Container } from "typedi";

import "reflect-metadata";

@Service()
export class NotAvailableTablesList extends BasicList<ITable> {
  constructor() {
    super();
  }
}

export default Container.get(NotAvailableTablesList);
