import React from "react";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import { postOverTime } from "../../data/data";

const PostOvertime = ({chartWidth}) => {
  return (
    <div>
       <h2>Post Over Time</h2>
      <HorizontalBarChart data={postOverTime.data} chartWidth={chartWidth} />
    </div>
  );
};

export default PostOvertime;
