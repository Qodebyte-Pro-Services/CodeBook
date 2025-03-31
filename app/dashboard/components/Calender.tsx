"use client"; 

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); 
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };


  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null); // Fill empty days at the start of the month
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i); // Add days of the month
  }

  // Handle month navigation
  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  return (
    <div className="bg-white rounded-md p-2 w-full max-w-sm mx-auto shadow-sm">
      {/* Header with Month Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousMonth}
          className="text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-sm font-semibold">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <button
          onClick={handleNextMonth}
          className="text-gray-600 hover:text-gray-900"
        >
          <ChevronRight size={20} />
        </button>
      </div>

     
      <div className="grid grid-cols-7 gap-1 text-xs text-gray-600 font-medium mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="text-center">
            {day}
          </div>
        ))}
      </div>

   
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div
            key={index}
            className={`text-center py-2 rounded-full ${
              day
                ? 'cursor-pointer hover:bg-gray-100'
                : 'text-gray-300'
            } ${
              day === currentDate.getDate() &&
              currentMonth === currentDate.getMonth() &&
              currentYear === currentDate.getFullYear()
                ? 'bg-blue-500 text-white'
                : ''
            }`}
          >
            {day}
          </div>
        ))}
      </div>

    
      <button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-sm font-medium p-2 rounded-md">
        Manage Calendar
      </button>
    </div>
  );
};

export default Calendar;