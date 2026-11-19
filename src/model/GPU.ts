import { Component } from "./Component";
import { ComponentType } from "./ComponentType";

// Herança
export default class GPU extends Component {
  constructor(
    id: number,
    brand: string,
    model: string,
    price: number,
    public vram: number,
  ) {
    super(id, brand, model, price, ComponentType.GPU);
  }

  public override getDescription(): string {
    return `${this.getBrand()} ${this.getModel()} - ${this.vram} VRAM`;
  }
}
