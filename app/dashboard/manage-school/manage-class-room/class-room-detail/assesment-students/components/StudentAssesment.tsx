"use client"
import Pagination from '@/app/dashboard/teachers/components/Pagination'
import { ChevronsLeft } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const StudentAssesment = () => {
    const initialStudents = [
        {
          name: 'Okoli Qodebyte',
            hardworking: 1,
            teamPlayer: 2,
            sportsActivity: 3,
            classActivity: 4,
            classConduct:5,
            attendaceRecord: 4,
            
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
                            student.name.toLowerCase().includes(term)
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
              <p>ClassRoom</p>
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

      <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
        <div className="border-b border-gray-200">
        <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
  {[
    { name: "Nursery 1A", href: `/dashboard/manage-school/manage-class-room/class-room-detail/` },
    { name: "Students", href: `/dashboard/manage-school/manage-class-room/class-room-detail/students` },
    { name: "Subject/Performance", href: `/dashboard/manage-school/manage-class-room/class-room-detail/subjects-performance` },
    { name: "Timetable", href: `/dashboard/manage-school/manage-class-room/class-room-detail/timetable` },
    { name: "Assesment on Students", href: `/dashboard/manage-school/manage-class-room/class-room-detail/assesment-students` },
  
  ].map((tab, index) => (
    <Link
      key={index}
      href={tab.href}
      className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
        index === 4
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
          <p className="font-medium text-sm">Nursery 1A Character Assessment</p>
          <span className="text-gray-700 text-xs">Manage & edit the details of your Classrooms</span>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-3'>
      <div className='xl:w-1/3 w-full bg-white rounded-xl flex flex-col gap-2 px-2 py-2'>
        <p>Behavior Overview</p>
        <div className='flex justify-between w-full gap-2'>
        <p>Bad</p>
        <span>-</span>
        <p>1</p>
        </div>

        <div className='flex justify-between w-full gap-2'>
        <p>Poor</p>
        <span>-</span>
        <p>2</p>
        </div>

        <div className='flex justify-between w-full gap-2'>
        <p>Good</p>
        <span>-</span>
        <p>3</p>
        </div>

        <div className='flex justify-between w-full gap-3'>
        <p>VeryGood</p>
        <span>-</span>
        <p>4</p>
        </div>

        <div className='flex justify-between w-full gap-3'>
        <p>Excellent</p>
        <span>-</span>
        <p>5</p>
        </div>
        </div>

        <div className='xl:w-1/3 w-full bg-white rounded-xl flex flex-col gap-2 px-2 py-2'>
        <p>Attendance Overview </p>
        <div className='flex justify-between w-full gap-2'>
        <p>Bad</p>
        <span>-</span>
        <p>1</p>
        </div>

        <div className='flex justify-between w-full gap-2'>
        <p>Poor</p>
        <span>-</span>
        <p>2</p>
        </div>

        <div className='flex justify-between w-full gap-2'>
        <p>Good</p>
        <span>-</span>
        <p>3</p>
        </div>

        <div className='flex justify-between w-full gap-3'>
        <p>VeryGood</p>
        <span>-</span>
        <p>4</p>
        </div>

        <div className='flex justify-between w-full gap-3'>
        <p>Excellent</p>
        <span>-</span>
        <p>5</p>
        </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-4 bg-gray-50 rounded-xl px-2 py-2">
       
        <table className="min-w-full divide-y divide-gray-200">
          
          <thead >
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hardworking</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Player</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sports Activity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Activity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Conduct</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance Record</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
          {currentStudents.map((student, index) => (
              <tr className='pr-1' key={index}>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.name}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.hardworking}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.teamPlayer}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.sportsActivity}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.classActivity}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.classConduct}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.attendaceRecord}</div>
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

export default StudentAssesment
