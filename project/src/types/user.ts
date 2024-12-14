export type UserRole = 'student' | 'company' | 'placement_officer' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface Student extends User {
  role: 'student';
  rollNumber: string;
  course: string;
  batch: string;
  cgpa: number;
  resume?: string;
  skills: string[];
  applications: string[]; // Application IDs
}

export interface Company extends User {
  role: 'company';
  companyName: string;
  industry: string;
  description: string;
  website: string;
  jobs: string[]; // Job IDs
}

export interface PlacementOfficer extends User {
  role: 'placement_officer';
  department: string;
}