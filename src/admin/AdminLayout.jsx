import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiUsers,
  FiBook,
  FiAward,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';

const AdminLayout = () => {
  const location = useLocation();
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const correctPassword = 'edu@123';

  const navItems = [
    { path: '/admin', icon: <FiHome />, label: 'Dashboard' },
    { path: '/admin/FacultyMangement', icon: <FiUsers />, label: 'Faculty' },
    { path: '/admin/CourseMangement', icon: <FiBook />, label: 'Courses' },
    { path: '/admin/students', icon: <FiUsers />, label: 'Students' },
    { path: '/admin/success-stories', icon: <FiAward />, label: 'Success Stories' },
    { path: '/admin/settings', icon: <FiSettings />, label: 'Settings' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  // Show password screen first
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Enter Admin Password</h2>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  // If authenticated, show full layout
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-white border-r border-gray-200">
          <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
            <h1 className="text-white font-bold text-xl">EduArt Admin</h1>
          </div>
          <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
            <nav className="flex-1 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto mb-4">
              <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100">
                <span className="mr-3 text-lg">
                  <FiLogOut />
                </span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navbar */}
        <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              A
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">Admin</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
