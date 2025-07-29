import React, { useState, useEffect } from "react";

import Navigation from "./Navigation";

const CourseCard = ({ image, duration, price, title, description, tags, delay, onRegister }) => (
  <div className="course-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-500 group" data-aos="fade-up" data-aos-delay={delay}>
    <div className="overflow-hidden">
      <img src={image} alt={title} className="object-cover h-[50vh] w-full transition duration-500" />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">{duration}</span>
        <span className="text-primary font-bold text-lg">{price}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-dark">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags?.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={onRegister}
          className="bg-primary hover:bg-primaryDark text-white font-semibold px-4 py-2 rounded transition duration-300"
        >
          Register
        </button>
        <a href="#" className="inline-flex items-center text-primary font-semibold group-hover:underline">
          View Details <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
        </a>
      </div>
    </div>
  </div>
);

const RegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Register for Course</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
          <input type="number" placeholder="Age" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Highest Qualification" className="w-full border p-2 rounded" required />
          <input type="tel" placeholder="Phone Number" className="w-full border p-2 rounded" required />
          <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="University/College Name" className="w-full border p-2 rounded" required />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-primaryDark">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AllCoursesPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch courses on mount
  useEffect(() => {
    fetch("https://eduart-backend-1.onrender.com/api/courses")  // Replace with your API
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load courses:", error);
        setLoading(false);
      });
  }, []);

  return (
<>
<Navigation color="bg-[#960000]" />
    <section className="bg-gray-50 mt-30">
      
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-primary bg-opacity-10 text-white font-semibold px-4 py-1 mt-7 rounded-full mb-4">COURSES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Master Your Specialty</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive programs designed by experts to take your clinical skills to the next level.</p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading courses...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={course._id || index}
                image={course.photoUrl}
                duration={course.duration}
                price={course.price}
                title={course.title}
                description={course.description}
                tags={course.tags}
                delay={`${index * 100}`}
                onRegister={() => setModalOpen(true)}
              />
            ))}
          </div>
        )}
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>

</>
  );
};

export default AllCoursesPage;
