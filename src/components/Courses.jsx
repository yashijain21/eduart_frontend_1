import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Mapping of normalized titles to route paths
const titleToPath = {
  "comprehensive-orthodontics": "/OrthodonticsCoursePage",
  "endodontic-course": "/EndodonticCoursePage",

  // Add more as needed
};

// Reusable course card component
const CourseCard = ({ image, duration, price, title, description, delay, link }) => (
  <div
    className="course-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-500 group"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover course-img transition duration-500"
      />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">{duration}</span>
        <span className="text-primary font-bold text-lg">{price}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-dark">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="inline-flex items-center text-primary font-semibold group-hover:underline">
        View Details{" "}
        <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
      </Link>
    </div>
  </div>
);

// Main Courses section component
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://eduart-backend-1.onrender.com/api/courses")
      .then(res => res.json())
      .then(data => {
        const sorted = [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setCourses(sorted.slice(0, 3));
      })
      .catch(err => console.error("Error fetching courses:", err));
  }, []);

  return (
    <section className="py-20 noto-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-primary bg-opacity-10 text-white font-semibold px-4 py-1 rounded-full mb-4">COURSES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Master Your Specialty</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive programs designed by experts to take your clinical skills to the next level.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const normalized = course.title.toLowerCase().replace(/\s+/g, "-");
            const link = titleToPath[normalized] || "/";

            return (
              <CourseCard
                key={course._id || index}
                image={course.photoUrl}
                duration={course.duration}
                price={`₹${course.price}`}
                title={course.title}
                description={course.description}
                delay={`${(index + 1) * 100}`}
                link={link}
              />
            );
          })}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <Link to="/AllCoursePage" className="inline-flex items-center bg-primary hover:bg-primaryDark text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl">
            Browse All Courses <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
