import React from 'react';
import { useAuthStore } from '../store/authStore';

const Assignments: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Assignments</h1>
        <p className="mt-1 text-sm text-gray-500">
          View and manage your assignments
        </p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {/* Placeholder assignment data */}
          {[
            { title: 'Database Design Project', course: 'Database Systems', dueDate: '2024-03-20' },
            { title: 'Algorithm Analysis', course: 'Data Structures', dueDate: '2024-03-25' },
            { title: 'Physics Lab Report', course: 'Physics 101', dueDate: '2024-03-28' },
          ].map((assignment) => (
            <li key={assignment.title}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-indigo-600">{assignment.title}</p>
                    <p className="text-sm text-gray-500">{assignment.course}</p>
                  </div>
                  <div className="ml-2 flex-shrink-0">
                    <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Assignments;