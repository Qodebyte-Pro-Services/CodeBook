"use client"
import Pagination from '@/app/dashboard/teachers/components/Pagination';
import { ChevronsLeft, Edit, PlusCircle, Trash } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

interface TableData {
    id: number;
    subjectName: string;
    action: React.ReactNode;
  }

const SubjectSection = () => {
    const initialStudents = [
        {
          name: 'Okoli Qodebyte',
          studentId: 'AGS-1289-QB',
          score:'20', 
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
                        student.score.toLowerCase().includes(term)  
                        
                    );
                    setStudents(filteredStudents);
                  };
                
            
            const handlePageChange = (page: React.SetStateAction<number>) => {
                      setCurrentPage(page);
                    };


    const tableData: TableData[] = [
        { id: 1, subjectName: 'English', action: <div className='flex items-center gap-2'><button className="px-4 py-2 border text-blue-400 border-gray-300 rounded-md"><Edit/></button> <button className="px-4 py-2 border text-red-500 border-red-500 rounded-md"><Trash/></button></div> },
    { id: 2, subjectName: 'Georaphy',  action: <div className='flex items-center gap-2'><button className="px-4 py-2 border text-blue-400 border-gray-300 rounded-md"><Edit/></button> <button className="px-4 py-2 border text-red-500 border-red-500 rounded-md"><Trash/></button></div> },
    { id: 3, subjectName: 'Phonics',  action: <div className='flex items-center gap-2'><button className="px-4 py-2 border text-blue-400 border-gray-300 rounded-md"><Edit/></button> <button className="px-4 py-2 border text-red-500 border-red-500 rounded-md"><Trash/></button></div> },
      ];
    
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
          <p className="font-medium text-sm">Nursery 1A Subjects/ Performance</p>
          <span className="text-gray-700 text-xs">Manage & edit the details of your Classrooms</span>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row w-full gap-3'>
        <div className='lg:w-2/3 w-full py-2 px-2 bg-white rounded-xl '>
            <div className='flex justify-between w-full'>
            <h6>Performance</h6>
            <div className='flex gap-2 text-blue-500'>
            <PlusCircle/>
            Add Subject
            </div>
            </div>
            <div>
      <div className="overflow-y-scroll overflow-x-auto mt-3  max-h-[300px] w-full rounded-md">
        <div className="w-full">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className=" divide-y divide-gray-200">
            {tableData.map((row) => (
              <tr key={row.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{row.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{row.subjectName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm justify-end flex text-gray-900">{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
        </div>
        <div className='lg:w-1/3 w-full py-2 px-2 bg-white rounded-xl '>
        <h6>Grading Scale</h6>
        <div className='mt-3 flex flex-col gap-3'>
            <div className='w-full flex justify-between'>
                <p>A+</p>
                <p>90-100</p>
                <Edit/>
            </div>

            <div className='w-full flex justify-between'>
                <p>A+</p>
                <p>90-100</p>
                <Edit/>
            </div>

            <div className='w-full flex justify-between'>
                <p>A+</p>
                <p>90-100</p>
                <Edit/>
            </div>

            <div className='w-full flex justify-between'>
                <p>A+</p>
                <p>90-100</p>
                <Edit/>
            </div>

            <div className='w-full flex justify-between'>
                <p>A+</p>
                <p>90-100</p>
                <Edit/>
            </div>
        </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-4 bg-gray-50 rounded-xl px-2 py-2">
         <div className='flex  w-full justify-between'>
           <h6>Performance</h6>  
           <div className='flex gap-2 justify-end'>
           <div className='relative'>
           <select className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option>Geography</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
           </div>

      <div className='relative'>
      <select className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option>Exam</option>
            <option>Quiz</option>
            <option>Assignment</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
      </div>
            </div>  
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          
          <thead >
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
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
                  <div className="text-sm text-gray-900">{student.studentId}</div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.score}</div>
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

export default SubjectSection
