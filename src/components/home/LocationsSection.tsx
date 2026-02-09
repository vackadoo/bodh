// import React from "react";

// const locations = [
//   {
//     region: "Delhi NCR",
//     cities: ["Delhi", "Noida"],
//   },
//   {
//     region: "Assam",
//     cities: ["Guwahati", "Dibrugarh", "Majuli"],
//   },
//   {
//     region: "Maharashtra",
//     cities: ["Pune", "Mumbai"],
//   },
//   {
//     region: "Karnataka",
//     cities: ["Bengaluru"],
//   },
//   {
//     region: "Rajasthan",
//     cities: ["Jaipur", "Udaipur"],
//   },
//   {
//     region: "Bihar",
//     cities: ["Patna"],
//   },
//   {
//     region: "Uttar Pradesh",
//     cities: ["Varanasi"],
//   },
//   {
//     region: "West Bengal",
//     cities: ["Kolkata"],
//   },
//   {
//     region: "Other States",
//     cities: [
//       "Goa",
//       "Kerala",
//       "Odisha",
//       "Madhya Pradesh",
//       "Punjab",
//       "and several other centres nationwide",
//     ],
//   },
// ];

// const LocationsSection = () => {
//   return (
//     <section className="w-full bg-[#FFF7EA] py-16 md:py-24">
//       <div className="max-w-6xl mx-auto px-6 md:px-10">
//         <div className="flex flex-col gap-4 mb-10">
//           <p className="text-sm font-semibold tracking-[0.3em] text-[#8A5A44] uppercase">
//             Locations
//           </p>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B1D14]">
//             Nationwide Lecture Centers
//           </h2>
//           <p className="text-base md:text-lg text-[#5A3A2E] max-w-3xl">
//             The Bharat Bodh Samvad Series 2026 travels across India, connecting
//             major cities and regional hubs with a shared cultural and
//             intellectual dialogue.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {locations.map((item) => (
//             <div
//               key={item.region}
//               className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_18px_40px_rgba(60,30,20,0.18)] border border-black/5"
//             >
//               <h3 className="text-xl font-bold text-[#3B1D14] mb-4">
//                 {item.region}
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {item.cities.map((city) => (
//                   <span
//                     key={city}
//                     className="px-3 py-1.5 rounded-full bg-[#FBE9CF] text-[#5A3A2E] text-sm font-medium"
//                   >
//                     {city}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LocationsSection;


'use client';
import React, { useState } from "react";

const locations = [
  { region: "Delhi NCR", cities: ["New Delhi", "Noida", "Greater Noida"] },
  { region: "Assam", cities: ["Guwahati", "Dibrugarh", "Majuli"] },
  { region: "Maharashtra", cities: ["Pune", "Mumbai", "Nagpur"] },
  { region: "Karnataka", cities: ["Bengaluru", "Mysuru"] },
  { region: "Rajasthan", cities: ["Jaipur", "Udaipur", "Jodhpur"] },
  { region: "Bihar", cities: ["Patna", "Gaya"] },
  { region: "Uttar Pradesh", cities: ["Varanasi", "Lucknow", "Ayodhya"] },
  { region: "West Bengal", cities: ["Kolkata", "Darjeeling"] },
  { region: "Other States", cities: ["Goa", "Kerala", "Odisha", "Madhya Pradesh", "Punjab"] },
];

const LocationsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-zinc-50 py-24 overflow-hidden">
      
      {/* --- Decorative Background Pattern (CSS Only) --- */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ea580c 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 ">
          <div className="max-w-2xl ">

            <h2 className="text-4xl  md:text-6xl font-bold text-zinc-900 font-display leading-tight">
        LOCATIONS
            </h2>
          </div>
   
        </div>

        {/* --- The "Focus" Grid --- */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {locations.map((item, idx) => (
            <div
              key={item.region}
              onMouseEnter={() => setHoveredIndex(idx)}
              className={`
                group relative bg-white border border-zinc-200 p-8 h-full min-h-[200px] flex flex-col justify-between
                transition-all duration-500 ease-in-out cursor-default
                ${hoveredIndex !== null && hoveredIndex !== idx ? 'opacity-40 blur-[1px] scale-95' : 'opacity-100 hover:shadow-2xl hover:border-orange-500/30 hover:-translate-y-2'}
              `}
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />

              {/* Top: Index & Region */}
              <div className="relative">
                <span className="block text-6xl font-black text-zinc-100 group-hover:text-orange-50 transition-colors duration-300 absolute -top-4 -left-4 -z-10 select-none">
                  0{idx + 1}
                </span>
                
                <h3 className="text-2xl font-bold text-zinc-800 group-hover:text-orange-700 transition-colors mb-2 flex items-center gap-2">
                  {item.region}
                  {/* Small animated arrow on hover */}
                  <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </h3>
                <div className="h-1 w-12 bg-zinc-200 group-hover:w-full group-hover:bg-orange-500 transition-all duration-500 ease-out rounded-full" />
              </div>

              {/* Bottom: Cities List */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {item.cities.map((city) => (
                    <span
                      key={city}
                      className="
                        inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase 
                        border border-zinc-200 text-zinc-500 bg-zinc-50
                        group-hover:border-orange-200 group-hover:text-orange-800 group-hover:bg-orange-50
                        transition-colors duration-300
                      "
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default LocationsSection;
