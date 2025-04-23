import React from 'react'
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import DashboardNavBar from '../../components/DashboardNavBar'
import PayRollMgt from './components/PayRollMgt'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-1 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <PayRollMgt/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default page
