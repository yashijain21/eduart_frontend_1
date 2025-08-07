import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const DentalBenefits = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Image */}
        <div className="relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlbnRhbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Dentist"
            className="rounded-full w-72 h-72 md:w-80 md:h-80 object-cover border-4 border-[#822E2E] shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h4 className="uppercase tracking-wide text-sm text-[#822E2E] font-semibold mb-2">
            Why Choose Us
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
            Benefits of Our Dental Services:
            <br />
            <span className="text-[#822E2E]">Your Path to a Healthier Smile</span>
          </h2>
          <p className="text-gray-600 mb-6 max-w-prose">
            Our expert faculty, world-class training, and personalized care set us apart
            to give you the best dental experience possible.
          </p>

          <div className="flex gap-6 mb-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#822E2E]">10+</h3>
              <p className="text-sm text-gray-600">Skilled Doctors</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#822E2E]">99%</h3>
              <p className="text-sm text-gray-600">Patient Satisfaction</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#822E2E]">20K+</h3>
              <p className="text-sm text-gray-600">Appointments Booked</p>
            </div>
          </div>

          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-[#822E2E]" /> Easy Online Appointment Booking
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-[#822E2E]" /> Experienced and Caring Dentists
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-[#822E2E]" /> Advanced Dental Equipment
            </li>
          </ul>

          <button className="bg-[#822E2E] text-white py-3 px-8 rounded-lg shadow hover:bg-[#6b1e1e] transition">
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default DentalBenefits;
