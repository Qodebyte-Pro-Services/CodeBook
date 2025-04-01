import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import { ChevronLeft, Printer } from 'lucide-react'

const GradesInfo = () => {
  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
      <DashboardHeader />
      <div className='w-full flex  flex-col gap-4'>
        <div className='bg-white rounded-xl flex w-full py-2 h-[40px] pl-5 '>
          <ChevronLeft />
          <p>Grades</p>
        </div>

        <div>
         
          <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Termly Assessment</h2>
             <div className='flex gap-2'>
             <select className="border rounded px-2 py-1 text-sm">
            <option>Select School Type</option>
          </select>
             <select className="border rounded-md p-2">
                <option>Select Term</option>
              </select>
            <select className="border rounded px-2 py-1 text-sm">
            <option>Select Class</option>
          </select>
              <select className="border rounded-md p-2">
                <option>Select Session</option>
              </select>
             </div>
            </div>

            <div className="overflow-x-auto block"> 
            <table className="min-w-full border-collapse border border-gray-300"> 
          <thead className="bg-gray-100">
            <tr>
            <th className="px-3 py-3 border border-gray-300 text-left font-medium">#</th>
            <th className="px-3 py-3 border border-gray-300 text-left font-medium">Subject Name</th>
            <th className="px-3 py-3 border border-gray-300 text-left font-medium">Quiz Assessment</th>
            <th className="px-3 py-3 border border-gray-300 text-left font-medium">Assignment</th>
            <th className="px-3 py-3 border border-gray-300 text-left font-medium">Exam Score</th>
            <th className="px-3 py-3 border border-gray-300 text-left font-medium">Total Score</th>
            <th className="px-3 py-3 border border-gray-300 text-left font-medium">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.from({ length: 8 }).map((_, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 border border-gray-300 text-center px-3">{index + 1}</td>
              <td className="py-2 border border-gray-300 text-center px-3">Geography</td>
              <td className="py-2 border border-gray-300 text-center px-3">20</td>
              <td className="py-2 border border-gray-300 text-center px-3">30</td>
              <td className="py-2 border border-gray-300 text-center px-3">60</td>
              <td className="py-2 border border-gray-300 text-center px-3">90</td>
              <td className="py-2 border border-gray-300 text-center px-3">A</td>
            </tr>
            ))}
          </tbody>
          </table>
    </div>

            <div className="mt-4 flex justify-end">
              <button className="bg-blue-500 text-white rounded-md py-2 px-4 flex items-center">
               <Printer/>
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GradesInfo