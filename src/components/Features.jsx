import React from 'react';
import { FaMicroscope, FaUserTie, FaHandHoldingHeart, FaGlobe } from 'react-icons/fa';
const FeatureCard = ({ Icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-500 border border-gray-100" 
      data-aos="fade-up" 
      data-aos-delay={delay}
      id="about"
    >
      <div className="text-primary text-4xl mb-6">
        <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
          <Icon className="text-white text-2xl" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};


const Features = () => {
  const features = [
    {
      Icon: FaMicroscope,
      title: "Advanced Labs",
      description: "State-of-the-art simulation labs with the latest dental equipment and technology.",
      delay: "100"
    },
    {
      Icon: FaUserTie,
      title: "Industry Experts",
      description: "Learn from pioneers in dentistry with 20+ years of clinical and teaching experience.",
      delay: "200"
    },
    {
      Icon: FaHandHoldingHeart,
      title: "Patient-Centered",
      description: "Real patient cases under supervision to build confidence and competence.",
      delay: "300"
    },
    {
      Icon: FaGlobe,
      title: "Global Recognition",
      description: "Internationally accredited programs that enhance your professional standing.",
      delay: "400"
    }
  ];

  return (
    <section className="py-5 lora-regular">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
         
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Transforming Dental Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

