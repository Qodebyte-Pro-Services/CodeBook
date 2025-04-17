"use client";

import { ChevronsLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import ViewDocumentModal from './ViewDocumentModal';

const DocsComp = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<{
    id: number;
    documentName: string;
    fileName: string;
    status: string;
  } | null>(null);

  const documents = [
    { id: 1, documentName: "Medical Certificate", fileName: "Med.doc", status: "Uploaded" },
    { id: 2, documentName: "Birth Certificate", fileName: "Bc.doc", status: "Pending" },
    { id: 3, documentName: "Transcript", fileName: "Transcript.pdf", status: "Approved" },
    { id: 4, documentName: "ID Card Copy", fileName: "ID_Card.jpg", status: "Rejected" },
  ];

  const handleViewDocument = (doc: { id: number; documentName: string; fileName: string; status: string }) => {
    setSelectedDocument(doc);
    setIsViewModalOpen(true);
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Uploaded":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Approved":
        return "bg-blue-100 text-blue-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className='flex flex-col gap-2 '>
      <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
        <Link href='/dashboard/students/view-session-classes/student-list' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
          <ChevronsLeft />
          <p>Student List</p>
        </Link>
      </div>

      <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
            {[
              { name: "General", href: `/dashboard/students/view-session-classes/student-list/student-detail` },
              { name: "Grades / Performance", href: `/dashboard/students/view-session-classes/student-list/student-detail/grade-performance` },
              { name: "Fee Management", href: `/dashboard/students/view-session-classes/student-list/student-detail/fee-management` },
              { name: "Student Accessment / Review", href: `/dashboard/students/view-session-classes/student-list/student-detail/acessment-reviews` },
              { name: "Documents", href: `/dashboard/students/view-session-classes/student-list/student-detail/documents` },
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
          <p className="font-medium text-sm">Students</p>
          <span className="text-gray-700 text-xs">Manage & edit the details of your students</span>
        </div>
      </div>

      <div className=" w-full  mt-2  flex justify-center items-center ">
        <div className="bg-white p-6 rounded-lg w-full">
          <h2 className="text-lg font-semibold mb-4">Student Documents</h2>
          <div className="overflow-x-auto block">
            <table className="min-w-full border border-gray-300 rounded-xl mt-2">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-3 border-b border-gray-300 text-left">S/N</th>
                  <th className="px-3 py-3 border-b border-gray-300 text-left">Documents</th>
                  <th className="px-3 py-3 border-b border-gray-300 text-left">FileName</th>
                  <th className="px-3 py-3 border-b border-gray-300 text-left">Status</th>
                  <th className="px-3 py-3 border-b border-gray-300 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documents.map((doc) => (
                  <tr key={doc.id}>
                    <td className="px-3 py-3 text-left">{doc.id}</td>
                    <td className="px-3 py-3 text-left">{doc.documentName}</td>
                    <td className="px-3 py-3 text-left">{doc.fileName}</td>
                    <td className="px-3 py-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(doc.status)}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-3 py-3 flex items-center gap-3 text-left">
                      <button
                        onClick={() => handleViewDocument(doc)}
                        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        View
                      </button>

                      <button
                        className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        Approve
                      </button>

                      <button
                        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ViewDocumentModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        document={selectedDocument}
      />

    </div>
  );
};

export default DocsComp;