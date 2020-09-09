import * as b from "bobril";
import { ChartConfiguration, Chart } from "chart.js";

export interface IBalanceWheelGraphData {
  chart: Omit<ChartConfiguration, "type">;
}

export function BalanceWheelGraph(data: IBalanceWheelGraphData): b.IBobrilNode {
  const elementRef = b.useRef(null);
  const [chart, setChart] = b.useState<Chart | null>(null);
  b.useEffect(() => {
    const element = b.getDomNode(elementRef.current!) as HTMLCanvasElement;
    setChart(
      new Chart(element, {
        type: "polarArea",
        ...data.chart,
      })
    );
  }, []);

  b.useEffect(() => {
    if (chart) {
      chart.data = data.chart.data!;
      chart.update();
    }
  });

  return <canvas ref={elementRef} width="600" height="600" />;
}
