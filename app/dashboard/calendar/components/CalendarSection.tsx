"use client";

import React, { useState } from 'react';
import DashboardHeader from "../../components/DashboardHeader";
import { ChevronLeft, ChevronRight, Plus, ChevronsLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AddEventModal from "./AddEventModal";
import Toast from '@/app/components/Toast';
import { createRoot } from 'react-dom/client';

interface Event {
    title: string;
    startDate: Date;
    endDate: Date;
    color: string;
    description: string;
    startTime: string;
    closingTime: string;
}

const CalendarSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [eventToEdit, setEventToEdit] = useState<Event | null>(null);
    const [selectedSchool, setSelectedSchool] = useState('Primary School');
    const [highlightedEvent, setHighlightedEvent] = useState<Event | null>(null);
    const [events, setEvents] = useState<Event[]>([
        {
            title: "School Resumption",
            startDate: new Date(2025, 3, 1),
            endDate: new Date(2025, 3, 1),
            color: "#f59e0b",
            description: "First day of school",
            startTime: "08:00",
            closingTime: "12:00"
        },
        {
            title: "PTA Meeting",
            startDate: new Date(2025, 3, 1),
            endDate: new Date(2025, 3, 1),
            color: "#3b82f6",
            description: "Parent-teacher meeting",
            startTime: "14:00",
            closingTime: "16:00"
        },
        {
            title: "Quiz & Examinations",
            startDate: new Date(2025, 3, 7),
            endDate: new Date(2025, 3, 14),
            color: "#8b5cf6",
            description: "Mid term quizzes for all classes",
            startTime: "09:00",
            closingTime: "14:00"
        },
        {
            title: "Cultural Display",
            startDate: new Date(2025, 3, 15),
            endDate: new Date(2025, 3, 16),
            color: "#ec4899",
            description: "Cultural day celebration",
            startTime: "10:00",
            closingTime: "15:00"
        },
        {
            title: "Examinations",
            startDate: new Date(2025, 3, 19),
            endDate: new Date(2025, 3, 22),
            color: "#f59e0b",
            description: "End of term examinations",
            startTime: "08:00",
            closingTime: "12:00"
        },
    ]);

  

    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month: number, year: number) => {
        return new Date(year, month, 1).getDay();
    };

    

    const handleEventColorClick = (event: Event) => {
      setCurrentMonth(event.startDate.getMonth());
      setCurrentYear(event.startDate.getFullYear());
      setSelectedDate(new Date(event.startDate));
      setHighlightedEvent(event);
  };

  const getDayStyle = (date: Date) => {
    const currentDateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());

   
    if (highlightedEvent) {
        const eventStartDate = new Date(
            highlightedEvent.startDate.getFullYear(),
            highlightedEvent.startDate.getMonth(),
            highlightedEvent.startDate.getDate()
        );
        const eventEndDate = new Date(
            highlightedEvent.endDate.getFullYear(),
            highlightedEvent.endDate.getMonth(),
            highlightedEvent.endDate.getDate()
        );

        if (currentDateOnly >= eventStartDate && currentDateOnly <= eventEndDate) {
            return {
                backgroundColor: highlightedEvent.color,
                color: '#FFFFFF',
                border: '2px solid white',
            };
        }
    }

   
    const eventOnThisDate = events.find(event => {
        const eventStartDate = new Date(
            event.startDate.getFullYear(),
            event.startDate.getMonth(),
            event.startDate.getDate()
        );
        return currentDateOnly.getTime() === eventStartDate.getTime();
    });

    if (eventOnThisDate) {
        return {
            backgroundColor: eventOnThisDate.color,
            color: '#FFFFFF',
            border: '2px solid white',
        };
    }

    
    return {};
};



