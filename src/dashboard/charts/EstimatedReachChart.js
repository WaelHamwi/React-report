import React from "react";
import PieChart from "../../components/PieChart";
import { estimatedReach as estimatedReachSource } from "../../data/data";

const EstimatedReachChart = ({ chartWidth }) => {
  const { data: estimatedReach } = estimatedReachSource;

  if (!estimatedReach?.length) {
    return <div>No estimated reach data available to show</div>;
  }

  return (
    <div>
      <h2>Estimated Reach</h2>
      <PieChart data={estimatedReach} labelKey="source" dataKey="estimatedReach" chartWidth={chartWidth}/>
    </div>
  );
};

export default EstimatedReachChart;
