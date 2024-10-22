import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { generateChartOptions } from "../helpers/ChartOptions";
import { prepareChartData } from "../helpers/ChartData";
import { chartLineColors } from "../helpers/ColorSource";

Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const LineChart = ({ data, chartWidth }) => {
  const chartData = useMemo(() => {
    const preparedData = prepareChartData(data);
    const colorCount = chartLineColors.length;

    preparedData.datasets.forEach((dataset, index) => {
      const color = chartLineColors[index % colorCount];
      Object.assign(dataset, {
        borderColor: color,
        backgroundColor: color.replace("rgba", "rgba(0.2"),
        pointBackgroundColor: color,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: color,
      });
    });

    return preparedData;
  }, [data, chartLineColors]);

  const options = useMemo(
    () => generateChartOptions("line", chartData, chartWidth),
    [chartData, chartWidth]
  );

  return (
    <div
      style={{ width: "700px", height: "400px" }}
      className={`chart ${
        chartWidth < 450
          ? "lineMob"
          : chartWidth < 769
          ? "lineTablet"
          : "lineDesktop"
      }`}
    >
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
