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
import Why from './assets/Why';
import Tillnow from './components/Tillnow';
import './index.css'
import DentalBenefits from './components/DentalBenifits';
import AboutSection from './components/about';
import UpcomingWorkshops from './components/Upcomingevents';

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
</style>


const Home = () => {
  return (
    <>
    <div className="noto-sans text-gray-800 bg-gray-100 scrollbar-none">

      <Navigation />
     <HeroSection />
  <div className="-mt-28 z-10 relative">
    <FeaturesSection />
  </div>
      <AboutSection/>
      <Why/>
      <Tillnow/>
      <UpcomingWorkshops/>
   
      <DentalBenefits/>
     
     
      <Footer />
    </div>
    </>
  )
}

export default Home