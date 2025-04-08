import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const FeesPaymentChart = () => {
  const percentage = 100; 

  return (
    <div className="bg-white rounded-lg p-2 shadow-md w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">School Fees Payments</h3>
      </div>
      <div className="relative w-32 h-32 mx-auto mb-1">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: '#6366F1',
            pathColor: '#6366F1',
            trailColor: '#E0E7FF',
            textSize: '16px',
          })}
        />
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-600">Tuition Fee</span>
        <span className="text-sm text-gray-800">₦90.000.000</span>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-600">Tuition Paid</span>
        <span className="text-sm text-gray-800">₦90.000.000</span>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-600">Outstanding payment</span>
        <span className="text-sm text-gray-800">₦0</span>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-5xl text-blue-500">•</p>
            <span className="text-sm text-gray-600">Tuition Paid</span>
          </div>
          <span className="text-sm text-gray-800 flex items-center">100%</span>
        </div>
        <div className="flex pb-7 justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-5xl text-red-500">•</p>
            <span className="text-sm text-gray-600">Outstanding Payment</span>
          </div>
          <span className="text-sm text-gray-800 flex items-center">0%</span>
        </div>
      </div>
    </div>
  );
};

export default FeesPaymentChart;