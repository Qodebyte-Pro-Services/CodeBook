import React from 'react'


interface TextAreaInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name?: string;
    rows?: number; 
  }

const TextAreaInput: React.FC<TextAreaInputProps> = ({
    label,
    placeholder,
    value,
    onChange,
    name,
    rows = 4,
  }) => {
    return (
        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          rows={rows}
          className="mt-1 block w-full border-gray-300 rounded-md outline-none  shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
        />
      </div>
  )
}

export default TextAreaInput
