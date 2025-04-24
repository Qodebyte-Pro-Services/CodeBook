import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import DashboardNavBar from '@/app/dashboard/components/DashboardNavBar'
import React from 'react'
import PayDetails from './components/PayDetails'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-1 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
  <PayDetails/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default page
