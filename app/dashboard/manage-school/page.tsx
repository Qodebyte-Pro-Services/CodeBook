import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../components/DashboardNavBar'
import ManageSchools from './components/ManageSchools'

const ManageSchool = () => {
  return (
    <>
    <MaxWidthWrapper>
        <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
        <DashboardNavBar />
        <ManageSchools/>
        </div>
    </MaxWidthWrapper>
      
    </>
  )
}

export default ManageSchool
