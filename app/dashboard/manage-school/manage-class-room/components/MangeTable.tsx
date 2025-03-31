"use client"


import Pagination from '@/app/dashboard/teachers/components/Pagination';
import { ChevronsLeft, Edit, Plus, Trash } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import AddClassModal from './AddClassModal';
const MangeTable = () => {
    const initialClassRoom = [
        {
          classRoomName: 'Primary 1 A',
          formTeacher: 'Mrs Tochukwu',
          studentNumber: '25',
          schoolType: 'Primary School',
        },
      ];

      
        const [classRooms, setClassRooms] = useState(initialClassRoom);
        const [searchTerm, setSearchTerm] = useState('');
        const [currentPage, setCurrentPage] = useState(1);
        const classRoomsPerPage = 10;
        const [isModalOpen, setIsModalOpen] = useState(false);

        const indexOfLastCLassRoom= currentPage * classRoomsPerPage;
        const indexOfFirstClassRoom = indexOfLastCLassRoom - classRoomsPerPage;
        const currentClasses = classRooms.slice(indexOfFirstClassRoom, indexOfLastCLassRoom);

        const totalPages = Math.ceil(classRooms.length / classRoomsPerPage);

        const handleSearchChange = (e: { target: { value: string; }; }) => {
            const term = e.target.value.toLowerCase();
            setSearchTerm(term);
            const filteredClasses = initialClassRoom.filter(
              (classRoom) =>
                classRoom.classRoomName.toLowerCase().includes(term) ||
              classRoom.formTeacher.toLowerCase().includes(term) ||
              classRoom.studentNumber.toLowerCase().includes(term) ||
              classRoom.schoolType.toLowerCase().includes(term) 
            );
            setClassRooms(filteredClasses);
          };

           const handlePageChange = (page: React.SetStateAction<number>) => {
              setCurrentPage(page);
            };

            const handleAddClassRoom = (newClassRoom: { schooltype: string; classRoomName: string; className: string; formTeacher: string }) => {
              setClassRooms([...classRooms, { ...newClassRoom, studentNumber: 'N/A', schoolType: newClassRoom.schooltype }]);
          };
      

  return (
    <>
     <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <Link href='/dashboard/manage-school/manage-class' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>Class</p>
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
                    <p className='text-[10px] md:text-md'>Add Classroom</p>
                  </button>

                  <Link href='/dashboard/manage-school/manage-class/mange-class-subects' className="flex  items-center text-blue-500 gap-2 underline">
                                      <p className='text-[10px] md:text-sm'>View Subects</p>
                 </Link>
          </div>

          <AddClassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddClassRoom}
      />
     </div>
        </div>


        <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Room Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form Teacher</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {currentClasses.map((classRoom, index) => (
              <tr className='pr-1' key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{classRoom.classRoomName}</div>
                 
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{classRoom.formTeacher}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{classRoom.studentNumber}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{classRoom.schoolType}</div>
                </td>
                <td className="px-6 flex gap-1 py-4 whitespace-nowrap">
                  <Link href='/dashboard/manage-school/manage-class-room/class-room-detail' className="text-gray-50  flex bg-blue-500 px-3 py-2 rounded-lg mr-4">
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

export default MangeTable
