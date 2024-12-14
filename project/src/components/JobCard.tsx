import React from 'react';
import { Briefcase } from 'lucide-react';

type JobCardProps = {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
    salary: string;
    postedTime: string;
    type: 'Full-Time' | 'Part-Time';
  };
};

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
      <p className="text-lg text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>

      <div className="mt-4">
        <p className="text-sm text-gray-700">{job.description}</p>
        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center space-x-1">
            <Briefcase className="h-4 w-4" />
            <span>{job.type}</span>
          </span>
          <span>{job.salary}</span>
          <span>{job.postedTime}</span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 transition-all">
          Apply Now
          <Briefcase className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
