"use client";

import { BadgeDollarSign, Boxes, Calendar, ChevronRight, CircleX, Cog, GraduationCap, House } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

interface MobileNavBarProp {
  onClose: () => void;
}

const MobileNavBar: React.FC<MobileNavBarProp> = ({ onClose }) => {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: <House /> },
    { href: '/dashboard/teachers', label: 'Teachers', icon: <GraduationCap /> },
    { href: '/dashboard/manage-school', label: 'Manage School', icon: <GraduationCap /> },
    { href: '/dashboard/non-teaching-staff', label: 'Non - Teaching Staff', icon: <Boxes /> },
    { href: '/dashboard/finance', label: 'Finance', icon: <BadgeDollarSign /> },
    { href: '/dashboard/calendar', label: 'Calendar', icon: <Calendar /> },
    { href: '/dashboard/time-table', label: 'Time Table', icon: <Calendar /> },
    // { href: '/dashboard/message', label: 'Message', icon: <Mail /> },
    { href: '/dashboard/settings', label: 'Settings', icon: <Cog /> },
  ];

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
                  : pathname.startsWith(item.href + '/') && item.href !== '/dashboard'
                  ? 'bg-blue-100 text-blue-600'
                  : ''
              }`}
            >
               <div className='gap-3 flex '>
               {item.icon}
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