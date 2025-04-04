"use client";

import React from 'react';

interface FormStepsNavigationProps {
  currentStep: number;
  onStepClick: (step: number) => void;
  stepLabels: string[];
  validateStep: (step: number) => boolean;
  completedSteps: boolean[]; 
}

const FormStepsNavigation: React.FC<FormStepsNavigationProps> = ({
  currentStep,
  onStepClick,
  stepLabels,
  validateStep,
  completedSteps, 
}) => {
  return (
    <div className="flex items-center justify-center mb-4">
      {stepLabels.map((label, index) => (
        <React.Fragment key={index}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer mx-2 ${
              currentStep === index + 1
                ? 'bg-blue-500 text-white'
                : completedSteps[index] 
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => {
              if (validateStep(index + 1)) {
                onStepClick(index + 1);
              }
            }}
          >
            {index + 1}
          </div>
          {index < stepLabels.length - 1 && (
            <div className="flex-1 border-b border-gray-300"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FormStepsNavigation;