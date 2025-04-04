import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { LogOut, BookOpen, Users, Calendar, FileText } from 'lucide-react';

const Layout: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return <Outlet />;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8" />
                <span className="text-xl font-bold">EduManager</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-4">
                <Link to="/courses" className="flex items-center space-x-1 hover:text-gray-200">
                  <BookOpen className="h-5 w-5" />
                  <span>Courses</span>
                </Link>
                <Link to="/users" className="flex items-center space-x-1 hover:text-gray-200">
                  <Users className="h-5 w-5" />
                  <span>Users</span>
                </Link>
                <Link to="/calendar" className="flex items-center space-x-1 hover:text-gray-200">
                  <Calendar className="h-5 w-5" />
                  <span>Calendar</span>
                </Link>
                <Link to="/assignments" className="flex items-center space-x-1 hover:text-gray-200">
                  <FileText className="h-5 w-5" />
                  <span>Assignments</span>
                </Link>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 hover:text-gray-200"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;