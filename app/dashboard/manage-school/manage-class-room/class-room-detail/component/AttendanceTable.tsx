import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import { ChevronsLeft, ChevronsRight } from 'lucide-react'; // Import pagination icons

interface AttendanceRecord {
  studentName: string;
  studentId: string;
  monday: 'present' | 'absent';
  tuesday: 'present' | 'absent';
  wednesday: 'present' | 'absent';
  thursday: 'present' | 'absent';
  friday: 'present' | 'absent';
  date: Date;
}

interface AttendanceTableProps {
  attendanceData: AttendanceRecord[];
  searchTerm: string;
  currentWeek: number;
  selectedMonth: string;
  itemsPerPage: number;
  onWeekChange: (week: number) => void;
}

const AttendanceTable: React.FC<AttendanceTableProps> = ({
  attendanceData,
  searchTerm,
  currentWeek,
  selectedMonth,
  itemsPerPage,
  onWeekChange,
}) => {
  const [filteredData, setFilteredData] = useState<AttendanceRecord[]>(attendanceData);


  useEffect(() => {
    // Filter by search term AND selected month
    const results = attendanceData.filter((record) =>
      (record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.studentId.toLowerCase().includes(searchTerm.toLowerCase())) &&
      record.date.toISOString().slice(0, 7) === selectedMonth
    );
    setFilteredData(results);
  }, [attendanceData, searchTerm, selectedMonth]);

  const getWeekOfMonth = (date: Date): number => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const dayOfMonth = date.getDate();
    return Math.ceil((dayOfMonth + firstDayOfWeek) / 7);
  };

  const startIndex = (currentWeek - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

 
  const currentData = filteredData.filter(record => getWeekOfMonth(record.date) === currentWeek).slice(startIndex, endIndex);

  const totalWeeks = 4; 

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalWeeks; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onWeekChange(i)}
          className={`bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            currentWeek === i ? 'bg-blue-100' : ''
          }`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
    
      <table className="min-w-full divide-y divide-gray-200">
        <thead >
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
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {currentData.map((record, index) => (
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
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <Link className='text-lg text-blue-500' href="dashboard/manage-school/manage-class-room/class-room-detail/student-detail">View Student</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-4 py-3 bg-gray-50 flex min-w-full justify-center items-center">
      <div className="flex items-center">
          <button
            onClick={() => onWeekChange(currentWeek - 1)}
            disabled={currentWeek === 1}
            className="bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>
          <div className="ml-2 w-full flex space-x-1">{renderPaginationButtons()}</div>
          <button
            onClick={() => onWeekChange(currentWeek + 1)}
            disabled={currentWeek === totalWeeks}
            className="bg-white border border-gray-300 rounded-md py-2 px-3 ml-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default AttendanceTable;