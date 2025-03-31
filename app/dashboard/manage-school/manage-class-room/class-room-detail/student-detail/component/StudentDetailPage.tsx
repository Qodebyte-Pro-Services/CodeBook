import { ChevronsLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import StudentInfoCard from './StudentInfoCard'
import FeesPaymentChart from './FeesPaymentChart'
import ParentInfoCard from './ParentInfoCard'
import AttendanceCard from './AttendanceCard'
import UnpaidFeesCard from './UnpaidFeesCard'
import TermlyAssessmentTable from './TermlyAssessmentTable'

const StudentDetailPage = () => {
  return (
    <>
       <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <Link href='/dashboard/manage-school/manage-class-room/class-room-detail' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>ClassRoom Detail</p>
          </Link>
        
      </div>

      <div className="p-4 flex-col flex gap-3  w-full"> 
    
      <div className=" w-full flex flex-col xl:flex-row gap-3 xl:gap-0 justify-between">  
        <div className="xl:w-[33%] w-full flex gap-3 flex-col">
          <StudentInfoCard />
      <div className="w-full md:flex-row flex flex-col gap-2 "> 
       <div className="xl:w-1/2 w-full">
         <AttendanceCard />
       </div>
       <div className="xl:w-1/2 w-full">
         <UnpaidFeesCard />
       </div>
     </div>
        </div>
        <div className="xl:w-[33%] w-full">
          <FeesPaymentChart />
        </div>
        <div className="xl:w-[33%] w-full">
          <ParentInfoCard />
        </div>
      </div>
     
      <div className="col-span-3">
        <TermlyAssessmentTable />
      </div>
    </div>
    </>
  )
}

export default StudentDetailPage
