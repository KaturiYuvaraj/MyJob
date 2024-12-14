import React from 'react';
import { Job } from '../../types/job';

interface JobFormProps {
  initialData?: Partial<Job>;
  onSubmit: (data: Partial<Job>) => void;
}

export default function JobForm({ initialData, onSubmit }: JobFormProps) {
  return (
    <form className="space-y-6" onSubmit={(e) => {
      e.preventDefault();
      // Handle form submission
    }}>
      <div>
        <label className="block text-sm font-medium text-gray-700">Job Title</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          defaultValue={initialData?.title}
        />
      </div>
      
      {/* Add more form fields for job details */}
      
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Job
        </button>
      </div>
    </form>
  );
}