import { House, GraduationCap, Info, File, Calendar, Wallet, Settings } from 'lucide-react';

export const navItems = [
    { href: '/student-dashboard', label: 'Dashboard', icon: House },
    { href: '/student-dashboard/student-info', label: "Student Info", icon: GraduationCap },
    { href: '/student-dashboard/grades', label: "Grades", icon: GraduationCap },
    { href: '/student-dashboard/feedback', label: "Feedback", icon: Info },
    { href: '/student-dashboard/documents', label: "Documents", icon: File },
    { href: '/student-dashboard/calendar', label: "School Calendar", icon: Calendar },
    { href: '/student-dashboard/fee-details', label: "Fee Details", icon: Wallet },
    { href: '/student-dashboard/settings', label: "Settings", icon: Settings }
];