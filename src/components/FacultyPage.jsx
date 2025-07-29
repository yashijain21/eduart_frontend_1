// src/pages/FacultyPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiFilter } from 'react-icons/fi';

const FacultyPage = () => {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await fetch('https://eduart-backend-1.onrender.com/api/faculty');
        const data = await response.json();
        setFaculty(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching faculty:', error);
        setLoading(false);
      }
    };
    fetchFaculty();
  }, []);

  const departments = ['all', ...new Set(faculty.map(f => f.department).filter(Boolean))];

  const filteredFaculty = faculty.filter(f => {
    const matchesSearch =
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = departmentFilter === 'all' || f.department === departmentFilter;
    return matchesSearch && matchesDept;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">Meet Our Faculty</h1>

        {/* Search & Filter */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="search" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <FiSearch /> Search Faculty
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by name or bio..."
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <label htmlFor="department" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <FiFilter /> Filter by Department
              </label>
              <select
                id="department"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept.charAt(0).toUpperCase() + dept.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Faculty Grid */}
        {filteredFaculty.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No faculty members found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  gap-8">
            {filteredFaculty.map((member) => (
              <div
                key={member._id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-2 "
              >
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <img
                    src={
                      member.image ||
                      'https://cdn-kddab.nitrocdn.com/jKlcdcYWKYsIXrwxXhnfSRAEYtdjIraN/assets/images/optimized/rev-9eaf8e2/waco-dental.com/wp-content/uploads/sites/388/2022/07/Dental-hygienist-and-dentist-with-patient-768x512.jpg.optimal.jpg'
                    }
                    alt={member.name}
                    className="w-28 h-28 object-cover rounded-full border-4 border-blue-500 shadow-lg"
                  />
                </div>

                {/* Info */}
                <h2 className="text-xl font-bold text-gray-800 text-center">{member.name}</h2>
                <p className="text-blue-600 text-sm font-medium text-center mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm text-center mb-3 line-clamp-3">{member.bio}</p>

                {/* Expertise */}
                {member.expertise?.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {member.expertise.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Optional Links (Placeholder) */}
                {/* 
                <div className="mt-4 flex justify-center gap-4 text-gray-400">
                  <a href="#"><FiLinkedin /></a>
                  <a href="#"><FiMail /></a>
                </div> 
                */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyPage;
