import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import TeachersPage from './components/TeachersPage'
import DashboardNavBar from '../components/DashboardNavBar'

const Teachers = () => {
  return (
    <>
     <MaxWidthWrapper>
      <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
      <DashboardNavBar />
      <TeachersPage/>
      </div>
    </MaxWidthWrapper> 
    </>
  )
}

export default Teachers
