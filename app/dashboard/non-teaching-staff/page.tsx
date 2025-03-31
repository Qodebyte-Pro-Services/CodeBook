import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../components/DashboardNavBar'
import NonTeachingStaff from './components/NonTeachingStaff'

const NonTeachers = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <NonTeachingStaff/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default NonTeachers
