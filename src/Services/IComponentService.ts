import { Component } from "../model/Component";

// interface

export interface IComponentService {
  getAllComponents(): Component[];

  getComponentById(id: number): Component | undefined;
}
