"use client"
import Pagination from '@/app/dashboard/teachers/components/Pagination'
import { ChevronsLeft, Edit, Trash } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const StudentListSection = () => {

    const initialStudents = [
        {
          name: 'Okoli Qodebyte',
          studentId: 'AGS-1289-QB',
          address:'20, Ogunlana Drive, Surulere, Lagos',
          gender: 'Male',
          status: 'Graduated',
          attendanceRecord: '90%',
          admissionYear: '2019',
            yearOfExit: '2021',
        },

        {
            name: 'Okoli Qodebyte',
            studentId: 'AGS-1289-QB',
            address:'20, Ogunlana Drive, Surulere, Lagos',
            gender: 'Male',
            status: 'Expelled',
            attendanceRecord: '30%',
            admissionYear: '2019',
            yearOfExit: '2021',
          },
    
      ];
    

     const [students, setStudents] = useState(initialStudents);
                const [searchTerm, setSearchTerm] = useState('');
                const [currentPage, setCurrentPage] = useState(1);

    const studentsPerPage = 10;

    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);
  
    const totalPages = Math.ceil(students.length / studentsPerPage);

     const handleSearchChange = (e: { target: { value: string; }; }) => {
                  const term = e.target.value.toLowerCase();
                  setSearchTerm(term);
                  const filteredStudents = initialStudents.filter(
                    (student) =>
                      student.name.toLowerCase().includes(term) ||
                      student.studentId.toLowerCase().includes(term) ||
                      student.gender.toLowerCase().includes(term)
                  );
                  setStudents(filteredStudents);
                };
              
    
         const handlePageChange = (page: React.SetStateAction<number>) => {
                    setCurrentPage(page);
                  };
  return (
    <>

<div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <Link href='/dashboard/manage-school/manage-class-room' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>Session Classes</p>
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
                placeholder="Search by, student name Name or School Id and gender" 
                value={searchTerm}
                onChange={handleSearchChange}
                required 
              />
            </div>
          </form>  
     </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance Record</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admission Year</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year of Exit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {currentStudents.map((student, index) => (
              <tr className='pr-1' key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.studentId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.address}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.gender}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.status}</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.attendanceRecord}</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.admissionYear}</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.yearOfExit}</div>
                </td>
                <td className="px-6 flex gap-1 py-4 whitespace-nowrap">
                  <Link href='/dashboard/manage-school/manage-class-room/class-room-detail/student-detail' className="text-gray-50  flex bg-blue-500 px-3 py-2 rounded-lg mr-4">
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

export default StudentListSection
