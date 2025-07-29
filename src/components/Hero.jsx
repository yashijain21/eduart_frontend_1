import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa6';
import Promotion from '../assets/promotion.png'
const Hero = () => {
  return (
    <section className="relative h-[120vh] p-10 flex items-center justify-center overflow-hidden lora-regular">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Promotion})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#973434] to-[#ffccce]/30 z-0"></div>

      {/* Content */}
      <div className="container relative z-10 text-white px-6 text-center max-w-4xl" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Elevate Your <span className="text-white">Dental Practice</span> <br /> with <span className="text-white">Advanced Training</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Join India’s premier dental education platform offering hands-on training from top faculty & world-class facilities.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
  href="#"
  className="bg-yellow-400  phone-wiggle text-black font-semibold px-8 py-4 rounded-full"
>
  Explore Courses
</a>
          <a
            href="#"
            className="group phone-wiggle relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black duration-300"
          >
            <span className="flex items-center gap-2">
              <FaPlay className="animate-pulse group-hover:animate-none" /> Watch Video
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Stat Badge */}
      
    </section>
  );
};

export default Hero;
