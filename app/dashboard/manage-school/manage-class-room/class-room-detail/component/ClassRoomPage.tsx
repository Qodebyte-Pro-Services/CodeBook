"use client"

import Pagination from '@/app/dashboard/teachers/components/Pagination'
import CalendarComp from '@/app/dashboard/teachers/teacher-detail/compoenent/CalendarComp'
import { Calendar1, ChevronsLeft, Edit, Ellipsis,  Mail, Phone, Plus, PlusCircle, School, Trash, View } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const ClassRoomPage = () => {

  const initialStudents = [
    {
      name: 'Okoli Qodebyte',
      studentId: 'AGS-1289-QB',
      age:'20',
      gender: 'Male',
      registerdGuardians: '4',
    },

  ];


  const subjects = [
    { id: 1, name: 'Geography' },
    { id: 2, name: 'Civic Education' },
    { id: 3, name: 'Home Economics' },
    { id: 4, name: 'Geography' },
    { id: 5, name: 'English' },
    { id: 6, name: 'Maths' },
    { id: 7, name: 'Physics' },
    { id: 8, name: 'Basic Tech' },
  ];


            const [students, setStudents] = useState(initialStudents);
            const [searchTerm, setSearchTerm] = useState('');
            const [currentPage, setCurrentPage] = useState(1);
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);
            const studentsPerPage = 10;

            const indexOfLastStudent = currentPage * studentsPerPage;
            const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
            const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);
          
            const totalPages = Math.ceil(students.length / studentsPerPage);


            const toggleDropdown = () => {
              setIsDropdownOpen(!isDropdownOpen);
            };

            const handleAssignFormTeacher = () => {
              
              console.log('Assign Form Teacher clicked');
              setIsDropdownOpen(false); 
            };
          


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
          <Link href='/dashboard/manage-school/manage-class-room/class-room-detail/add-sudent' className='flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md'>  
                    <Plus className='text-blue-500' />
                    <p className='text-[10px] md:text-md'>Add Student</p>
          </Link>

        
     </div>
      </div>

      <div className='flex flex-col gap-2 w-full'>
        <div className='flex xl:flex-row flex-col gap-2 w-full '>
        <div className='flex flex-col w-full xl:w-[70%] gap-2'>
          <div className='flex gap-2 flex-col md:flex-row w-full '>
            <div className='flex flex-col gap-2 p-2 lg:w-[60%] md:w-1/2  w-full'>
             <div  className='flex flex-col lg:flex-row gap-2 rounded-lg  bg-[#FFFFFF] p-2  w-full'>
             <div className=' xl:w-1/3 w-1/2 mx-auto h-[139px] '>
                <Image src="/Ellipse-703.png" alt='Profile Iamge'    width={100}
                height={100}
                priority
                className="rounded-full"/>
              </div>

              <div className='flex flex-col gap-3 lg:w-1/2 w-full '>
              <div className='flex  justify-between w-full relative'>
              <h4 className='justify-start text-md '>Nursery 1A</h4>
              <div 
                className='text-blue-500 text-lg cursor-pointer ' 
                onClick={toggleDropdown}
              >
              <Ellipsis/> 
              </div>

              {isDropdownOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white border-2 border-blue-500 rounded-md shadow-md mt-2 w-48 z-10">
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={handleAssignFormTeacher}
                      >
                        Assign Form Teacher
                      </button>
                    </div>
                  )}
              </div>
              <div className='flex flex-row sm:pr-0 pr-5 lg:flex-col xl:gap-3 gap-6 md:justify-between justify-normal'>
              <div className='flex lg:flex-col gap-3'>
              <div className='flex md:gap-5 gap-1 text-[12px] items-center  md:text-sm'>
              <School size={15}/>
             <div>
             <p className='text-sm '>Mr.Qodebyte</p>
             <p className='text-[12px] text-gray-400'>Form Teacher</p>
             </div>
              </div>

              <div className='flex md:gap-5 gap-1 text-[12px] items-center md:text-sm'>
              <Mail size={15}/>
              <div>
             <p className='text-sm '>52</p>
             <p className='text-[12px] text-gray-400'>Number of Students</p>
             </div>
              </div>
              </div>
              </div>
              </div>
             </div>

      <div className=" rounded-lg shadow-md  bg-[#FFFFFF]  p-4 w-full md: lg:w-full  max-h-[400px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Subjects</h2>
        <button className="flex items-center text-blue-500">
          <PlusCircle className="mr-2" />
          Add subjects
        </button>
      </div>

      <div className="overflow-y-auto max-h-64">
        <ul className="space-y-2">
          {subjects.map((subject) => (
            <li key={subject.id} className="flex items-center  justify-between">
              <div className="flex items-center space-x-1">
                <span className="text-gray-600">{subject.id}.</span>
                <span className="text-gray-800">{subject.name}</span>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <Edit />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <Trash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

  
              </div>
            </div>

            <div className='flex flex-col lg:w-[40%] md:w-1/2 w-full gap-2 '>
            <div className='flex flex-col gap-2 rounded-lg bg-[#FFFFFF] p-2  w-full'>
              <div className='relative w-[139px] mx-auto h-[139px] '>
                <Image src="/Ellipse-702.png" alt='Profile Iamge' fill/>
              </div>

              <div className='flex flex-col gap-3 '>
              <div className='flex justify-between'>
              <h4 className='justify-start text-md '>Ekoli Qodebyte</h4>
              <Link className='text-blue-500 text-lg' href='/dashboard/teachers/teacher-detail'>
              <View/> 
              </Link>
              </div>
              <p className='text-[12px] md:text-sm'>
              Hails from Amechi Awkwunanaw, Enugu, 
              Enugu State
              </p>
              <div className='flex flex-col  sm:pr-0 pr-5 lg:flex-col xl:gap-3  gap-1 xl:justify-between justify-normal'>
              <div className='flex flex-col xl:gap-3 md:gap-1 gap-3'>

              <div className='flex xl:gap-5 gap-1 text-[14px] xl:text-sm'>
              <School className='flex lg:hidden xl:flex'/>
              <p>Primary 1C</p>
              </div>

              <div className='flex xl:gap-5 gap-1 text-[14px] xl:text-sm'>
              <Mail className='flex lg:hidden xl:flex'/>
              <p>qodebyte347@gmail.com</p>
              </div>
              </div>
              <div className='flex flex-col gap-3'>
              <div className='flex xl:gap-5 gap-1 text-[14px] xl:text-sm'>
              <Calendar1 className='flex lg:hidden xl:flex'/>
              <p>8 November 2021</p>
              </div>

              <div className='flex xl:gap-5 gap-1 text-[14px]  xl:text-sm'>
              <Phone className='flex lg:hidden xl:flex'/>
              <p>+2349059484839</p>
              </div>
              </div>
              </div>
              </div>
            </div>

                <div className='bg-[#FFFFFF] flex flex-col h-[119px] w-full justify-between rounded-xl'>
                    <div className='flex items-start justify-between p-3 w-full'>
                    <div className='flex flex-row lg:flex-col xl:flex-row xl:gap-3 lg:gap-1 gap-3 justify-center items-center h-full xl:my-4 lg:my-2 my-4 w-[90%]'>
                             <div className='relative w-[34px] h-[34px]'>
                              <Image src='/Frame-1618869711.png' alt='' fill/>
                             </div>

                             <div className='flex flex-col gap-2 text-sm'>
                              <p>298</p>
                              <p className='text-gray-300'>Assignments</p>
                             </div>
                          </div>
                        <Link href='/students'>
                        <Ellipsis />
                        </Link>
                    </div>

                    
                </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full xl:w-[30%] gap-2 bg-[#FFFFFF] rounded-lg pt-1'>
        <CalendarComp/>

        <div className='flex justify-between px-2'>
          <p>Subjects</p>
          <Link href='' className='text-blue-300'>
          <Edit/>
          </Link>
        </div>

        <div className='mt-2 flex flex-col gap-3 p-3 overflow-y-scroll max-h-[264px]'>
        <div className='border-l-blue-900 flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Primary 3c</p>
        <p className='text-gray-950 text-md font-medium'>Basic-Technology</p>
        <p className='text-gray-400 text-sm'>Monday - March 20, 2025 08:00AM</p>
        </div>

        <div className='border-l-[#FF5C00] flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Primary 3c</p>
        <p className='text-gray-950 text-md font-medium'>Basic-Technology</p>
        <p className='text-gray-400 text-sm'>Monday - March 20, 2025 08:00AM</p>
        </div>

        <div className='border-l-[#FFBE66] flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Primary 3c</p>
        <p className='text-gray-950 text-md font-medium'>Basic-Technology</p>
        <p className='text-gray-400 text-sm'>Monday - March 20, 2025 08:00AM</p>
        </div>


        <div className='border-l-[#FFBE66] flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Primary 3c</p>
        <p className='text-gray-950 text-md font-medium'>Basic-Technology</p>
        <p className='text-gray-400 text-sm'>Monday - March 20, 2025 08:00AM</p>
        </div>
        </div>
        </div>
        </div>
        </div>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered Guardian(s)</th>
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
                  <div className="text-sm text-gray-900">{student.age}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.gender}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.registerdGuardians}</div>
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

export default ClassRoomPage
