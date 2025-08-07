import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import doc1 from "../assets/Dr.nikhil.jpg";
import doc2 from "../assets/Dr.Sheetal.jpg";

const facultyData = [
  {
    id: 1,
    name: "Dr. Nikhil Bahuguna",
    title: "Endodontist",
    description:
      "Graduated from BVP Pune in 2001, pursued MDS in Conservative Dentistry and Endodontics in 2004 from Bapuji Dental College. Specializes in MicroEndodontics, Cosmetic Dentistry, Root Canal and Repeat Root Canal treatments.",
    image: doc1,
  },
  {
    id: 2,
    name: "Dr. Sachindeep Singh",
    title: "Orthodontics Specialist",
    description:
      "With 23 years of experience, Dr. Singh specialises in Acrylic Partial Denture, Impaction Extraction, BPS Dentures, Crowns and more.",
    image:
      "https://oracarecosmeticdental.com/wp-content/uploads/2022/05/mugshot-Dr-Sachindeep-Singh.jpg",
  },
  {
    id: 3,
    name: "Dr. Sheetal Sahunja",
    title: "Endodontics Consultant",
    description:
      "25 years of expertise in cosmetic and aesthetic dentistry. Practices at The Dentist, Lajpat Nagar, Delhi.",
    image: doc2,
  },
];

const Faculty = () => {
  return (
    <>
      <Navigation color="bg-black" />

      <section className="pt-40 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
         <motion.h2
  className="text-4xl font-bold text-[#960300] mb-10 text-center"
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Meet The Faculty
</motion.h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {facultyData.map((faculty, index) => (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {/* faculty image */}
                <div className="relative">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-64 object-cover"
                  />
                  {/* badge */}
                  <div
                    className={`absolute bottom-0 left-4 transform translate-y-1/2 bg-[#960300] text-white px-4 py-2 rounded-full flex items-center shadow`}
                  >
                    <span className="bg-white text-[#960300] rounded-full w-8 h-8 flex items-center justify-center mr-2 font-bold">
                      {index + 1}
                    </span>
                    <div className="text-left">
                      <div className="font-semibold text-sm">{faculty.name}</div>
                      <div className="text-xs">{faculty.title}</div>
                    </div>
                  </div>
                </div>

                {/* description */}
                <div className="p-6 text-center">
                  
                  <p className="text-gray-600 text-sm mb-4 mt-5">
                    {faculty.description}
                  </p>
                  {/* social icons */}
                  <div className="flex justify-center gap-4 text-[#960300] text-lg mt-2">
                    <FaFacebookF className="hover:text-gray-700 cursor-pointer transition" />
                    <FaTwitter className="hover:text-gray-700 cursor-pointer transition" />
                    <FaInstagram className="hover:text-gray-700 cursor-pointer transition" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Faculty;
