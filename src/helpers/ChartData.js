import { getColorForSource } from "./ColorSource";
export const groupDataByDayAndSource = (data) => {
  const groupedData = {};
  const monthDays = { May: new Set(), June: new Set(), July: new Set() };

  data.forEach(({ date, source, numMentions }) => {
    const parsedDate = new Date(date);
    const day = parsedDate.getDate();
    const month = parsedDate.toLocaleString("default", { month: "long" });

    if (monthDays[month]) monthDays[month].add(day);
    groupedData[day] = groupedData[day] || {};
    groupedData[day][source] = (groupedData[day][source] || 0) + numMentions;
  });

  return { groupedData, monthDays };
};

export const generateLabels = (monthDays) => {
  const labels = [];
  Object.keys(monthDays).forEach((month) => {
    monthDays[month].forEach((day) => labels.push(`${month} ${day}`));
  });
  return labels;
};

export const prepareChartData = (data) => {
  const { groupedData, monthDays } = groupDataByDayAndSource(data);
  const labels = generateLabels(monthDays);
  const sources = [...new Set(data.map((item) => item.source))];

  const datasets = sources.map((source) => {
    const dataForSource = labels.map((label) => {
      const day = label.split(" ")[1];
      return groupedData[day]?.[source] || 0;
    });
    return {
      label: source,
      data: dataForSource,
      backgroundColor: getColorForSource(source),
      hoverBackgroundColor: getColorForSource(source, true),
    };
  });

  return { labels, datasets };
};

export const createChartData = (data, labelKey, dataKey) => ({
  labels: data.map((d) => d[labelKey]),
  datasets: [
    {
      data: data.map((d) => d[dataKey]),
      backgroundColor: data.map((d) => d.sourceColor),
      hoverBackgroundColor: data.map((d) => d.sourceColor),
    },
  ],
});