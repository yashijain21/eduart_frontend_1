// components/DentalBenefits.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const DentalBenefits = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8 lora-regular">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlbnRhbHxlbnwwfHwwfHx8MA%3D%3D" // Replace with your image
            alt="Dentist"
            className="rounded-full w-92 h-92 object-cover mx-auto border-4 border-[#822E2E]"
          />
        </div>

        {/* Right Content */}
        <div>
          <h4 className="uppercase tracking-wider font-bold text-xl text-[#822E2E] mb-2">Why Choose Us</h4>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Benefits of Our Dental Services:
            <br />
            <span className="text-[#822E2E]">Your Path to a Healthier Smile</span>
          </h2>
          <p className="text-gray-600 mb-6">
          
          Our expert faculty, world-class training, and personalized care set us apart.
          </p>

          <div className="flex gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#822E2E]">10+</h3>
              <p className="text-sm text-gray-600">Skilled Doctors</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#822E2E]">99%</h3>
              <p className="text-sm text-gray-600">Patient Satisfaction</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#822E2E]">20K+</h3>
              <p className="text-sm text-gray-600">Appointments Booked</p>
            </div>
          </div>

          <ul className="mb-6 space-y-2 text-gray-700">
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

          <button className="bg-[#822E2E] text-white py-2 px-6 rounded-lg shadow hover:bg-[#6b1e1e] transition">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DentalBenefits;
