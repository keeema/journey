import * as b from "bobril";
import { Wheel } from "./data/wheel";
import { IBalanceWheelGraphData, BalanceWheelGraph } from "./graph";
import { employeeRole, Role } from "./sample/roleWheels";
import { FormItem } from "./sample/developer/formItem";
import { Radio } from "./sample/developer/radioButton";

export interface IBalanceWheelData {
  wheel: Wheel;
}

const wheelStyle = b.styleDef({ display: "flex" });

export class BalanceWheel extends b.Component<IBalanceWheelData> {
  static id: "balance-wheel";

  render(): b.IBobrilNode {
    return (
      <>
        <p>
          <input
            type="text"
            value={this.data.wheel.employeeName}
            onChange={(val) => (this.data.wheel.employeeName = val)}
          />
          <Radio
            name="role"
            label="Developer"
            value={Role.Developer}
            currentValue={employeeRole.get()}
            onChange={(val) => val && employeeRole.set(Role.Developer)}
          />
          <Radio
            name="role"
            label="QA"
            value={Role.QA}
            currentValue={employeeRole.get()}
            onChange={(val) => {
              val && employeeRole.set(Role.QA);
            }}
          />
        </p>
        <div style={wheelStyle}>
          <BalanceWheelGraph {...this.createWheelData()} />
          <div>
            {this.data.wheel.definition.tracks.map((track) => (
              <FormItem
                key={track.id}
                value={this.data.wheel.values.get(track.id)!}
                label={track.label}
                description={track.description}
                onChange={(newVal) =>
                  this.data.wheel.values.set(
                    track.id,
                    Math.max(Math.min(10, newVal))
                  )
                }
                onLabelChange={
                  track.customizable ? (val) => (track.label = val) : undefined
                }
              />
            ))}
          </div>
        </div>
      </>
    );
  }

  private createWheelData(): IBalanceWheelGraphData {
    return {
      chart: {
        data: {
          labels: this.data.wheel.definition.tracks.map((track) => track.label),
          datasets: [
            {
              data: this.data.wheel.definition.tracks.map((track) =>
                this.data.wheel.values.get(track.id)
              ),
              backgroundColor: this.data.wheel.definition.tracks.map(
                (track) => track.color
              ),
            },
          ],
        },
        options: {
          responsive: false,
          animation: { animateRotate: false, animateScale: false },
          scale: {
            ticks: {
              max: 10,
              min: 0,
            },
          },
        },
      },
    };
  }
}
