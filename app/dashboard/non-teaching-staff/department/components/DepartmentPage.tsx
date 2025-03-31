"use client"
import Pagination from '@/app/dashboard/teachers/components/Pagination'
import { ChevronsLeft, Edit, Plus, Trash } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import AddDepartmentModal from './AddDepartmentModal'

const DepartmentPage = () => {

    const initialDepartments = [
        {
          departmentName: 'Librarian',
          departmentId: 'SCT-9998-OW',
          departmentHead: 'Mr Qodebyte',
          schoolType: 'Primary',
          numberOfStaff: '9',
        },
    
      ];

      const [departments, setDepartments] = useState(initialDepartments);
       const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const departmentsPerPage = 5;


    const indexOfLastDepartment = currentPage * departmentsPerPage;
    const indexOfFirstDepartment =  indexOfLastDepartment -  departmentsPerPage;
    const currentDepartments  = departments.slice(indexOfFirstDepartment, indexOfLastDepartment);


    const totalPages = Math.ceil(departments.length / departmentsPerPage);


     const handleSearchChange = (e: { target: { value: string; }; }) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filteredDepartments = initialDepartments.filter(
            (department) => 
                department.departmentHead.toLowerCase().includes(term) ||
                department.departmentId.toLowerCase().includes(term) ||
                department.departmentName.toLowerCase().includes(term) ||
                department.numberOfStaff.toLowerCase().includes(term) ||
                department.schoolType.toLowerCase().includes(term)
        );
        setDepartments(filteredDepartments);
    };


     const handlePageChange = (page: React.SetStateAction<number>) => {
                setCurrentPage(page);
            };

const handleAddDepartment =  (newDepartment: { departmentName:string; departmentHead:string}) => {
  setDepartments([...departments, {...newDepartment, schoolType:'Primary', numberOfStaff: '0', departmentId: 'Ags-3456-OPE'}])
};

  return (
    <>
      <div className='w-full bg-[#FFFFFF] sm:h-[55px] h-[60px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
            <div className='flex gap-2  w-1/2 items-center justify-start md:text-lg text-[10px] '>
                <ChevronsLeft />
                <Link href='/dashboard/non-teaching-staff' >All  Non-Teaching  Staff List</Link>
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
                <div >
                    <button onClick={() => setIsModalOpen(true)} className='flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md'>
                              <Plus className='text-blue-500' />
                              <p className='text-[10px] md:text-md '>Add New Department</p>
                    </button>
                </div>
              </div>

              <AddDepartmentModal 
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  onSave={handleAddDepartment}
              />
        </div>


        <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200"> 
            <thead className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department Id
                    </th>

                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department Name
                    </th>

                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department Head
                    </th>


                    {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        School Type
                    </th> */}

                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No of Staff
                    </th>

                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                    </th>
            </thead>

            <tbody>
                {currentDepartments.map((department, index) => (
                    <tr key={index} className='bg-white'>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="form-checkbox" />
                     </td>

                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {department.departmentId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {department.departmentName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {department.departmentHead}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {department.schoolType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {department.numberOfStaff}
                        </td>

                        <td className="px-6 flex gap-1 py-4 whitespace-nowrap">
                  <Link href='/dashboard/non-teaching-staff/department/department-detail' className="text-gray-50  flex bg-blue-500 px-3 py-2 rounded-lg mr-4">
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

export default DepartmentPage
