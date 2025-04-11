"use client"
import Link from 'next/link'
import React, { useState } from 'react'

import { Edit, PlusCircle, Trash, X } from 'lucide-react'
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select'
import TextAreaInput from '@/app/dashboard/teachers/add-teacher/compoenent/TextAreaInput'
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input'



const AttendanceSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPresent, setIsPresent] = useState(true);
    const [isClockOutModalOpen, setIsClockOutModalOpen] = useState(false);
    const [clockOutTime, setClockOutTime] = useState("");
    const [selectedDay, setSelectedDay] = useState("");


    const openClockOutModal = (day:string) => {setIsClockOutModalOpen(true); setSelectedDay(day)};
    const closeClockOutModal = () => {setIsClockOutModalOpen(false); setSelectedDay(""); setClockOutTime("")};

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const attendanceData = [
        { day: "Monday", checkInTime: "8:00 AM", totalHours: "8 Hours", status: "Present", absentReason: "-" },
        { day: "Tuesday", checkInTime: "8:15 AM", totalHours: "7.5 Hours", status: "Present", absentReason: "-" },
        { day: "Wednesday", checkInTime: "-", totalHours: "-", status: "Absent", absentReason: "Sick Leave" },
      ];


  return (
    <div className="flex flex-col gap-4 w-full p-4">
 
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
            {[
              { name: "General", href: "/dashboard/teachers/teacher-detail" },
              { name: "Employment Details", href: "/dashboard/teachers/teacher-detail/employment-details" },
              { name: "Attendance/Leave record", href: "/dashboard/teachers/teacher-detail/attendance-leave" },
              { name: "Reviews", href: "/dashboard/teachers/teacher-detail/reviews" },
              { name: "Communication", href: "/dashboard/teachers/teacher-detail/communication" },
              { name: "Settings", href: "/dashboard/teachers/teacher-detail/settings" },
            ].map((tab, index) => (
              <Link
                key={index}
                href={tab.href}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  index === 2
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-1 px-2 py-2">
          <p className="font-medium text-sm">Attendance and Leave Details</p>
          <span className="text-gray-700 text-xs">Manage & edit the details of your Teachers</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
              <div className='w-full   grid grid-cols-1 md:grid-cols-2  gap-3'>
                <div className='bg-white shadow-md rounded-lg p-4 h-[158px]'>
                    <div className='flex justify-between'>
                        <h3>Present Summary</h3>
                        <Select 
                        label=''
                        options={
                            [
                                { value: 'All', label: 'All' },
                                { value: 'january', label: 'January' },
                                { value: 'febuary', label: 'Febuary' },
                            ]
                        }
                        value='All'
                        onChange={() => {}}
                        />
                    </div>

                    <div className='grid  grid-cols-3 w-full  mt-2'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs'>On Time</p>
                            <p className='text-sm font-semibold'>18/20</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs'>Last Clock In</p>
                            <p className='text-sm font-semibold'>2/4</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs'>Early Clock In</p>
                            <p className='text-sm font-semibold'>10/20</p>
                        </div>
                    </div>
                </div>
                
                <div className='bg-white shadow-md rounded-lg p-4 h-[158px]'>
                    <div className='flex justify-between'>
                        <h3>Absent Summary</h3>
                        <Select 
                        label=''
                        options={
                            [
                                { value: 'All', label: 'All' },
                                { value: 'january', label: 'January' },
                                { value: 'febuary', label: 'Febuary' },
                            ]
                        }
                        value='All'
                        onChange={() => {}}
                        />
                    </div>

                    <div className='grid  grid-cols-3 w-full  mt-2'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs'>Absent</p>
                            <p className='text-sm font-semibold'>18/20</p>
                        </div>
                    </div>
                </div>
            </div>  

            <div className='w-full bg-white rounded-xl  py-2 px-3'>
                <div className='flex justify-between mb-2'>
                    <h3 className='text-sm font-semibold'>Attendance Record</h3>
                    <div
              className="text-xs text-blue-500 items-center flex gap-2 cursor-pointer"
              onClick={openModal}
            >
              <PlusCircle className="text-blue-500" />
              <p>Add Attendance</p>
            </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white  px-2 py-2 rounded-xl ">
                        <thead>
                            <tr>
                            <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700"></th>
                                <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700">Days</th>
                                <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700">Check in Time</th>
                                <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700">Total Hours Worked</th>
                                <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700">Status</th>
                                <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700">Absent Reason</th>
                                <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {attendanceData.map((record, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  </td>
                  <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">{record.day}</td>
                  <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">{record.checkInTime}</td>
                  <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">{record.totalHours}</td>
                  <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">{record.status}</td>
                  <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">{record.absentReason}</td>
                  <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-blue-600 cursor-pointer">
                  <div className='w-full flex justify-center'>
                  {record.status === "Present" && (
                      <Edit onClick={() => openClockOutModal(record.day)} />
                    )}
                  </div>
                  </td>
                </tr>
              ))}
                        </tbody>
                    </table>
                </div>
            </div>
      </div>
      

      <div className='w-full bg-white rounded-xl  py-2 px-3 '>
        <p>Leave Request</p>
    
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white  px-2 py-2 rounded-xl ">
        <thead>
                            <tr>
                            <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700"></th>
                                <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700">Duration</th>
                                <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700">Date Applied</th>
                                <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700">Type</th>
                                <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700">Status</th>
                                <th className="px-4 py-2 border-b-gray-300 border-b text-center  text-sm font-medium text-gray-700">Action</th>
                            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                </td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">19 March - 27 March</td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">20 March 2025</td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">Sick Leave</td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">
                    <div className='bg-green-400 py-3 px-3 rounded-xl  flex items-center justify-center'>
                
                    <p className='text-xs text-white'>Approved</p>
                    </div>
                </td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center   text-sm text-blue-600 cursor-pointer">
                <div className='w-full flex justify-center'>
                  <Trash/>
                  </div>
                </td>
            </tr>

            <tr>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                </td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">19 March - 27 March</td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">20 March 2025</td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">Sick Leave</td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">
                    <div className='bg-red-400 py-3 px-3 rounded-xl  flex items-center justify-center'>
                
                    <p className='text-xs text-white'>Denied</p>
                    </div>
                </td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center   text-sm text-blue-600 cursor-pointer">
                  <div className='w-full flex justify-center'>
                  <Trash/>
                  </div>
                </td>
            </tr>

            <tr>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                </td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">19 March - 27 March</td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">20 March 2025</td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">Sick Leave</td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center text-sm text-gray-600">
                    <div className='bg-gray-400 py-3 px-3 rounded-xl  flex items-center justify-center'>
                
                    <p className='text-xs text-white'>Pending</p>
                    </div>
                </td>
                <td className="px-4 py-2 border-b-gray-300 border-b text-center    text-sm text-blue-600 cursor-pointer">
                 <div className='flex w-full justify-center gap-2'>
                 <button className='bg-blue-400 rounded-xl items-center flex text-white h-[40px] p-3'>Approve</button>
                 <button className='bg-white border-1 items-center flex border-red-500 rounded-xl text-red-500 h-[40px] p-3'>Deny</button>
                 </div>
                </td>
            </tr>
        </tbody>
        </table>
    </div>

      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/75 transition-opacity bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-4">Add Attendance</h3>
            <form className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
              <Select
              label='Select Day'
              options={
                 [
                        { value: 'Monday', label: 'Monday' },
                        { value: 'Tuesday', label: 'Tuesday' },
                        { value: 'Wednesday', label: 'Wednesday' },
                        { value: 'Thursday', label: 'Thursday' },
                        { value: 'Friday', label: 'Friday' },
                        { value: 'Saturday', label: 'Saturday' },
                        { value: 'Sunday', label: 'Sunday' },
                ]
            }
                value='Monday'
                onChange={() => {}}
              />
                <input
                  type="radio"
                  id="present"
                  name="attendanceStatus"
                  checked={isPresent}
                  onChange={() => setIsPresent(true)}
                />
                <label htmlFor="present" className="text-sm">Present</label>
                <input
                  type="radio"
                  id="absent"
                  name="attendanceStatus"
                  checked={!isPresent}
                  onChange={() => setIsPresent(false)}
                />
                <label htmlFor="absent" className="text-sm">Absent</label>
              </div>
              {isPresent ? (
                <div>
                  <Input
                    type="time"
                    label='Clock in time'
                    placeholder=''
                    onChange={() => {}}
                    value=''
                    name='clockInTime'
                  />
                </div>
              ) : (
                <div>
                  <TextAreaInput
                    label='Reason for Absence'
                    placeholder='Enter reason for absence'
                    onChange={() => {}}
                    value=''
                    rows={3}
                    name='absentReason'
                  ></TextAreaInput>
                </div>
              )}
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {isClockOutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/75 transition-opacity bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeClockOutModal}
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-4">Clock Out Time for {selectedDay}</h3>
            <form className="flex flex-col gap-4">
              <Input
                type="time"
                label="Clock Out Time"
                placeholder=""
                onChange={(e) => setClockOutTime(e.target.value)}
                value={clockOutTime}
                name="clockOutTime"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`Clock-out time for ${selectedDay}: ${clockOutTime}`);
                  closeModal();
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}

export default AttendanceSection
