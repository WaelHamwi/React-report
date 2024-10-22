import React from "react";
import PieChart from "../../components/PieChart";
import { engagementData as engagementDataSource } from "../../data/data";

const EngagementChart = ({ chartWidth }) => {
  const { data: engagementData } = engagementDataSource;

  if (!engagementData?.length) {
    return <div>No engagement data available to show</div>;
  }

  return (
    <div>
      <h2>Engagement Data</h2>
      <PieChart data={engagementData} labelKey="source" dataKey="engagementCount" chartWidth={chartWidth} />
    </div>
  );
};

export default EngagementChart;
