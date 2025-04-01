"use client";

import {ChevronRight, CircleX, } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { navItems } from '@/utils/teacher-nav';

interface MobileNavBarProp {
  onClose: () => void;
}

const MobileNavBar: React.FC<MobileNavBarProp> = ({ onClose }) => {
  const pathname = usePathname();

   

  return (
    <div className="fixed top-0 left-0 w-[80%] min-h-screen bg-white z-50 p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={onClose}
          className="text-gray-600"
          aria-label="Close mobile navigation"
        >
          <CircleX />
        </button>
      </div>
      <nav className="flex flex-col">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
          <Link
              href={item.href}
              className={`flex items-center justify-between p-2 rounded hover:bg-gray-100 ${
                pathname === item.href
                  ? 'bg-blue-100 text-blue-600'
                  : pathname.startsWith(item.href + '/') && item.href !== '/teacher-dashboard'
                  ? 'bg-blue-100 text-blue-600'
                  : ''
              }`}
            >
               <div className='gap-3 flex '>
               {React.createElement(item.icon)}
               <span className="mr-2">{item.label}</span>
               </div>

               <ChevronRight />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavBar;