import { observable } from "bobx";
import { Wheel } from "../data/wheel";
import {
  DeveloperWheelDefinition,
  QualityAssuranceWheelDefinition,
} from "./developer/trackDefinitions";

export enum Role {
  Developer,
  QA,
}

export const employeeRole = observable(Role.Developer);

export const wheels = new Map<Role, Wheel>([
  [Role.Developer, new Wheel(DeveloperWheelDefinition)],
  [Role.QA, new Wheel(QualityAssuranceWheelDefinition)],
]);

export function currentWheel(): Wheel {
  const role = wheels.get(employeeRole.get())!;
  return role;
}
