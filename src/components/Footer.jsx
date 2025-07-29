import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane
} from 'react-icons/fa';
import Logo from '../assets/logo1.png'

const Footer = () => {
  return (
    <footer className="lora-regular bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
            <img
  src={Logo}
  alt="Dental Courses Logo"
  className="w-28 h-28 mr-3"
/>
              
            </h3>
            <p className="text-gray-400 mb-6">
              India's premier dental education institute providing world-class training to dental professionals since 2012.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition duration-300">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Courses", "Faculty", "Contact"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary transition duration-300 flex items-center">
                    <FaChevronRight className="text-xs mr-2 text-primary" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary" />
                <span>5, Vikram Vihar, Extension, Lajpat Nagar, New Delhi, Delhi 110024</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-primary" />
                <span>+91 98108 06666</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary" />
                <span>info@eduart.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new courses, workshops, and dental insights.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="px-4 py-3 w-full rounded-l-md focus:outline-none text-gray-800 bg-gray-300"
                />
                <button className="bg-primary hover:bg-primaryDark px-4 py-3 rounded-r-md transition duration-300">
                  <FaPaperPlane />
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2023 Eduart. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary transition duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary transition duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-primary transition duration-300 text-sm">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
