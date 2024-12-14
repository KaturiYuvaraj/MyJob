export interface InterviewSchedule {
  id: string;
  applicationId: string;
  round: number;
  type: 'technical' | 'hr' | 'coding' | 'group_discussion';
  startTime: string;
  endTime: string;
  location: string;
  meetingLink?: string;
  interviewers: string[];
  status: 'scheduled' | 'completed' | 'cancelled';
  feedback?: string;
}