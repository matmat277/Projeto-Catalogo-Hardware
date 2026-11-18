import { Component } from "./Component";

// Herança
export default class GPU extends Component {
  constructor(
    id: number,
    brand: string,
    model: string,
    price: number,
    public vram: number,
  ) {
    super(id, brand, model, price);
  }

  public override getDescription(): string {
    return `${this.getBrand()} ${this.getModel()} - ${this.vram} VRAM`;
  }
}
