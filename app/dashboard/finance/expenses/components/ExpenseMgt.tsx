"use client"
import { ChevronDown, ChevronsLeftIcon, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ExpenseChart from './ExpenseChart'
import ExpensePieChart from './ExpensePieChart'

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
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-3">
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
        

        <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
          <ExpenseChart/>
          <ExpensePieChart {...expenseData} />
        </div>
    </div>
      
    </div>
  )
}

export default ExpenseMgt
