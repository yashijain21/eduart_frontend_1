import React from "react";
import CountUp from "react-countup";
import { FaChalkboardTeacher, FaTooth, FaGraduationCap } from "react-icons/fa";

import img1 from "../assets/why1.png";
import img2 from "../assets/why2.png";

const AboutEduart = () => {
  return (
    <section className="bg-[#0b1d3a] text-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-6">
          <h3 className="uppercase font-semibold tracking-wide text-white">
            Who We Are
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl">
            Known for Empowering Over 3,000 Dentists Across India
          </h2>
          <p className="text-gray-300 max-w-xl">
            EDUART Delhi’s motto is excellence in education, building strong
            foundations for dentists through evidence-based, hands-on workshops
            in aesthetic, biomimetic, and restorative dentistry. We strive to
            spread awareness of dental advances while upholding core clinical
            principles, giving practitioners confidence to deliver excellence.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1">
          <img
            src={img2}
            alt="Eduart team"
            className="rounded shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* METRICS + IMAGE + CTA */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col lg:flex-row gap-8 items-start">
        {/* LEFT SIDE IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            src={img1}
            alt="Eduart team"
            className="rounded shadow-lg w-full h-auto"
          />
        </div>

        {/* RIGHT SIDE METRICS + CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-10">
          {/* METRICS */}
          <div className="w-full flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <FaChalkboardTeacher size={32} className="text-white mb-2" />
              <p className="text-3xl font-bold">
                <CountUp end={10} duration={3} />+
              </p>
              <p className="text-gray-300">Expert Trainers</p>
            </div>
            <div className="flex flex-col items-center">
              <FaTooth size={32} className="text-white mb-2" />
              <p className="text-3xl font-bold">
                <CountUp end={50} duration={3} />+
              </p>
              <p className="text-gray-300">Workshops Conducted</p>
            </div>
            <div className="flex flex-col items-center">
              <FaGraduationCap size={32} className="text-white mb-2" />
              <p className="text-3xl font-bold">
                <CountUp end={5} duration={3} />+
              </p>
              <p className="text-gray-300">Courses</p>
            </div>
          </div>

          {/* CTA BOX */}
          <div className="bg-primary text-white py-6 px-6 text-center w-full rounded shadow-lg">
            <p className="font-semibold mb-2">
              Get Discount and Access to Premium Workshops with EDUART Membership
            </p>
            <p className="text-sm mb-4 text-gray-100">
              Access advanced hands-on learning, expert-led sessions, and earn
              recognized certifications to boost your dental career.
            </p>
            <button className="bg-[#0b1d3a] px-5 py-3 rounded hover:bg-[#0a1730] transition">
              Get Membership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEduart;
