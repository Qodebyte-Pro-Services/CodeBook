"use client";

import { CloudUpload } from 'lucide-react';
import React, { useState } from 'react';

interface UploadImageProps {
  onChange: (file: File | null) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({ onChange }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file ? file.name : null);
    onChange(file);
  };

  return (
    <div className="border border-dashed border-gray-400 rounded-lg p-8 flex flex-col items-center justify-center">
      <div className="bg-gray-200 rounded-full p-3 mb-4">
      <CloudUpload size={30} className="text-blue-500 m-auto" />
      </div>
      <p className="text-sm text-gray-600 mb-4">
        {fileName || 'Upload a profile picture'}
      </p>
      <label className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm cursor-pointer">
        <span>Select files</span>
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default UploadImage;