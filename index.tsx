import * as b from "bobril";
import "chart.js";
import { BalanceWheel } from "./balanceWheel/balanceWheel";
import { currentWheel } from "./balanceWheel/sample/roleWheels";

b.init(() => (
  <>
    <BalanceWheel wheel={currentWheel()} />
    <p>
      <small>With pleasure, Tomáš Růt</small>
    </p>
  </>
));
