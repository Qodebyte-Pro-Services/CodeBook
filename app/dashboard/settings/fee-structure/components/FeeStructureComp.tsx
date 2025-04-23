"use client";
import DashboardHeader from '@/app/dashboard/components/DashboardHeader';
import { ChevronsLeft, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';


const initialFees = [
  { id: '1', feeType: 'Tuition', paymentId: 'AJD-9201-TU', amount: '200,000', paymentBreakdown: '2 Instalments', discounts: 'Early Payment (5%)' },
  { id: '2', feeType: 'Library', paymentId: 'AJD-9201-TU', amount: '200,000', paymentBreakdown: '2 Instalments', discounts: 'Early Payment (5%)' },
  { id: '3', feeType: 'PTA levy', paymentId: 'AJD-9201-TU', amount: '200,000', paymentBreakdown: '2 Instalments', discounts: 'Early Payment (5%)' },
  { id: '4', feeType: 'Bus Levy', paymentId: 'AJD-9201-TU', amount: '200,000', paymentBreakdown: '2 Instalments', discounts: 'Early Payment (5%)' },
];

interface Fee {
  id: string;
  feeType: string;
  paymentId: string;
  amount: string;
  paymentBreakdown: string;
  discounts: string;
}

const FeeStructureComp = () => {
  const [fees, setFees] = useState<Fee[]>(initialFees);
  const [isAddFeeModalOpen, setIsAddFeeModalOpen] = useState(false);
  const [session, setSession] = useState('2025-2026 Session');
  const [term, setTerm] = useState('First Term');

  const openAddFeeModal = () => {
    setIsAddFeeModalOpen(true);
  };

  const closeAddFeeModal = () => {
    setIsAddFeeModalOpen(false);
  };

  const handleAddFee = (newFee: Omit<Fee, 'id'>) => {
  
    const newFeeWithId = { ...newFee, id: Date.now().toString() }; 
    setFees((prevFees) => [...prevFees, newFeeWithId]);
    closeAddFeeModal();
  };

  const handleEditFee = (feeId: string) => {
    
    console.log(`Editing fee with ID: ${feeId}`);
  };

  const handleDeleteFee = (feeId: string) => {
   
    setFees((prevFees) => prevFees.filter((fee) => fee.id !== feeId));
  };

  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
      <DashboardHeader />
      <div className="flex flex-col gap-5 w-full ">
        <h3 className="mb-2 text-xl font-bold">Settings</h3>
        <div className="w-full bg-[#FFFFFF] md:h-[55px] h-[60px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
          <div className="flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] ">
            <ChevronsLeft />
            <p>Settings</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full ">
          <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px  overflow-x-scroll justify-between">
                {[
                  { name: 'School Profile', href: `/dashboard/settings/` },
                  { name: 'Academic Sessions', href: `/dashboard/settings/academic-sessions` },
                  { name: 'Subject Config', href: `/dashboard/settings/subject-config` },
                  { name: 'User Access', href: `/dashboard/settings/user-acess` },
                  { name: 'Fee Structure', href: `/dashboard/settings/fee-structure` },
                  { name: "Communication", href: `/dashboard/settings/communications` },
                  { name: 'Staffs', href: `/dashboard/settings/staffs` },
                  { name: 'Students', href: `/dashboard/settings/students` },
                  { name: 'Grading & Results', href: `/dashboard/settings/grading-results` },
                  { name: 'Security', href: `/dashboard/settings/security` },
                  { name: 'General Prefrence', href: `/dashboard/settings/general` },
                ].map((tab, index) => (
                  <Link
                    key={index}
                    href={tab.href}
                    className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                      index === 4
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-1 px-2 py-2">
              <p className="font-medium text-sm">Fee Structure</p>
              <span className="text-gray-700 text-xs">Manage your school&apos;s fee structure</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <select
                  value={session}
                  onChange={(e) => setSession(e.target.value)}
                  className="border rounded-md py-2 px-3 text-sm focus:outline-none"
                >
                  <option>2025-2026 Session</option>
                 
                </select>
                <select
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  className="border rounded-md py-2 px-3 text-sm focus:outline-none"
                >
                  <option>First Term</option>
               
                </select>
              </div>
              <button
                onClick={openAddFeeModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
              >
                + Add New Fee
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Breakdown</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discounts</th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {fees.map((fee) => (
                    <tr key={fee.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.feeType}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.paymentId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.paymentBreakdown}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.discounts}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                        <button onClick={() => handleEditFee(fee.id)} className="text-indigo-600 hover:text-indigo-900">
                          <Edit className="h-5 w-5 inline-block" />
                        </button>
                        <button onClick={() => handleDeleteFee(fee.id)} className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-5 w-5 inline-block" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

       
          {isAddFeeModalOpen && (
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 max-w-md">
                <h5 className="text-lg font-semibold mb-4">Add New Fee</h5>
              
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const newFeeData = {
                      feeType: formData.get('feeType') as string,
                      paymentId: formData.get('paymentId') as string,
                      amount: formData.get('amount') as string,
                      paymentBreakdown: formData.get('paymentBreakdown') as string,
                      discounts: formData.get('discounts') as string,
                    };
                    handleAddFee(newFeeData as Omit<Fee, 'id'>);
                  }}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <label htmlFor="feeType" className="block text-gray-700 text-sm font-bold mb-2">
                      Fee Type
                    </label>
                    <input type="text" id="feeType" name="feeType" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div>
                    <label htmlFor="paymentId" className="block text-gray-700 text-sm font-bold mb-2">
                      Payment ID
                    </label>
                    <input type="text" id="paymentId" name="paymentId" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div>
                    <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
                      Amount
                    </label>
                    <input type="text" id="amount" name="amount" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div>
                    <label htmlFor="paymentBreakdown" className="block text-gray-700 text-sm font-bold mb-2">
                      Payment Breakdown
                    </label>
                    <input type="text" id="paymentBreakdown" name="paymentBreakdown" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div>
                    <label htmlFor="discounts" className="block text-gray-700 text-sm font-bold mb-2">
                      Discounts
                    </label>
                    <input type="text" id="discounts" name="discounts" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={closeAddFeeModal}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                    >
                      Add Fee
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeeStructureComp;