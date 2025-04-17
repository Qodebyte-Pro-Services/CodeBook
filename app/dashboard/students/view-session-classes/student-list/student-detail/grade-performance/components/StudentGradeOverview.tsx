
import { ChevronsLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import TermlyAssessmentTable from './TermlyAssessmentTable'

const StudentGradeOverview = () => {
  return (
    <div className='flex flex-col gap-2 '>
     <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <Link href='/dashboard/students/view-session-classes/student-list' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>Student List</p>
          </Link> 
      </div>

      <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
        <div className="border-b border-gray-200">
        <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
  {[
    { name: "General", href: `/dashboard/students/view-session-classes/student-list/student-detail` },
    { name: "Grades / Performance", href: `/dashboard/students/view-session-classes/student-list/student-detail/grade-performance` },
    { name: "Fee Management", href: `/dashboard/students/view-session-classes/student-list/student-detail/fee-management` },
    { name: "Student Accessment / Review", href: `/dashboard/students/view-session-classes/student-list/student-detail/acessment-reviews` },
    { name: "Documents", href: `/dashboard/students/view-session-classes/student-list/student-detail/documents` },
  
  ].map((tab, index) => (
    <Link
      key={index}
      href={tab.href}
      className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
        index === 1
          ? "border-blue-500 text-blue-600"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      }`}
    >
      {tab.name}
    </Link>
  ))}
</nav>
        </div>
        <div className="flex flex-col gap-1 px-2 py-2">
          <p className="font-medium text-sm">Students</p>
          <span className="text-gray-700 text-xs">Manage & edit the details of your students</span>
        </div>
      </div>

      <div className='w-full mt-2 flex flex-col gap-2 '>
        <div className='xl:w-1/3 md:w-2/3 w-full bg-white rounded-xl flex flex-col gap-2 px-2 py-2'>
        <p>Grading Summary</p>
        <div className='grid grid-cols-5 w-full gap-2'>
        <p>Bad</p>
        <span>-</span>
        <p>F</p>
        <span>-</span>
        <p>20-39</p>
        </div>

        <div className='grid grid-cols-5 w-full gap-2'>
        <p>Fair</p>
        <span>-</span>
        <p>D</p>
        <span>-</span>
        <p>40-59</p>
        </div>

        <div className='grid grid-cols-5 w-full gap-2'>
        <p>Good</p>
        <span>-</span>
        <p>C</p>
        <span>-</span>
        <p>60-69</p>
        </div>

        <div className='grid grid-cols-5 w-full gap-3'>
        <p>VeryGood</p>
        <span>-</span>
        <p>B</p>
        <span>-</span>
        <p>70-79</p>
        </div>

        <div className='grid grid-cols-5 w-full gap-3'>
        <p>Excellent</p>
        <span>-</span>
        <p>A</p>
        <span>-</span>
        <p>80-100</p>
        </div>
        </div>
      </div>

      <div className='mt-2'>
        <TermlyAssessmentTable/>
      </div>
      
    </div>
  )
}

export default StudentGradeOverview
