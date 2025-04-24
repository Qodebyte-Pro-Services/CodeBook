"use client"

import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select'
import Pagination from '@/app/dashboard/teachers/components/Pagination'
import { ChevronDown, ChevronsLeft, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const StudentFeeSection = () => {

    const initialFees = [
        {
            studentName: 'Quincy Okwudili',
            studentId: '57H-869-TB',
            classRoom: 'Primary 1B',
            term: 'First Term',
            date: '20/04/2025',
            totalFee: 'N29,493.0',
            amtPaid: 'N29,493.0',
            balance: 'N29,493.0',
            status: true
        }
    ]


    const [fees, setFees] = useState(initialFees);
    const [searchTerm, setSearchTerm] = useState('');
     const [currentPage, setCurrentPage] = useState(1);
     const feesPerPage = 10;

     const indexOfLastFees = currentPage * feesPerPage;
     const indexOfFirstFees = indexOfLastFees - feesPerPage;
     const currentFees = fees.slice(indexOfFirstFees, indexOfLastFees);

     const totalPages = Math.ceil(fees.length / feesPerPage);


     const handleSearchChange = (e: {target: {value: string; }; }) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filteredFees = initialFees.filter(
            (fee) => 
            fee.studentName.toLowerCase().includes(term) ||
            fee.studentId.toLowerCase().includes(term) ||
            fee.classRoom.toLowerCase().includes(term) ||
            fee.status.valueOf() ||
            fee.date.toLowerCase().includes(term)
        )
        setFees(filteredFees)
     }
    
          const handlePageChange = (page: React.SetStateAction<number>) => {
                               setCurrentPage(page);
                             };
  return (
    <div className="w-full lg:w-[85%] px-4 sm:px-6 lg:px-4 py-8 flex flex-col gap-3">
        <DashboardHeader/>
    <h4>Finance</h4>
    <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
    <Link href='/dashboard/finance/student-fees/session-view' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
      <ChevronsLeft />
      <p className='text-gray-400'>Dashboard</p>
      <ChevronsLeft />
      <p className='text-gray-400'>Session Fee Section</p>
      <ChevronsLeft />
      <p className='text-gray-900'>Class Fee Section</p>
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
    <span className='text-gray-400 '>Total Tuition Fees</span>
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
    <span className='text-gray-400 '>Total Tuition Collected</span>
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
    <span className='text-gray-400 '>Outstanding Fees</span>
    <h5>N29,389,382.00</h5>
    </div>

    <div className='h-[160px] rounded-xl bg-white py-3 px-3 flex flex-col gap-2'>
  <div className='bg-blue-200 justify-center flex items-center w-10 h-20 rounded-full'>
  <Image src="/Frame-3618869711.png" width={30} height={30} alt="" />
  </div>
    <div className='flex justify-center text-red-700 border-gray-400 items-center  rounded-full w-20 h-10 border '>
    <ChevronDown/>
   <p> 12%</p>
    </div>
    <span className='text-gray-400 '>Total Students</span>
    <h5>300</h5>
    </div>

    </div>

        <div className=' overflow-x-auto  bg-white rounded-xl py-2 px-2'>
        <div className='flex md:flex-row flex-col justify-between md:items-center w-full'>
              <div className='flex gap-2 items-center  w-full  md:w-1/2'>
              <h6>Students Fee Collections</h6>
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
            <div className='flex  w-full  md:w-1/2  '>
            <div className='flex gap-2 justify-between w-full items-center'>
           <div className='mt-3 w-1/2'>
           <Select
                    label=""
                    options={[
                    { label: 'First Term', value: '1' },
                    ]}
                    name="term"
                    value=''
                    onChange={(e) => (e.target.value)}
                    />
           </div>

           <div className='mt-3 w-1/2'>
           <Select
                    label=""
                    options={[
                    { label: 'Primary 1B', value: '1' },
                    ]}
                    name="class"
                    value=''
                    onChange={(e) => (e.target.value)}
                    />
           </div>
                       
            </div>
                </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          
          <thead >
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Id</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classroom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Fee</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Paid</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tuition Balance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
          {currentFees.map((fee, index) => (
              <tr className='pr-1' key={index}>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fee.studentName}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fee.studentId}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fee.classRoom}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fee.date}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fee.totalFee}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fee.amtPaid}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{fee.balance}</div>
                </td>
                <td className="px-6 py-4 text-center  whitespace-nowrap">
                <div className={`flex items-center gap-2 border justify-center w-24 h-8 rounded-full text-sm font-medim${
                  fee.status ? "border-green-700 text-green-300" : "border-red-700 text-red-300"}`}>
          <div className={`w-2 h-2 rounded-full ${fee.status ? "bg-green-400 text-green-300" : "bg-red-400 text-red-300"}`}></div>
          <p>{fee.status ? 'Completed' : 'Not Paid'}</p>
                </div>
              
              </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900 flex items-center gap-2">
                    <Link href='/dashboard/finance/student-fees/session-view/class-fee-list/student-fee-section' className='flex items-center justify-center border-0 text-blue-500'>View History</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>


        </div>
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      
    </div>
  )
}

export default StudentFeeSection
