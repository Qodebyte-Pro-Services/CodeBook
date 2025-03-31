"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronsLeft, Edit, Plus, Trash } from 'lucide-react' 
import Pagination from './Pagination';

const TeacherTable = () => {
  const initialTeachers = [
    {
      name: 'Okoli Qodebyte',
      email: 'unified347@gmail.com',
      teacherId: 'AGS-1289-QB',
      subject: 'Basic - Technology',
      classes: 'primary 1, primary 2',
      classRoom: 'JSS 1',
      address: '3 Presidential Road',
      schoolType: 'Primary',
    },

  ];

  const [teachers, setTeachers] = useState(initialTeachers);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const teachersPerPage = 5;

  const indexOfLastTeacher = currentPage * teachersPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
  const currentTeachers = teachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

  const totalPages = Math.ceil(teachers.length / teachersPerPage);

  const handleSearchChange = (e: { target: { value: string; }; }) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredTeachers = initialTeachers.filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(term) ||
        teacher.teacherId.toLowerCase().includes(term) ||
        teacher.subject.toLowerCase().includes(term) ||
        teacher.classes.toLowerCase().includes(term) ||
        teacher.address.toLowerCase().includes(term) ||
        teacher.schoolType.toLowerCase().includes(term) ||
        teacher.classRoom.toLowerCase().includes(term)
    );
    setTeachers(filteredTeachers);
  };

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
      <div className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
            <ChevronsLeft />
            <p>All Teachers List</p>
        </div>
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
              placeholder="Search by ID, Name or Subject" 
              value={searchTerm}
              onChange={handleSearchChange}
              required 
            />
          </div>
        </form>

        <Link href='/dashboard/teachers/add-teacher' className='flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md'>
          <Plus className='text-blue-500' />
          <p className='text-[10px] md:text-md'>Add Teacher</p>
        </Link>
   </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class(es)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ClassRoom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {currentTeachers.map((teacher, index) => (
              <tr className='pr-1' key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.name}</div>
                  <div className="text-sm text-gray-500">{teacher.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.teacherId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.subject}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.classes}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.address}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.schoolType}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.classRoom}</div>
                </td>
                <td className="px-6 flex gap-1 py-4 whitespace-nowrap">
                  <Link href='/dashboard/teachers/teacher-detail' className="text-gray-50  flex bg-blue-500 px-3 py-2 rounded-lg mr-4">
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
  );
};

export default TeacherTable;