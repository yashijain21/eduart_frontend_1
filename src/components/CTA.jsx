import React from 'react';

const CTA = () => {
  return (
    <section className=" lora-regular relative py-24  text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
  {/* Background Image */}
  <img 
    src="https://images.unsplash.com/photo-1647911780648-5252a6acdc9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVudGFsJTIwcmVkJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" 
    alt="Dental Background" 
    className="w-full h-full object-cover"
  />

  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>
</div>

      <div className="container mx-auto px-4 relative z-10 ">
        <div className="max-w-3xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Dental Practice?</h2>
          <p className="text-lg mb-8 opacity-90">Limited seats available for our upcoming batches. Reserve your spot today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="bg-white hover:bg-gray-100 text-dark font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
              <i className="fas fa-phone-alt mr-2"></i> Call for Admission
            </a>
            <a href="#" className="bg-white hover:bg-gray-100 text-dark font-bold py-4 px-8 rounded-full transition duration-300 flex items-center justify-center">
              <i className="fas fa-download mr-2"></i> Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
