import { Ellipsis } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AttendanceCard = () => {
  return (
    <div className='bg-white rounded-lg p-4 shadow-md w-full flex  gap-2'>
      <div className=" md:w-[80%] w-full flex-col xl:flex gap-6">
      <Image src="/Frame1618869711.png" width={30} height={30} alt="" />
      <h3 className="text-lg font-semibold mb-2 xl:mt-0 mt-3">90%</h3>
      <p className="text-sm text-gray-600">Attendance completed</p>
      </div>
      <Ellipsis/>
    </div>
  );
};

export default AttendanceCard;