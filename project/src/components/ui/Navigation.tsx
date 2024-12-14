import React from 'react';
import { 
  Home, Users, Briefcase, Calendar, FileText, 
  Settings, ChartBar, Building2 
} from 'lucide-react';
import { UserRole } from '../../types/user';

const navigationConfig = {
  student: [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Briefcase, label: 'Job Listings', path: '/jobs' },
    { icon: FileText, label: 'My Applications', path: '/applications' },
    { icon: Calendar, label: 'Interview Schedule', path: '/schedule' },
    { icon: Settings, label: 'Profile Settings', path: '/settings' },
  ],
  company: [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Briefcase, label: 'Manage Jobs', path: '/jobs' },
    { icon: Users, label: 'Candidates', path: '/candidates' },
    { icon: Calendar, label: 'Interview Schedule', path: '/schedule' },
    { icon: ChartBar, label: 'Analytics', path: '/analytics' },
    { icon: Settings, label: 'Company Profile', path: '/profile' },
  ],
  placement_officer: [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Building2, label: 'Companies', path: '/companies' },
    { icon: Users, label: 'Students', path: '/students' },
    { icon: Briefcase, label: 'Jobs', path: '/jobs' },
    { icon: Calendar, label: 'Schedules', path: '/schedules' },
    { icon: ChartBar, label: 'Placement Analytics', path: '/analytics' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ],
};

export default function Navigation({ role }: { role: UserRole }) {
  const navItems = navigationConfig[role] || [];

  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <a
          key={item.path}
          href={item.path}
          className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md group"
        >
          <item.icon className="h-5 w-5 mr-3 text-gray-500" />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}