"use client";

import { navItems } from '@/utils/nav';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const StudentNavDashboard = () => {
      const pathname = usePathname();
    
     
  return (
    <nav className="bg-white w-64 max-h-[650px] p-4 rounded-lg flex-col hidden lg:flex">
    <ul className="space-y-2">
      {navItems.map((item) => (
        <li key={item.href}>
        <Link
            href={item.href}
            className={`flex items-center p-2 justify-between rounded hover:bg-gray-100 ${
              pathname === item.href
                ? 'bg-blue-100 text-blue-600'
                : pathname.startsWith(item.href + '/') && item.href !== '/student-dashboard'
                ? 'bg-blue-100 text-blue-600'
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
  </nav>
  )
}

export default StudentNavDashboard
