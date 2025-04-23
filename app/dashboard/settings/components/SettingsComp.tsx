import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import { ChevronsLeft } from 'lucide-react'
import SettingsPage from './SettingsPage'

const SettingsComp = () => {
  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
    <DashboardHeader />   

        <div className='flex flex-col gap-5 w-full '>
            <h3  className='mb-2 text-xl font-bold'>Settings</h3>
            <div className='w-full bg-[#FFFFFF] md:h-[55px] h-[60px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        <div className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>Settings</p>
        </div>
            </div>
            <>
            <SettingsPage/>
            </>
             </div>
    </div>
  )
}

export default SettingsComp
