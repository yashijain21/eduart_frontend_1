import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Navigation from "./Navigation";

const OrthodonticsCoursePage = () => {
  return (
    <>
      <section className="bg-gray-800 text-white min-h-screen w-full">
        <Navigation />

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
          {/* Breadcrumb & Title */}
          <div className="mb-12 mt-24">
            <nav className="text-sm text-gray-400 mb-2">
              Home / Courses /{" "}
              <span className="text-primary font-semibold">
                Comprehensive Orthodontics
              </span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Comprehensive Orthodontics Course
            </h1>
            <p className="text-lg text-gray-300 mt-3 max-w-2xl">
              Master the fundamentals and advanced techniques of orthodontic treatment planning and appliance therapy.
            </p>
          </div>

          {/* Image and Highlights */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="overflow-hidden rounded-3xl shadow-xl group">
              <img
                src="https://www.pearldentalacademy.com/wp-content/uploads/2025/02/course-detail-1.webp"
                alt="Orthodontic Course"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="bg-white/80 backdrop-blur-xl text-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-primary mb-6">Course Highlights</h2>
              <ul className="space-y-4">
                {[
                  "Diagnosis and treatment planning of malocclusion",
                  "Cephalometric tracing and interpretation",
                  "Hands-on wire bending techniques",
                  "Bracket bonding and appliance placement",
                  "Use of removable and fixed appliances",
                  "Managing space maintenance and retention",
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
              This course equips dental professionals with a thorough understanding of orthodontic principles. Through lectures and extensive clinical sessions, participants will learn diagnosis, appliance design, and case management for both interceptive and comprehensive orthodontics.
            </p>
          </div>

          {/* Modules Covered */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">Modules Covered</h2>
            <div className="bg-white text-gray-800 shadow-lg rounded-xl p-6 border border-gray-200">
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Orthodontic diagnosis and classification of malocclusion</li>
                <li>Cephalometry and model analysis</li>
                <li>Removable appliance design and delivery</li>
                <li>Fixed orthodontic appliance mechanics</li>
                <li>Space management and serial extraction</li>
                <li>Retention and post-treatment evaluation</li>
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold mb-4">Benefits</h2>
            <div className="bg-white text-gray-800 shadow-md rounded-xl p-6 border border-gray-200 text-lg">
              Participants will gain the ability to plan and execute orthodontic cases using both removable and fixed appliance therapy with clinical accuracy and confidence.
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

export default OrthodonticsCoursePage;
