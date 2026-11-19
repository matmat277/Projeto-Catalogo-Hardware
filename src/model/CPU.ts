import { Component } from "./Component";
import { ComponentType } from "./ComponentType";

// Herança
export default class CPU extends Component {
  constructor(
    id: number,
    brand: string,
    model: string,
    price: number,
    public cores: number,
    public socket: string,
  ) {
    super(id, brand, model, price, ComponentType.CPU);
  }

  public override getSocket(): string {
    return this.socket;
  } 

  // Sobreescrita
  public override getDescription(): string {
    return `${this.getBrand()} ${this.getModel()} - ${this.cores} núcleos`;
  }
}
