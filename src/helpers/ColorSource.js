export const getColorForSource = (source, hover = false) => {
  const colors = {
    Facebook: "rgba(59, 89, 152, 0.9)",
    Twitter: "rgba(29, 161, 242, 0.9)",
    Instagram: "rgba(193, 53, 132, 0.9)",
    Youtube: "rgba(255, 0, 0, 0.9)",
    Tiktok: "rgba(0, 0, 0, 0.9)",
  };
  const alpha = hover ? 0.7 : 0.9;
  return (
    colors[source]?.replace(/0\.\d+\)$/, `${alpha})`) || "rgba(0, 0, 0, 0.9)"
  ); 
};
export const VerticalBarColors = [
  "rgba(75, 192, 192, 0.6)",
  "rgba(255, 99, 132, 0.6)",
  "rgba(255, 206, 86, 0.6)",
  "rgba(54, 162, 235, 0.6)",
  "rgba(153, 102, 255, 0.6)",
  "rgba(255, 159, 64, 0.6)",
];
export const chartLineColors = [
  'rgba(255, 99, 132, 1)',   
  'rgba(54, 162, 235, 1)',   
  'rgba(255, 206, 86, 1)',    
  'rgba(75, 192, 192, 1)',    
  'rgba(153, 102, 255, 1)',  
  'rgba(255, 159, 64, 1)',    
];

