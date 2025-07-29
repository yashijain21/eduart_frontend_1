import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Navigation from "./Navigation";

const EndodonticCoursePage = () => {
  return (
    <>
      <section className="bg-gray-800 text-white min-h-screen w-full">
        <Navigation />

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
          {/* Breadcrumb & Title */}
          <div className="mb-12 mt-24">
            <nav className="text-sm text-gray-400 mb-2">
              Home / Courses /{" "}
              <span className="text-primary font-semibold">Endodontic Course</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Endodontic Course
            </h1>
            <p className="text-lg text-gray-300 mt-3 max-w-2xl">
              Enhance your clinical skills with advanced endodontic training.
            </p>
          </div>

          {/* Image and Highlights */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="overflow-hidden rounded-3xl shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Endodontic Course"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="bg-white/80 backdrop-blur-xl text-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-primary mb-6">Course Highlights</h2>
              <ul className="space-y-4">
                {[
                  "Use of latest rotary endodontic systems",
                  "Hands-on practice with extracted teeth",
                  "Understanding apex locator, obturation systems",
                  "Rubber dam and magnification techniques",
                  "Access cavity preparation and canal negotiation",
                  "Post and core build-up procedures",
                ].map((point, i) => (
                  <li key={i} className="flex items-start group">
                    <FiCheckCircle className="text-green-600 mt-1 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Course Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">Course Description</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              The Endodontic Course is designed for dental professionals seeking to master
              modern root canal techniques. Through a blend of theory and hands-on practice,
              participants will learn rotary instrumentation, apex location, obturation, and
              the latest in endodontic retreatment. Expert mentors will guide attendees to
              ensure clinical excellence and precision.
            </p>
          </div>

          {/* Modules Covered */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">Modules Covered</h2>
            <div className="bg-white text-gray-800 shadow-lg rounded-xl p-6 border border-gray-200">
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Diagnosis and case selection</li>
                <li>Rotary endodontics and irrigation protocols</li>
                <li>Working length determination</li>
                <li>Biomechanical preparation</li>
                <li>Obturation techniques</li>
                <li>Management of failed root canal cases</li>
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold mb-4">Benefits</h2>
            <div className="bg-white text-gray-800 shadow-md rounded-xl p-6 border border-gray-200 text-lg">
              By the end of the course, participants will confidently perform endodontic
              treatments for both single and multi-rooted teeth using the latest technology
              and clinical approaches.
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            {/* <button className="bg-primary hover:bg-primaryDark text-white text-lg font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Register Now
            </button> */}
            <p className="text-gray-400 text-sm mt-3">
              Limited seats available — enroll today!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EndodonticCoursePage;
