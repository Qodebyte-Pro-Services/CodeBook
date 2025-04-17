import React from 'react';
import { Check, X } from 'lucide-react';

interface AttendanceRecord {
  studentName: string;
  studentId: string;
  monday: 'present' | 'absent';
  tuesday: 'present' | 'absent';
  wednesday: 'present' | 'absent';
  thursday: 'present' | 'absent';
  friday: 'present' | 'absent';
}

const AttendanceTable: React.FC = () => {
  const attendanceData: AttendanceRecord[] = [
    {
      studentName: 'Qodebyte Egunmekpon',
      studentId: '23546-ABJ-9',
      monday: 'present',
      tuesday: 'present',
      wednesday: 'present',
      thursday: 'present',
      friday: 'absent',
    },
    
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-700">Attendance Record</h2>
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option>April 2025</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student ID
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mon
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tue
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Wed
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Thu
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fri
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {record.studentName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {record.studentId}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
              {record.monday === 'present' ?  <div className='w-10 h-10 mx-auto rounded-full bg-blue-300 items-center justify-center flex'>
                <Check className="text-white" /> 
                </div>: <div className='w-10 h-10 mx-auto rounded-full bg-red-500 items-center justify-center flex'><X className="text-white" /></div>}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {record.tuesday === 'present' ? <div className='w-10 h-10 mx-auto rounded-full bg-blue-300 items-center justify-center flex'>
                <Check className="text-white" /> 
                </div>: <div className='w-10 h-10 mx-auto rounded-full bg-red-500 items-center justify-center flex'><X className="text-white" /></div>}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {record.wednesday === 'present' ? <div className='w-10 h-10 mx-auto rounded-full bg-blue-300 items-center justify-center flex'>
                <Check className="text-white" /> 
                </div>: <div className='w-10 h-10 mx-auto rounded-full bg-red-500 items-center justify-center flex'><X className="text-white" /></div>}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {record.thursday === 'present' ? <div className='w-10 h-10 mx-auto rounded-full bg-blue-300 items-center justify-center flex'>
                <Check className="text-white" /> 
                </div>: <div className='w-10 h-10 mx-auto rounded-full bg-red-500 items-center justify-center flex'><X className="text-white" /></div>}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {record.friday === 'present' ? <div className='w-10 h-10 mx-auto rounded-full bg-blue-300 items-center justify-center flex'>
                <Check className="text-white" /> 
                </div>: <div className='w-10 h-10 mx-auto rounded-full bg-red-500 items-center justify-center flex'><X className="text-white" /></div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-4 py-3 bg-gray-50 flex min-w-full justify-center  items-center">
        <div className="flex  items-center">
         
          <div className="ml-2 w-full flex space-x-1">
            <button className="bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">1</button>
            <button className="bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">2</button>
            <button className="bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">3</button>
            <button className="bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">4</button>
          </div>

        </div>
      
      </div>
    </div>
  );
};

export default AttendanceTable;