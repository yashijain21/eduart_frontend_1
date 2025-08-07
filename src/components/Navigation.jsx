import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

import logo from '../assets/Logo 3.png';

const Header = ({ color = 'bg-[#960000]' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'; // Clean up on unmount
    };
  }, []);

  return (
    <>
      {/* Fixed Wrapper for TopBar + Navbar */}
      <div className="fixed w-full top-0 left-0 z-50 shadow-md box-border">
        {/* TopBar */}
        <div className="bg-[#0b1d3a] text-white text-xs py-2 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center hover:text-[#e30613] transition"
              >
                <FaPhoneAlt className="mr-1" /> +91 98765 43210
              </a>
              <a
                href="mailto:info@eduart.com"
                className="flex items-center hover:text-[#e30613] transition"
              >
                <FaEnvelope className="mr-1" /> info@eduart.com
              </a>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-[#e30613] transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#e30613] transition"><FaInstagram /></a>
              <a href="#" className="hover:text-[#e30613] transition"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-[#e30613] transition"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`w-full ${color} text-white`}>
          <div className=" px-4 py-2 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Eduart Logo" className="w-32 sm:w-36 h-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 font-medium text-sm">
              <Link to="/" className="hover:text-[#8a0d16] hover:bg-white px-3 py-1 rounded transition">Home</Link>
              <Link to="/AllCoursePage" className="hover:text-[#8a0d16] hover:bg-white px-3 py-1 rounded transition">Courses</Link>
              <Link to="/faculty" className="hover:text-[#8a0d16] hover:bg-white px-3 py-1 rounded transition">Faculty</Link>
              <HashLink smooth to="#testimonials" className="hover:text-[#8a0d16] hover:bg-white px-3 py-1 rounded transition">Success Stories</HashLink>
              <HashLink smooth to="#about" className="hover:text-[#8a0d16] hover:bg-white px-3 py-1 rounded transition">About</HashLink>
              <Link to="/admin" className="hover:text-[#8a0d16] hover:bg-white px-3 py-1 rounded transition">Dashboard</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMobileMenu} className="lg:hidden text-xl focus:outline-none" aria-label="Menu Toggle">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden w-[360px] bg-black text-white py-6 space-y-4 text-center text-sm font-medium">
              <Link to="/" onClick={toggleMobileMenu} className="block hover:text-[#e30613]">Home</Link>
              <Link to="/AllCoursePage" onClick={toggleMobileMenu} className="block hover:text-[#e30613]">Courses</Link>
              <Link to="/faculty" onClick={toggleMobileMenu} className="block hover:text-[#e30613]">Faculty</Link>
              <HashLink smooth to="#testimonials" onClick={toggleMobileMenu} className="block hover:text-[#e30613]">Success Stories</HashLink>
              <HashLink smooth to="#about" onClick={toggleMobileMenu} className="block hover:text-[#e30613]">About</HashLink>
              <Link to="/admin" onClick={toggleMobileMenu} className="block hover:text-[#e30613]">Dashboard</Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
