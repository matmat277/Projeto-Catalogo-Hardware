import { Component } from "./Component";
import { ComponentType } from "./ComponentType";

// Herança
export default class RAM extends Component {
  constructor(
    id: number,
    brand: string,
    model: string,
    price: number,
    public capacity: number,
  ) {
    super(id, brand, model, price, ComponentType.RAM);
  }

  public override getDescription(): string {
    return `${this.getBrand()} ${this.getModel()} - ${this.capacity} RAM`;
  }
}
