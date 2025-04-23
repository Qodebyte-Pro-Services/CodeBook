"use client";

import Pagination from '@/app/dashboard/teachers/components/Pagination';
import { ChevronsLeft, Edit, Plus, Trash } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import AddClassModal from './AddClassModal';
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select';

const MangeTable = () => {
  const [activeTab, setActiveTab] = useState('Classes');

  const tabs = [
    { name: 'General', href: '/dashboard/manage-school'},
    { name: 'Classes', href: '/dashboard/manage-school/manage-class'},
    { name: 'School-Subjects', href: '/dashboard/manage-school/manage-class-subjects' },
    { name: 'Timetable', href: '/dashboard/manage-school/timetable' },
                  // { name: 'Fee Mangement', href: '/dashboard/manage-school/fee-management' },
    { name: 'Grading', href: '/dashboard/manage-school/grading' },
  ];

  const initialClasses = [
    {
      className: 'Primary 1',
      formTeacher: 'Mrs Tochukwu',
      numberofClassRoom: '5',
      schoolType: 'Primary School',
      multipleClassRoom: 'Yes',
    },
  ];
      
  const [klasses, setClasses] = useState(initialClasses);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const klassesPerPage = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const indexOfLastCLass = currentPage * klassesPerPage;
  const indexOfFirstClass = indexOfLastCLass - klassesPerPage;
  const currentClasses = klasses.slice(indexOfFirstClass, indexOfLastCLass);
  
  const totalPages = Math.ceil(klasses.length / klassesPerPage);
  
  const handleSearchChange = (e: { target: { value: string } }) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredClasses = initialClasses.filter(
      (klass) =>
        klass.className.toLowerCase().includes(term) ||
        klass.formTeacher.toLowerCase().includes(term) ||
        klass.numberofClassRoom.toLowerCase().includes(term) ||
        klass.multipleClassRoom.toLowerCase().includes(term) ||
        klass.schoolType.toLowerCase().includes(term)
    );
    setClasses(filteredClasses);
  };
  
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const handleAddClass = (newClass: { 
    schooltype: string; 
    className: string; 
    formTeacher?: string; 
    multipleClassRoom: string;
  }) => {
    setClasses([...klasses, { 
      className: newClass.className,
      formTeacher: newClass.multipleClassRoom === 'yes' ? 'N/A' : newClass.formTeacher || 'N/A',
      numberofClassRoom: 'N/A',
      multipleClassRoom: newClass.multipleClassRoom === 'yes' ? 'Yes' : 'No',
      schoolType: newClass.schooltype 
    }]);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                onClick={() => setActiveTab(tab.name)}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === tab.name
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className='flex flex-col gap-1 px-2 py-2'>
          <p className='font-medium text-sm'>Classes</p>
          <span className='text-gray-700 text-xs'>Manage & edit your classes</span>
        </div>
      </div>

      <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        <Link href='/dashboard/manage-school' className='flex gap-2 w-1/2 items-center justify-start md:text-md text-[10px]'>
          <ChevronsLeft />
          <p>Manage School</p>
        </Link>
        <div className='flex gap-3 w-1/2 items-center justify-end text-md'>
          <form className="mx-auto w-1/2"> 
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
  
          <div className='flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md'>
            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2">
              <Plus className='text-blue-500' />
              <p className='text-[10px] md:text-md'>Add Class</p>
            </button>    
          </div>

          <AddClassModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddClass}
          />
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <div className='flex justify-between flex-col md:flex-row bg-white w-full rounded-tl-lg rounded-tr-lg px-3 py-3'>
          <Select
            label=""
            options={[
              { value: 'nursery', label: 'Nursery School' },
              { value: 'primary', label: 'Primary School' },
            ]}
            value="Nursery"
            onChange={(value) => console.log(value)}
          />
        </div>
        
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Form Teacher</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mutiple ClassRoom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Room No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentClasses.map((klass, index) => (
              <tr className='pr-1' key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{klass.className}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {klass.multipleClassRoom === 'Yes' ? 'Has Multiple ClassRooms' : klass.formTeacher}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{klass.multipleClassRoom}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{klass.numberofClassRoom}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{klass.schoolType}</div>
                </td>
                <td className="px-6 flex gap-1 py-4 whitespace-nowrap">
                  <Link
                    href={
                      klass.multipleClassRoom === 'Yes'
                        ? '/dashboard/manage-school/manage-class-room/'
                        : '/dashboard/manage-school/manage-class-room/class-room-detail'
                    }
                    className="text-gray-50 flex bg-blue-500 px-3 py-2 rounded-lg mr-4"
                  >
                    <Edit />
                  </Link>
                  <button className="text-gray-50 flex bg-red-500 px-3 py-2 rounded-lg mr-4">
                    <Trash />
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
  );
};

export default MangeTable;