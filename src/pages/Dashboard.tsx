import React from 'react';
import { useAuthStore } from '../store/authStore';
import { BookOpen, Users, Calendar, FileText } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuthStore();

  const stats = [
    { name: 'Active Courses', value: '12', icon: BookOpen },
    { name: 'Total Students', value: '256', icon: Users },
    { name: 'Upcoming Events', value: '8', icon: Calendar },
    { name: 'Pending Assignments', value: '15', icon: FileText },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Here's what's happening in your academic world today
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {item.name}
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {item.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Recent Activity
            </h3>
            <div className="mt-5">
              <div className="flow-root">
                <ul className="-mb-8">
                  <li className="pb-4">
                    <div className="relative">
                      <span className="text-sm text-gray-500">
                        New assignment posted in Advanced Mathematics
                      </span>
                    </div>
                  </li>
                  <li className="pb-4">
                    <div className="relative">
                      <span className="text-sm text-gray-500">
                        Upcoming quiz in Computer Science fundamentals
                      </span>
                    </div>
                  </li>
                  <li className="pb-4">
                    <div className="relative">
                      <span className="text-sm text-gray-500">
                        Grade posted for Physics Lab Report
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Upcoming Deadlines
            </h3>
            <div className="mt-5">
              <div className="flow-root">
                <ul className="-mb-8">
                  <li className="pb-4">
                    <div className="relative">
                      <span className="text-sm text-gray-500">
                        Database Design Project - Due in 2 days
                      </span>
                    </div>
                  </li>
                  <li className="pb-4">
                    <div className="relative">
                      <span className="text-sm text-gray-500">
                        Midterm Exam - Next Monday
                      </span>
                    </div>
                  </li>
                  <li className="pb-4">
                    <div className="relative">
                      <span className="text-sm text-gray-500">
                        Research Paper Submission - Next Friday
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;