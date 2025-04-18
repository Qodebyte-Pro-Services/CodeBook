"use client"
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select'
import Pagination from '@/app/dashboard/teachers/components/Pagination'
import { ChevronDown, ChevronsLeft, ChevronUp, PlusCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type TableType = 'teachers' | 'nonTeachers';

interface Teacher {
  employeeName: string;
  employeeType: string;
  amount: string;
  date: string;
  status: boolean;
}

interface NonTeacher {
  employeeName: string;
  employeeType: string;
  department:string;
  departmentRole:string;
  amount: string;
  date: string;
  status: boolean;
}

const PayRollMgt = () => {
  

  const initialNonTeachers: NonTeacher[] = [
    {
      employeeName: "Mr Qodebyte",
      employeeType: "Non Teaching Staff",
      department: "Security",
      departmentRole: "Head Of Department",
      amount: 'N29,493.00',
      date: '20/04/2025',
      status: true
    }
  ]


  const InitialTeachers: Teacher[] = [
    {
      employeeName: "Mr Qodebyte",
      employeeType: "Non Teaching Staff",
      amount: 'N29,493.00',
      date: '20/04/2025',
      status: false
    }
  ]

  const [tableType, setTableType] = useState<TableType>('teachers');
  const [teachers, setTeachers] = useState<Teacher[]>(InitialTeachers);
  const [nonTeachers, setNonTeachers] = useState<NonTeacher[]>(initialNonTeachers);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const currentItems = tableType === 'teachers' 
  ? teachers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  : nonTeachers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

const totalPages = Math.ceil(
  (tableType === 'teachers' ? teachers.length : nonTeachers.length) / itemsPerPage
);



const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const term = e.target.value.toLowerCase();
  setSearchTerm(term);
  
  if (tableType === 'teachers') {
      const filtered = InitialTeachers.filter(
          (teacher) => 
              teacher.employeeName.toLowerCase().includes(term) ||
              teacher.employeeType.toLowerCase().includes(term) ||
              teacher.amount.toLowerCase().includes(term) ||
              teacher.status.valueOf() ||
              teacher.date.toLowerCase().includes(term)
      );
      setTeachers(filtered);
  } else {
      const filtered = initialNonTeachers.filter(
          (nonTeachers) => 
              nonTeachers.employeeName.toLowerCase().includes(term) ||
              nonTeachers.employeeType.toLowerCase().includes(term) ||
              nonTeachers.department.toLowerCase().includes(term) ||
              nonTeachers.departmentRole.toLowerCase().includes(term) ||
              nonTeachers.status.valueOf() ||
              nonTeachers.date.toLowerCase().includes(term)
      );
      setNonTeachers(filtered);
  }
};

const handleTableTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setTableType(e.target.value as TableType);
  setCurrentPage(1); 
};

const handlePageChange = (page: number) => {
  setCurrentPage(page);
};


const renderTableHeaders = () => {
  if (tableType === 'teachers') {
      return (
          <>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
             
          </>
      );
  } else {
      return (
          <>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              
          </>
      );
  }
};



const renderTableRows = () => {
  if (tableType === 'teachers') {
      return currentItems.map((item, index) => (
          <tr className='pr-1' key={index}>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{(item as Teacher).employeeName}</div>
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{(item as Teacher).employeeType}</div>
              </td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">
                <div className={`flex items-center gap-2 border justify-center w-24 h-8 rounded-full text-sm font-medim${
                  item.status ? "border-green-700 text-green-300" : "border-red-700 text-red-300"}`}>
          <div className={`w-2 h-2 rounded-full ${item.status ? "bg-green-400 text-green-300" : "bg-red-400 text-red-300"}`}></div>
          <p>{item.status ? 'Paid' : 'Not Paid'}</p>
                </div>
              
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{(item as Teacher).date}</div>
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{(item as Teacher).amount}</div>
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900 flex items-center gap-2">
                      <button className='flex items-center justify-center border-0 text-blue-500'>view details</button>
                  </div>
              </td>
          </tr>
      ));
  } else {
      return currentItems.map((item, index) => (
          <tr className='pr-1' key={index}>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{(item as NonTeacher).employeeName}</div>
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{(item as NonTeacher).employeeType}</div>
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{(item as NonTeacher).department}</div>
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{(item as NonTeacher).departmentRole}</div>
              </td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">
                <div className={`flex items-center gap-2 border justify-center w-24 h-8 rounded-full text-sm font-medim${
                  item.status ? "border-green-700 text-green-300" : "border-red-700 text-red-300"}`}>
          <div className={`w-2 h-2 rounded-full ${item.status ? "bg-green-400 text-green-300" : "bg-red-400 text-red-300"}`}></div>
          <p>{item.status ? 'Paid' : 'Not Paid'}</p>
                </div>
              
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{(item as NonTeacher).amount}</div>
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{(item as NonTeacher).date}</div>
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900 flex items-center gap-2">
                      <button className='flex items-center justify-center border-0 text-blue-500'>view details</button>
                  </div>
              </td>
          </tr>
      ));
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
         { name: "Payroll Management", href: `/dashboard/finance/payroll-mgt` },
         { name: "Student Fees", href: `/dashboard/finance/student-fees` },
         { name: "Expenses", href: `/dashboard/finance/expenses` },
         { name: "Budgeting", href: `/dashboard/finance/budgeting` },
        ].map((tab, index) => (
          <Link
            key={index}
            href={tab.href}
            className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
              index === 1
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
    <span className='text-gray-400 '>Total Salary Allocations</span>
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
    <span className='text-gray-400 '>Total Salary Paid</span>
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
    <span className='text-gray-400 '>Total Pending Payments</span>
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
    <span className='text-gray-400 '>Total Employees</span>
    <h5>300</h5>
    </div>

    </div>


    <div className=' overflow-x-auto  bg-white rounded-xl py-2 px-2'>
        <div className='flex md:flex-row flex-col justify-between md:items-center w-full'>
              <div className='flex gap-2 items-center  w-full  md:w-1/2'>
              <h6>Payroll List</h6>
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
                                    placeholder={`Search by ${tableType === 'teachers' ? 'emplyee name,  amount or date' : 'Department name, Department Role'}`}
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
                                        { label: 'Teachers', value: 'teachers' },
                                        { label: 'Non Academic Staff', value: 'nonTeachers' },
                                        
                                    ]}
                                      name="tableType"
                                    value={tableType}
                                    onChange={handleTableTypeChange}
                                />
           </div>
           <div className='mt-3 w-1/2'>
           <Select
                                    label=""
                                    options={[
                                        { label: 'Paid', value: 'paid' },
                                        { label: 'UnPaid', value: 'un-paid' },
                                        
                                    ]}
                                    name=""
                                    value=''
                                    onChange={(e) => (e.target.value)}
                                />
           </div>
                        <div className='flex text-sm w-1/2 justify-end  text-blue-400 gap-2'>
                <PlusCircle/>
                Record a Payment for {tableType === 'teachers' ? 'Teacher' : 'Non Teacher'}
                </div>
            </div>
                </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                            {renderTableHeaders()}
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {renderTableRows()}
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

export default PayRollMgt
