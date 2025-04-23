import React from 'react'
import AcademicSession from './components/AcademicSession'
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import DashboardNavBar from '../../components/DashboardNavBar'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <AcademicSession/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default page
