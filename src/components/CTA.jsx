import React from "react";

const Contents = () => {
  const items = [
    { id: "01", name: "Dr. Garima", location: "Noida", color: "bg-yellow-300" },
    { id: "02", name: "Mr. Nitin Jain", location: "Noida", color: "bg-gray-400" },
    { id: "03", name: "Mr. Kushagra", location: "Noida", color: "bg-amber-200" },
    { id: "04", name: "Mrs. Khushboo", location: "Agra", color: "bg-rose-300" },
    { id: "05", name: "Mr. Girraj Verma", location: "Agra", color: "bg-slate-500" },
  ];

  return (
    <div className="bg-[#f9f9f4] min-h-screen p-8 font-serif">
      <h1 className="text-4xl mb-12">contents.</h1>
      <div className="flex gap-10">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center relative">
            {/* number */}
            <span className="text-4xl font-bold mb-2">{item.id}</span>
            {/* colored vertical bar with vertical name */}
            <div className={`relative w-6 h-64 ${item.color}`}>
              <span className="absolute left-3 -translate-x-1/2 top-30 text-sm rotate-90 whitespace-nowrap">
                {item.name}
              </span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-8 text-xs rotate-90 whitespace-nowrap">
                [{item.location}]
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs mt-8 max-w-md">
        This compilation consists of profiles from various locations listed in 2025.
      </p>
    </div>
  );
};

export default Contents;
