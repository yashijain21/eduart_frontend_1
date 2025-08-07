import React from "react";
import { FaPlay } from "react-icons/fa";
import img1 from "../assets/about.jpg";

const AboutSection = () => {
  return (
    <section
      className="w-full  py-12 bg-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://www.shutterstock.com/image-vector/dentists-patient-dentist-office-hand-260nw-1413199022.jpg")',
      }}
    >
      <div className="bg-white/40 backdrop-blur-sm mx-auto px-4 flex flex-col md:flex-row items-center gap-8  rounded-xl max-w-7xl ">
        {/* LEFT SIDE: Image */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex gap-4">
            <img
              src={img1}
              alt="eduart event"
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Text content */}
        <div className="flex-1 space-y-4 text-[#0b1d3a]">
          <span className="uppercase text-primary font-semibold tracking-wide">
            About EDUART Delhi
          </span>
          <h2 className="text-3xl font-bold">
            Continuing Education for Dental Excellence
          </h2>
          <p className="text-gray-700">
            EDUART Delhi is a leading platform for continuing dental education,
            committed to enhancing clinical skills and knowledge among
            practicing dentists. We specialize in hands-on training programs in
            Aesthetic Dentistry, Biomimetic Dentistry, and Restorative Dentistry.
          </p>
          <p className="text-gray-700">
            Our goal is to bridge the gap between dental theory and clinical
            excellence. By offering workshops that combine science with
            practical application, EDUART empowers dentists to deliver
            predictable, long-lasting results to their patients.
          </p>
          <p className="text-gray-700">
            What sets EDUART apart is our practical, skill-based approach to
            learning. Our workshops are intentionally structured to go beyond
            theory—providing participants with the opportunity to practice
            techniques on models, simulate clinical scenarios, and gain
            confidence in applying new skills.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <div className="bg-primary text-white p-4 rounded-full text-center">
              1000+
              <br />
              Dentists
            </div>
            <div>
              <p className="font-semibold">Trusted by Professionals</p>
              <p className="text-gray-700">
                Across India & Internationally
              </p>
            </div>
          </div>

          <button className="mt-4 px-6 py-3 bg-[#0b1d3a] text-white rounded hover:bg-primary transition">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
