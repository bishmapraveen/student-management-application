import React from 'react';
import { useAuthStore } from '../store/authStore';

const Courses: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Courses</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage and view your courses
        </p>
      </div>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {/* Placeholder course data */}
          {['Advanced Mathematics', 'Computer Science Fundamentals', 'Physics 101'].map((course) => (
            <li key={course}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">{course}</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </p>
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

export default Courses;