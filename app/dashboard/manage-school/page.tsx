import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../components/DashboardNavBar'

import SchoolDetail from './school-detail/components/SchoolDetail'

const ManageSchool = () => {
  return (
    <>
    <MaxWidthWrapper>
        <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
        <DashboardNavBar />
        <SchoolDetail/>
        </div>
    </MaxWidthWrapper>
      
    </>
  )
}

export default ManageSchool
