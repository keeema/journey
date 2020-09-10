import * as b from "bobril";
import "chart.js";
import { BalanceWheel } from "./balanceWheel/balanceWheel";
import { Wheel } from "./balanceWheel/data/wheel";
import { DeveloperWheelDefinition } from "./balanceWheel/sample/developer/trackDefinitions";

const wheel = new Wheel(DeveloperWheelDefinition);

b.init(() => (
  <>
    <BalanceWheel wheel={wheel} />
    <p>
      <small>With pleasure, Tomáš Růt</small>
    </p>
  </>
));
