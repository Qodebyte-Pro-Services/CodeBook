import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import DashboardNavBar from '@/app/dashboard/components/DashboardNavBar'
import React from 'react'
import StudentFeeSection from './components/StudentFeeSection'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <StudentFeeSection/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default page
