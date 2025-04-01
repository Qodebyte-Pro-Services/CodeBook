"use client";

import React, { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import { ChevronLeft, Trash } from "lucide-react";
import FileUploadModal from "./FileUploadModal";


const DocumentUpload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documents, setDocuments] = useState([
    { id: 1, documentName: "Medical Certificate", fileName: "Med.doc", status: "Uploaded" },
    { id: 2, documentName: "Birth Certificate", fileName: "Bc.doc", status: "Uploaded" },
  ]);

  const handleAddDocument = (data: { documentName: string; fileName: string; file: File | null }) => {
    const newDocument = {
      id: documents.length + 1,
      documentName: data.documentName,
      fileName: data.fileName,
      status: "Uploaded",
    };
    setDocuments([...documents, newDocument]);
  };

  const handleDeleteDocument = (id: number) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  return (
    <div className="flex-1 md:p-8 overflow-hidden">
      <DashboardHeader />
      <div className="w-full flex flex-col gap-4">
        <div className="bg-white rounded-xl flex w-full py-2 h-[40px] pl-5 items-center gap-2">
          <ChevronLeft />
          <p className="font-medium">Uplaod Documents</p>
        </div>

        <div className="flex flex-col gap-2 w-full bg-white rounded-xl p-4">
          <div className="flex justify-between w-full">
            <h3>Upload School Documents</h3>
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 h-[40px] items-center justify-center text-white bg-blue-400 rounded-xl"
            >
              Upload documents
            </button>
          </div>

          <div className="overflow-x-auto block">
            <table className="min-w-full border border-gray-300 rounded-xl mt-2">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-3 border-b border-gray-300">S/N</th>
                  <th className="px-3 py-3 border-b border-gray-300">Documents</th>
                  <th className="px-3 py-3 border-b border-gray-300">FileName</th>
                  <th className="px-3 py-3 border-b border-gray-300">Status</th>
                  <th className="px-3 py-3 border-b border-gray-300">Action</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {documents.map((doc) => (
                  <tr key={doc.id}>
                    <td className="px-3 py-3 text-center">{doc.id}</td>
                    <td className="px-3 py-3 text-center">{doc.documentName}</td>
                    <td className="px-3 py-3 text-center">{doc.fileName}</td>
                    <td className="px-3 py-3">
                      <div className="p-2 flex justify-center bg-green-500 rounded-lg text-white">
                        {doc.status}
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <button
                        onClick={() => handleDeleteDocument(doc.id)}
                        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        <Trash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <FileUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddDocument}
      />
    </div>
  );
};

export default DocumentUpload;