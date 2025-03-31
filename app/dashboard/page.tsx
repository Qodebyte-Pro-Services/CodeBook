import React from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import DashboardSection from './components/DashboardSection'
import DashboardNavBar from './components/DashboardNavBar'



const Dashboard = () => {
  return (
    <>
      <MaxWidthWrapper>
       <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
       <DashboardNavBar />
       <DashboardSection/>
       </div>
      </MaxWidthWrapper>
    </>
  )
}

export default Dashboard
