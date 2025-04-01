"use client";

import { ChevronsLeft } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import StudentInfoCard from './StudentInfoCard'
import FeesPaymentChart from './FeesPaymentChart'
import ParentInfoCard from './ParentInfoCard'
import AttendanceCard from './AttendanceCard'
import UnpaidFeesCard from './UnpaidFeesCard'
import TermlyAssessmentTable from './TermlyAssessmentTable'
import StudentDocsModal from './StudentDocsModal';
import ViewDocumentModal from './ViewDocumentModal';

const StudentDetailPage = () => {
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<{
    id: number;
    documentName: string;
    fileName: string;
  } | null>(null);

  const documents = [
    { id: 1, documentName: "Medical Certificate", fileName: "Med.doc" },
    { id: 2, documentName: "Birth Certificate", fileName: "Bc.doc" },
  ];

  const handleViewDocument = (doc: { id: number; documentName: string; fileName: string }) => {
    setSelectedDocument(doc);
    setIsViewModalOpen(true);
  };

  return (
    <>
       <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <Link href='/dashboard/manage-school/manage-class-room/class-room-detail' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>ClassRoom Detail</p>
          </Link>

          <button
          onClick={() => setIsDocsModalOpen(true)}
          className="flex gap-2 bg-blue-500 px-2 rounded-xl text-white items-center md:text-md text-[12px]"
        >
          <p>View Student Docs</p>
        </button>
        
      </div>

      <div className="p-4 flex-col flex gap-3  w-full"> 
    
      <div className=" w-full flex flex-col xl:flex-row gap-3 xl:gap-0 justify-between">  
        <div className="xl:w-[33%] w-full flex gap-3 flex-col">
          <StudentInfoCard />
      <div className="w-full md:flex-row flex flex-col gap-2 "> 
       <div className="xl:w-1/2 w-full">
         <AttendanceCard />
       </div>
       <div className="xl:w-1/2 w-full">
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
        <TermlyAssessmentTable />
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
