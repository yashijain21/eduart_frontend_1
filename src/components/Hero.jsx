import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { TypeAnimation } from "react-type-animation";
import hero1 from "../assets/hero1.jpg";
const slides = [
  {
    image: hero1,
    text: "Master Modern Dentistry Techniques",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661295718975-319c131ddd9c?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Get Hands-on Dental Clinical Skills",
  },
  {
    image: "https://media.istockphoto.com/id/583848866/photo/dental-prosthesis-dentures-prosthetics-work.webp?a=1&b=1&s=612x612&w=0&k=20&c=2N2ZO6b34JH5vm2BdnrYw_hPKVZUk4BH7GuSxBgrIzM=",
    text: "Learn with Cutting-edge Dental Tools",
  },
];

const TechSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (

    <div className="w-full h-[100vh] overflow-hidden noto-sans">
 
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000 }}
        className="w-full h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full flex items-center justify-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                animation: "slideIn 1s forwards",
              }}
            >
             <div className="absolute inset-0">
  {/* Red top overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

  {/* Black transparent overlay for whole slide */}
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
    {index === activeIndex && (
      <TypeAnimation
        sequence={[slide.text, 1000]}  
        wrapper="h1"
        cursor={true}
        repeat={0}
        className="text-white text-3xl md:text-5xl font-bold text-center px-4"
        key={activeIndex}
      />
    )}
  </div>
</div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechSlider;
