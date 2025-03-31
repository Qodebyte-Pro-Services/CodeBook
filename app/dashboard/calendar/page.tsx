import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../components/DashboardNavBar'
import CalendarSection from './components/CalendarSection'

const CalendarPage = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <CalendarSection/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default CalendarPage
