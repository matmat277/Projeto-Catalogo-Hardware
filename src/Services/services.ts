import Database from "../databases/Database";
import { Component } from "../model/Component";
import { IComponentService } from "./IComponentService";

export default class ComponentService implements IComponentService {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  public getAllComponents(): Component[] {
    return this.database.getComponents();
  }

  public getComponentById(id: number): Component | undefined {
    return this.database
      .getComponents()
      .find((component) => component.getId() === id);
  }
}
