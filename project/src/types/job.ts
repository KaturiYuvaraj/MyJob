export type JobStatus = 'draft' | 'published' | 'closed';
export type ApplicationStatus = 'pending' | 'shortlisted' | 'rejected' | 'accepted';

export interface Job {
  id: string;
  companyId: string;
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  package: {
    min: number;
    max: number;
    currency: string;
  };
  eligibility: {
    cgpa: number;
    batch: string[];
    courses: string[];
  };
  location: string;
  type: 'Full-time' | 'Internship';
  status: JobStatus;
  deadline: string;
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  id: string;
  jobId: string;
  studentId: string;
  status: ApplicationStatus;
  resume: string;
  coverLetter?: string;
  appliedAt: string;
  updatedAt: string;
  interviewSchedule?: InterviewSchedule[];
}