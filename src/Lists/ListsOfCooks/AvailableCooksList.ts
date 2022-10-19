import { ICook } from "../../types";
import { BasicList } from "../BasicList";
import { Service, Container } from "typedi";
import "reflect-metadata";

@Service()
export class AvailableCooksList extends BasicList<ICook> {
  constructor() {
    super();
  }
}

export default Container.get(AvailableCooksList);
