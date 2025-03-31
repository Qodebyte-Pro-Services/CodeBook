"use client"


import { Edit,  Plus,  Trash } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Pagination from '../../../teachers/components/Pagination'

const SubjectTable   = () => {

  const initialSubjects = [
    {
      subjectName: "Mathematics",
      subjectId: "1",
      schoolType: "Primary",
      assessmentCriteria: "Test, Exam",
    },
  ];



   const [subjects, setSubjects] = useState(initialSubjects);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const subjectsPerPage = 5;

  const indexOfLastSubject = currentPage * subjectsPerPage;
  const indexOfFirstSubject = indexOfLastSubject - subjectsPerPage;
  const currentSubjects = subjects.slice(indexOfFirstSubject, indexOfLastSubject);

  const totalPages = Math.ceil(subjects.length / subjectsPerPage);

  const handleSearchChange = (e: { target: { value: string } }) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredSubjects = initialSubjects.filter(
      (subject) =>
        subject.subjectName.toLowerCase().includes(term) ||
        subject.subjectId.toLowerCase().includes(term) ||
        subject.schoolType.toLowerCase().includes(term) ||
        subject.assessmentCriteria.toLowerCase().includes(term) 
    );
    setSubjects(filteredSubjects);
  };
  
    const handlePageChange = (page: React.SetStateAction<number>) => {
      setCurrentPage(page);
    };
  return (
    <>
       <div className="w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
      <Link
            href="/dashboard/manage-school/school-detail/add-subjects"
            className="flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md"
          >
            <Plus className="text-blue-500" />
            <p className="text-[10px] md:text-md">Add Subject</p>
      </Link>
      <div className="flex gap-3 w-1/2 items-center justify-end text-md">
          <form className="mx-auto w-1/2">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 0 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-none"
                placeholder="Search by Subject Name, Code, or Teacher"
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject Name
              </th>
            
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                School Type
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assement Criteria
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentSubjects.map((subject, index) => (
              <tr className="pr-1" key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{subject.subjectId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{subject.subjectName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{subject.schoolType}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{subject.assessmentCriteria}</div>
                </td>
                <td className="px-6 flex gap-1 py-4 whitespace-nowrap">
                  <Link
                    href="/dashboard/manage-school/school-detail/subject-detail"
                    className="text-gray-50 flex bg-blue-500 px-3 py-2 rounded-lg mr-4"
                  >
                    <Edit />
                  </Link>
                  <button className="text-gray-50 flex bg-blue-500 px-3 py-2 rounded-lg mr-4">
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
  )
}

export default SubjectTable
