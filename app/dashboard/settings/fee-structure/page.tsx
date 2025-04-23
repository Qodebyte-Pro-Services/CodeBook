import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../../components/DashboardNavBar'
import FeeStructureComp from './components/FeeStructureComp'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <FeeStructureComp/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default page
