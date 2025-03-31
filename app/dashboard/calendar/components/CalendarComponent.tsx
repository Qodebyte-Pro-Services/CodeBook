"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import AddEventModal from './AddEventModal';

interface Event {
    title: string;
    startDate: Date;
    endDate: Date;
    color: string;
    description: string;
    startTime: string;
    closingTime: string;
}

interface CalendarComponentProps {
    events: Event[];
    onAddEvent: (event: Event) => void;
    onUpdateEvent: (oldEvent: Event, newEvent: Event) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ events, 
    onAddEvent, 
    onUpdateEvent  }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedSchool, setSelectedSchool] = useState('Primary School');
    const [showMonthDropdown, setShowMonthDropdown] = useState(false);
    const [calendarDays, setCalendarDays] = useState<{ day: number; date: Date; isPrevMonth?: boolean; isCurrentMonth?: boolean; isNextMonth?: boolean }[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [highlightedEvent, setHighlightedEvent] = useState<Event | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventToEdit, setEventToEdit] = useState<Event | null>(null);

    const daysOfWeekShort = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const daysInPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

    const getCalendarDays = React.useCallback(() => {
        const days = [];

        for (let i = firstDayOfMonth; i > 0; i--) {
            const prevDay = daysInPreviousMonth - i + 1;
            days.push({ day: prevDay, date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, prevDay), isPrevMonth: true });
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push({ day: i, date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i), isCurrentMonth: true });
        }

        const remainingDays = 42 - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            days.push({ day: i, date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i), isNextMonth: true });
        }

        return days;
    }, [currentDate, firstDayOfMonth, daysInMonth, daysInPreviousMonth]);

    useEffect(() => {
        setCalendarDays(getCalendarDays());
        if (!selectedDate) {
            setSelectedDate(new Date());
        }
    }, [currentDate, getCalendarDays, selectedDate]);

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        setShowMonthDropdown(false);
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        setShowMonthDropdown(false);
    };

    const goToToday = () => {
        const today = new Date();
        setCurrentDate(today);
        setSelectedDate(today);
        setShowMonthDropdown(false);
    };

    const handleSchoolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSchool(e.target.value);
    };

    const handleMonthClick = () => {
        setShowMonthDropdown(!showMonthDropdown);
    };

    const selectMonth = (monthIndex: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1));
        setShowMonthDropdown(false);
    };

    const handleEventColorClick = (event: Event) => {
       
        setCurrentDate(new Date(event.startDate));
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

        if (currentDateOnly.getTime() === eventStartDate.getTime()) {
            return {
                backgroundColor: highlightedEvent.color,
                color: '#FFFFFF',
                border: '2px solid white',
            };
        }
    }


    const eventsOnThisDate = events.filter(event => {
        const eventStartDate = new Date(
            event.startDate.getFullYear(),
            event.startDate.getMonth(),
            event.startDate.getDate()
        );
        return currentDateOnly.getTime() === eventStartDate.getTime();
    });

    
    if (eventsOnThisDate.length > 1) {
        const gradientColors = eventsOnThisDate.map(event => event.color).join(', ');
        return {
            background: `linear-gradient(45deg, ${gradientColors})`,
            color: '#FFFFFF',
            border: '2px solid white',
        };
    }

   
    if (eventsOnThisDate.length === 1) {
        return {
            backgroundColor: eventsOnThisDate[0].color,
            color: '#FFFFFF',
            border: '2px solid white',
        };
    }

    
        return {};
    };
    

    const handleDayClick = (date: Date) => {
        const clickedDate = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          );
          setSelectedDate(clickedDate);
        setHighlightedEvent(null);
        setIsModalOpen(true);
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

    const getEventsForSelectedDate = () => {
        if (!selectedDate) return [];
        
        const selectedDateOnly = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate()
        );

        return events.filter(event => {
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

            return selectedDateOnly >= eventStartDate && selectedDateOnly <= eventEndDate;
        });
    };

    const handleSaveEvent = (eventData: {
        title: string;
        description: string;
        startDate: Date;
        endDate: Date;
        startTime: string;
        closingTime: string;
        color: string;
    }) => {
        if (eventToEdit) {
            onUpdateEvent(eventToEdit, eventData as Event);
        } else {
            onAddEvent(eventData as Event);
        }
        setIsModalOpen(false);
        setEventToEdit(null);
    };

    const formatDateForInput = (date: Date) => {
        // Get the local date parts to avoid timezone issues
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };


    return (
        <div className="">
            <div className="flex-col flex xl:flex-row gap-2">
                <div className="flex-col flex gap-3 w-full xl:w-[70%] bg-white rounded-xl p-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 items-center mb-4">
                        <div className="flex items-center gap-3">
                            <button onClick={goToPreviousMonth} className="mr-2"><ChevronLeft /></button>
                            <button onClick={goToToday} className="text-sm">Today</button>
                            <button onClick={goToNextMonth} className="ml-2"><ChevronRight /></button>
                        </div>

                        <div className="relative">
                            <button
                                onClick={handleMonthClick}
                                className="text-center font-medium px-2 py-1 rounded hover:bg-gray-100"
                            >
                                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                            </button>

                            {showMonthDropdown && (
                                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-48">
                                    <div className="grid grid-cols-3 gap-1 p-2">
                                        {months.map((month, index) => (
                                            <button
                                                key={month}
                                                onClick={() => selectMonth(index)}
                                                className={`p-1 text-sm rounded hover:bg-gray-100 ${
                                                    currentDate.getMonth() === index ? 'bg-blue-100 font-medium' : ''
                                                }`}
                                            >
                                                {month.substring(0, 3)}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <select value={selectedSchool} onChange={handleSchoolChange} className="p-1 outline-none">
                            <option value="Primary School">Primary School</option>
                            <option value="Secondary School">Secondary School</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-4">
                        {daysOfWeekShort.map((day, index) => (
                            <div key={day} className="font-semibold p-2">
                                <span className="hidden xl:block text-sm text-center">{day}</span>
                                <span className="xl:hidden block text-sm">{daysOfWeekShort[index]}</span>
                            </div>
                        ))}
                        {calendarDays.map(({ day, date, isPrevMonth, isNextMonth }) => (
                            <button
                                key={date.toISOString()}
                                className={`p-2 text-center ${isPrevMonth || isNextMonth ? 'text-gray-400' : ''} ${
                                    selectedDate && date.toDateString() === selectedDate.toDateString() ? 'ring-2 ring-blue-500 rounded-lg' : 'rounded-lg'
                                }`}
                                style={getDayStyle(date)}
                                onClick={() => handleDayClick(date)}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full xl:w-[30%] xl:ml-4 bg-white p-2 rounded-xl mb-2">
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <ul className="space-y-2 grid grid-cols-1 overflow-y-auto max-h-[300px] gap-4">
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
                                <span className="text-black">{event.title}</span>
                                <span className="ml-auto text-sm text-gray-500">
                                    {event.startDate.toLocaleDateString()}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex mt-3">
                <div className="xl:w-[67%] w-full">
                    <div className='flex gap-2 items-center'>
                        <h3 className="text-lg font-semibold mb-2">Activities for {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</h3>
                    </div>
                    <div className="p-2">
                        {getEventsForSelectedDate().length > 0 ? (
                            getEventsForSelectedDate().map((event, index) => (
                                <div key={index} className="mb-4 bg-white p-2 rounded-xl last:mb-0">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2 items-center">
                                                <Image src="/feed.png" alt="feed" width={53} height={44} />
                                                <span className="font-semibold">{event.title}</span>
                                            </div>
                                        </div>
                                        <button 
                                            className="text-blue-500"
                                            onClick={() => handleEventEdit(event)}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="mt-1 text-gray-600">{event.description}</p>
                                        <span className="text-gray-500">
                                            {formatTime(event.startTime)} - {formatTime(event.closingTime)}
                                        </span>
                                    </div>
                                    <div className="mt-1 text-sm text-gray-500">
                    <p>Start Date: {event.startDate.toLocaleDateString()}</p>
                    <p>End Date: {event.endDate.toLocaleDateString()}</p>
                </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No activities scheduled for this day</p>
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
                onSave={handleSaveEvent}
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

export default CalendarComponent;