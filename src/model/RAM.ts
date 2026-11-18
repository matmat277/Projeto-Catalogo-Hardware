import { Component } from "./Component";

// Herança
export default class RAM extends Component {
  constructor(
    id: number,
    brand: string,
    model: string,
    price: number,
    public capacity: number,
  ) {
    super(id, brand, model, price);
  }

  public override getDescription(): string {
    return `${this.getBrand()} ${this.getModel()} - ${this.capacity} RAM`;
  }
}
