"use client";

import React from "react";

interface ViewDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: { id: number; documentName: string; fileName: string; status:string } | null;
}

const ViewDocumentModal: React.FC<ViewDocumentModalProps> = ({ isOpen, onClose, document }) => {
  if (!isOpen || !document) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">View Document</h2>
        <p className="mb-2">
          <strong>Document Name:</strong> {document.documentName}
        </p>
        <p className="mb-4">
          <strong>File Name:</strong> {document.fileName}
        </p>
        <p className="mb-4">
          <strong>Status:</strong> {document.status}
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-500">[Document content preview here]</p>
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

export default ViewDocumentModal;