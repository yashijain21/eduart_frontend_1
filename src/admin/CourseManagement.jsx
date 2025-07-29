import { FiBook, FiEdit2, FiTrash2, FiPlus, FiSearch, FiX, FiSave } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({
    id: '',
    title: '',
    description: '',
    category: '',
    duration: '',
    level: 'beginner',
    price: '',
    status: 'active',
    photoUrl: '',
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://eduart-backend-1.onrender.com/api/courses');
      if (!response.ok) throw new Error('Failed to fetch courses');
      const data = await response.json();
      setCourses(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCourse((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || '' : value,
    }));
  };

  const openAddModal = () => {
    setCurrentCourse({
      id: '',
      title: '',
      description: '',
      category: '',
      duration: '',
      level: 'beginner',
      price: '',
      photoUrl:'',
      status: 'active',
    });
    setIsAddModalOpen(true);
  };

  const openEditModal = (course) => {
    setCurrentCourse(course);
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://eduart-backend-1.onrender.com/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentCourse),
      });
      if (!response.ok) throw new Error('Failed to add course');
      const newCourse = await response.json();
      setCourses([...courses, newCourse]);
      closeModal();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://eduart-backend-1.onrender.com/api/courses/${currentCourse._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentCourse),
      });
      if (!response.ok) throw new Error('Failed to update course');
      const updatedCourse = await response.json();
      setCourses(courses.map((c) => (c._id === updatedCourse._id ? updatedCourse : c)));
      closeModal();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      const response = await fetch(`https://eduart-backend-1.onrender.com/api/courses/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete course');
  
      // Remove the deleted course from the list
      setCourses(courses.filter((c) => c._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };
  

  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error) return <p className="text-red-600 p-4">Error: {error}</p>;

  return (
    <div className="space-y-6 p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold text-gray-900">Course Management</h1>
        <div className="flex space-x-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={openAddModal}
          >
            <FiPlus className="mr-2" /> Add Course
          </button>
        </div>
      </div>
      <CourseTable
        courses={filteredCourses}
        onEdit={openEditModal}
        onDelete={handleDelete}
        searchTerm={searchTerm}
      />
      {(isAddModalOpen || isEditModalOpen) && (
        <CourseFormModal
          isEdit={isEditModalOpen}
          course={currentCourse}
          onChange={handleInputChange}
          onSave={isEditModalOpen ? handleUpdate : handleAdd}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

const CourseTable = ({ courses, onEdit, onDelete, searchTerm }) => (
  <div className="bg-white shadow-sm rounded-lg overflow-hidden">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Course Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Duration</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Status</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <FiBook className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{course.title}</div>
                    <div className="text-sm text-gray-500 line-clamp-1">{course.description}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{course.category}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{course.duration}</td>
              <td className="px-6 py-4 text-sm text-gray-500">₹{course.price}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 inline-flex text-xs font-semibold rounded-full ${
                    course.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {course.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right text-sm font-medium">
                <button onClick={() => onEdit(course)} className="text-blue-600 hover:text-blue-900 mr-3">
                  <FiEdit2 className="w-5 h-5" />
                </button>
                <button onClick={() => onDelete(course._id)} className="text-red-600 hover:text-red-900">
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
          {courses.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                No courses found. {searchTerm && 'Try a different search term.'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

const CourseFormModal = ({ isEdit, course, onChange, onSave, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <form onSubmit={onSave} className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
      <div className="border-b px-6 py-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          {isEdit ? 'Edit Course' : 'Add New Course'}
        </h3>
        <button type="button" onClick={onClose}>
          <FiX className="text-gray-600 hover:text-gray-900" />
        </button>
      </div>
      <div className="p-6 space-y-4">
        {['title', 'description', 'category', 'duration', 'price','photoUrl'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-sm font-medium text-gray-700">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === 'price' ? 'number' : 'text'}
              name={field}
              id={field}
              value={course[field]}
              onChange={onChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
              required
            />
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium text-gray-700">Level</label>
          <select
            name="level"
            value={course.level}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={course.status}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div className="border-t px-6 py-4 flex justify-end">
        <button
          type="submit"
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <FiSave className="mr-2" /> {isEdit ? 'Update' : 'Save'}
        </button>
      </div>
    </form>
  </div>
);

export default CourseManagement;
