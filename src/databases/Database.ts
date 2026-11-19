import { Component } from "../model/Component";
import { ComponentStatus } from "../model/ComponentStatus";
import CPU from "../model/CPU";
import GPU from "../model/GPU";
import RAM from "../model/RAM";
import PSU from "../model/PSU";
import Motherboard from "../model/Motherboard";

export default class Database {
  private components: Component[] = [];

  constructor() {
    this.components.push(
      new CPU(1, "AMD", "Ryzen 5 5600", 850, 6, "AM4"),
      new GPU(2, "NVIDIA", "RTX 4060", 2200, 8),
      new RAM(3, "Kingston", "Fury Beast", 250, 16),
      new PSU(4, "Corsair", "CV550", 350, 550),
      new RAM(5, "Corsair", "Vengeance", 400, 16),
      new CPU(6, "AMD", "Ryzen 7 7800X3D", 2000, 8, "AM5"),
      new Motherboard(7, "AsRock", "B450M-HDV R4.0", 379.99,"AM4", "mATX"),
      new CPU(8, "AMD", "Ryzen 7 9800X3D", 2199.99, 8, "AM5"),
      new Motherboard(9, "MSI", "B840M Gaming WiFi6E", 799.99,"AM5", "mATX"),
      new GPU(10, "Radeon", "RX 7600XT", 1899.99, 8),
      new GPU(11, "NVIDIA", "RTX 3070", 2399.99, 8),

    );
    this.components[1].setStatus(ComponentStatus.AVAILABLE);
    this.components[4].setStatus(ComponentStatus.OUT_OF_STOCK)
    this.components[3].setStatus(ComponentStatus.DISCONTINUED);
    this.components[10].setStatus(ComponentStatus.DISCONTINUED);

  }

  public getComponents(): Component[] {
    return [...this.components];
  }
}

// Ideia Geral: montagem de computadores, vendas e etc.
