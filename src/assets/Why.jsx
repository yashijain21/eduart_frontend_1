import React from "react";
import CountUp from "react-countup";
import { FaChalkboardTeacher, FaTooth, FaGraduationCap } from "react-icons/fa";

// import your images
import img1 from "../assets/why1.png"; // replace with your images
import img2 from "../assets/why2.png";

const AboutEduart = () => {
  return (
    <section className="bg-[#0b1d3a] text-white py-16 relative overflow-hidden px-10">
      <div className="container mx-auto flex flex-col md:flex-row px-4 gap-8">
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-6">
          <h3 className="uppercase text-white font-semibold tracking-wide">
            Who We Are
          </h3>
          <h2 className="text-4xl font-bold max-w-xl leading-tight">
            Known for Empowering Over 3,000 Dentists Across India
          </h2>
          <p className="text-gray-300 mt-4 max-w-xl">
            EDUART Delhi’s motto is excellence in education, building strong
            foundations for dentists through evidence-based, hands-on workshops
            in aesthetic, biomimetic, and restorative dentistry. We strive to
            spread awareness of dental advances while upholding core clinical
            principles, giving practitioners confidence to deliver excellence.
          </p>
        </div>

        
      </div>
{/* RIGHT SIDE IMAGES */}
        <div className="  gap-4 ">
          <img
            src={img2}
            alt="Eduart team"
            className="rounded shadow-lg  w-full"
          />
       
        </div>
      {/* METRICS */}
    <div className="flex gap-8 mt-5">
         <img
            src={img1}
            alt="Eduart team"
            className="rounded shadow-lg  w-[50%]"
          />
          <div className="container mx-auto px-4 mt-12 flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center">
          <FaChalkboardTeacher size={32} className="text-white mb-2" />
          <p className="text-3xl font-bold text-white">
            <CountUp end={10} duration={3} />+
          </p>
          <p className="text-gray-300">Expert Trainers</p>
        </div>
        <div className="flex flex-col items-center">
          <FaTooth size={32} className="text-white mb-2" />
          <p className="text-3xl font-bold text-white">
            <CountUp end={50} duration={3} />+
          </p>
          <p className="text-gray-300">Workshops Conducted</p>
        </div>
        <div className="flex flex-col items-center">
          <FaGraduationCap size={32} className="text-white mb-2" />
          <p className="text-3xl font-bold text-white">
            <CountUp end={5} duration={3} />+
          </p>
          <p className="text-gray-300">Courses</p>
        </div>
         {/* CTA BOX */}
      <div className="bg-primary text-white py-6 mt-12 px-6 text-center w-full max-w-2xl mx-auto rounded shadow-lg">
        <p className="font-semibold mb-2">
          Get Discount and Access to Premium Workshops with EDUART Membership
        </p>
        <p className="text-sm mb-4 text-gray-100">
          Access advanced hands-on learning, expert-led sessions, and earn
          recognized certifications to boost your dental career.
        </p>
        <button className="bg-[#0b1d3a] px-5 py-3 rounded hover:bg-[#e26313] transition">
          Get Membership
        </button>
      </div>
      </div>
    </div>

     
    </section>
  );
};

export default AboutEduart;
