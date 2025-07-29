import { FiUser, FiEdit2, FiTrash2, FiPlus, FiSearch, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const FacultyManagement = () => {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentFaculty, setCurrentFaculty] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    Department: '',
    Designation: '',
    Status: 'active',
  });

  useEffect(() => {
    fetchFaculties();
  }, []);

  const fetchFaculties = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://eduart-backend-1.onrender.com/api/Faculty');
      if (!res.ok) throw new Error('Failed to fetch faculties');
      const data = await res.json();
      setFaculties(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentFaculty((prev) => ({ ...prev, [name]: value }));
  };

  const openAddModal = () => {
    setCurrentFaculty({
      id: '',
      name: '',
      email: '',
      phone: '',
      Department: '',
      Designation: '',
      Status: 'active',
    });
    setIsAddModalOpen(true);
  };

  const openEditModal = (faculty) => {
    setCurrentFaculty(faculty);
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://eduart-backend-1.onrender.com/api/Faculty', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentFaculty),
      });
      if (!res.ok) throw new Error('Failed to add faculty');
      const newFaculty = await res.json();
      setFaculties([...faculties, newFaculty]);
      closeModal();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://eduart-backend-1.onrender.com/api/Faculty/${currentFaculty._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentFaculty),
      });
      if (!res.ok) throw new Error('Failed to update faculty');
      const updated = await res.json();
      setFaculties(faculties.map((f) => (f._id === updated._id ? updated : f)));
      closeModal();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this faculty?')) return;
    try {
      const res = await fetch(`https://eduart-backend-1.onrender.com/api/Faculty/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete faculty');
      setFaculties(faculties.filter((f) => f._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const filteredFaculties = faculties.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.Department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error) return <p className="text-red-600 p-4">Error: {error}</p>;

  return (
    <div className="space-y-6 p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold text-gray-900">Faculty Management</h1>
        <div className="flex space-x-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search faculty..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={openAddModal}
          >
            <FiPlus className="mr-2" /> Add Faculty
          </button>
        </div>
      </div>

      <FacultyTable faculties={filteredFaculties} onEdit={openEditModal} onDelete={handleDelete} />

      {(isAddModalOpen || isEditModalOpen) && (
        <FacultyFormModal
          isEdit={isEditModalOpen}
          faculty={currentFaculty}
          onChange={handleInputChange}
          onSave={isEditModalOpen ? handleUpdate : handleAdd}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

const FacultyTable = ({ faculties, onEdit, onDelete }) => (
  <div className="bg-white shadow-sm rounded-lg overflow-hidden">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Department</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Designation</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Status</th>
            <th className="px-6 py-3" />
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {faculties.map((faculty) => (
            <tr key={faculty._id}>
              <td className="px-6 py-4 whitespace-nowrap flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <FiUser className="w-5 h-5" />
                </div>
                <div className="ml-4 text-sm font-medium text-gray-900">{faculty.name}</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{faculty.email}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{faculty.Department}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{faculty.Designation}</td>
              
              <td className="px-6 py-4">
                <span
                  className={`px-2 inline-flex text-xs font-semibold rounded-full ${
                    faculty.Status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {faculty.Status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button onClick={() => onEdit(faculty)} className="text-blue-600 hover:text-blue-900 mr-3">
                  <FiEdit2 />
                </button>
                <button onClick={() => onDelete(faculty._id)} className="text-red-600 hover:text-red-900">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
          {faculties.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                No faculties found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

const FacultyFormModal = ({ isEdit, faculty, onChange, onSave, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <form onSubmit={onSave} className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
      <div className="border-b px-6 py-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold">{isEdit ? 'Edit Faculty' : 'Add New Faculty'}</h3>
        <button type="button" onClick={onClose}>
          <FiX className="text-gray-600 hover:text-gray-900" />
        </button>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {['name', 'email', 'phone', 'Department', 'Designation'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-sm font-medium text-gray-700">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type="text"
              name={field}
              value={faculty[field]}
              onChange={onChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        ))}
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={faculty.Status}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div className="border-t px-6 py-4 flex justify-end space-x-3">
        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-md">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
          {isEdit ? 'Update' : 'Save'}
        </button>
      </div>
    </form>
  </div>
);

export default FacultyManagement;
