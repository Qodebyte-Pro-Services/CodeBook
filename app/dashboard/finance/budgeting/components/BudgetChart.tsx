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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const BudgetChart = () => {

    const data = {
        labels: ['Jun', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [
          {
            label: 'Budget',
            data: [80000, 38000, 38000, 38000, 38000, 38000, 38000, 38000],
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
    }

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
         <h2 className="text-lg font-semibold mb-4">Total Budgets</h2>
         <div className="h-64">
           <Bar data={data} options={options} />
         </div>
       </div>
  )
}

export default BudgetChart
