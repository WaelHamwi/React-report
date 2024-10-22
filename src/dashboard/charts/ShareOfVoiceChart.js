import React from "react";
import PieChart from "../../components/PieChart";
import { shareOfVoice as shareOfVoiceSource } from "../../data/data";

const ShareOfVoiceChart = ({ chartWidth }) => {
  const { data: shareOfVoice } = shareOfVoiceSource;

  if (!shareOfVoice?.length) {
    return <div>No share of voice data available to show</div>;
  }

  return (
    <div>
      <h2>Share of Voice</h2>
      <PieChart
        data={shareOfVoice}
        labelKey="source"
        dataKey="numMentions"
        chartWidth={chartWidth}
      />
    </div>
  );
};

export default ShareOfVoiceChart;
