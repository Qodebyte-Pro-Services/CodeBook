
"use client";

import {  ChevronRight} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { navItems } from '@/utils/dashboardnav';

const DashboardNavBar = () => {
  const pathname = usePathname();


  return (
    <nav className=" bg-white  w-64 p-4 rounded-lg relative lg:flex shadow-lg hidden ">
     <div className='  h-screen flex flex-col  top-5  left-10 '>
     <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
          <Link
              href={item.href}
              className={`flex items-center py-2 justify-between rounded hover:bg-gray-100 ${
                pathname === item.href
                  ? 'bg-blue-100 text-blue-600'
                  : pathname.startsWith(item.href + '/') && item.href !== '/dashboard'
                  ? 'bg-blue-100 text-blue-600'
                  : ''
              }`}
            >
               <div className='gap-2 flex '>
                {React.createElement(item.icon)}
               <span className="mr-2 text-sm">{item.label}</span>
               </div>

               <ChevronRight />
            </Link>
          </li>
        ))}
      </ul>
     </div>
    </nav>
  );
};

export default DashboardNavBar;