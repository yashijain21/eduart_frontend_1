import React from "react";

const successStories = [
  {
    type: "video",
    src: "https://www.youtube.com/embed/7NNTuKv8NGg",
    title: "Dr. Mehta's Journey",
    description: "Improved endodontic precision after hands-on course."
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1606811846967-0e66c312df81?auto=format&fit=crop&w=800&q=80",
    title: "Live Practice Session",
    description: "Real-time mentoring with advanced tools."
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/M-xGl_ePO8U",
    title: "Dr. Khan's Success",
    description: "Mastered rotary endodontics confidently."
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1579154204601-0150335bceda?auto=format&fit=crop&w=800&q=80",
    title: "Post-Course Practice",
    description: "Clinical transformation after the course."
  }
];

const SuccessStories = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Success Stories</h2>
          <p className="text-gray-600 text-lg">
            Hear from our alumni and see how this course transformed their practice.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="aspect-video">
                {story.type === "video" ? (
                  <iframe
                    src={story.src}
                    title={story.title}
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <img
                    src={story.src}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{story.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
