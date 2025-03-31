"use client"

import { ChevronsLeft, Edit, Plus, Trash } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
import Pagination from '../../teachers/components/Pagination';

const NonTeachersTable = () => {

    const initialNonTeachingStaffs = [
        {
          EmployeeName: 'Okoli Qodebyte',
          email: 'unified347@gmail.com',
          EmployeeId: 'AGS-1289-QB',
          job: 'Librarian',
          Department: 'Academics',
          schoolType: 'Primary',
          address: '3 Presidential Road',
            phone: '08012345678',
            salary: 'N100,000',
            gender: 'Male'
        },
    
      ];

      const [nonTeachingStaffs, setNonTeachingStaffs] = useState(initialNonTeachingStaffs);
      const [searchTerm, setSearchTerm] = useState('');
      const [currentPage, setCurrentPage] = useState(1);
      const nonTeachingStaffsPerPage = 5;

        const indexOfLastNonTeachingStaff = currentPage * nonTeachingStaffsPerPage;
        const indexOfFirstNonTeachingStaff = indexOfLastNonTeachingStaff - nonTeachingStaffsPerPage;
        const currentNonTeachingStaffs = nonTeachingStaffs.slice(indexOfFirstNonTeachingStaff, indexOfLastNonTeachingStaff);

        const totalPages = Math.ceil(nonTeachingStaffs.length / nonTeachingStaffsPerPage);

        const handleSearchChange = (e: { target: { value: string; }; }) => {
            const term = e.target.value.toLowerCase();
            setSearchTerm(term);
            const filteredNonTeachingStaffs = initialNonTeachingStaffs.filter(
                (nonTeachingStaff) =>
                    nonTeachingStaff.EmployeeName.toLowerCase().includes(term) ||
                    nonTeachingStaff.EmployeeId.toLowerCase().includes(term) ||
                    nonTeachingStaff.job.toLowerCase().includes(term) ||
                    nonTeachingStaff.Department.toLowerCase().includes(term) ||
                    nonTeachingStaff.address.toLowerCase().includes(term) ||
                    nonTeachingStaff.schoolType.toLowerCase().includes(term) ||
                    nonTeachingStaff.phone.toLowerCase().includes(term) ||
                    nonTeachingStaff.salary.toLowerCase().includes(term) ||
                    nonTeachingStaff.gender.toLowerCase().includes(term)
                );
            setNonTeachingStaffs(filteredNonTeachingStaffs);
        };

        const handlePageChange = (page: React.SetStateAction<number>) => {
            setCurrentPage(page);
        };


  return (
    <>
        <div className='w-full bg-[#FFFFFF] sm:h-[55px] h-[60px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
            <div className='flex gap-2  w-1/2 items-center justify-start md:text-lg text-[10px] '>
                <ChevronsLeft />
                <p >All <br className='sm:hidden flex'/> Non-<br className='sm:hidden flex'/>Teaching <br className='sm:hidden flex'/> Staff List</p>
            </div>
            <div className='flex gap-2  w-1/2 items-center justify-end'>
               <form className="mx-auto w-1/2 mt-1">
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
                placeholder="Search by form Teacher, class room Name or School Type" 
                value={searchTerm}
                onChange={handleSearchChange}
                required 
              />
             </div>
               </form>
                <Link href='/dashboard/non-teaching-staff/add-staff' >
                    <div className='flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md'>
                              <Plus className='text-blue-500' />
                              <p className='text-[10px] md:text-md '>Add <br className='sm:hidden flex'/> Non-Teacher</p>
                    </div>
                </Link>

                <Link href='/dashboard/non-teaching-staff/department' className='underline text-blue-500 lg:text-md  sm:text-[12px] text-[10px]'>view department</Link>
            </div>
        </div>

        <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Employee Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Employee ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Job
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        School Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Address
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Salary
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gender
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       Action
                    </th>
                </tr>
            </thead>

            <tbody>
                {currentNonTeachingStaffs.map((nonTeachingStaff, index) => (
                    <tr key={index} className='bg-white'>
                               <td className="px-6 py-4 whitespace-nowrap">
                                <input type="checkbox" className="form-checkbox" />
                                </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.EmployeeName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.EmployeeId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.job}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.Department}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.schoolType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.salary}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.gender}
                        </td>
                        <td className="px-6 flex gap-1 py-4 whitespace-nowrap">
                  <Link href='/dashboard/non-teaching-staff/non-teaching-staff-detail' className="text-gray-50  flex bg-blue-500 px-3 py-2 rounded-lg mr-4">
                    <Edit/>
                  </Link>
                  <button className="text-gray-50  flex bg-red-500 px-3 py-2 rounded-lg mr-4">
                    <Trash/>
                  </button>
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
    </>
  )
}

export default NonTeachersTable
