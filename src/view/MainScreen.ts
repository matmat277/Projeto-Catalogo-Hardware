import MainController from "../controller/MainController";
import Computer from "../model/Computer";
import { ComponentStatus } from "../model/ComponentStatus";
import promptSync = require("prompt-sync");
import MyError from "../model/MyError";

export default class MainScreen {
  private prompt = promptSync();

  private controller: MainController;

  constructor(controller: MainController) {
    this.controller = controller;
    this.openFirstScreen();
  }

  private getStatusLabel(status: ComponentStatus): string {
    switch (status) {
      case ComponentStatus.AVAILABLE:
        return "Disponível";

      case ComponentStatus.OUT_OF_STOCK:
        return "Sem estoque";

      case ComponentStatus.DISCONTINUED:
        return "Fora de linha";

      default:
        return "Status desconhecido";
    }
  }

  private openFirstScreen(): void {
    let option: number = 0;

    while (option != 3) {
      option = Number(
        this.prompt(
          "DIGITE:\n1 para iniciar uma build customizada.\n2 para Listar componentes dispońiveis.\n3 para Sair.\n",
        ),
      );

      switch (option) {
        case 1:
          this.buildScreen();
          break;

        case 2:
          this.listScreen();
          break;

        case 3:
          console.log("Programa encerrado.");
          break;

        default:
          console.log("Entre com um número entre 1 e 3");
          break;
      }
    }
  }

  //método para construir um computador
  private buildScreen(): void {
    const computer = this.controller.getNewComputer();
    let option: number = -1;
    let mensagem = "";

    while (option !== 0) {
      console.log("\n=== MONTAR COMPUTADOR ===");
      this.printComponents();
      console.log("\nDigite o ID da peça para adicioná-la.");
      console.log("0 - Finalizar montagem");

      if (mensagem !== "") {
        console.log("\n" + mensagem);
        mensagem = "";
      }

      option = Number(this.prompt("Sua escolha: "));

      if (option === 0) {
        break;
      }

      const component = this.controller.getComponentById(option);

      if (!component) {
        mensagem = "ID não encontrado.";
        continue;
      }

      try {
        computer.adicionarComponente(component);
        mensagem = "Componente adicionado.";
        } catch (erro) {
        if (erro instanceof MyError) {
          mensagem = erro.message;
        } else {
          mensagem = "Ocorreu um erro inesperado.";
        }
      }
}
1
    console.log("\n=== SEU COMPUTADOR ===");
    console.log(computer.getDescricaoBuild());
    console.log("Preço total: R$ " + computer.getPrecoTotal().toFixed(2));
  }

  private listScreen(): void {
    console.log("\n=== COMPONENTES CADASTRADOS ===");
    this.printComponents();
  }

  private printComponents(): void {
    for (let component of this.controller.getAllComponents()) {
      console.log("\nID: " + component.getId());
      console.log("Marca: " + component.getBrand());
      console.log("Modelo: " + component.getModel());
      console.log("Status: " + this.getStatusLabel(component.getStatus()));
      console.log("Preço: R$ " + component.getPrice().toFixed(2));
      console.log("-----------------------------");
    }
  }
}
