"use client";

import { CloudUpload } from 'lucide-react';
import React, { HTMLAttributes, ChangeEvent, useRef, useState } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  name?: string;
  type?: string;
  children?: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  value?: string | number | File | string[] | undefined;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  options?: { value: string; label: string }[]; 
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  type = 'text',
  children,
  value,
  placeholder,
  disabled = false,
  className = '',
  onChange,
  options = [],
  ...rest
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      if (onChange) {
        onChange(e);
      }
    } else {
      setSelectedFile(null);
    }
  };

  const inputClassName = `mt-1 outline-none block xl:w-3/3 lg:w-full md:w-1/2 w-full h-[50px] text-gray-950 rounded-md border-[#ADADAD] px-3 border-2 shadow-sm focus:border-blue-400 focus:ring-blue-400 ${
    error ? 'border-red-500' : ''
  } ${className}`;

  if (type === 'select') {
    return (
      <div className="mb-4 w-full">
        {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
        <select
          className={inputClassName}
          value={value as string | number | undefined}
          disabled={disabled}
          onChange={onChange}
          {...rest}
        >
          {children}
        </select>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }

  if (type === 'file') {
    return (
      <div className="mb-4">
        {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
        <div className="mt-1 xl:w-1/2 lg:w-full md:w-1/2 w-full h-[200px] m-auto border-2 border-dashed border-[#ADADAD] rounded-md flex flex-col items-center justify-center p-4">
          {selectedFile ? (
            <div className="text-center">
              <p className="text-sm text-gray-600">File: {selectedFile.name}</p>
            </div>
          ) : (
            <div className="text-center">
              <CloudUpload size={30} className="text-blue-500 m-auto" />
              <p className="text-sm text-gray-600 mt-2">Drag your file(s) to start uploading</p>
              <p className="text-sm text-gray-600">OR</p>
              <button className="bg-[#0A92DD] hover:bg-[#0a93dd79] text-white font-bold py-2 px-4 rounded mt-2" onClick={handleButtonClick}>Browse files</button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                {...rest}
              />
            </div>
          )}
        </div>
        <p className="text-xs text-gray-600 mt-2 text-center">Only support .jpg, .png and .svg and zip files</p>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }

  if (type === 'checkbox') {
    return (
      <div className="mb-4 w-full">
        {label && <label className="block text-sm text-left font-medium text-gray-700 mb-2">{label}</label>}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 space-y-2">
          {options.map((option) => (
            <label key={option.value} className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
                name={rest.name}
                value={option.value}
                checked={Array.isArray(value) ? value.includes(option.value) : false}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  if (onChange) {
                    const customEvent = {
                      ...e,
                      target: {
                        ...e.target,
                        name: rest.name || '',
                        value: option.value,
                        checked: isChecked,
                        type: 'checkbox'
                      }
                    } as unknown as ChangeEvent<HTMLInputElement>;
                    onChange(customEvent);
                  }
                }}
                disabled={disabled}
              />
              <span className="ml-2 text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }

  return (
    <div className="mb-4 w-full">
      {label && <label className="block text-sm font-medium text-left text-gray-700">{label}</label>}
      <input
        type={type}
        className={inputClassName}
        value={value as string | number | undefined}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;