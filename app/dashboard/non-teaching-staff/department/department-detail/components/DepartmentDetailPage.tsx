"use client"
import Calendar from '@/app/dashboard/components/Calender'
import Pagination from '@/app/dashboard/teachers/components/Pagination'
import { Bell, ChevronsLeft, Edit, Ellipsis, Landmark, Plus, School, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const DepartmentDetailPage = () => {

    const initialNonTeachingStaffs = [
        {
          EmployeeName: 'Okoli Qodebyte',
          EmployeeId: 'AGS-1289-QB',
          jobTitle: 'Librarian',
          gender: 'Male',   
        phone: '08012345678',
        attendanceRecord: '80%',
        },
    
      ];


       const [nonTeachingStaffs, setNonTeachingStaffs] = useState(initialNonTeachingStaffs);
            const [searchTerm, setSearchTerm] = useState('');
            const [currentPage, setCurrentPage] = useState(1);
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
                                  nonTeachingStaff.jobTitle.toLowerCase().includes(term) ||
                                  nonTeachingStaff.phone.toLowerCase().includes(term) ||
                                  nonTeachingStaff.attendanceRecord.toLowerCase().includes(term) ||
                                  nonTeachingStaff.gender.toLowerCase().includes(term)
                              );
                          setNonTeachingStaffs(filteredNonTeachingStaffs);
                      };
              
                      const handlePageChange = (page: React.SetStateAction<number>) => {
                          setCurrentPage(page);
                      };

                      const toggleDropdown = () => {
                        setIsDropdownOpen(!isDropdownOpen);
                      };
          
                      const handleAssignDepartmentHead = () => {
                        
                        console.log('Assign Form Teacher clicked');
                        setIsDropdownOpen(false); 
                      };
        

  return (
    <>
        <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <Link href='/dashboard/non-teaching-staff/department' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>Department</p>
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
          <Link href='/dashboard/non-teaching-staff/department/department-detail' className='flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md'>  
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
             <div  className='flex flex-col gap-2 rounded-lg  bg-[#FFFFFF] p-2  w-full'>
             <div className=' mx-auto h-[139px] '>
                <Image src="/Ellipse-703.png" alt='Profile Iamge'    width={100}
                height={100}
                priority
                className="rounded-full"/>
              </div>

              <div className='flex flex-col gap-3 w-full '>
              <div className='flex  justify-between w-full relative'>
              <h4 className='justify-start text-md '>Administrative Management</h4>
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
                        onClick={handleAssignDepartmentHead}
                      >
                        Assign Department Head
                      </button>
                    </div>
                  )}
              </div>
              <div className='flex flex-row sm:pr-0 pr-5 lg:flex-col xl:gap-3 gap-6 md:justify-between justify-normal'>
              <div className='grid grid-cols-2 gap-3'>
              <div className='flex md:gap-5 gap-1 text-[12px] items-center  md:text-sm'>
              <School size={15}/>
             <div>
             <p className='text-sm '>2347- ABJ-9</p>
             <p className='text-[12px] text-gray-400'>Department Id</p>
             </div>
              </div>

              <div className='flex md:gap-5 gap-1 text-[12px] items-center  md:text-sm'>
              <School size={15}/>
             <div>
             <p className='text-sm '>General</p>
             <p className='text-[12px] text-gray-400'>School Type</p>
             </div>
              </div>


              <div className='flex md:gap-5 gap-1 text-[12px] items-center  md:text-sm'>
              <School size={15}/>
             <div>
             <p className='text-sm '>Mr.Qodebyte</p>
             <p className='text-[12px] text-gray-400'>Department Head</p>
             </div>
              </div>


              </div>
              </div>
              </div>
             </div>

            

            </div>

            <div className='grid md:grid-cols-1 grid-cols-2 gap-2 lg:w-[40%] md:w-1/2 '>
             <div className="flex flex-col bg-white rounded-lg shadow  w-full  justify-between">
              <div className='flex  justify-between p-2 w-full'>
                    <div className='flex flex-row lg:flex-col xl:flex-row xl:gap-3 lg:gap-1 gap-3 justify-center items-center h-full xl:my-4 lg:my-2 my-4 w-[90%]'>
                             <div className='relative w-[34px] h-[34px]'>
                              <Image src='/Frame_1618869711.png' alt='' fill/>
                             </div>

                             <div className='flex flex-col xl:flex-col lg:flex-row  gap-2 text-sm'>
                              <p>532</p>
                              <p className='text-gray-300'>Total Staffs</p>
                             </div>
                          </div>
                        <Link href='/'>
                        <Ellipsis />
                        </Link>
                    </div>
              </div>

              <div className="flex flex-col bg-white rounded-lg shadow   justify-between ">
              <div className='flex  justify-between p-2 w-full'>
                    <div className='flex flex-row lg:flex-col xl:flex-row xl:gap-3 lg:gap-1 gap-3 justify-center items-center h-full xl:my-4 lg:my-2 my-4 w-[90%]'>
                             <div className='relative w-[34px] h-[34px]'>
                              <Image src='/Frame16188ff69711.png' alt='' fill/>
                             </div>

                             <div className='flex flex-col xl:flex-col lg:flex-row gap-2 text-sm'>
                              <p>40</p>
                              <p className='text-gray-300'>New Staffs</p>
                             </div>
                          </div>
                        <Link href='/'>
                        <Ellipsis />
                        </Link>
                    </div>

              </div>
             </div>
          </div>
        </div>
        

        <div className="bg-white rounded-lg p-2 shadow-md w-full xl:w-[30%] ">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Staff in Department</h3>
      </div>
      <div className="relative w-32 h-32 mx-auto mb-1">
        <svg className="w-full mt-3 h-full">
          <circle cx="50%" cy="50%" r="45%" stroke="#E0E7FF" strokeWidth="15" fill="transparent" />
          <circle cx="50%" cy="50%" r="45%" stroke="#6366F1" strokeWidth="15" fill="transparent" strokeDasharray="282.74" strokeDashoffset="113.1" />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="text-2xl font-bold">60%</text>
        </svg>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
        <div className='flex gap-2 items-center'>
      <p className='text-5xl text-blue-500'>•</p>
       <span className="text-sm text-gray-600">Male Staff</span>
       </div>
          <span className="text-sm text-gray-800 flex items-center">50.89%</span>
        </div>
        <div className="flex justify-between">
        <div className='flex gap-2 items-center'>
      <p className='text-5xl text-red-500'>•</p>
       <span className="text-sm text-gray-600">Female Staff</span>
       </div>
          <span className="text-sm text-gray-800 flex items-center">22.79%</span>
        </div>
      </div>
    </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full'>
        <div className='bg-[#FFFFFF]  w-full  rounded-xl p-4 flex flex-col gap-4'> 
           <div className="flex  items-center justify-between">
             <h2 className="text-lg font-semibold">Department Expenses</h2>
             <Link href="" className="text-blue-500 underline">
               View all
             </Link>
           </div>
         
           <div className="flex  items-start w-full gap-2">
             <div className="flex-shrink-0">
               <div className="w-full rounded-full  flex items-center justify-center">
                
                 <span className="text-sm font-semibold text-[#4fe084]"> <Landmark /></span>
               </div>
             </div>
             <div className="flex-1">
               <div className="flex  flex-col justify-between">
                 <span className=" text-gray-500 text-sm">An expense of N25,500 was successfully made for purchase of Text Books (Transaction ID: TXN-567890)</span>
                 <span className="text-xs text-gray-500">November 10, 2025</span>
               </div>
              
             </div>
           </div>
         
           <div className="flex items-start w-full gap-2">
             <div className="flex-shrink-0">
               <div className="w-full rounded-full  flex items-center justify-center">
                 <span className="text-sm font-semibold text-[#4fe084]">
                 <Landmark />
                 </span>
               </div>
             </div>
             <div className="flex-1">
               <div className="flex  flex-col justify-between ">
                 <span className=" text-gray-500 text-sm">An expense of N25,500 was successfully made for purchase of Text Books (Transaction ID: TXN-567890)</span>
                 <span className="text-xs text-gray-500">November 10, 2025</span>
               </div>
             
             </div>
           </div>
        

           <div className="flex items-start w-full gap-2">
             <div className="flex-shrink-0">
               <div className="w-full rounded-full  flex items-center justify-center">
                 <span className="text-sm font-semibold text-[#4fe084]">
                 <Landmark />
                 </span>
               </div>
             </div>
             <div className="flex-1">
               <div className="flex  flex-col justify-between ">
                 <span className=" text-gray-500 text-sm">An expense of N25,500 was successfully made for purchase of Text Books (Transaction ID: TXN-567890)</span>
                 <span className="text-xs text-gray-500">November 10, 2025</span>
               </div>
             
             </div>
           </div>
         </div>

         <div className='bg-[#FFFFFF] rounded-md flex flex-col w-full'>
         <div className='w-full p-3 flex  justify-between '> 
                    <h3 className=''>Notice Board</h3>
                </div>
    <div className="flex flex-col gap-2 p-2 w-full overflow-y-scroll max-h-[300px]" >
      <div className="w-full h-[90px] border-2 border-[#F5F4F9] rounded-md flex gap-2 items-center p-2">
        <div className="w-[30px] h-[41px] bg-[#FFED9F] flex justify-center items-center rounded-md p-2">
          <Bell className="" />
        </div>
        <div className="w-[80%] h-full flex flex-col justify-center overflow-hidden">
  <h3 className="font-bold text-[15px]">Sports Day Announcement</h3>
  <p className="text-[12px]">
    The school&apos;s Annual Sports Day will be held on May 12, 2024. Mark your calendars!
  </p>
