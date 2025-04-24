import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../components/DashboardNavBar'
import FinanceComponent from './components/FinanceComponent'


const FinanceSection = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 gap-2  overflow-hidden'>
    <DashboardNavBar />
    <FinanceComponent/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default FinanceSection
