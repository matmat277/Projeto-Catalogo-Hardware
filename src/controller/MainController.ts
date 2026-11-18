import { IComponentService } from "../Services/IComponentService";
import { Component } from "../model/Component";
import Computer from "../model/Computer";


export default class MainController {
    // Component service modificado, recebe contrato. Interface
  private componentService: IComponentService;

  constructor(componentService: IComponentService) {
    this.componentService = componentService;
  }

  public getAllComponents(): Component[] {
    return this.componentService.getAllComponents();
  }

  public getComponentById(id: number): Component | undefined {
    return this.componentService.getComponentById(id);
  }

  public getNewComputer(): Computer {
    return new Computer();
  }
}
