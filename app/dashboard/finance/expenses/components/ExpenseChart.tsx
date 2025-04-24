'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExpenseChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Expenses',
        data: [80000, 38000, 45000, 60000, 75000, 50000, 65000, 70000],
        backgroundColor: [
          '#3B82F6', 
          '#3B82F6', 
          '#3B82F6',
          '#3B82F6', 
          '#E5E7EB', 
          '#E5E7EB',
          '#E5E7EB', 
          '#E5E7EB',
        ],
        borderColor: [
          '#2563EB',
          '#2563EB',
          '#2563EB',
          '#2563EB',
          '#D1D5DB',
          '#D1D5DB',
          '#D1D5DB',
          '#D1D5DB',
        ],
        borderWidth: 1,
      },
    ],
  };

  const percentages = ['60%', '40%', '20%', '10%', '0%', '0%', '0%', '0%'];

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'bar'>) {
            const value = context.raw as number;
            return `N${value.toLocaleString()} (${percentages[context.dataIndex]})`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: string | number) {
            const numericValue = typeof value === 'string' ? parseFloat(value) : value;
            return `N${(numericValue / 1000).toFixed(0)}K`;
          },
        },
        grid: {
          color: '#E5E7EB',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Total Expenses</h2>
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-6">
        <h4 className="text-lg font-medium text-gray-700 mb-2">Monthly Breakdown</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.labels.map((label, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <span className="text-sm font-medium text-gray-600">{label}</span>
              <span className="text-lg font-semibold text-gray-800">
                N{(data.datasets[0].data[index] / 1000).toFixed(0)}K
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;