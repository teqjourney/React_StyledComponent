import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartProps = {
  labels: Array<string>;
  data: Array<number>;
  thresholds: number;
};

export const WeekGrowthChart: React.FC<ChartProps> = ({
  labels,
  data,
  thresholds,
}) => {
  const getColor = (value: number): string => {
    if (value < thresholds) {
      return "green";
    } else if (value > thresholds) {
      return "red";
    } else return "blue";
  };

  const backgroundColors = data.map((value) => getColor(value));
  const chartData: ChartData<"bar", number[], string> = {
    labels: labels,
    datasets: [
      {
        label: "3-WEEK GROWTH",
        data: data,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for x-axis
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines for y-axis
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // this will hide the legend labels if not needed
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Bar options={options} data={chartData} />
    </div>
  );
};
