"use client";

import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { ChartOptions, TooltipItem } from 'chart.js'; 
import { Ellipsis } from 'lucide-react';

Chart.register(...registerables);

const EarningsGraph = () => {
  const chartRef = useRef<Chart<'line'> | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        chartRef.current.destroy();
      }
    };
  }, []);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Income',
        data: [550, 780, 510,740,730,837,750,980,550,980],
        fill: false,
        borderColor: 'green',
        tension: 0,
      },
      {
        label: 'Expense',
        data: [260, 550, 251, 500, 270,290,257,480,251,251,150,480], 
        fill: false,
        borderColor: 'orange',
        tension: 0,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
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
            color: '#E0E0E0', 
          },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          title: () => {
            return `Sep 14, 2025`; 
          },
          label: (context: TooltipItem<'line'>) => {
            const datasetLabel = context.dataset.label || '';
            const value = context.parsed.y;
            return `${datasetLabel}: ${value}K`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-md p-4 w-full">
      <div className="flex md:flex-row flex-col  md:justify-between md:items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold mr-2">Earnings</h2>
          <select className="border border-gray-300 rounded-md p-1 text-sm">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-sm">Income</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
            <span className="text-sm">Expense</span>
          </div>
          <span className="text-gray-500">
          <Ellipsis/>
          </span>
        </div>
      </div>

      <div className="relative h-64">
        <Line
          ref={chartRef}
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default EarningsGraph;