</div>
      </div>

      <div className="w-full h-[90px] border-2 border-[#F5F4F9] rounded-md flex gap-2 items-center p-2">
        <div className="w-[30px] h-[41px] bg-[#D6DAFF] flex justify-center items-center rounded-md p-2">
          <Bell className="" />
        </div>
        <div className="w-[80%] h-full flex flex-col justify-center overflow-hidden">
  <h3 className="font-bold text-[15px]">Summer Break Start Date</h3>
  <p className="text-[12px]">
    The school&apos;s Annual Sports Day will be held on May 12, 2024. Mark your calendars!
  </p>
</div>
      </div>

      <div className="w-full h-[90px] border-2 border-[#F5F4F9] rounded-md flex gap-2 items-center p-2">
        <div className="w-[30px] h-[41px] bg-[#D6DAFF] flex justify-center items-center rounded-md p-2">
          <Bell className="" />
        </div>
        <div className="w-[80%] h-full flex flex-col justify-center overflow-hidden">
  <h3 className="font-bold text-[15px]">Summer Break Start Date</h3>
  <p className="text-[12px]">
    The school&apos;s Annual Sports Day will be held on May 12, 2024. Mark your calendars!
  </p>
</div>
      </div>

      <div className="w-full h-[90px] border-2 border-[#F5F4F9] rounded-md flex gap-2 items-center p-2">
        <div className="w-[30px] h-[41px] bg-[#D6DAFF] flex justify-center items-center rounded-md p-2">
          <Bell className="" />
        </div>
        <div className="w-[80%] h-full flex flex-col justify-center overflow-hidden">
  <h3 className="font-bold text-[15px]">Summer Break Start Date</h3>
  <p className="text-[12px]">
    The school&apos;s Annual Sports Day will be held on May 12, 2024. Mark your calendars!
  </p>
</div>
      </div>

      <div className="w-full h-[90px] border-2 border-[#F5F4F9] rounded-md flex gap-2 items-center p-2">
        <div className="w-[30px] h-[41px] bg-[#D6DAFF] flex justify-center items-center rounded-md p-2">
          <Bell className="" />
        </div>
        <div className="w-[80%] h-full flex flex-col justify-center overflow-hidden">
  <h3 className="font-bold text-[15px]">Summer Break Start Date</h3>
  <p className="text-[12px]">
    The school&apos;s Annual Sports Day will be held on May 12, 2024. Mark your calendars!
  </p>
</div>
      </div>
                 </div>

              


        </div>

        <Calendar/>
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Phone </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance Record</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
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
                            {nonTeachingStaff.EmployeeId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.jobTitle}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {nonTeachingStaff.attendanceRecord}
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

export default DepartmentDetailPage
