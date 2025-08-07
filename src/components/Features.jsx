import React from "react";
import { FaGraduationCap, FaChalkboardTeacher, FaPhone } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      title: "Trending Courses",
      description:
        "Learn the techniques for injecting Botox and dermal fillers to reduce wrinkles, enhance facial contours, and create youthful appearances.",
      link: "Learn More",
      icon: <FaGraduationCap size={40} />,
      bg: "bg-[#0b1d3a]", // navy blue
      textColor: "text-white",
    },
    {
      title: "Expert Faculty",
      description:
        "Our faculty comprises industry professionals and academic experts dedicated to delivering high-quality, real-world education.",
      link: "View Faculty",
      icon: <FaChalkboardTeacher size={40} />,
      bg: "bg-primary", // bright red/orange
      textColor: "text-white",
    },
    {
      title: "Contact Our Team",
      description:
        "Get in touch with us! We’re here to help and would love to hear from you – 24/7! Contact Us Anytime, Anywhere.",
      link: "Contact Us",
      icon: <FaPhone size={40} />,
      bg: "bg-[#0b1d3a]", // navy blue
      textColor: "text-white",
    },
  ];

  return (
    <div className=" flex flex-col md:flex-row justify-center items-center w-full noto-sans md:px-24 px-0">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`${feature.bg} ${feature.textColor} flex-1 p-6 flex flex-col items-center text-center min-h-[300px]`}
        >
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="mb-4 text-sm">{feature.description}</p>
          <button className="underline hover:text-gray-200">{feature.link} &rsaquo;</button>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
