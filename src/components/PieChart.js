import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { generateChartOptions } from "../helpers/ChartOptions";
import { createChartData } from "../helpers/ChartData";
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);


const PieChart = ({ data, labelKey, dataKey, chartWidth }) => {
  const chartData = createChartData(data, labelKey, dataKey);
  const options = generateChartOptions("pie", data);
  return (
    <div
      className={`chart ${
        chartWidth < 450
          ? "chartMob"
          : chartWidth < 769
          ? "chartTablet"
          : "chartDesktop"
      }`}
      style={{ width: "100%", height: "400px" }}
    >
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
