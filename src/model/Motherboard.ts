
import { Component } from "./Component";
import { ComponentType } from "./ComponentType";


export default class Motherboard extends Component {
    constructor(
        id: number,
        brand: string,
        model: string,
        price: number,
        public socket: string,
        public formFactor: string,
    ) {
        super(id, brand, model, price, ComponentType.MOTHERBOARD);
    }

    public override getSocket(): string {
    return this.socket;
}

    public override getDescription(): string {
        return `${this.getBrand()} ${this.getModel()} - ${this.socket} - ${this.formFactor}`;
    }
}
