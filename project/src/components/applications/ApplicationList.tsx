import React from 'react';
import { Application } from '../../types/job';

interface ApplicationListProps {
  applications: Application[];
  onStatusChange: (applicationId: string, status: Application['status']) => void;
}

export default function ApplicationList({ applications, onStatusChange }: ApplicationListProps) {
  return (
    <div className="space-y-4">
      {applications.map((application) => (
        <div
          key={application.id}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {application.jobId}
              </h3>
              <p className="text-sm text-gray-500">
                Applied on: {new Date(application.appliedAt).toLocaleDateString()}
              </p>
            </div>
            <select
              value={application.status}
              onChange={(e) => onStatusChange(application.id, e.target.value as Application['status'])}
              className="rounded-md border-gray-300 text-sm"
            >
              <option value="pending">Pending</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="rejected">Rejected</option>
              <option value="accepted">Accepted</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}