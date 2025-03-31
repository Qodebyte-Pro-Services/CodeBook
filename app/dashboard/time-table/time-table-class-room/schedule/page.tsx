import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import DashboardNavBar from '@/app/dashboard/components/DashboardNavBar'
import React from 'react'
import TimeTableClassComp from './components/TimeTableClassComp'

const TimeTableSchedule = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <TimeTableClassComp/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default TimeTableSchedule
