import { Component } from "./Component";

export default class Computer {
  private components: Component[] = [];

  public adicionarComponente(component: Component): void {
    this.components.push(component);
  }

  public getComponents(): Component[] {
    return [...this.components];
  }

  public getDescricaoBuild(): string {
    if (this.components.length === 0) {
      return "Nenhum componente adicionado.";
    }

    let descricao = "";

    // Polimorfismo (exemplo: getDescription() sobreescrito por CPU se comporta de acordo com CPU)
    for (let i = 0; i < this.components.length; i++) {
      const componente = this.components[i];

      descricao += `${i + 1}. ${componente.getDescription()} - R$ ${componente.getPrice().toFixed(2)}\n`;
    }

    return descricao;
  }

  //(Sobrecarga)
  public buscarComponente(id: number): Component | undefined;
  public buscarComponente(brand: string): Component | undefined;

  // procura componentes (sobrecarga)
  public buscarComponente(
    identificador: number | string,
  ): Component | undefined {
    if (typeof identificador === "number") {
      return this.components.find(
        (component) => component.getId() === identificador,
      );
    }

    return this.components.find(
      (component) =>
        component.getBrand().toLowerCase() === identificador.toLowerCase(),
    );
  }

  public getPrecoTotal(): number {
    return this.components.reduce(
      (total, componente) => total + componente.getPrice(),
      0,
    );
  }
}
