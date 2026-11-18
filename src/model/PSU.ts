import { Component } from "./Component";

// Herança
export default class PSU extends Component {
  constructor(
    id: number,
    brand: string,
    model: string,
    price: number,
    public wattage: number,
  ) {
    super(id, brand, model, price);
  }

  public override getDescription(): string {
    return `${this.getBrand()} ${this.getModel()} - ${this.wattage} Watts`;
  }
}
