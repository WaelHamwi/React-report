import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { VerticalBarColors } from "../helpers/ColorSource";
import { generateChartOptions } from "../helpers/ChartOptions";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const HorizontalBarChart = ({ data, chartWidth }) => {
  const groupedData = data.reduce((acc, { keyword, numMentions, source }) => {
    if (!acc[keyword]) acc[keyword] = { label: keyword, data: {} };
    acc[keyword].data[source] = numMentions;
    return acc;
  }, {});

  const labels = [...new Set(data.map((item) => item.source))];

  const datasets = Object.values(groupedData).map((item, index) => ({
    label: item.label,
    data: labels.map((label) => item.data[label] || 0),
    backgroundColor: VerticalBarColors[index % VerticalBarColors.length],
    borderRadius: 25,
    barThickness: chartWidth < 450 ? 8 : 15,
  }));

  const chartData = { labels, datasets };

  const options = generateChartOptions("verticalBarChart", data, chartWidth);

  return (
    <>
      <div
        style={{ width: "100%", height: "400px" }}
        className={`chart ${
          chartWidth < 450
            ? "verticalBarMob"
            : chartWidth < 769
            ? "verticalBarTablet"
            : "verticalBarDesktop"
        }`}
      >
        <Bar data={chartData} options={options} />
      </div>
    </>
  );
};

export default HorizontalBarChart;
