"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronsLeft, Edit, Plus, Trash } from 'lucide-react' 
import Pagination from './Pagination';
import axios from 'axios';
import Toast from '@/app/components/Toast';
import { useRouter } from 'next/navigation';


interface Teacher {
  id: string;
  full_name: string;
  email: string;
  gender: string;
}

const TeacherTable = () => {
  const router = useRouter();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "confirm";
    onConfirm?: () => void;
    onCancel?: () => void;
  } | null>(null);

  const teachersPerPage = 5;



  useEffect(() => {
    const fetchTeachers = async () => {
      const authToken = sessionStorage.getItem("authToken");

      try {
        const response = await axios.get("https://sch-mgt-03yw.onrender.com/accounts/teacher/", {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        });
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  const indexOfLastTeacher = currentPage * teachersPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
  const currentTeachers = teachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

  const totalPages = Math.ceil(teachers.length / teachersPerPage);

  const handleSearchChange = (e: { target: { value: string; }; }) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredTeachers = teachers.filter(
      (teacher: Teacher) =>
        teacher.full_name.toLowerCase().includes(term) ||
        teacher.id.toLowerCase().includes(term) ||
        teacher.email.toLowerCase().includes(term) ||
        teacher.gender.toLowerCase().includes(term)
    );
    setTeachers(filteredTeachers);
  };

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const handleDelete = (teacherId: string) => {
    setToast({
      message: "Are you sure you want to delete this teacher?",
      type: "confirm",
      onConfirm: async () => {
        const authToken = sessionStorage.getItem("authToken");

        try {
          await axios.delete(`https://sch-mgt-03yw.onrender.com/accounts/teacher/${teacherId}/`, {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          });

          setToast({
            message: "Teacher deleted successfully!",
            type: "success",
          });

         
          setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.id !== teacherId));
        } catch (error) {
          console.error("Error deleting teacher:", error);
          setToast({
            message: "Failed to delete teacher. Please try again.",
            type: "error",
          });
        }
      },
      onCancel: () => {
        setToast(null);
      },
    });
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {currentTeachers.map((teacher: Teacher, index: number) => (
              <tr
                key={index}
                className="pr-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => router.push(`/dashboard/teachers/teacher-detail/${teacher.id}`)} 
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onClick={(e) => e.stopPropagation()} 
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.full_name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.gender}</div>
                </td>
                <td className="px-6 flex gap-1 py-4 whitespace-nowrap">
                  <Link
                    href={`/dashboard/teachers/teacher-detail/${teacher.id}`}
                    className="text-gray-50 flex bg-blue-500 px-3 py-2 rounded-lg mr-4"
                    onClick={(e) => e.stopPropagation()} // Prevent row click when interacting with the edit button
                  >
                    <Edit />
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent row click when interacting with the delete button
                      handleDelete(teacher.id);
                    }}
                    className="text-gray-50 flex bg-red-500 px-3 py-2 rounded-lg mr-4"
                  >
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

{toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onConfirm={toast.onConfirm}
          onCancel={toast.onCancel}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default TeacherTable;