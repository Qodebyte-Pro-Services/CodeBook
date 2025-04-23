
import React from 'react';

interface ToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ isEnabled, onToggle }) => {
  return (
    <button
      className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
        isEnabled ? 'bg-blue-600' : 'bg-gray-400'
      }`}
      role="switch"
      aria-checked={isEnabled}
      onClick={onToggle}
    >
      <span className="sr-only">{isEnabled ? 'Enabled' : 'Disabled'}</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200 ${
          isEnabled ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

export default Toggle;