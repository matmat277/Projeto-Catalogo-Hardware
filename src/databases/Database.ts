import { Component } from "../model/Component";
import { ComponentStatus } from "../model/ComponentStatus";
import CPU from "../model/CPU";
import GPU from "../model/GPU";
import RAM from "../model/RAM";
import PSU from "../model/PSU";

export default class Database {
  private components: Component[] = [];

  constructor() {
    this.components.push(
      new CPU(1, "AMD", "Ryzen 5 5600", 850, 6),
      new GPU(2, "NVIDIA", "RTX 4060", 2200, 8),
      new RAM(3, "Kingston", "Fury Beast", 250, 16),
      new PSU(4, "Corsair", "CV550", 350, 550),
      new RAM(5, "Corsair", "Vengeance", 400, 16),
      new CPU(6, "AMD", "Ryzen 7 7800X3D", 2000, 8),
    );
    this.components[1].setStatus(ComponentStatus.AVAILABLE);
    this.components[3].setStatus(ComponentStatus.DISCONTINUED);
  }

  public getComponents(): Component[] {
    return [...this.components];
  }
}

// Ideia Geral: montagem de computadores, vendas e etc.
