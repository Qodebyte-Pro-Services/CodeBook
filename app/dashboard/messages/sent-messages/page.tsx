import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../../components/DashboardNavBar'
import SentMessages from './components/SentMessages'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 gap-2 overflow-hidden'>
    <DashboardNavBar />
    <SentMessages/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default page
