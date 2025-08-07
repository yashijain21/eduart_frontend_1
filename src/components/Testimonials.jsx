import React from 'react';
import pic1 from "../assets/1.png"
import pic2 from "../assets/59.png"
import pic3 from "../assets/134.png"
const ImageTestimonialCard = ({ image, caption, delay }) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay={delay}>
      <img src={image} alt="Testimonial" className="w-full h-auto object-cover" />
      {caption && (
        <div className="bg-white p-4">
          <p className="text-center text-gray-700 font-medium">{caption}</p>
        </div>
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  const imageTestimonials = [
    {
      image: pic1,
      caption: "3D Endodontics Workshop – A hands-on masterclass experience.",
      delay: "0",
    },
    {
      image: pic2,
      caption: "Participants engaging in one-on-one guidance sessions.",
      delay: "100",
    },
    {
      image:pic3,
      caption: "BIO Mimetic operations – A hands-on masterclass experience.",
      delay: "0",
    },
  ];

  return (
    <section className="py-20 noto-sans" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-primary bg-opacity-10 text-white font-semibold px-4 py-1 rounded-full mb-4">
            TESTIMONIALS
          </span>
          <p className="text-gray-600 max-w-2xl mx-auto">A glimpse into our workshops and the smiles we’ve created.</p>
        </div>

        {/* Image Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageTestimonials.map((item, index) => (
            <ImageTestimonialCard key={index} {...item} />
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default TestimonialsSection;