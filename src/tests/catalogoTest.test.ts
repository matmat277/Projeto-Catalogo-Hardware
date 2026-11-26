import Computer from "../model/Computer"
import CPU  from "../model/CPU"


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
        "Intel",
        "Core i5",
        1000,
        6,
        "LGA1700"
    );

    computer.adicionarComponente(cpu1);

    expect(() => {
        computer.adicionarComponente(cpu2);
    }).toThrow();
});

});