import React from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import { ChevronLeft, ReceiptIcon } from 'lucide-react';

const FeeDetailPage = () => {
  return (
    <div className="flex-1 md:p-8 overflow-hidden">
      <DashboardHeader />
      <div className="w-full flex flex-col gap-4">
      
        <div className="bg-white rounded-xl flex w-full py-2 h-[40px] pl-5 items-center gap-2">
          <ChevronLeft />
          <p className="font-medium">Fee Details</p>
        </div>

   
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
          <div className="flex md:flex-row flex-col justify-between md:items-center">
            <h3 className="text-lg font-semibold">Tuition Fees</h3>
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <ReceiptIcon/>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Amount to Pay</p>
                <p className="text-lg font-semibold text-green-600">N5,000,000</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3  grid-cols-1 gap-4">
            <div>
              <p className="text-sm text-gray-500">Student Name</p>
              <p className="font-medium">Qodebyte Iyekkpolor</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Student ID</p>
              <p className="font-medium">8960AQB95</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Payer ID</p>
              <p className="font-medium">13212332AZ</p>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-xl p-4  overflow-x-auto block">
          <table className="min-w-full border border-gray-300 rounded-xl">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-3 border-b border-gray-300 text-left">S/N</th>
                <th className="px-3 py-3 border-b border-gray-300 text-left">Fees</th>
                <th className="px-3 py-3 border-b border-gray-300 text-left">Amount (NGN)</th>
                <th className="px-3 py-3 border-b border-gray-300 text-left">Status</th>
                <th className="px-3 py-3 border-b border-gray-300 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-3">1</td>
                <td className="px-3 py-3">1st Term School Fees</td>
                <td className="px-3 py-3">N2,000,000</td>
                <td className="px-3 py-3">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">Paid</span>
                </td>
                <td className="px-3 py-3">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Pay Again
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3">2</td>
                <td className="px-3 py-3">PTA Meeting Fees</td>
                <td className="px-3 py-3">N1,000,000</td>
                <td className="px-3 py-3">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">Unpaid</span>
                </td>
                <td className="px-3 py-3">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Pay Now
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3">3</td>
                <td className="px-3 py-3">Excursion Fees</td>
                <td className="px-3 py-3">N2,000,000</td>
                <td className="px-3 py-3">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">Unpaid</span>
                </td>
                <td className="px-3 py-3">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Pay Now
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total Amount Due */}
        <div className="bg-white rounded-xl p-4 flex justify-between items-center">
          <p className="text-lg font-semibold">Total Amount Due</p>
          <p className="text-lg font-semibold text-red-600">N4,800,000</p>
        </div>
      </div>
    </div>
  );
};

export default FeeDetailPage;