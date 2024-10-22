export const generateChartOptions = (type, data = null, chartWidth) => {
  const commonPlugins = {
    tooltip: {
      callbacks:
        type === "horizontalBar"
          ? {
              label: (tooltipItem) => {
                const label = tooltipItem.dataset.label || '';
                const value = tooltipItem.raw != null 
                  ? tooltipItem.raw 
                  : '0';
                return `${label}: ${value} mentions`;
              },
            }
          : {
              label: (tooltipItem) => {
                const label = tooltipItem.dataset.label || '';
                const value = tooltipItem.raw != null 
                  ? (tooltipItem.raw > 1000 
                      ? `${(tooltipItem.raw / 1000).toFixed(1)}k` 
                      : tooltipItem.raw) 
                  : '0';
                return `${label}: ${value} mentions`;
              },
            },
    },
    datalabels: type === "pie"
      ? {
          formatter: (value, context) => {
            const total = context.chart.data.datasets[0].data.reduce(
              (a, b) => a + b,
              0
            );
            const percentage = total ? ((value / total) * 100).toFixed(2) + "%" : "0%";
            return percentage;
          },
          color: "#fff",
        }
      : {
          display: false,
        },
  };

  const isMobile = chartWidth < 450;

  if (type === "horizontalBar") {
    return {
      indexAxis: "x",
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "Days of the Month",
            font: { size: isMobile ? 10 : 12 },
          },
          beginAtZero: true,
          stacked: true,
          ticks: {
            autoSkip: true,
          },
        },
        y: {
          title: {
            display: true,
          },
          stacked: true,
          ticks: {
            callback: (value) => {
              return value > 1000 ? `${(value / 1000).toFixed(1)}k` : value;
            },
          },
        },
      },
      plugins: {
        ...commonPlugins,
        legend: {
          position: "top",
        },
      },
      barThickness: isMobile ? 8 : 10,
      maxBarThickness: isMobile ? 10 : 13,
      categoryPercentage: 1.0,
      barPercentage: 1.0,
    };
  }

  if (type === "pie") {
    return {
      responsive: true,
      plugins: commonPlugins,
    };
  }

  if (type === "verticalBarChart") {
    return {
      responsive: true,
      indexAxis: "y",
      plugins: {
        ...commonPlugins,
        datalabels: {
          anchor: "center",
          align: isMobile ? "center" : "top",
          color: "white",
          font: {
            weight: 1000,
            size: isMobile ? 7 : 12,
          },
          formatter: (value, context) => {
            const total = context.chart.data.datasets.reduce(
              (acc, dataset) => acc + dataset.data[context.dataIndex],
              0
            );
            const ratio = ((value / total) * 100).toFixed(1);
            return ratio >= 1 ? `${ratio}%` : "";
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          min: isMobile ? -1 : -15,
          title: {
            display: isMobile ? false : true,
            text: "Number of Mentions",
            font: 12,
          },
          reverse: true,
          ticks: {
            padding: isMobile ? 0 : 15,
            callback: (value) => (value < 0 ? "" : value),
            font: {
              size: isMobile ? 9 : 10,
            },
          },
          grid: {
            drawBorder: false,
            drawOnChartArea: true,
            color: isMobile ? "rgba(0, 0, 0, 0.05)" : "rgba(0, 0, 0, 0.1)",
            lineWidth: isMobile ? 0.5 : 1,
          },
        },
        y: {
          display: true,
          stacked: true,
          title: {
            display: isMobile ? false : true,
            text: "Source",
            font: { size: isMobile ? 8 : 12 },
          },
          ticks: {
            padding: isMobile ? 5 : 10,
            font: {
              size: isMobile ? 12 : 10,
            },
            callback: (value) => {
              return value > 1000 ? `${(value / 1000).toFixed(1)}k` : value;
            },
          },
          grid: {
            drawOnChartArea: true,
            color: isMobile ? "rgba(0, 0, 0, 0.05)" : "rgba(0, 0, 0, 0.1)",
            lineWidth: isMobile ? 0.5 : 1,
          },
        },
      },
    };
  }

  if (type === "line") {
    return {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "Days of the Month",
            font: { size: isMobile ? 10 : 12 },
          },
          beginAtZero: true,
          ticks: {
            autoSkip: true,
          },
        },
        y: {
          title: {
            display: true,
            text: "Mentions",
            font: { size: isMobile ? 10 : 12 },
          },
          beginAtZero: true,
          ticks: {
            callback: (value) => {
              return value > 1000 ? `${(value / 1000).toFixed(1)}k` : value;
            },
          },
        },
      },
      plugins: {
        ...commonPlugins,
        legend: {
          position: "top",
        },
      },
      elements: {
        line: {
          tension: 0.4,
          borderWidth: 2,
        },
        point: {
          radius: 3,
          hoverRadius: 8,
        },
      },
    };
  }

  return {};
};
