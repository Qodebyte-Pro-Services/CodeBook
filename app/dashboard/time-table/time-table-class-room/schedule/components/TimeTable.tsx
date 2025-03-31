
import React from 'react';

const TimeTable = () => {
  const tableData = [
    {
      day: 'Monday',
      periods: [
        'Civic Education',
        'Civic Education',
        'Civic Education',
        'Break Time',
        'Civic Education',
        'Civic Education',
      ],
    },
    {
      day: 'Tuesday',
      periods: [
        'Civic Education',
        'Civic Education',
        'Civic Education',
        'Break Time',
        'Civic Education',
        'Civic Education',
      ],
    },
    {
      day: 'Wednesday',
      periods: [
        'Civic Education',
        'Civic Education',
        'Civic Education',
        'Break Time',
        'Civic Education',
        'Civic Education',
      ],
    },
    {
      day: 'Thursday',
      periods: [
        'Civic Education',
        'Civic Education',
        'Civic Education',
        'Break Time',
        'Civic Education',
        'Civic Education',
      ],
    },
    {
      day: 'Friday',
      periods: [
        'Civic Education',
        'Civic Education',
        'Civic Education',
        'Break Time',
        'Civic Education',
        'Civic Education',
      ],
    },
  ];

  const timeSlots = [
    '08:00 AM - 09:00 AM',
    '08:00 AM - 09:00 AM',
    '08:00 AM - 09:00 AM',
    '11:00 AM - 12:00 PM',
    '08:00 AM - 09:00 AM',
    '08:00 AM - 09:00 AM',
  ];

  return (
    <div className="overflow-x-auto  rounded-lg">
      <table className="min-w-full divide-y      divide-blue-600">
        <thead>
          <tr>
            <th className="px-3 py-3 bg-gray-50 border-1 border-blue-600 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            {timeSlots.map((time, index) => (
              <th
                key={index}
                className="px-3 py-3 border-1 border-blue-600 bg-gray-50 text-left text-[10px] w-full font-medium text-gray-500 uppercase tracking-wider"
              >
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-blue-600">
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}> 
              <td className="px-3 py-4 border-1 border-blue-600 whitespace-nowrap">
                <div className="text-sm text-gray-900">{row.day}</div>
              </td>
              {row.periods.map((period, periodIndex) => (
                <td key={periodIndex} className="px-6 py-4 border-1 border-blue-600 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{period}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;