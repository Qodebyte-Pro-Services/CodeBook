"use client"
import { Calendar1, ChevronsLeft,  Ellipsis,  Mail, Phone,  School, Users, View } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import AttendanceTable from './AttendanceTable'

interface AttendanceRecord {
  studentName: string;
  studentId: string;
  monday: 'present' | 'absent';
  tuesday: 'present' | 'absent';
  wednesday: 'present' | 'absent';
  thursday: 'present' | 'absent';
  friday: 'absent' | 'present';
  date: Date; 
}

const ClassRoomPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleAssignFormTeacher = () => {
    console.log('Assign Form Teacher clicked');
    setIsDropdownOpen(false);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const [currentWeek, setCurrentWeek] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7)); 
  const itemsPerPage = 4;

 
  const attendanceData: AttendanceRecord[] = [
    { studentName: 'Qodebyte Egunmekpon', studentId: '23546-ABJ-9', monday: 'present', tuesday: 'present', wednesday: 'present', thursday: 'present', friday: 'absent', date: new Date('2025-04-01') },
    { studentName: 'John Doe', studentId: '12345-XYZ-1', monday: 'absent', tuesday: 'present', wednesday: 'absent', thursday: 'present', friday: 'present', date: new Date('2025-04-08') },
    { studentName: 'Jane Smith', studentId: '67890-ABC-2', monday: 'present', tuesday: 'absent', wednesday: 'present', thursday: 'absent', friday: 'absent', date: new Date('2025-04-15') },
    { studentName: 'Peter Jones', studentId: '11223-DEF-3', monday: 'absent', tuesday: 'absent', wednesday: 'absent', thursday: 'absent', friday: 'present', date: new Date('2025-04-22') },
    { studentName: 'Alice Williams', studentId: '44556-GHI-4', monday: 'present', tuesday: 'present', wednesday: 'present', thursday: 'present', friday: 'present', date: new Date('2025-04-29') },
    { studentName: 'Bob Brown', studentId: '77889-JKL-5', monday: 'absent', tuesday: 'present', wednesday: 'absent', thursday: 'present', friday: 'absent', date: new Date('2025-05-01') }, 
    { studentName: 'Charlie Davis', studentId: '99001-MNO-6', monday: 'present', tuesday: 'absent', wednesday: 'present', thursday: 'absent', friday: 'present', date: new Date('2025-05-08') }, 
    { studentName: 'David Wilson', studentId: '22334-PQR-7', monday: 'absent', tuesday: 'absent', wednesday: 'absent', thursday: 'absent', friday: 'absent', date: new Date('2025-05-15') }, 
    { studentName: 'Emily Taylor', studentId: '55667-STU-8', monday: 'present', tuesday: 'present', wednesday: 'present', thursday: 'present', friday: 'present', date: new Date('2025-05-22') }, 
  ];


  const handleWeekChange = (newWeek: number) => {
    setCurrentWeek(newWeek);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
    setCurrentWeek(1); 
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
                placeholder="Search by, student name Name or School Id"
                required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
          <p className="font-medium text-sm">Nursery 1A</p>
          <span className="text-gray-700 text-xs">Manage & edit the details of your Classrooms</span>
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full'>
        <div className='flex xl:flex-row flex-col gap-2 w-full '>
        <div className='flex flex-col w-full  gap-2'>
          <div className='flex gap-2 flex-col md:flex-row w-full '>
            <div className='flex flex-col gap-2 p-2  xl:w-1/2 w-full'>
             <div  className='flex flex-col xl:flex-row xl:justify-between rounded-lg  bg-[#FFFFFF] p-2  w-full'>
             <div className=' '>
                <Image src="/Ellipse-703.png" alt='Profile Iamge'    width={100}
                height={100}
                priority
                className="rounded-full"/>
              </div>

              <div className='flex flex-col gap-3 justify-end xl:w-2/3 '>
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
              <div className='flex flex-row  sm:pr-0 pr-5 xl:flex-col xl:gap-3 gap-6 md:justify-between justify-normal'>
              <div className='grid w-full grid-cols-2  gap-2'>
              <div className='flex flex-col  gap-1 text-lg'>
             <div className='flex gap-2  justify-start'>
             <School size={15}/>
             <p className='text-sm text-gray-400'>Form Teacher</p>
             </div>
             <div className='flex justify-start'>
             
             <p className='text-sm '>Mr.Qodebyte</p>
             </div>
              </div>

              <div className='flex flex-col  gap-1 text-lg'>
                  <div className='flex gap-2 justify-end'>
                  <Users size={15}/>
                  <p className='text-sm text-gray-400'>No of Students</p>
                  </div>
              <div className='flex justify-end'>
              
             <p className='text-sm '>52</p>
             </div>
              </div>

              <div className='flex flex-col  gap-1 text-lg'>
                  <div className='flex gap-2 justify-start'>
                  <Users size={15}/>
                  <p className='text-sm text-gray-400'>Boys</p>
                  </div>
              <div className='flex justify-start'>
              
             <p className='text-sm '>52</p>
             </div>
              </div>


              <div className='flex flex-col  gap-1 text-lg'>
                  <div className='flex gap-2 justify-end'>
                  <Users size={15}/>
                  <p className='text-sm text-gray-400'>Girls</p>
                  </div>
              <div className='flex justify-end'>
              
             <p className='text-sm '>52</p>
             </div>
              </div>
              </div>
              </div>
              </div>
             </div>
            </div>

            <div className='flex flex-col xl:w-1/2 w-full gap-2 '>
            <div className='flex xl:flex-row flex-col gap-2 rounded-lg bg-[#FFFFFF] p-2  xl:justify-between w-full'>
              <div className=' '>
                <Image src="/Ellipse-702.png" alt='Profile Iamge' width={100} height={100} />
              </div>

              <div className='flex xl:w-2/3 flex-col xl:gap-3  '>
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
              <div className='flex flex-col w-full sm:pr-0 pr-5 lg:flex-col xl:gap-3  gap-1 xl:justify-between justify-normal'>
              <div className='flex flex-row w-full  xl:gap-3 md:gap-2 gap-3'>
              <div className='flex flex-col w-1/2  gap-1 text-[14px] xl:text-sm'>
             <div className='flex justify-start gap-2'>
             <Mail className='flex'/>
             Email
             </div>
              <p>qodebyte347@gmail.com</p>
              </div>

              <div className='flex flex-col w-1/2  gap-1 text-[14px] xl:text-sm'>
              <div className='flex gap-2 justify-end'>
              <Calendar1 className='flex'/>
              <p>Date assigned</p>
              </div>
             <div className='flex justify-end'>
             
             <p>12/3/2025</p>
             </div>
              </div>


              </div>
              <div className='flex flex-row  w-full xl:gap-3 md:gap-2 gap-3'>
              <div className='flex flex-col w-1/2 gap-1 text-[14px] xl:text-sm'>
              <div className='flex gap-2 justify-start'>
              <Phone className='flex gap-2'/>
              Phone number
              </div>
              <p>123456789</p>
              </div>

              <div className='flex w-1/2 flex-col gap-1 text-[14px] xl:text-sm'>
              <div className='flex gap-2 justify-end'>
              <Calendar1 className='flex'/>
              <p>Date of Birth</p>
              </div>
             <div className='flex justify-end'>
             
             <p>12/3/2025</p>
             </div>
              </div>


              </div>
             
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
      
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">Attendance Record</h2>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="month-select"
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              <option value="2025-01">January 2025</option>
              <option value="2025-02">February 2025</option>
              <option value="2025-03">March 2025</option>
              <option value="2025-04">April 2025</option>
              <option value="2025-05">May 2025</option>
             
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-4 bg-gray-50 p-2 rounded-xl">
        <AttendanceTable
          attendanceData={attendanceData}
          searchTerm={searchTerm}
          currentWeek={currentWeek}
          selectedMonth={selectedMonth} 
          itemsPerPage={itemsPerPage}
          onWeekChange={handleWeekChange} 
        />
      </div>

    </>
  )
}

export default ClassRoomPage
