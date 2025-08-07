import React, { useRef } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/1.png";
import img2 from "../assets/55.png";
import img3 from "../assets/59.png";
import img4 from "../assets/114.png";

const workshops = [
  {
    id: 1,
    title: "Endodontic Excellence Workshop",
    date: "12. 7. 2024",
    shares: 15,
    image: img4,
    description: "Mastering modern rotary instrumentation techniques.",
  },
  {
    id: 2,
    title: "Smile Design Principles",
    date: "18. 8. 2024",
    shares: 22,
    image: img2,
    description: "Aesthetic evaluation and case studies in smile design.",
  },
  {
    id: 3,
    title: "Implantology Fundamentals",
    date: "5. 9. 2024",
    shares: 18,
    image: img3,
    description: "Surgical and prosthetic steps for implant placement.",
  },
  {
    id: 4,
    title: "Laser Dentistry Hands-on",
    date: "22. 9. 2024",
    shares: 12,
    image: img1,
    description: "Applications of dental lasers with live demos.",
  },
];

const WorkshopsCompleted = () => {
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
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="flex flex-col md:flex-row md:space-x-10 items-start">
        {/* Left Title Block */}
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-[#960300] mb-2 border-b-4 border-[#960300] inline-block">
            Recent <br /> Workshops
          </h2>
          <p className="text-gray-600 mt-2">
            These are some of the workshops successfully conducted.
          </p>
          <div className="flex items-center space-x-2 mt-4">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full border border-gray-400 hover:bg-gray-200"
            >
              &lt;
            </button>
            <span className="text-sm text-gray-600">3 / 9</span>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full border border-gray-400 hover:bg-gray-200"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Right Scrollable Workshop Cards */}
        <div
          ref={scrollRef}
          className="md:w-3/4 overflow-x-auto scrollbar-none flex space-x-6"
        >
          {workshops.map((workshop) => (
            <div key={workshop.id} className="w-64 flex-shrink-0 bg-white h-[60vh]">
              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full h-48 object-cover rounded shadow"
              />
              <p className="text-xs text-gray-500 mt-2">
                {workshop.date} &nbsp;/&nbsp; {workshop.shares} Share
              </p>
              <h3 className="font-semibold text-sm mt-1">{workshop.title}</h3>
              <p className="text-xs text-gray-600 line-clamp-2">
                {workshop.description}
              </p>
            <div className="mt-2">
                  <Link
  to={`/workshops/${workshop.id}`}
  className="bg-primary text-white text-xs px-2 py-2  rounded hover:bg-orange-700"
>
  View Details
</Link>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsCompleted;
