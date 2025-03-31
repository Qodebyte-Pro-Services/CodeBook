import React from 'react';

const FeesPaymentChart = () => {
  return (
    <div className="bg-white rounded-lg p-2 shadow-md w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">School Fees Payments</h3>
      </div>
      <div className="relative w-32 h-32 mx-auto mb-1">
        <svg className="w-full mt-3 h-full">
          <circle cx="50%" cy="50%" r="45%" stroke="#E0E7FF" strokeWidth="15" fill="transparent" />
          <circle cx="50%" cy="50%" r="45%" stroke="#6366F1" strokeWidth="15" fill="transparent" strokeDasharray="282.74" strokeDashoffset="113.1" />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="text-2xl font-bold">60%</text>
        </svg>
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
        <span className="text-sm text-gray-800">₦20.000.000</span>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
        <div className='flex gap-2 items-center'>
      <p className='text-5xl text-blue-500'>•</p>
       <span className="text-sm text-gray-600">Tuition Paid</span>
       </div>
          <span className="text-sm text-gray-800 flex items-center">50.89%</span>
        </div>
        <div className="flex justify-between">
        <div className='flex gap-2 items-center'>
      <p className='text-5xl text-red-500'>•</p>
       <span className="text-sm text-gray-600">Tuition Paid</span>
       </div>
          <span className="text-sm text-gray-800 flex items-center">22.79%</span>
        </div>
      </div>
    </div>
  );
};

export default FeesPaymentChart;