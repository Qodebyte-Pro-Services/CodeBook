import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../../components/DashboardNavBar'
import ClassRoomTimeTable from './components/ClassRoomTimeTable'

const ClassRoomTimetable = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <ClassRoomTimeTable/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default ClassRoomTimetable
