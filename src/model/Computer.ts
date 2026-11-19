import { Component } from "./Component";
import { ComponentType } from "./ComponentType";
import { ComponentStatus } from "./ComponentStatus";

export default class Computer {
  private components: Component[] = [];
  
  // Adicionado primeiro throw, computer não adiciona GPU, CPU, PSU e MOTHERBOARD se já tem alguma classe adicionada, MainScreen verifica e joga erro.
  public adicionarComponente(component: Component): void {
    // Verifica disponibilidade
    if (component.getStatus() !== ComponentStatus.AVAILABLE) {
        throw new Error("Este componente não está disponível para montagem.");
    }

    // Categorias que permitem apenas um componente
    const tiposUnicos = [
        ComponentType.CPU,
        ComponentType.GPU,
        ComponentType.PSU,
        ComponentType.MOTHERBOARD
    ];

    // Verifica se a categoria possui limite de uma unidade
    if (tiposUnicos.includes(component.getType())) {

        const jaExiste = this.components.some(
            componente => componente.getType() === component.getType()
        );

        if (jaExiste) {
            throw new Error(
                `Este computador já possui um componente do tipo ${component.getType()}.`
            );
        }
    }

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
