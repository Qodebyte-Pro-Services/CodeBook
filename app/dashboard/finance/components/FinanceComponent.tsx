"use client"
import { Bell, ChevronDown, ChevronsLeft, ChevronUp, PlusCircle, Trash } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Select from '../../teachers/add-teacher/compoenent/Select'
import Image from 'next/image'
import EarningsGraph from '../../components/EarningsGraph'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import Pagination from '../../teachers/components/Pagination'




type TableType = 'expenses' | 'payments' | 'debtors';

interface Expense {
    category: string ;
    transactionId: string;
    amount: string;
    description: string;
    date: string;
}

interface Payment {
    studentName: string;
    transactionId: string;
    classroom: string;
    category: string;
    amount: string;
    date: string;
}


interface Debtors {
    studentName: string;
    classroom: string;
    category: string;
    amountOwed: string;
    date: string;
}
  

const FinanceComponent = () => {
    const percentage = 60; 
    const initialExpenses: Expense[] = [
        {
            category: 'TextBooks',
            transactionId: '574869TB',
            amount: 'N29,493.00',
            description: 'Textbooks for Homec',
            date: '20/04/2025'
        }
    ];

    const initialPayments: Payment[] = [
        {
            studentName: 'John Doe',
            transactionId: '574869PY',
            classroom: 'Primary 5',
            category: 'Tuition',
            amount: 'N50,000.00',
            date: '22/04/2025'
        }
    ];

    const initialDebtors: Debtors[] = [
        {
            studentName: 'John Doe',
            classroom: 'Primary 5',
            category: 'Tuition',
            amountOwed: 'N50,000.00',
            date: '22/04/2025'
        }
    ]



    const [tableType, setTableType] = useState<TableType>('expenses');
    const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
    const [payments, setPayments] = useState<Payment[]>(initialPayments);
    const [debtors, setDebtors] = useState<Debtors[]>(initialDebtors);

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const currentItems = tableType === 'expenses'
    ? expenses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : tableType === 'payments'
        ? payments.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        : debtors.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

const totalPages = Math.ceil(
(tableType === 'expenses' ? expenses.length : tableType === 'payments' ? payments.length : debtors.length) / itemsPerPage
);




    
const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (tableType === 'expenses') {
        const filtered = initialExpenses.filter(
            (expense) =>
                expense.category.toLowerCase().includes(term) || 
                expense.transactionId.toLowerCase().includes(term) ||
                expense.date.toLowerCase().includes(term)
        );
        setExpenses(filtered);
    } else if (tableType === 'payments') {
        const filtered = initialPayments.filter(
            (payment) =>
                payment.studentName.toLowerCase().includes(term) ||
                payment.transactionId.toLowerCase().includes(term) ||
                payment.classroom.toLowerCase().includes(term) ||
                payment.date.toLowerCase().includes(term)
        );
        setPayments(filtered);
    } else {
        const filtered = initialDebtors.filter(
            (debtors) =>
                debtors.studentName.toLowerCase().includes(term) ||
                debtors.classroom.toLowerCase().includes(term) ||
                debtors.amountOwed.toLowerCase().includes(term) ||
                debtors.date.toLowerCase().includes(term)
        );
        setDebtors(filtered);
    }
};
    const handleTableTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTableType(e.target.value as TableType);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const renderTableRows = () => {
        return currentItems.map((item, index) => (
            <tr className='pr-1' key={index}>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                    <input type="checkbox" className="form-checkbox" />
                </td>
                {tableType === 'expenses' && (
                    <>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{item.category}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(item as Expense).transactionId}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(item as Expense).description}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{item.date}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(item as Expense).amount}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center gap-2">
                        <button className='flex items-center justify-center border-0 text-blue-500'>view reciept</button>
                        <button className='text-red-500'><Trash /></button>
                    </div>
                </td>
                    </>
                )}
                {tableType === 'payments' && (
                    <>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(item as Payment).studentName}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(item as Payment).transactionId}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(item as Payment).classroom}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(item as Payment).category}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(item as Payment).amount}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{item.date}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center gap-2">
                        <button className='flex items-center justify-center border-0 text-blue-500'>view reciept</button>
                        <button className='text-red-500'><Trash /></button>
                    </div>
                </td>
                    </>
                )}
                {tableType === 'debtors' && (
                    <>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(item as Debtors).studentName}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(item as Debtors).classroom}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(item as Debtors).category}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(item as Debtors).amountOwed}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className="text-sm text-gray-900">{item.date}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center gap-2">
                        <button className='flex gap-3 items-center justify-center border-0 text-blue-500'>
                            <Bell/>
                          <p>  Send reminder</p>
                        </button>
                    </div>
                </td>
                    </>
                )}
               
            </tr>
        ));
    };

    const renderTableHeaders = () => {
        if (tableType === 'expenses') {
            return (
                <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </>
            );
        } else if (tableType === 'payments') {
            return (
                <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classroom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </>
            );
        } else {
            return (
                <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classroom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Owed</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </>
            );
        }
    };


  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-3">
        <h4>Finance</h4>
        <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
        <Link href='/dashboard' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
          <ChevronsLeft />
          <p>Dashboard</p>
        </Link>
        </div>

      <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
            {[
             { name: "Overview", href: `/dashboard/finance` },
             { name: "PayRoll Management", href: `/dashboard/finance/payroll-mgt` },
             { name: "Student Fees", href: `/dashboard/finance/student-fees` },
             { name: "Expenses", href: `/dashboard/finance/expenses` },
             { name: "Budgeting", href: `/dashboard/finance/budgeting` },
            ].map((tab, index) => (
              <Link
                key={index}
                href={tab.href}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  index === 0
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
   <div className='md:w-1/2 w-full'>
   <Select
        label=""
        options={[
          { label: '2025-2026 Session', value: '2025-2026' },
        ]}
        name="session"
        value=''
        onChange={(e) => (e.target.value)}
        />
   </div>

        <div className='grid xl:grid-cols-4 w-full gap-3 md:grid-cols-3 grid-cols-'>
        <div className='h-[160px] rounded-xl bg-white py-3 px-3 flex flex-col gap-2'>
      <div className='bg-blue-200 justify-center flex items-center w-10 h-20 rounded-full'>
      <Image src="/Frame-3618869711.png" width={30} height={30} alt="" />
      </div>
        <div className='flex justify-center text-green-700 border-gray-400 items-center  rounded-full w-20 h-10 border '>
        <ChevronUp/>
       <p> 12%</p>
        </div>
        <span className='text-gray-400 '>Total Revenue</span>
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
        <div className='flex justify-center text-green-700 border-gray-400 items-center  rounded-full w-20 h-10 border '>
        <ChevronUp/>
       <p> 12%</p>
        </div>
        <span className='text-gray-400 '>Payroll Paid</span>
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
        <span className='text-gray-400 '>Total Expenses</span>
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
        <span className='text-gray-400 '>Budgets used</span>
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
        <span className='text-gray-400 '>Net Profits</span>
        <h5>N29,389,382.00</h5>
        </div>
        </div>

        <div className='flex xl:flex-row flex-col gap-2'>
        <EarningsGraph/>
        <div className='xl:w-1/3 lg:w-1/2 w-full bg-white rounded-xl py-2 px-2'>
        <div className='flex justify-between w-full '>
        <h6>Revenue By Class</h6>
        <Select
        label=""
        options={[
          { label: 'Primary 1', value: '1' },
        ]}
        name="class"
        value=''
        onChange={(e) => (e.target.value)}
        />
        </div>
        <div className='relative w-21 h-32 mx-auto mb-1'>
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            textColor: '#6366F1',
            pathColor: '#6366F1',
            trailColor: '#FF5C00',
            textSize: '16px',
          })}>
            <div>{`${percentage}%`}</div>
        </CircularProgressbarWithChildren>
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
        </div>
      </div>


        <div className=' overflow-x-auto  bg-white rounded-xl py-2 px-2'>
        <div className='flex md:flex-row flex-col justify-between md:items-center w-full'>
              <div className='flex gap-2 items-center  w-full  md:w-1/2'>
              <h6>{tableType === 'expenses' ? 'Expenses' : tableType === 'payments' ? 'Payments' : 'Debtors'}</h6>
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
                                        { label: 'Expenses', value: 'expenses' },
                                        { label: 'Payments', value: 'payments' },
                                        { label: 'Debtors', value: 'debtors' },
                                    ]}
                                    name="tableType"
                                    value={tableType}
                                    onChange={handleTableTypeChange}
                                />
           </div>
                        <div className='flex text-sm w-1/2 justify-end  text-blue-400 gap-2'>
                <PlusCircle/>
                Add Expense
                </div>
            </div>
                </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                            {renderTableHeaders()}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {renderTableRows()}
                    </tbody>
                </table>
        </div>
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default FinanceComponent
