"use client";

import React from "react";

interface Document {
  id: number;
  documentName: string;
  fileName: string;
}

interface StudentDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  documents: Document[];
  onViewDocument: (doc: Document) => void;
}

const StudentDocsModal: React.FC<StudentDocsModalProps> = ({ isOpen, onClose, documents, onViewDocument }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Student Documentsssssssss</h2>
        <div className="overflow-x-auto block">
          <table className="min-w-full border border-gray-300 rounded-xl mt-2">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-3 border-b border-gray-300">S/N</th>
                <th className="px-3 py-3 border-b border-gray-300">Documents</th>
                <th className="px-3 py-3 border-b border-gray-300">FileName</th>
                <th className="px-3 py-3 border-b border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td className="px-3 py-3 text-center">{doc.id}</td>
                  <td className="px-3 py-3 text-center">{doc.documentName}</td>
                  <td className="px-3 py-3 text-center">{doc.fileName}</td>
                  <td className="px-3 py-3 text-center">
                    <button
                      onClick={() => onViewDocument(doc)}
                      className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDocsModal;