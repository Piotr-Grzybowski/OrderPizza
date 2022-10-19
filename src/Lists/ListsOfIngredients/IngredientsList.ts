import { BasicList } from "../BasicList";
import { IIngredient, IList } from "../../types";
import { Service, Container } from "typedi";
import "reflect-metadata";

@Service()
export class IngredientsList extends BasicList<IIngredient> {
  constructor() {
    super();
  }
}

export default Container.get(IngredientsList);
