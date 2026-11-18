// Classe abstrata
import { ComponentStatus } from "./ComponentStatus";

export abstract class Component {
  constructor(
    private id: number,
    private brand: string,
    private model: string,
    private price: number,
    private status: ComponentStatus = ComponentStatus.AVAILABLE,
  ) {}

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getBrand(): string {
    return this.brand;
  }

  public setBrand(brand: string): void {
    this.brand = brand;
  }

  public getModel(): string {
    return this.model;
  }

  public setModel(model: string): void {
    this.model = model;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getStatus(): ComponentStatus {
    return this.status;
  }

  public setStatus(status: ComponentStatus): void {
    this.status = status;
  }

  public abstract getDescription(): string;
}
