import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { prepareChartData } from "../helpers/ChartData";
import { generateChartOptions } from "../helpers/ChartOptions";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const generateLabels = (monthDays) => {
  const labels = [];
  Object.keys(monthDays).forEach((month) => {
    monthDays[month].forEach((day) => labels.push(`${month} ${day}`));
  });
  return labels;
};

const HorizontalBarChart = ({ data, chartWidth }) => {
  const chartData = useMemo(() => prepareChartData(data), [data]);

  const options = useMemo(
    () => generateChartOptions("horizontalBar", data),
    [data]
  );

  const months = useMemo(() => {
    return Array.from(
      new Set(
        data.map(({ date }) =>
          new Date(date).toLocaleString("default", { month: "long" })
        )
      )
    );
  }, [data]);

  return (
    <div
      style={{ width: "700px", height: "400px" }}
      className={`chart ${
        chartWidth < 450
          ? "barMob"
          : chartWidth < 769
          ? "barTablet"
          : "barDesktop"
      }`}
    >
      <Bar data={chartData} options={options} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "-20px",
        }}
      >
        {months.map((month) => (
          <span key={month} style={{ margin: "0 10px" }}>
            {month}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HorizontalBarChart;
