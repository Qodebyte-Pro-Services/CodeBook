
"use client";

import {  ChevronRight} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { navItems } from '@/utils/dashboardnav';

const DashboardNavBar = () => {
  const pathname = usePathname();


  return (
    <nav className=" bg-white  overflow-hidden  min-h-screen  w-64 p-4  top-5  left-2 rounded-lg flex-col  lg:flex shadow-lg hidden ">
     <>
     <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
          <Link
              href={item.href}
              className={`flex items-center py-2 px-2 justify-between rounded hover:bg-gray-100 ${
                pathname === item.href
                  ? 'bg-blue-100 text-blue-600'
                  : pathname.startsWith(item.href + '/') && item.href !== '/dashboard'
                  ? 'bg-blue-100 text-blue-600 px-3 overflow-hidden'
                  : ''
              }`}
            >
               <div className='gap-3 flex '>
                {React.createElement(item.icon)}
               <span className="mr-2 text-sm">{item.label}</span>
               </div>

               <ChevronRight />
            </Link>
          </li>
        ))}
      </ul>
     </>
    </nav>
  );
};

export default DashboardNavBar;