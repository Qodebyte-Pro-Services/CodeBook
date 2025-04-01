"use client";

import Input from "@/app/dashboard/teachers/add-teacher/compoenent/Input";
import UploadImage from "@/app/dashboard/teachers/add-teacher/compoenent/UploadInput";
import React, { useState } from "react";


interface FileUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { documentName: string; fileName: string; file: File | null }) => void;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({ isOpen, onClose, onSave }) => {
  const [documentName, setDocumentName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSave = () => {
    if (!documentName || !file) {
      alert("Please provide a document name and select a file.");
      return;
    }
    onSave({ documentName, fileName: file.name, file });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Upload Document</h2>
        <Input
          label="Document Name"
          placeholder="Enter document name"
          type="text"
          value={documentName}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setDocumentName(e.target.value)}
        />
        <UploadImage onChange={(file: React.SetStateAction<File | null>) => setFile(file)} />
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUploadModal;