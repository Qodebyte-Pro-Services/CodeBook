"use client";

import { ChevronsLeft } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import StudentInfoCard from './StudentInfoCard'
import FeesPaymentChart from './FeesPaymentChart'
import ParentInfoCard from './ParentInfoCard'
import UnpaidFeesCard from './UnpaidFeesCard'
import StudentDocsModal from './StudentDocsModal';
import ViewDocumentModal from './ViewDocumentModal';
import AttendanceTable from './AttendanceTable';

const StudentDetailPage = () => {
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<{
    id: number;
    documentName: string;
    fileName: string;
    status: string;
  } | null>(null);

  const documents = [
    { id: 1, documentName: "Medical Certificate", fileName: "Med.doc" , status: "Uploaded" },
    { id: 2, documentName: "Birth Certificate", fileName: "Bc.doc", status: "Uploaded" },
  ];

  const handleViewDocument = (doc: { id: number; documentName: string; fileName: string;status: string; }) => {
    setSelectedDocument(doc);
    setIsViewModalOpen(true);
  };

  return (
    <>
       <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <Link href='/dashboard/manage-school/manage-class-room/class-room-detail/students' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>Student List</p>
          </Link>

          <button
          onClick={() => setIsDocsModalOpen(true)}
          className="flex gap-2 bg-blue-500 px-2 rounded-xl text-white items-center md:text-md text-[12px]"
        >
          <p>View Student Docs</p>
        </button>
        
      </div>


      <div className="bg-white mt-2 rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
        <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
  {[
    { name: "General", href: `/dashboard/manage-school/manage-class-room/class-room-detail/students/student-detail` },
    { name: "Grades / Performance", href: `/dashboard/manage-school/manage-class-room/class-room-detail/students/student-detail/grade-performance` },
    { name: "Fee Management", href: `/dashboard/manage-school/manage-class-room/class-room-detail/students/student-detail/fee-management` },
    { name: "Student Accessment / Review", href: `/dashboard/manage-school/manage-class-room/class-room-detail/students/student-detail/acessment-reviews` },
    { name: "Documents", href: `/dashboard/manage-school/manage-class-room/class-room-detail/students/student-detail/documents` },
  
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
          <p className="font-medium text-sm">General</p>
          <span className="text-gray-700 text-xs">Manage & edit the details of your students</span>
        </div>
      </div>
      

      <div className="p-4 flex-col mt-2 flex gap-3  w-full"> 
    
      <div className=" w-full flex flex-col xl:flex-row gap-3 xl:gap-0 justify-between">  
        <div className="xl:w-[33%] w-full flex gap-3 flex-col">
          <StudentInfoCard />
      <div className="w-full md:flex-row flex flex-col gap-2 "> 
       <div className=" w-full">
         <UnpaidFeesCard />
       </div>
     </div>
        </div>
        <div className="xl:w-[33%] w-full">
          <FeesPaymentChart />
        </div>
        <div className="xl:w-[33%] w-full">
          <ParentInfoCard />
        </div>
      </div>
     
      <div className="col-span-3">
      <AttendanceTable/>
      </div>
      </div>

    <StudentDocsModal
        isOpen={isDocsModalOpen}
        onClose={() => setIsDocsModalOpen(false)}
        documents={documents}
        onViewDocument={handleViewDocument}
      />

    <ViewDocumentModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        document={selectedDocument}
      />
    </>
  )
}

export default StudentDetailPage
