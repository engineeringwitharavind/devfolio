import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import Title from "../components/Title";

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
          label: "Expertise level",
          backgroundColor: "rgba(73,174,186,0.2)",
          borderColor: "rgba(73,174,186,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          data: [85, 70, 80, 70, 65, 75, 60, 55, 85, 60],
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
        stepSize: 10,
      },
    },
    maintainAspectRatio: false,
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Title title="skills-chart" />
      <div className="skills-underline"></div>
      <div className="canvas-container">
        <Radar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartData;
