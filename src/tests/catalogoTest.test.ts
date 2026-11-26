import Computer from "../model/Computer"
import CPU  from "../model/CPU"
import Motherboard from "../model/Motherboard";
import { ComponentStatus } from "../model/ComponentStatus";

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

  test("não deve adicionar duas CPUs", () => {
    const computer = new Computer();

    const cpu1 = new CPU(
        1,
        "AMD",
        "Ryzen 5 5600",
        850,
        6,
        "AM4"
    );

    const cpu2 = new CPU(
        2,
        "AMD",
        "Ryzen 7 5800X",
        1400,
        8,
        "AM4"
    );

    computer.adicionarComponente(cpu1);

    expect(() => {
        computer.adicionarComponente(cpu2);
    }).toThrow();
});


test("não deve permitir CPU e placa-mãe incompatíveis", () => {
    const computer = new Computer();

    const cpu = new CPU(
        1,
        "AMD",
        "Ryzen 5 5600",
        850,
        6,
        "AM4"
    );

    const motherboard = new Motherboard(
        2,
        "MSI",
        "PRO B650M-A",
        900,
        "AM5",
        "Micro-ATX"
    );

    computer.adicionarComponente(cpu);

    expect(() => {
        computer.adicionarComponente(motherboard);
    }).toThrow();
});


test("não deve permitir Placa mãe e CPU incompatível", () => {
  const computer = new Computer();

  const motherboard = new Motherboard(
    2,
    "MSI",
    "B550-M PRO VDH",
    680,
    "AM4",
    "Micro-ATX"
  );

  const cpu = new CPU(
    1,
    "AMD",
    "Ryzen 5 8500G",
    950,
    6,
    "AM5"
  );

  computer.adicionarComponente(motherboard);

  expect(() => {
      computer.adicionarComponente(cpu)
  }).toThrow();

})

test("não deve permitir adicionar componente indisponível", () => {
  const computer = new Computer();

  const cpu = new CPU(
        1,
        "AMD",
        "Ryzen 5 5600",
        850,
        6,
        "AM4"
    );

    cpu.setStatus(ComponentStatus.OUT_OF_STOCK);

    expect(() => {
        computer.adicionarComponente(cpu);
    }).toThrow();
})

});