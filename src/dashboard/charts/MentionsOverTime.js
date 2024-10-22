import React from "react";
import LineChart from "../../components/LineChart";
import { postOverTime } from "../../data/data"; 

const MentionsOverTime = ({ chartWidth }) => {
  return (
    <div>
      <h2>Mentions Over Time</h2>
      <LineChart data={postOverTime.data} chartWidth={chartWidth} />
    </div>
  );
};

export default MentionsOverTime;
