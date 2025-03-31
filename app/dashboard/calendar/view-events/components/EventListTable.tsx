'use client'
import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import Pagination from '@/app/dashboard/teachers/components/Pagination'
import { Check, ChevronsLeft, Edit, Trash } from 'lucide-react'
import React, { useState } from 'react'
import AddEventModal from '../../components/AddEventModal'
import Link from 'next/link'


interface Event {
    eventId: string;
    title: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    schoolType: string;
    status: string;
    description?: string;
    color?: string;
}

const EventListTable = () => {
    const EventTable: Event[] = [
        {
            eventId: 'AGS-1289-QB',
            title: 'Cultural Day',
            startDate: '05/04/2025',
            endDate: '05/04/2025',
            startTime: '12:00',
            endTime: '12:00',
            schoolType: 'primary',
            status: 'Awaiting',
            description: 'Annual cultural day celebration',
            color: '#3b82f6'
        },
    ];

    const [events, setEvents] = useState(EventTable);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    const eventsPerPage = 5;
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
    const totalPages = Math.ceil(events.length / eventsPerPage);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filteredEvents = EventTable.filter(
            (event) => 
                event.eventId.toLowerCase().includes(term) ||
                event.title.toLowerCase().includes(term) ||
                event.startDate.toLowerCase().includes(term) ||
                event.endDate.toLowerCase().includes(term) ||
                event.startTime.toLowerCase().includes(term) ||
                event.endTime.toLowerCase().includes(term) ||
                event.schoolType.toLowerCase().includes(term) ||
                event.status.toLowerCase().includes(term) 
        );
        setEvents(filteredEvents);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleEdit = (event: Event) => {
        setCurrentEvent(event);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleSave = (eventData: {
        title: string;
        description: string;
        startDate: Date;
        endDate: Date;
        startTime: string;
        closingTime: string;
        color: string;
    }) => {
        if (isEditing && currentEvent) {
            // Update existing event
            const updatedEvents = events.map(event => 
                event.eventId === currentEvent.eventId ? {
                    ...event,
                    title: eventData.title,
                    description: eventData.description,
                    startDate: eventData.startDate.toLocaleDateString(),
                    endDate: eventData.endDate.toLocaleDateString(),
                    startTime: eventData.startTime,
                    endTime: eventData.closingTime,
                    color: eventData.color
                } : event
            );
            setEvents(updatedEvents);
        } else {
            // Add new event (though this table is mainly for editing)
            const newEvent = {
                eventId: `EVT-${Math.floor(Math.random() * 10000)}`,
                title: eventData.title,
                startDate: eventData.startDate.toLocaleDateString(),
                endDate: eventData.endDate.toLocaleDateString(),
                startTime: eventData.startTime,
                endTime: eventData.closingTime,
                schoolType: 'primary',
                status: 'Awaiting',
                description: eventData.description,
                color: eventData.color
            };
            setEvents([...events, newEvent]);
        }
        
        setIsModalOpen(false);
        setIsEditing(false);
        setCurrentEvent(null);
    };

    const handleDelete = (eventId: string) => {
        setEvents(events.filter(event => event.eventId !== eventId));
    };

    return (
        <div className="flex-1 md:p-8 overflow-hidden">
            <DashboardHeader />   

            <div className='flex flex-col gap-5 w-full'>
                <h3 className='mb-2 text-xl font-bold'>Calendar</h3>

                <div className='w-full bg-[#FFFFFF] md:h-[55px] h-[60px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
                    <Link href="/dashboard/calendar" className='flex gap-2 w-1/2 items-center justify-start md:text-md text-[12px]'>
                        <ChevronsLeft />
                        <p>Schools Calendar</p>
                    </Link>
                    <div className='flex gap-3 w-1/2 items-center justify-end text-md'>
                        <form className="mx-auto w-1/2"> 
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 0 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input 
                                    type="search" 
                                    id="default-search" 
                                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-none" 
                                    placeholder="Search by ID, Name or Subject" 
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    required 
                                />
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Id</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Title</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Start Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event End Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Start Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event End Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event School Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Completed</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentEvents.map((event, index) => (
                                <tr className='pr-1' key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input type="checkbox" className="form-checkbox" />
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{event.eventId}</div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{event.title}</div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{event.startDate}</div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{event.endDate}</div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{event.startTime}</div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{event.endTime}</div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{event.schoolType}</div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{event.status}</div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="text-gray-50 flex bg-teal-500 px-3 w-full py-2 rounded-lg justify-center">
                                            <Check/>
                                        </button>
                                    </td>

                                    <td className="px-6 flex gap-1 py-4 whitespace-nowrap">
                                        <button 
                                            className="text-gray-50 flex bg-blue-500 px-3 py-2 rounded-lg mr-4"
                                            onClick={() => handleEdit(event)}
                                        >
                                            <Edit/>
                                        </button>
                                        <button 
                                            className="text-gray-50 flex bg-red-500 px-3 py-2 rounded-lg mr-4"
                                            onClick={() => handleDelete(event.eventId)}
                                        >
                                            <Trash/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

            <AddEventModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setIsEditing(false);
                    setCurrentEvent(null);
                }}
                onSave={handleSave}
                eventToEdit={currentEvent}
                isEditing={isEditing}
            />
        </div>
    )
}

export default EventListTable