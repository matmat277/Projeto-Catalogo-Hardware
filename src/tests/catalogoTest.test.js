import Computer from "../model/Computer"
import {CPU } from "../model/CPU"

describe("Computer", () => {
  test("deve adicionar um componente disponível", () => {
    const computer = new Computer();

    const cpu = new CPU(
      1,
      "AMD",
      "Ryzen 5 5600",
      850,
      6,
      "AM4"
    );

    computer.adicionarComponente(cpu);

    expect(computer.getComponents()).toContain(cpu);
  });
});