import Link from 'next/link';
import { Settings, MessageCircleCode, Bell } from 'lucide-react';

const InteractiveLinks = () => {
  return (
    <div className="flex items-end justify-between gap-3">
      <Link
        href="/dashboard/settings"
        className="bg-[#ECEBF1] text-[#000000] p-2 rounded-full transition duration-200 ease-in-out hover:bg-[#D1D0D7] hover:scale-105 cursor-pointer"
      >
        <Settings />
      </Link>

      <div
        className="bg-[#ECEBF1] text-[#000000] p-2 rounded-full transition duration-200 ease-in-out hover:bg-[#D1D0D7] hover:scale-105 cursor-pointer"
        onClick={() => {
          
          console.log('Message icon clicked');
        }}
      >
        <MessageCircleCode />
      </div>

      <div
        className="bg-[#ECEBF1] text-[#000000] p-2 rounded-full transition duration-200 ease-in-out hover:bg-[#D1D0D7] hover:scale-105 cursor-pointer"
        onClick={() => {
        
          console.log('Bell icon clicked');
        }}
      >
        <Bell />
      </div>
    </div>
  );
};

export default InteractiveLinks;