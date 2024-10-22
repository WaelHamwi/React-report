// src/Dashboard.js
import React from "react";
import VerticalBarChart from "../../components/VerticalBarChart";
import { rankingData } from "../../data/data";
const RankingChart = ({ chartWidth }) => {
  return (
    <div>
      <h2>Reporting RankingChart</h2>
      <VerticalBarChart data={rankingData.data} chartWidth={chartWidth} />
    </div>
  );
};

export default RankingChart;
