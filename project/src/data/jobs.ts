import { Job } from '../types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description: 'We are looking for an experienced Frontend Developer to join our team...',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with modern CSS frameworks',
      'Understanding of web performance optimization'
    ],
    posted: '2024-03-15'
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'DataFlow Systems',
    location: 'Remote',
    type: 'Remote',
    salary: '$130,000 - $170,000',
    description: 'Join our distributed team building scalable backend solutions...',
    requirements: [
      'Strong Node.js experience',
      'Database design expertise',
      'API development experience',
      'Cloud platform knowledge'
    ],
    posted: '2024-03-14'
  }
];