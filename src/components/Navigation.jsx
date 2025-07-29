import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo1.png';
import { HashLink } from 'react-router-hash-link';

const Navigation = ({ color = "bg-transparent" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
<nav className={`absolute left-0 w-full z-50 lora-regular p-5 text-white ${color}`}  >
  <div className="max-w-7xl mx-auto ">
    <div className="flex justify-between items-center ">
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Dental Courses Logo" className="w-24 h-auto" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-8 font-medium text-base">
        <Link to="/" className="rounded-sm hover:text-[#8a0d16] transition duration-300 hover:rounded-sm hove:font-semibold hover:bg-white hover:shadow-md p-1 px-4">Home</Link>
        <Link to="/AllCoursePage" className="rounded-sm hover:text-[#8a0d16] transition duration-300 hover:rounded-sm hove:font-semibold hover:bg-white hover:shadow-md p-1 px-4">Courses</Link>
        <a href="/faculty" className="rounded-sm hover:text-[#8a0d16] transition duration-300 hover:rounded-sm hove:font-semibold hover:bg-white hover:shadow-md p-1 px-4">Faculty</a>
       <HashLink smooth to="#testimonials" className="rounded-sm hover:text-[#8a0d16] transition duration-300 hover:rounded-sm hover:font-semibold hover:bg-white hover:shadow-md p-1 px-4">
  Success Stories
</HashLink>

        <HashLink smooth to="#about" className="rounded-sm hover:text-[#8a0d16] transition duration-300 hover:rounded-sm hove:font-semibold hover:bg-white hover:shadow-md p-1 px-4">About</HashLink>
        <Link to="/admin" className="rounded-sm hover:text-[#8a0d16] transition duration-300 hover:rounded-sm hove:font-semibold hover:bg-white hover:shadow-md p-1 px-4">Dashboard</Link>
       
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'} text-2xl transition-transform duration-300`}></i>
      </button>
    </div>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="lg:hidden space-y-4 pb-6 pt-4 border-t border-gray-300 text-center font-medium text-white bg-black">
        <Link to="/" className="block hover:text-primary">Home</Link>
        <Link to="/AllCoursePage" className="block hover:text-primary">Courses</Link>
        <Link href="/faculty" className="block hover:text-primary">Faculty</Link>
       <HashLink smooth to="#testimonials" className="rounded-sm hover:text-[#8a0d16] transition duration-300 hover:rounded-sm hover:font-semibold hover:bg-white hover:shadow-md p-1 px-4">
  Success Stories
</HashLink>
  <HashLink smooth to="#about" className="rounded-sm hover:text-[#8a0d16] transition duration-300 hover:rounded-sm hove:font-semibold hover:bg-white hover:shadow-md p-1 px-4">About</HashLink>
        <Link to="/admin" className="block hover:text-primary">Dashboard</Link>
       
      </div>
    )}
  </div>
</nav>

  );
};

export default Navigation;
