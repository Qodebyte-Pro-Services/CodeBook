
"use client";
import React, { useState } from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import Link from 'next/link'
import { ChevronsLeft, Plus } from 'lucide-react'
import CalendarComponent from './CalendarComponent'
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
const CalendarSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [events, setEvents] = useState<Event[]>([
        {
            title: "School Resumption",
            startDate: new Date(2025, 1, 10), 
            endDate: new Date(2025, 1, 10),
            color: "#f59e0b", 
            description: "First day of school",
            startTime: "08:00",
            closingTime: "12:00"
        },
        {
          title: "School Resumption2",
          startDate: new Date(2025, 1, 10), 
          endDate: new Date(2025, 1, 10),
          color: "#e594eb", 
          description: "First day of school",
          startTime: "08:00",
          closingTime: "12:00"
      },
        {
            title: "Mid Term Quiz",
            startDate: new Date(2025, 1, 15),
            endDate: new Date(2025, 1, 16),
            color: "#3b82f6", 
            description: "Mid term quizzes for all classes",
            startTime: "09:00",
            closingTime: "14:00"
        },
    ]); 

    const handleAddEvent = (eventData: {
        title: string;
        description: string;
        startDate: Date;
        endDate: Date;
        startTime: string;
        closingTime: string;
        color: string;
    }) => {
        setEvents([...events, eventData]);
        setIsModalOpen(false);
    };


    const handleUpdateEvent = (oldEvent: Event, newEvent: Event) => {
      setEvents(events.map(e => e === oldEvent ? newEvent : e));
  };
  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
    <DashboardHeader />   

        <div className='flex flex-col gap-5 w-full '>
            <h3  className='mb-2 text-xl font-bold'>Calendar</h3>

            <div className='w-full bg-[#FFFFFF] md:h-[55px] h-[60px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <div className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>Schools Calendar</p>
          </div>
          <div className='flex gap-3 w-1/2 items-center justify-end text-md'>
         
  
            <div
              className="flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md cursor-pointer"
              onClick={() => setIsModalOpen(true)} 
            >
              <Plus className="text-blue-500" />
              <p className="text-[10px] md:text-md">Add School Event</p>
            </div>
          <Link href='/dashboard/calendar/view-events' className='text-blue-500  md:text-sm text-[11px] underline'>
          View School Events
          </Link>
     </div>
             </div>

             <div className='flex flex-col w-full gap-3 '>
                    <CalendarComponent events={events}   onAddEvent={handleAddEvent}
                        onUpdateEvent={handleUpdateEvent}/>
             </div>
        </div>   

        <AddEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddEvent}
      />
</div>
  )
}

export default CalendarSection
