'use client';
import React from 'react';
import {  CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';


interface Category {
  name: string;
  value: number;
  color: string;
}

interface BudgetSummaryProps {
  totalAmount: number;
  month: string;
  categories: Category[];
}

const BudgetPieChart: React.FC<BudgetSummaryProps> = ({
  totalAmount,
  month,
  categories,
}) => {
    const total = categories.reduce((sum, category) => sum + category.value, 0);

  return (
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-md font-medium">Total Amount Budgetted</h4>
            <div className="relative">
              <button className="flex items-center text-sm text-gray-600">
                {month} <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
            </div>
          </div>
    
          <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
            <CircularProgressbarWithChildren
              value={100} 
             
              styles={buildStyles({
                textColor: '#000',
                textSize: '16px',
                pathColor: 'transparent', 
                trailColor: '#E0E7FF', 
              })}
            > 
            <p>{`N${(totalAmount / 1000).toFixed(0)}K`}</p>
            </CircularProgressbarWithChildren>
           
            <svg className="absolute top-0 left-0 w-full h-full">
              <circle cx="96" cy="96" r="70" fill="transparent" />
              {categories.map((category, index) => {
                const startAngle = categories
                  .slice(0, index)
                  .reduce((sum, cat) => sum + cat.value, 0) / total * 360;
                const arcLength = (category.value / total) * 360;
                const endAngle = startAngle + arcLength;
    
                const x1 = 96 + 70 * Math.cos((startAngle * Math.PI) / 180 - Math.PI / 2);
                const y1 = 96 + 70 * Math.sin((startAngle * Math.PI) / 180 - Math.PI / 2);
                const x2 = 96 + 70 * Math.cos((endAngle * Math.PI) / 180 - Math.PI / 2);
                const y2 = 96 + 70 * Math.sin((endAngle * Math.PI) / 180 - Math.PI / 2);
    
                const largeArcFlag = arcLength > 180 ? 1 : 0;
                const pathData = `M ${x1} ${y1} A 70 70 0 ${largeArcFlag} 1 ${x2} ${y2}`;
    
                return (
                  <path
                    key={category.name}
                    d={pathData}
                    fill="none"
                    stroke={category.color}
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>
          </div>
    
          <div className="mt-6">
            <h4 className="text-md font-medium mb-2">Summary</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                  <span>{category.name}</span>
                  <span className="font-medium text-gray-800">{(category.value / total * 100).toFixed(2)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default BudgetPieChart
