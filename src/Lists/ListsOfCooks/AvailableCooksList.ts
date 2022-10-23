import { ICook } from "../../Cook/Cook";
import { BasicList } from "../BasicList";
import { Service, Container } from "typedi";
import "reflect-metadata";

@Service()
export class AvailableCooksList extends BasicList<ICook> {
  constructor() {
    super();
  }

  findFirstAvailableCook(): ICook | false {
    return this.findAll()[0] || false;
  }
}

export default Container.get(AvailableCooksList);
