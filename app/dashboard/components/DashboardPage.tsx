
import React from 'react'
import DashboardNavBar from './DashboardNavBar'
import DashboardSection from './DashboardSection'

const DashboardPage = () => {
    

  return (
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
       <DashboardNavBar />
       <DashboardSection/>
       </div>
  )
}

export default DashboardPage
