// import React from "react";

// const AboutSeriesSection = () => {
//   return (
//     <section className="w-full bg-[#F7F4EF] py-16 md:py-24">
//       <div className="max-w-6xl mx-auto px-6 md:px-10">
//         <div className="mb-10">
//           <h2 className="text-3xl md:text-4xl text-center font-extrabold text-[#4B2418] tracking-wide">
//             ABOUT THE SERIES
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_16px_35px_rgba(0,0,0,0.18)] border border-black/5">
//             <h3 className="text-xl font-bold text-[#4B2418] text-center mb-4">
//               Lectures & Dialogues
//             </h3>
//             <p className="text-zinc-700 leading-relaxed text-center">
//               Around 100 lecture sessions, panel discussions, workshops, and
//               dialogues.
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_16px_35px_rgba(0,0,0,0.18)] border border-black/5">
//             <h3 className="text-xl font-bold text-[#4B2418] mb-4 text-center">
//               Nationwide Reach
//             </h3>
//             <p className="text-zinc-700 leading-relaxed text-center">
//               To be conducted across India.
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_16px_35px_rgba(0,0,0,0.18)] border border-black/5">
//             <h3 className="text-xl font-bold text-[#4B2418] mb-4 text-center">
//               Inaugural Session
//             </h3>
//             <p className="text-zinc-700 leading-relaxed text-center">10 February 2026.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSeriesSection;

import React from "react";

const AboutSeriesSection = () => {
  const features = [
    {
      id: 1,
      title: "Lectures & Dialogues",
      highlight: "100+",
      sub: "Sessions",
      desc: "A comprehensive series of lecture sessions, panel discussions, and intellectual workshops.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Nationwide Reach",
      highlight: "Pan",
      sub: "India",
      desc: "Traveling across major cities and regional hubs to connect the diverse tapestry of Bharat.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Inaugural Session",
      highlight: "10",
      sub: "Feb '26",
      desc: "Grand opening ceremony marking the beginning of this historic intellectual journey.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#FDFBF7] py-20 md:py-32 overflow-hidden">
      {/* --- CSS for Entrance Animation --- */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-card-entry {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>

      {/* --- Background Decorative Elements --- */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#4B2418] font-display tracking-tight mb-6">
            ABOUT THE SERIES
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-3xl p-8 border border-orange-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 animate-card-entry"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Icon Bubble */}
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Big Data Highlight */}
              <div className="relative mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-[#4B2418] group-hover:text-orange-600 transition-colors duration-300">
                    {feature.highlight}
                  </span>
                  <span className="text-xl font-bold text-orange-400 uppercase tracking-wider">
                    {feature.sub}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="relative">
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-[#4B2418] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm group-hover:text-zinc-600">
                  {feature.desc}
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-orange-500 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSeriesSection;
