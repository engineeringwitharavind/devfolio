import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const ChartData = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          level: "level of xyz",
          data: [32, 55, 33, 47, 64],
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <div>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default ChartData;
