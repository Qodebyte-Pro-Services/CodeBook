"use client"
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import Link from 'next/link';
import { ChevronsLeft } from 'lucide-react';
import Image from 'next/image';

const StudentFee = () => {
  const tuitionFee = 90000000;
  const tuitionPaid = 60000000;
  const outstandingPayment = 20000000;
  const subFees = 40000000;

  const tuitionPercentage = (tuitionPaid / tuitionFee) * 100;
  const subFeesPercentage = (subFees / (tuitionFee + subFees)) * 100;
  const unpaidPercentage = 100 - tuitionPercentage;

  const feesCollectionData = [
    { feeType: 'Tuition', paymentId: 'AJD-9201-TU', amount: '₦200,000', status: 'Paid' },
    { feeType: 'Library', paymentId: 'AJD-9201-TU', amount: '₦200,000', status: 'Paid' },
    { feeType: 'PTA Levy', paymentId: 'AJD-9201-TU', amount: '₦200,000', status: 'Paid' },
    { feeType: 'Bus Levy', paymentId: 'AJD-9201-TU', amount: '₦200,000', status: 'Paid' },
    
  ];

  return (
    <div className='flex flex-col gap-2 '>
      <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
        <Link href='/dashboard/students/view-session-classes/student-list' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
          <ChevronsLeft />
          <p>Student List</p>
        </Link>
      </div>

      <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
            {[
              { name: "General", href: `/dashboard/students/view-session-classes/student-list/student-detail` },
              { name: "Grades / Performance", href: `/dashboard/students/view-session-classes/student-list/student-detail/grade-performance` },
              { name: "Fee Management", href: `/dashboard/students/view-session-classes/student-list/student-detail/fee-management` },
              { name: "Student Accessment / Review", href: `/dashboard/students/view-session-classes/student-list/student-detail/acessment-reviews` },
              { name: "Documents", href: `/dashboard/students/view-session-classes/student-list/student-detail/documents` },
            ].map((tab, index) => (
              <Link
                key={index}
                href={tab.href}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  index === 2
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-1 px-2 py-2">
          <p className="font-medium text-sm">Fee Management</p>
          <span className="text-gray-700 text-xs">View and manage student fee payments</span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3">
        
     <div className='flex md:flex-row flex-col gap-2'>
     <div className="bg-white md:w-2/3 w-full  rounded-lg shadow p-4">
          <h3 className="text-md font-semibold text-gray-700 mb-4">School Fees Summary</h3>
         <div className='flex gap-2 md:flex-row flex-col'>
         <div className="flex items-center justify-center relative w-32 h-32 mx-auto">
            <PieChart
              data={[
                { value: tuitionPercentage, color: '#29ABE2', key: 'Tuition Paid' },
                { value: unpaidPercentage, color: '#F0F0F0', key: 'Unpaid' },
              ]}
              totalValue={100}
              lineWidth={15}
              startAngle={-90}
              rounded
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-lg font-bold text-gray-700">{tuitionPercentage.toFixed(0)}%</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#29ABE2] mr-2"></div>
              <span>Tuition Fee:</span>
            </div>
            <span className="font-medium">₦{tuitionFee.toLocaleString()}</span>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#29ABE2] mr-2"></div>
              <span>Tuition Paid:</span>
            </div>
            <span className="font-medium">₦{tuitionPaid.toLocaleString()}</span>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#FFB300] mr-2"></div>
              <span>Outstanding payment:</span>
            </div>
            <span className="font-medium">₦{outstandingPayment.toLocaleString()}</span>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#673AB7] mr-2"></div>
              <span>Sub Fees:</span>
            </div>
            <span className="font-medium">₦{subFees.toLocaleString()} ({subFeesPercentage.toFixed(0)}%)</span>
          </div>
         </div>
        </div>

       
        <div className="bg-white  md:w-1/3 w-full rounded-lg shadow p-4">
        <div className='flex'>
            <Image src="/Frame-3618869711.png" alt='' width={50} height={50}/>
          </div>
          <div className="flex d flex-col items-center justify-between mb-4">
            <h3 className="text-md font-semibold text-gray-700">Unpaid</h3>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-[#F44336] mr-2"></div>
              <span>School Fees Payments</span>
            </div>
          </div>
          {unpaidPercentage > 0 ? (
            <p className="text-lg font-semibold text-[#F44336] text-center">{unpaidPercentage.toFixed(0)}% Unpaid</p>
          ) : (
            <p className="text-lg font-semibold text-green-500 text-center">All Fees Paid</p>
          )}
        </div>
     </div>

        
        <div className="bg-white rounded-lg shadow p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-md font-semibold text-gray-700">Fees Collection</h3>
            <button className="text-blue-500 text-sm font-semibold">Generate Report</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {feesCollectionData.map((fee, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.feeType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.paymentId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${fee.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        <div className={`w-2 h-2 rounded-full mr-1 ${fee.status === 'Paid' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        {fee.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href="#" className="text-blue-500 hover:text-blue-700">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFee;