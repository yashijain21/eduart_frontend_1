
import React, { useRef } from "react";
import img1 from "../assets/Endodontics.jpg";
import img2 from "../assets/FMR-1.jpg";
import img3 from "../assets/implants.jpg";
import img4 from "../assets/Ortho.jpg";
import img5 from "../assets/restorative.jpg";
const workshops = [
  {
    id: 1,
    title: "Fellowship in Medical Cosmetology – FMC (Delhi)",
    dateRange: "23 SEP - 1 OCT",
    detailsDate: "1 October",
    venue: "Delhi",
    image: img1,
  },
  {
    id: 2,
    title: "Advanced Botox & Fillers Workshop",
    dateRange: "23 SEP - 2 OCT",
    detailsDate: "2 October",
    venue: "Delhi",
    image: img2,
  },
  {
    id: 3,
    title: "Laser Aesthetic Workshop",
    dateRange: "15 OCT - 20 OCT",
    detailsDate: "20 October",
    venue: "Mumbai",
    image: img3,
  },
   {
    id: 1,
    title: "Fellowship in Medical Cosmetology – FMC (Delhi)",
    dateRange: "23 SEP - 1 OCT",
    detailsDate: "1 October",
    venue: "Delhi",
    image: img4,
  },
   {
    id: 1,
    title: "Fellowship in Medical Cosmetology – FMC (Delhi)",
    dateRange: "23 SEP - 1 OCT",
    detailsDate: "1 October",
    venue: "Delhi",
    image: img5,
  },
];


const UpcomingWorkshops = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 px-6 md:px-20 bg-white">
      <div className="text-center mb-8">
        <p className="text-primary uppercase text-xs font-semibold tracking-wider">
          Session Announcement
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          Upcoming Batches
        </h2>
        <div className="w-12 h-1 bg-primary mx-auto mt-2 rounded" />
      </div>

      <div className="relative">
      

        {/* Slides */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-none scroll-smooth"
        >
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="relative flex-shrink-0 w-72 rounded overflow-hidden group shadow"
            >
              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full h-64 object-cover"
              />

              {/* date badge */}
              <div className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded font-semibold">
                {workshop.dateRange}
              </div>

              {/* overlay on hover */}
              <div className="absolute inset-0 top-25 left-18 right-9 bg-white/80  group-hover:flex flex-col justify-center items-center text-center p-4 transition-all duration-300">
                <h4 className="text-gray-800 font-bold text-sm mb-2">
                  {workshop.title}
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  {workshop.detailsDate}
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  Venue: {workshop.venue}
                </p>
                <button className="bg-primary text-white text-xs px-4 py-2 rounded hover:bg-orange-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default UpcomingWorkshops;
