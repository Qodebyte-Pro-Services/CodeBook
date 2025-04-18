'use client'
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

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExpenseChart = () => {
  // Data from chart2.png
  const data = {
    labels: ['Jun', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Expenses',
        data: [80000, 38000, 38000, 38000, 38000, 38000, 38000, 38000],
        backgroundColor: [
          '#3B82F6', // Blue for 60%
          '#3B82F6', // Blue for 40%
          '#3B82F6', // Blue for 20%
          '#3B82F6', // Blue for 10%
          '#E5E7EB', // Gray for 0%
          '#E5E7EB', // Gray for 0%
          '#E5E7EB', // Gray for 0%
          '#E5E7EB', // Gray for 0%
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

  // Percentage values from chart2.png
  const percentages = ['60%', '40%', '20%', '10%', '0%', '0%', '0%', '0%'];

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: TooltipItem<'bar'>) {
            // Type assertion for context.raw
            const value = context.raw as number;
            return `N${value.toLocaleString()} (${percentages[context.dataIndex]})`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: string | number) {
            const numericValue = typeof value === 'string' ? parseFloat(value) : value;
            return `N${(numericValue/1000).toFixed(0)}K`;
          }
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Total Expenses</h2>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpenseChart;