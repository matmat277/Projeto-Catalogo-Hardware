import { Component } from "./Component";

// Herança
export default class CPU extends Component {
  constructor(
    id: number,
    brand: string,
    model: string,
    price: number,
    public cores: number,
  ) {
    super(id, brand, model, price);
  }

  // Sobreescrita
  public override getDescription(): string {
    return `${this.getBrand()} ${this.getModel()} - ${this.cores} núcleos`;
  }
}
