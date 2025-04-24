"use client";

import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartOptions, TooltipItem } from "chart.js";
import { Ellipsis } from "lucide-react";

Chart.register(...registerables);

const EarningsGraph = () => {
  const chartRef = useRef<Chart<"line"> | null>(null);

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const chartInstance = chartRef.current;
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [550, 780, 510, 740, 730, 837, 750, 980, 550, 980],
        fill: false,
        borderColor: "#22C55E", // Tailwind green-500
        tension: 0.4,
        pointBackgroundColor: "#22C55E",
        pointBorderColor: "#22C55E",
        pointRadius: 4,
      },
      {
        label: "Expense",
        data: [260, 550, 251, 500, 270, 290, 257, 480, 251, 251, 150, 480],
        fill: false,
        borderColor: "#F97316", // Tailwind orange-500
        tension: 0.4,
        pointBackgroundColor: "#F97316",
        pointBorderColor: "#F97316",
        pointRadius: 4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: string | number) {
            return `${value}K`;
          },
          stepSize: 250,
        },
        min: 0,
        max: 1000,
        grid: {
          color: "#E5E7EB", 
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            return `Month: ${context[0].label}`;
          },
          label: (context: TooltipItem<"line">) => {
            const datasetLabel = context.dataset.label || "";
            const value = context.parsed.y;
            return `${datasetLabel}: ${value}K`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-gray-800">Earnings Overview</h2>
          <select className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-sm text-gray-600">Income</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
            <span className="text-sm text-gray-600">Expense</span>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <Ellipsis />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-72">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default EarningsGraph;