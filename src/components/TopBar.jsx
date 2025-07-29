import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white text-sm py-2 px-4 hidden md:block lora-regular">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <a href="tel:+919876543210" className="flex items-center hover:text-primary transition-colors">
            <FaPhoneAlt className="mr-2" /> +91 98765 43210
          </a>
          <a href="mailto:info@dentistcourses.com" className="flex items-center hover:text-primary transition-colors">
            <FaEnvelope className="mr-2" /> info@eduart.com
          </a>
        </div>
        <div className="flex space-x-5">
          <a href="#" className="hover:text-[#e30613] transition-colors"><FaFacebookF /></a>
          <a href="#" className="hover:text-[#e30613] transition-colors"><FaInstagram /></a>
          <a href="#" className="hover:text-[#e30613] transition-colors"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-[#e30613] transition-colors"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
