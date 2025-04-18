"use client"
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SessionFeeView = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-3">
    <h4>Finance</h4>
    <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
    <Link href='/dashboard/finance/student-fees/' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
      <ChevronsLeft />
      <p className='text-gray-400'>Dashboard</p>
      <ChevronsLeft />
      <p className='text-gray-900'>Session Fee Section</p>
     
    </Link>
    </div>

    <div className="bg-white rounded-lg mt-2 shadow overflow-hidden py-2 px-2">
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

<div className='md:w-1/2 w-full bg-white rounded-xl py-2 px-2'>
<Select
    label=""
    options={[
      { label: 'Primary', value: '1' },
    ]}
    name="schoolType"
    value=''
    onChange={(e) => (e.target.value)}
    />
</div>
</div>

    <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 w-full'>
            <Link href='/dashboard/finance/student-fees/session-view/class-fee-list' className='flex justify-between items-center bg-[#FFFFFF] h-[55px] py-2 px-4 rounded-lg'>
                <p>Primary 2</p>
                <ChevronsRight />
            </Link>

            <Link href='/dashboard/finance/student-fees/session-view/class-fee-list' className='flex justify-between items-center bg-[#FFFFFF] h-[55px] py-2 px-4 rounded-lg'>
                <p>Primary 2</p>
                <ChevronsRight />
            </Link>

            <Link href='/dashboard/finance/student-fees/session-view/class-fee-list' className='flex justify-between items-center bg-[#FFFFFF] h-[55px] py-2 px-4 rounded-lg'>
                <p>Primary 2</p>
                <ChevronsRight />
            </Link>
            <Link href='/dashboard/finance/student-fees/session-view/class-fee-list' className='flex justify-between items-center bg-[#FFFFFF] h-[55px] py-2 px-4 rounded-lg'>
                <p>Primary 2</p>
                <ChevronsRight />
            </Link>

            <Link href='/dashboard/finance/student-fees/session-view/class-fee-list' className='flex justify-between items-center bg-[#FFFFFF] h-[55px] py-2 px-4 rounded-lg'>
                <p>Primary 2</p>
                <ChevronsRight />
            </Link>

            <Link href='/dashboard/finance/student-fees/session-view/class-fee-list' className='flex justify-between items-center bg-[#FFFFFF] h-[55px] py-2 px-4 rounded-lg'>
                <p>Primary 2</p>
                <ChevronsRight />
            </Link>
    </div>
    </div>
  )
}

export default SessionFeeView
