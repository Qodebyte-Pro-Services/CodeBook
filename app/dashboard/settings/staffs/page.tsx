import React from 'react'
import StaffMgt from './components/StaffMgt'
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import DashboardNavBar from '../../components/DashboardNavBar'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <StaffMgt/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default page
