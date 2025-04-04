import React from 'react';
import { useAuthStore } from '../store/authStore';

const Calendar: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
        <p className="mt-1 text-sm text-gray-500">
          View and manage your schedule
        </p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            {/* Placeholder calendar events */}
            {[
              { title: 'Mathematics Lecture', time: '09:00 AM', date: 'Monday' },
              { title: 'Physics Lab', time: '02:00 PM', date: 'Tuesday' },
              { title: 'Computer Science Tutorial', time: '11:00 AM', date: 'Wednesday' },
            ].map((event) => (
              <div key={event.title} className="border-l-4 border-indigo-400 bg-indigo-50 p-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-indigo-800">{event.title}</p>
                    <p className="text-sm text-indigo-700">{event.time}</p>
                  </div>
                  <p className="text-sm text-indigo-700">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;