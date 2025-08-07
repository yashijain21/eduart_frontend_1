import { useParams, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import img1 from "../assets/1.png";
import img2 from "../assets/55.png";
import img3 from "../assets/59.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Navigation from "./Navigation";
import Footer from "./Footer";

const workshops = [
  {
    id: 1,
    title: "Fellowship in Medical Cosmetology – FMC (Delhi)",
    dateRange: "23 SEP - 1 OCT",
    detailsDate: "1 October, 10:00 AM - 4:00 PM",
    venue: "Delhi, India",
    description:
      "This comprehensive hands-on fellowship covers advanced facial aesthetics procedures, lasers, injectables, and dermal fillers with live demos and patient practice.",
    hours: "Mon–Sat 10:00–17:00",
    contact: "info@eduart.in",
    tags: ["Cosmetology", "Aesthetics", "Laser"],
    image: img1,
  },
  {
    id: 2,
    title: "Advanced Botox & Fillers Workshop",
    dateRange: "23 SEP - 2 OCT",
    detailsDate: "2 October, 10:00 AM - 4:00 PM",
    venue: "Delhi, India",
    description:
      "Master the safe and effective use of botulinum toxin and dermal fillers with international trainers and live cases.",
    hours: "Mon–Sat 10:00–17:00",
    contact: "info@eduart.in",
    tags: ["Botox", "Fillers", "Injectables"],
    image: img2,
  },
  {
    id: 3,
    title: "Laser Aesthetic Workshop",
    dateRange: "15 OCT - 20 OCT",
    detailsDate: "20 October, 10:00 AM - 4:00 PM",
    venue: "Mumbai, India",
    description:
      "Learn the fundamentals of laser dermatology, physics, and treatment protocols with hands-on live patients.",
    hours: "Mon–Sat 10:00–17:00",
    contact: "info@eduart.in",
    tags: ["Laser", "Dermatology", "Aesthetics"],
    image: img3,
  },
];

const WorkshopDetail = () => {
  const { id } = useParams();
  const workshop = workshops.find((w) => w.id === parseInt(id));

  if (!workshop) {
    return (
      <div className="p-10 text-center text-red-600">
        Workshop not found.
      </div>
    );
  }

  return (
    <section className="bg-white">
        <Navigation/>
      {/* Hero */}

     <div className="relative">
  {/* image background */}
  <img
    src={workshop.image}
    alt={workshop.title}
    className="w-full h-96 object-cover"
  />

  {/* black overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* content above overlay */}
  <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-center md:items-end p-6 md:p-12">
    <div className="text-white max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold">{workshop.title}</h1>
      <p className="flex items-center mt-2">
        <FaMapMarkerAlt className="mr-2" />
        {workshop.venue}
      </p>
    </div>

    {/* date/time box */}
    <div className="bg-white rounded shadow p-4 mt-4 md:mt-0 text-gray-800 w-full md:w-64">
      <h4 className="font-semibold mb-2">Date & Time</h4>
      <p className="flex items-center text-sm text-gray-600 mb-1">
        <FaCalendarAlt className="mr-2" />
        {workshop.detailsDate}
      </p>
      <button className="w-full bg-primary text-white py-2 rounded mt-3 hover:bg-red-700 transition">
        Book Now
      </button>
      <button className="w-full border border-primary text-primary py-2 rounded mt-2 hover:bg-purple-50">
        Programme Details
      </button>
    </div>
  </div>
</div>


      {/* Description + Map */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* left block */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p className="text-gray-700">{workshop.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Hours</h2>
            <p className="text-gray-700">{workshop.hours}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">
              How can I contact the organizer?
            </h2>
            <p className="text-gray-700">
              Please email us at{" "}
              <a href={`mailto:${workshop.contact}`} className="text-primary underline">
                {workshop.contact}
              </a>{" "}
              for any questions or assistance.
            </p>
          </div>
        </div>
        {/* right block */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">Event Location</h2>
            {/* use Google Maps iframe or Leaflet map here */}
            <iframe
              src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-48 rounded shadow"
              title="map"
            ></iframe>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {workshop.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-red-700/20  px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Share with Friends</h2>
           <div className="flex gap-4 text-primary text-xl">
  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
    <FaFacebook />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
    <FaTwitter />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>
</div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 mb-12">
        <Link
          to="/"
          className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-primary"
        >
          Back to Workshops
        </Link>
      </div>
      <Footer/>
    </section>
  );
};

export default WorkshopDetail;
