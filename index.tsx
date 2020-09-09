import * as b from "bobril";
import "chart.js";
import { BalanceWheel } from "./balanceWheel/balanceWheel";
import { Wheel } from "./balanceWheel/data/wheel";
import { DeveloperWheelDefinition } from "./balanceWheel/sample/developer/trackDefinitions";

const wheel = new Wheel(DeveloperWheelDefinition);

b.init(() => <BalanceWheel wheel={wheel} />);

// setInterval(() => {
//   wheel.definition.tracks.forEach((track) =>
//     wheel.values.set(track.id, Math.floor(Math.random() * Math.floor(10)))
//   );
// }, 3000);
