"use client"
import { ChevronDown, ChevronsLeftIcon, ChevronUp, Eye, Pen, PlusCircle, Trash, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ExpenseChart from './ExpenseChart'
import ExpensePieChart from './ExpensePieChart'
import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import Pagination from '@/app/dashboard/teachers/components/Pagination'
import TextAreaInput from '@/app/dashboard/teachers/add-teacher/compoenent/TextAreaInput'
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input'
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select'

const ExpenseMgt = () => {
  const expenseData = {
    totalAmount: 800000,
    month: 'January',
    categories: [
      { name: 'Salaries', value: 82640, color: '#22C55E' },
      { name: 'Maintenance', value: 82640, color: '#3B82F6' },
      { name: 'School Supplies', value: 82640, color: '#FACC15' },
      { name: 'Transport', value: 82640, color: '#F97316' },
      { name: 'Others', value: 470040, color: '#A78BFA' },
    ],
  };

  const initialExpenseData = [
    {
      expenseRecord: 'Salaries',
      amount: 82640,
      description: 'Monthly salaries for staff',
      date: '2023-01-15',
      categoty: 'Salaries',
      paymentMode: 'Bank Transfer',
      recipient: 'John Doe',
    }
  ]

  const [expenseRecords, setExpenseRecords] = React.useState(initialExpenseData);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [newExpense, setNewExpense] = useState({
    category: "",
    transactionId: "",
    amount: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });
      const [searchTerm, setSearchTerm] = useState('');
       const [currentPage, setCurrentPage] = useState(1);
      const expenseRecordsPerPage = 5;
       const indexOfLastExpenseRecord = currentPage * expenseRecordsPerPage;
        const indexOfFirstExpenseRecord = indexOfLastExpenseRecord - expenseRecordsPerPage;
        const currentExpenseRecords = expenseRecords.slice(indexOfFirstExpenseRecord, indexOfLastExpenseRecord);
        const totalPages = Math.ceil(expenseRecords.length / expenseRecordsPerPage);

        const handleSearchChange =  (e: {target: {value: string; }; }) => {
          const term = e.target.value.toLowerCase();
          setSearchTerm(term);
        const filteredRecords = initialExpenseData.filter(
          (record) =>
            record.expenseRecord.toLowerCase().includes(term) ||
            record.description.toLowerCase().includes(term) ||
            record.categoty.toLowerCase().includes(term) ||
            record.paymentMode.toLowerCase().includes(term) ||
            record.recipient.toLowerCase().includes(term)
        )
        setExpenseRecords(filteredRecords);
        }

           const handlePageChange = (page: React.SetStateAction<number>) => {
                                      setCurrentPage(page);
                                    };

                                    const handleAddExpense = () => {
                                      const formattedExpense = {
                                        expenseRecord: newExpense.category,
                                        amount: Number(newExpense.amount),
                                        description: newExpense.description,
                                        date: newExpense.date,
                                        categoty: newExpense.category,
                                        paymentMode: "Unknown", 
                                        recipient: "Unknown", 
                                      };
                                      setExpenseRecords([...expenseRecords, formattedExpense]);
                                      setShowAddExpenseModal(false);
                                      setNewExpense({
                                        category: "",
                                        transactionId: "",
                                        amount: "",
                                        description: "",
                                        date: new Date().toISOString().split("T")[0],
                                      });
                                    };
                                  
                                    const AddExpenseModal = () => (
                                      <div className="fixed inset-0 bg-gray-500/75 transition-opacity bg-opacity-50 flex items-center justify-center z-50">
                                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                                          <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-lg font-semibold">Add New Expense</h3>
                                            <button
                                              onClick={() => setShowAddExpenseModal(false)}
                                              className="text-gray-500 hover:text-gray-700"
                                            >
                                              <X size={20} />
                                            </button>
                                          </div>
                                          <div className="space-y-4">
                                            <div>
                                              <Select
                                                label="Category"
                                                options={[
                                                  { label: "Salaries", value: "Salaries" },
                                                  { label: "Maintenance", value: "Maintenance" },
                                                  { label: "School Supplies", value: "School Supplies" },
                                                  { label: "Transport", value: "Transport" },
                                                  { label: "Others", value: "Others" },
                                                ]}
                                                name="category"
                                                value={newExpense.category}
                                                onChange={(e) =>
                                                  setNewExpense({ ...newExpense, category: e.target.value })
                                                }
                                              />
                                            </div>
                                            <div>
                                              <Input
                                                type="text"
                                                label="Transaction ID"
                                                placeholder="Enter transaction ID"
                                                value={newExpense.transactionId}
                                                onChange={(e) =>
                                                  setNewExpense({ ...newExpense, transactionId: e.target.value })
                                                }
                                              />
                                            </div>
                                            <div>
                                              <Input
                                                type="text"
                                                label="Amount"
                                                placeholder="Enter amount"
                                                value={newExpense.amount}
                                                onChange={(e) =>
                                                  setNewExpense({ ...newExpense, amount: e.target.value })
                                                }
                                              />
                                            </div>
                                            <div>
                                              <Input
                                                type="date"
                                                label="Date"
                                                placeholder=""
                                                value={newExpense.date}
                                                onChange={(e) =>
                                                  setNewExpense({ ...newExpense, date: e.target.value })
                                                }
                                              />
                                            </div>
                                            <div>
                                              <TextAreaInput
                                                label="Description"
                                                placeholder="Enter description"
                                                rows={3}
                                                value={newExpense.description}
                                                onChange={(e) =>
                                                  setNewExpense({ ...newExpense, description: e.target.value })
                                                }
                                              />
                                            </div>
                                            <div className="flex justify-end space-x-3 pt-2">
                                              <button
                                                onClick={() => setShowAddExpenseModal(false)}
                                                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium"
                                              >
                                                Cancel
                                              </button>
                                              <button
                                                onClick={handleAddExpense}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                                              >
                                                Add Expense
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  
  return (
    <div className="w-full xl:w-full lg:w-[75%] px-4 sm:px-6 lg:px-4 py-8 flex flex-col gap-3">
    <DashboardHeader/>
    <h4>Finance</h4>
    <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
    <Link href='/dashboard' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
      <ChevronsLeftIcon />
      <p>Dashboard</p>
    </Link>
    </div>

    <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
        <div className="border-b border-gray-200">
        <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
            {[
            { name: "Overview", href: `/dashboard/finance` },
            { name: "Payroll Management", href: `/dashboard/finance/payroll-mgt` },
            { name: "Student Fees", href: `/dashboard/finance/student-fees` },
            { name: "Expenses", href: `/dashboard/finance/expenses` },
            { name: "Budgeting", href: `/dashboard/finance/budgeting` },
            ].map((tab, index) => (
            <Link
                key={index}
                href={tab.href}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                index === 3
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
        <p className="font-medium text-sm">Finance Management</p>
        <span className="text-gray-700 text-xs">View and manage School Finance</span>
        </div>
    </div>


    <div className='flex flex-col gap-2'>
    <div className='grid xl:grid-cols-4 w-full gap-3 md:grid-cols-3 grid-cols-'>
    <div className='h-[160px] rounded-xl bg-white py-3 px-3 flex flex-col gap-2'>
  <div className='bg-blue-200 justify-center flex items-center w-10 h-20 rounded-full'>
  <Image src="/Frame-3618869711.png" width={30} height={30} alt="" />
  </div>
    <div className='flex justify-center text-green-700 border-gray-400 items-center  rounded-full w-20 h-10 border '>
    <ChevronUp/>
   <p> 12%</p>
    </div>
    <span className='text-gray-400 '>Total Expense</span>
    <h5>N29,389,382.00</h5>
    </div>

    <div className='h-[160px] rounded-xl bg-white py-3 px-3 flex flex-col gap-2'>
  <div className='bg-blue-200 justify-center flex items-center w-10 h-20 rounded-full'>
  <Image src="/Frame-3618869711.png" width={30} height={30} alt="" />
  </div>
    <div className='flex justify-center text-green-700 border-gray-400 items-center  rounded-full w-20 h-10 border '>
    <ChevronUp/>
   <p> 12%</p>
    </div>
    <span className='text-gray-400 '>Total Expense on Salaries</span>
    <h5>N29,389,382.00</h5>
    </div>

    <div className='h-[160px] rounded-xl bg-white py-3 px-3 flex flex-col gap-2'>
  <div className='bg-blue-200 justify-center flex items-center w-10 h-20 rounded-full'>
  <Image src="/Frame-3618869711.png" width={30} height={30} alt="" />
  </div>
    <div className='flex justify-center text-green-700 border-gray-400 items-center  rounded-full w-20 h-10 border '>
    <ChevronUp/>
   <p> 12%</p>
    </div>
    <span className='text-gray-400 '>Outstanding Expense</span>
    <h5>N29,389,382.00</h5>
    </div>

    <div className='h-[160px] rounded-xl bg-white py-3 px-3 flex flex-col gap-2'>
  <div className='bg-blue-200 justify-center flex items-center w-10 h-20 rounded-full'>
  <Image src="/Frame-3618869711.png" width={30} height={30} alt="" />
  </div>
    <div className='flex justify-center text-blue-500 border-gray-400 items-center  rounded-full w-20 h-10 border '>
    <ChevronDown/>
   <p> 12%</p>
    </div>
    <span className='text-gray-400 '>Total Transactions</span>
    <h5>300</h5>
    </div>

    </div>
        

    <div className='grid xl:grid-cols-2 grid-cols-1 gap-2'>
      <ExpenseChart/>
      <ExpensePieChart {...expenseData} />
    </div>

    <div  className=' overflow-x-auto  bg-white rounded-xl py-2 px-2'>
    <div className='flex md:flex-row flex-col justify-between md:items-center w-full'>
              <div className='flex gap-2 items-center  w-full  md:w-1/2'>
              <h6>Expense Records</h6>
                <form className="md:mx-auto w-1/2"> 
                    <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 0 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input 
                        type="search" 
                        id="default-search" 
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-none" 
                        placeholder="Search by, student name Name or School Id and gender" 
                        value={searchTerm}
                        onChange={handleSearchChange}
                        required 
                    />
                    </div>
                </form>
              </div>
                <div className='flex  w-full  justify-end md:w-1/2  '>
            <button
          onClick={() => setShowAddExpenseModal(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg flex justify-center items-center gap-2"
        >
          <PlusCircle size={16} />
          <p className="text-white">Add New Expense</p>
        </button>
                </div>
    </div>

    <table className="min-w-full divide-y divide-gray-200">
          
          <thead >
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Mode</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
          {currentExpenseRecords.map((record, index) => (
              <tr className='pr-1' key={index}>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.expenseRecord}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.description}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.categoty}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.date}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.amount}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.paymentMode}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.recipient}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900 flex items-center gap-2">
                    <button className='flex items-center justify-center border-0'><Eye/></button>
                    <button className='flex items-center justify-center border-0'><Pen/></button>
                    <button className='flex items-center justify-center border-0'><Trash/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
    {showAddExpenseModal && <AddExpenseModal />}
    </div>
  )
}

export default ExpenseMgt
