import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../../components/DashboardNavBar'
import EventListTable from './components/EventListTable'

const EventList = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <EventListTable/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default EventList
