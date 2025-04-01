import React from 'react';
import { Edit, Printer } from 'lucide-react';

const TermlyAssessmentTable = () => {
  const assessments = [
    { subject: 'Geography', quiz: 20, assignment: 30, exam: 60, total: 90, grade: 'A' },
    { subject: 'Geography', quiz: 20, assignment: 30, exam: 60, total: 90, grade: 'A' },
    { subject: 'Geography', quiz: 20, assignment: 30, exam: 60, total: 90, grade: 'A' },
    { subject: 'Geography', quiz: 20, assignment: 30, exam: 60, total: 90, grade: 'A' },
    { subject: 'Geography', quiz: 20, assignment: 30, exam: 60, total: 90, grade: 'A' },
    { subject: 'Geography', quiz: 20, assignment: 30, exam: 60, total: 90, grade: 'A' },
    { subject: 'Geography', quiz: 20, assignment: 30, exam: 60, total: 90, grade: 'A' },
    { subject: 'Geography', quiz: 20, assignment: 30, exam: 60, total: 90, grade: 'A' },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-md w-full overflow-x-auto">
      <div className="flex md:flex-row flex-col justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Termly Assessment</h3>
        <div className="flex items-center gap-4 space-x-2">
        <select className="border rounded px-2 py-1 text-sm">
            <option>Select School Type</option>
          </select>
        <select className="border rounded px-2 py-1 text-sm">
            <option>Select Class</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Select Session</option>
          </select>

          <select className="border rounded-md p-2">
                <option>Select Term</option>
              </select>
          <button className="flex items-center text-sm ">
          <Printer className='text-gray-400' />
           <p> Print</p>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quiz Assessment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assignment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Exam Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assessments.map((assessment, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {index + 1}. {assessment.subject}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{assessment.quiz}</td>
                <td className="px-6 py-4 whitespace-nowrap">{assessment.assignment}</td>
                <td className="px-6 py-4 whitespace-nowrap">{assessment.exam}</td>
                <td className="px-6 py-4 whitespace-nowrap">{assessment.total}</td>
                <td className="px-6 py-4 whitespace-nowrap">{assessment.grade}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Edit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TermlyAssessmentTable;