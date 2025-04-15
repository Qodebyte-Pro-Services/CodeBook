import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({ label, options, value, onChange, name, required }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        value={value}
        onChange={onChange}
        name={name} 
        className="mt-1 block w-full border-blue-400 text-gray-950 border-1 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 outline-blue-500"
        required={required}
      >
        {options.map((option) => (
          <option className='text-gray-950' key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;