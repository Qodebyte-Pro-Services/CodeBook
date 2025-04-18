import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import DashboardNavBar from '@/app/dashboard/components/DashboardNavBar'
import React from 'react'
import SessionFeeView from './components/SessionFeeView'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
   <SessionFeeView/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default page
