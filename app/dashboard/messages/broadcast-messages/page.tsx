import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../../components/DashboardNavBar'
import BroadcastMessages from './components/BroadcastMessages'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 gap-2 overflow-hidden'>
    <DashboardNavBar />
   <BroadcastMessages/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default page
