import { House, GraduationCap, Boxes, BadgeDollarSign, Calendar, Cog, MessagesSquare } from 'lucide-react';

export const navItems = [
    { href: '/dashboard',  label: 'Dashboard', icon: House },
    { href: '/dashboard/teachers', label: 'Teachers', icon: GraduationCap },
    { href: '/dashboard/students', label: 'Students', icon: GraduationCap },
    { href: '/dashboard/manage-school', label: 'Manage School', icon: GraduationCap },
    { href: '/dashboard/non-teaching-staff', label: 'Non - Teaching Staff', icon: Boxes  },
    { href: '/dashboard/finance', label: 'Finance', icon: BadgeDollarSign },
    { href: '/dashboard/calendar', label: 'Calendar', icon: Calendar },
    { href: '/dashboard/time-table', label: 'Time Table', icon: Calendar },
    {href: '/dashboard/messages', label: 'Messages', icon: MessagesSquare },
    { href: '/dashboard/settings', label: 'Settings', icon: Cog  },
  ];