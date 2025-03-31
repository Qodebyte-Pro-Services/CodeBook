import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../components/DashboardNavBar'
import TimeTableMgt from './components/TimeTableMgt'

const TimeTable = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <TimeTableMgt/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default TimeTable
