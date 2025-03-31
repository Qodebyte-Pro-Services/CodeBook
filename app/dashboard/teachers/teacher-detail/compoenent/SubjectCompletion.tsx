import React from 'react';

interface SubjectCompletionProps {
  subjects: {
    name: string;
    completionPercentage: number;
  }[];
}

const SubjectCompletion: React.FC<SubjectCompletionProps> = ({ subjects }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Subject Topic Completion</h2>
      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <div key={index} className="flex items-center">
            <div className="w-3/4 bg-gray-200 rounded h-6 mr-4 relative">
              <div
                className="bg-[#CFCEFF] rounded h-6"
                style={{ width: `${subject.completionPercentage}%` }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-white font-semibold">{subject.completionPercentage}%</span>
              </div>
            </div>
            <span className="w-1/4 text-sm font-medium">{subject.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectCompletion;