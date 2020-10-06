import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import Title from "./Title";

const ChartData = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Python",
        "Git",
        "SQL",
        "Gatsby.js",
        "MongoDB",
        "React.js",
        "Node.js",
      ],
      datasets: [
        {
          label: "Interests",
          backgroundColor: "rgba(73,174,186,0.2)",
          borderColor: "rgba(73,174,186,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          data: [85, 70, 90, 70, 75, 65, 75, 70, 85, 65],
        },
      ],
    });
  };

  const options = {
    legend: {
      display: false,
    },
    scale: {
      ticks: {
        beginAtZero: true,
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Title title="Interests" />
      <div className="canvas-container">
        <Radar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartData;
