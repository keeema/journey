import { observable } from "bobx";
import { IWheelDefinition } from "./wheelDefinition";

export class Wheel {
  @observable
  readonly values: Map<string, number> = new Map();
  @observable
  readonly definition: IWheelDefinition;

  @observable
  employeeName: string = "Luke SkyWalker";

  constructor(definition: IWheelDefinition) {
    this.definition = JSON.parse(JSON.stringify(definition));
    this.definition.tracks.forEach((track) => this.values.set(track.id, 5));
  }
}
