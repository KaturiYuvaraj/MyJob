import React from 'react';
import { InterviewSchedule } from '../../types/schedule';

interface InterviewSchedulerProps {
  schedules: InterviewSchedule[];
  onScheduleInterview: (data: Partial<InterviewSchedule>) => void;
}

export default function InterviewScheduler({ schedules, onScheduleInterview }: InterviewSchedulerProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Interview Schedule</h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => {/* Open scheduling modal */}}
        >
          Schedule Interview
        </button>
      </div>
      
      <div className="space-y-4">
        {schedules.map((schedule) => (
          <div
            key={schedule.id}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Round {schedule.round}: {schedule.type}
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(schedule.startTime).toLocaleString()} - 
                  {new Date(schedule.endTime).toLocaleTimeString()}
                </p>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${
                schedule.status === 'completed' ? 'bg-green-100 text-green-800' :
                schedule.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {schedule.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}