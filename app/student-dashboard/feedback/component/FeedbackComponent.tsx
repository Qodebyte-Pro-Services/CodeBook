"use client"
import React, { useState } from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import { ChevronLeft } from 'lucide-react';
import Toast from '@/app/components/Toast';



const FeedbackComponent = () => {

    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        setToastMessage('Feedback submitted!');
    };



  return (
    <div className="flex-1 md:p-8 overflow-hidden">
      <DashboardHeader />
      <div className='w-full flex flex-col gap-4'>
        <div className='bg-white rounded-xl flex w-full py-2 h-[40px] pl-5 items-center gap-2'>
          <ChevronLeft />
          <p className='font-medium'>Feedback</p>
        </div>
        
        <div className='bg-white rounded-xl p-6 w-full'>
      <div className='flex justify-between '>
        <h4>
        General Termly Survey
        </h4>
      <select className="border rounded-md p-2">
                <option>Select Term</option>
              </select>
      </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-8 mt-2'>
            
            <div className='flex flex-col gap-3'>
              <h3 className='text-lg font-medium'>1. How much of the syllabus was covered in class?</h3>
              <div className='flex md:flex-row flex-col gap-2 pl-4'>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="syllabusCoverage" value="85-100" className='h-4 w-4' />
                  <span>85 to 100%</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="syllabusCoverage" value="70-85" className='h-4 w-4' />
                  <span>70 to 85%</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="syllabusCoverage" value="55-70" className='h-4 w-4' />
                  <span>55 to 70%</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="syllabusCoverage" value="30-55" className='h-4 w-4' />
                  <span>30 to 55%</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="syllabusCoverage" value="below-30" className='h-4 w-4' />
                  <span>Below 30%</span>
                </label>
              </div>
            </div>

          
            <div className='flex flex-col gap-3'>
              <h3 className='text-lg font-medium'>2. How well did the teacher&apos;s prepare for the classes?</h3>
              <div className='flex md:flex-row flex-col  gap-2 pl-4'>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teacherPreparation" value="thoroughly" className='h-4 w-4' />
                  <span>Thoroughly</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teacherPreparation" value="satisfactorily" className='h-4 w-4' />
                  <span>Satisfactorily</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teacherPreparation" value="poorly" className='h-4 w-4' />
                  <span>Poorly</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teacherPreparation" value="indifferently" className='h-4 w-4' />
                  <span>Indifferently</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teacherPreparation" value="wont-teach" className='h-4 w-4' />
                  <span>Won&apos;t teach at all</span>
                </label>
              </div>
            </div>

            
            <div className='flex flex-col gap-3'>
              <h3 className='text-lg font-medium'>3. How well were the teacher&apos;s able to communicate?</h3>
              <div className='flex  md:flex-row flex-col  gap-2 pl-4'>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teacherCommunication" value="always-effective" className='h-4 w-4' />
                  <span>Always effective</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teacherCommunication" value="sometimes-effective" className='h-4 w-4' />
                  <span>Sometimes effective</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teacherCommunication" value="just-satisfactorily" className='h-4 w-4' />
                  <span>Just satisfactorily</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teacherCommunication" value="fair" className='h-4 w-4' />
                  <span>Fair</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teacherCommunication" value="very-poor" className='h-4 w-4' />
                  <span>Very poor</span>
                </label>
              </div>
            </div>

           
            <div className='flex flex-col gap-3'>
              <h3 className='text-lg font-medium'>4. The teacher&apos;s approach to teaching can best be described as</h3>
              <div className='flex md:flex-row flex-col  gap-2 pl-4'>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teachingApproach" value="excellent" className='h-4 w-4' />
                  <span>Excellent</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teachingApproach" value="very-good" className='h-4 w-4' />
                  <span>Very good</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teachingApproach" value="good" className='h-4 w-4' />
                  <span>Good</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teachingApproach" value="fair" className='h-4 w-4' />
                  <span>Fair</span>
                </label>
                <label className='flex items-center gap-3'>
                  <input type="radio" name="teachingApproach" value="very-poor" className='h-4 w-4' />
                  <span>Very poor</span>
                </label>
              </div>
            </div>

            
            <button 
              type="submit" 
              className='bg-blue-600 text-white py-2 px-6 rounded-lg w-full md:w-auto md:self-end hover:bg-blue-700 transition-colors'
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {toastMessage && (
                <Toast 
                    message={toastMessage} 
                    type="success" 
                    onClose={() => setToastMessage(null)} 
                />
            )}
    </div>
  );
};

export default FeedbackComponent;