const handleDateClick = (date: Date) => {
    
    const eventOnThisDate = events.find(event => {
      const eventStartDate = new Date(
        event.startDate.getFullYear(),
        event.startDate.getMonth(),
        event.startDate.getDate()
      );
      return date.getTime() === eventStartDate.getTime();
    });
  
    
    const eventInRange = events.find(event => {
      const eventStartDate = new Date(
        event.startDate.getFullYear(),
        event.startDate.getMonth(),
        event.startDate.getDate()
      );
      const eventEndDate = new Date(
        event.endDate.getFullYear(),
        event.endDate.getMonth(),
        event.endDate.getDate()
      );
      return date >= eventStartDate && date <= eventEndDate;
    });
  

    const toastContainer = document.createElement("div");
    document.body.appendChild(toastContainer);
    const root = createRoot(toastContainer);
  
    const handleConfirm = () => {
      if (eventOnThisDate || eventInRange) {
        setHighlightedEvent(eventOnThisDate || eventInRange || null); 
      } else {
        setHighlightedEvent(null); 
        setSelectedDate(date);
        setIsModalOpen(true); 
      }
      document.body.removeChild(toastContainer);
    };
  
    const handleCancel = () => {
      setHighlightedEvent(null);
      setSelectedDate(date);
      setIsModalOpen(true); 
      document.body.removeChild(toastContainer);
    };
  
    root.render(
      <Toast
        message={
          eventOnThisDate
            ? `An event already exists on this date: "${eventOnThisDate.title}".\n\nDo you want to view the event details and highlight its range?`
            : eventInRange
            ? `This date falls within the range of an existing event: "${eventInRange.title}".\n\nDo you want to view the event details or add another event?`
            : `No event exists on this date.\n\nDo you want to add a new event?`
        }
        type="confirm"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    );
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

    const handleToday = () => {
        const today = new Date();
        setCurrentMonth(today.getMonth());
        setCurrentYear(today.getFullYear());
        setSelectedDate(today);
    };

    const getEventsForDate = (date: Date) => {
        const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return events.filter(event => {
            const eventStart = new Date(event.startDate.getFullYear(), event.startDate.getMonth(), event.startDate.getDate());
            const eventEnd = new Date(event.endDate.getFullYear(), event.endDate.getMonth(), event.endDate.getDate());
            return dateOnly >= eventStart && dateOnly <= eventEnd;
        });
    };

    const handleAddEvent = (eventData: {
        title: string;
        description: string;
        startDate: Date;
        endDate: Date;
        startTime: string;
        closingTime: string;
        color: string;
    }) => {
        setEvents([...events, eventData as Event]);
        setIsModalOpen(false);
    };

    const handleUpdateEvent = (oldEvent: Event, newEvent: Event) => {
        setEvents(events.map(e => e === oldEvent ? newEvent : e));
        setIsModalOpen(false);
        setEventToEdit(null);
    };

    const handleEventEdit = (event: Event) => {
        setEventToEdit(event);
        setIsModalOpen(true);
    };

    const formatTime = (timeString: string) => {
        const [hours, minutes] = timeString.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'pm' : 'am';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    };

    const formatDateForInput = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const renderCalendarDay = (day: number) => {
      const date = new Date(currentYear, currentMonth, day);
      const dayEvents = getEventsForDate(date);
      const dayStyle = getDayStyle(date);
  
      return (
          <div
              key={day}
              className={`p-1 h-24 border border-gray-200 overflow-hidden ${
                  selectedDate && date.toDateString() === selectedDate.toDateString()
                      ? 'ring-2 ring-blue-500'
                      : ''
              }`}
              style={dayStyle}
              onClick={() => handleDateClick(date)}
          >
              <div className="text-right text-sm font-medium p-1">{day}</div>
              <div className="space-y-1 overflow-y-auto max-h-16">
                  {dayEvents.map((event, idx) => (
                      <div
                          key={idx}
                          className={`${event.color} text-white text-xs rounded p-1 truncate`}
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
           
                <div className='w-full bg-white h-[60px] py-2 px-4 flex rounded-lg justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <ChevronsLeft />
                        <p className="font-bold text-lg">Schools Calendar</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 rounded-lg px-4 py-2 bg-blue-50 text-blue-600"
                        >
                            <Plus className="text-blue-600" />
                            <p>Add School Event</p>
                        </button>
                        <Link href='/dashboard/calendar/view-events' className='text-blue-600 underline'>
                            View School Events
                        </Link>
                    </div>
                </div>

               
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    
                    <div className="lg:col-span-3 bg-white rounded-xl p-4">
                       
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-3">
                                <button onClick={handlePreviousMonth} className="p-2 rounded hover:bg-gray-100">
                                    <ChevronLeft />
                                </button>
                                <button onClick={handleToday} className="text-sm hover:bg-gray-100 px-3 py-1 rounded">
                                    Today
                                </button>
                                <button onClick={handleNextMonth} className="p-2 rounded hover:bg-gray-100">
                                    <ChevronRight />
                                </button>
                            </div>

                            <h3 className="font-semibold text-lg">
                                {new Date(currentYear, currentMonth).toLocaleString("default", {
                                    month: "long",
                                    year: "numeric",
                                })}
                            </h3>

                            <select 
                                value={selectedSchool} 
                                onChange={(e) => setSelectedSchool(e.target.value)} 
                                className="p-1 outline-none border rounded"
                            >
                                <option value="Primary School">Primary School</option>
                                <option value="Secondary School">Secondary School</option>
                            </select>
                        </div>

                       
                        <div className="grid grid-cols-7 gap-1 text-center font-semibold text-sm border-b pb-2">
                            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                                <div key={day}>{day}</div>
                            ))}
                        </div>

                        
                        <div className="grid grid-cols-7 auto-rows-fr gap-1 mt-1">
                        
                            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                                <div key={`empty-${index}`} className="p-1 h-24 border border-gray-200 bg-gray-50"></div>
                            ))}

                           
                            {Array.from({ length: daysInMonth }, (_, i) => renderCalendarDay(i + 1))}
                        </div>
                    </div>

                  
                    <div className="lg:col-span-1 bg-white rounded-xl p-4 space-y-4">
                    <div>
        <h3 className="font-semibold mb-2">Overview</h3>
        <ul className="space-y-2 overflow-y-auto max-h-[300px]">
            {events.map((event, index) => (
                <li 
                    key={index} 
                    className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                    onClick={() => handleEventColorClick(event)}
                >
                    <span 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: event.color }}
                    ></span>
                    <span className="text-sm">{event.title}</span>
                    <span className="ml-auto text-xs text-gray-500">
                        {event.startDate.toLocaleDateString()}
                    </span>
                </li>
            ))}
        </ul>
    </div>
                   

                        {selectedDate && (
                            <div>
                                <h3 className="font-semibold mb-2">
                                    {selectedDate.toLocaleDateString("en-US", {
                                        weekday: "long",
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </h3>
                                <div className="space-y-2">
                                    {getEventsForDate(selectedDate).length > 0 ? (
                                        getEventsForDate(selectedDate).map((event, index) => (
                                            <div key={index} className="mb-4 bg-white p-3 rounded-xl border">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex gap-3 items-center">
                                                        <Image src="/feed.png" alt="feed" width={40} height={40} />
                                                        <span className="font-semibold">{event.title}</span>
                                                    </div>
                                                    <button 
                                                        className="text-blue-500 text-sm"
                                                        onClick={() => handleEventEdit(event)}
                                                    >
                                                        Edit
                                                    </button>
                                                </div>
                                                <p className="mt-2 text-gray-600 text-sm">{event.description}</p>
                                                <div className="mt-2 text-gray-500 text-sm">
                                                    <p>{formatTime(event.startTime)} - {formatTime(event.closingTime)}</p>
                                                    <p>Start: {event.startDate.toLocaleDateString()}</p>
                                                    <p>End: {event.endDate.toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-sm text-gray-500">No events scheduled for this day</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <AddEventModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEventToEdit(null);
                }}
                onSave={eventToEdit ? 
                    (eventData) => handleUpdateEvent(eventToEdit, eventData as Event) : 
                    handleAddEvent}
                selectedDate={selectedDate || undefined}
                eventToEdit={eventToEdit ? {
                    title: eventToEdit.title,
                    startDate: formatDateForInput(eventToEdit.startDate),
                    endDate: formatDateForInput(eventToEdit.endDate),
                    startTime: eventToEdit.startTime,
                    endTime: eventToEdit.closingTime,
                    description: eventToEdit.description,
                    color: eventToEdit.color
                } : null}
                isEditing={!!eventToEdit}
            />
        </div>
    );
};

export default CalendarSection;