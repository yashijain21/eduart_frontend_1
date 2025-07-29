// src/pages/admin/Dashboard.js
import { FiUsers, FiBook, FiAward, FiDollarSign } from 'react-icons/fi';

const Dashboard = () => {
  // These would come from your API in a real implementation
  const stats = [
    { title: 'Total Students', value: '1,248', icon: <FiUsers className="text-blue-500" />, change: '+12%' },
    { title: 'Total Courses', value: '36', icon: <FiBook className="text-green-500" />, change: '+5%' },
    { title: 'Active Faculty', value: '24', icon: <FiUsers className="text-purple-500" />, change: '+3%' },
    { title: 'Total Revenue', value: '$28,450', icon: <FiDollarSign className="text-yellow-500" />, change: '+18%' },
  ];

  const recentStudents = [
    { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Web Development', date: '2023-05-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Graphic Design', date: '2023-05-14' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', course: 'Digital Marketing', date: '2023-05-12' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', course: 'Data Science', date: '2023-05-10' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
            <p className="mt-2 text-sm text-green-600 font-medium">
              <span>{stat.change}</span> from last month
            </p>
          </div>
        ))}
      </div>

      {/* Recent Registrations */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Student Registrations</h2>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentStudents.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                        {student.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.course}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                    <button className="text-gray-600 hover:text-gray-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <div className="mr-3 p-2 rounded-full bg-blue-100 text-blue-600">
              <FiUsers className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">Add New Faculty</span>
          </button>
          <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <div className="mr-3 p-2 rounded-full bg-green-100 text-green-600">
              <FiBook className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">Create New Course</span>
          </button>
          <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <div className="mr-3 p-2 rounded-full bg-purple-100 text-purple-600">
              <FiAward className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">Add Success Story</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;