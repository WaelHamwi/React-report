import React, { useEffect, useState } from "react";
import { useWindowSize } from "../context/WindowSizeContext";
import ShareOfVoiceChart from "./charts/ShareOfVoiceChart";
import EstimatedReachChart from "./charts/EstimatedReachChart";
import EngagementChart from "./charts/EngagementChart";
import PostOverTime from "./charts/PostOvertime"
import RankingChart from "./charts/RankingChart";
import MentionsOverTime from "./charts/MentionsOverTime";


const Dashboard = () => {
  const { width } = useWindowSize();
  const [chartWidth, setChartWidth] = useState(width);
  const [containerClass, setContainerClass] = useState("");
  useEffect(() => {
    if (width <= 768) {
      setContainerClass("mobile");
      setChartWidth(300);
    } else if (width <= 1024) {
      setContainerClass("tablet");
      setChartWidth(400);
    } else {
      setContainerClass("");
      setChartWidth(width);
    }
  }, [width]);

  return (
    <>
      <div className={`chart-container ${containerClass}`}>
        <ShareOfVoiceChart chartWidth={chartWidth} />
        <EstimatedReachChart chartWidth={chartWidth} />
        <EngagementChart chartWidth={chartWidth} />
      </div>
      <div className={`chart-container ${containerClass}`}>
        <PostOverTime chartWidth={chartWidth} />
      </div>
      <div className={`chart-container RankChart ${containerClass}`}>
        <RankingChart chartWidth={chartWidth} />
      </div>
      <div className={`chart-container ${containerClass}`}>
        <MentionsOverTime chartWidth={chartWidth} />
      </div>
    </>
  );
};

export default Dashboard;
