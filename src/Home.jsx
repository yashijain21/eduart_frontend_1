import React from 'react'
import TopBar from "./components/TopBar"
import Navigation from './components/Navigation';
import HeroSection from './components/Hero';
import FeaturesSection from './components/Features';
import CoursesSection from './components/Courses';
import StatsSection from './components/Stats';
import TestimonialsSection from './components/Testimonials';
import CTASection from './components/CTA';
import Footer from './components/Footer';

import './index.css'
import DentalBenefits from './components/DentalBenifits';
<style>
@import url('https://fonts.googleapis.com/css2?family=Ancizar+Serif:ital,wght@0,300..900;1,300..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>


const Home = () => {
  return (
    <>
    <div className="ancizar-serif-regular antialiased text-gray-800 bg-gray-100">
 <TopBar/>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <DentalBenefits/>
      <StatsSection />

      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
    </>
  )
}

export default Home