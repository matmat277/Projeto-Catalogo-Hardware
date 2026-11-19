import { Component } from "./Component";
import { ComponentType } from "./ComponentType";

// Herança
export default class PSU extends Component {
  constructor(
    id: number,
    brand: string,
    model: string,
    price: number,
    public wattage: number,
  ) {
    super(id, brand, model, price, ComponentType.PSU);
  }

  public override getDescription(): string {
    return `${this.getBrand()} ${this.getModel()} - ${this.wattage} Watts`;
  }
}
