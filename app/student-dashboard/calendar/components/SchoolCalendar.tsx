"use client";

import React, { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SchoolCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); 
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const events = [
    { date: "2025-04-01", title: "School Resumption", category: "Big Day", color: "bg-blue-200", textColor: "text-blue-800" },
    { date: "2025-04-01", title: "PTA Meeting", category: "Official Meeting", color: "bg-orange-200", textColor: "text-orange-800" },
    { date: "2025-04-15", title: "Cultural Display", category: "Cultural", color: "bg-pink-200", textColor: "text-pink-800" },
    { date: "2025-05-10", title: "Sports Day", category: "Big Day", color: "bg-blue-200", textColor: "text-blue-800" },
    { date: "2025-05-20", title: "Parent-Teacher Meeting", category: "Official Meeting", color: "bg-orange-200", textColor: "text-orange-800" },
  ];

  const categories = [
    { name: "Big Day", color: "bg-blue-200", textColor: "text-blue-800" },
    { name: "Official Meeting", color: "bg-orange-200", textColor: "text-orange-800" },
    { name: "Cultural", color: "bg-pink-200", textColor: "text-pink-800" },
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(selectedDate === date ? null : date);
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getEventsForDate = (date: string) => {
    return events.filter((event) => event.date === date);
  };

  const renderCalendarDay = (day: number) => {
    if (day <= 0) return null;

    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dayEvents = getEventsForDate(dateStr);

    return (
      <div
        key={day}
        className={`p-1 h-24 border border-gray-200 overflow-hidden ${
          selectedDate === dateStr ? "bg-blue-50 border-blue-300" : "bg-white"
        }`}
        onClick={() => handleDateClick(dateStr)}
      >
        <div className="text-right text-sm font-medium p-1">{day}</div>
        <div className="space-y-1 overflow-y-auto max-h-16">
          {dayEvents.map((event, idx) => (
            <div
              key={idx}
              className={`${event.color} ${event.textColor} text-xs rounded p-1 truncate`}
              title={event.title}
            >
              {event.title}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

  return (
    <div className="flex-1 md:p-8 overflow-hidden">
      <DashboardHeader />
      <div className="w-full flex flex-col gap-4">
       
        <div className="bg-white rounded-xl flex w-full py-2 h-[40px] pl-5 items-center gap-2">
          <ChevronLeft />
          <p className="font-medium">School Activity</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        
          <div className="lg:col-span-3 bg-white rounded-xl p-4">
           
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handlePreviousMonth}
                className="p-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                <ChevronLeft />
              </button>
              <h3 className="font-semibold text-lg">
                {new Date(currentYear, currentMonth).toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h3>
              <button
                onClick={handleNextMonth}
                className="p-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                <ChevronRight />
              </button>
            </div>

           
            <div className="grid grid-cols-7 gap-1 text-center font-semibold text-sm border-b pb-2">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

          
            <div className="grid grid-cols-7 auto-rows-fr gap-1 mt-1">
             
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={index} className="p-1 h-24 border border-gray-200 bg-gray-50"></div>
              ))}

              {Array.from({ length: daysInMonth }).map((_, index) => renderCalendarDay(index + 1))}
            </div>
          </div>

          {/* Agenda Section */}
          <div className="lg:col-span-1 bg-white rounded-xl p-4 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Agenda</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${category.color}`}></span>
                    <span className="text-sm">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div>
                <h3 className="font-semibold mb-2">
                  {new Date(selectedDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h3>
                <div className="space-y-2">
                  {getEventsForDate(selectedDate).length > 0 ? (
                    getEventsForDate(selectedDate).map((event, index) => (
                      <div key={index} className={`${event.color} ${event.textColor} rounded-md p-2`}>
                        <p className="font-medium text-sm">{event.title}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No events for this day</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCalendar;