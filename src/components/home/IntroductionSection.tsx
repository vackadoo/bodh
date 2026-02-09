// import React from "react";

// const IntroductionSection = () => {
//   return (
//     <section className="w-full bg-white text-black py-16 md:py-24">
//       <div className="max-w-6xl mx-auto px-6 md:px-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <div className="space-y-6">
//             <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
//               INTRODUCTION
//             </h2>
//             <p className="text-base md:text-lg leading-relaxed text-justify text-black">
//               We are pleased to present our forthcoming national initiative -
//               the "Bharat Bodh Samvad Series 2026", conceptualised and organised
//               by ISHAN BODH and NISHREYAS, in collaboration with the Indian
//               Council for Philosophical Research (ICPR), Ministry of Education,
//               Government of India, and the Central Sanskrit University, New
//               Delhi.
//             </p>
//             <p className="text-base md:text-lg leading-relaxed text-justify text-black">
//               This landmark intellectual and cultural series is envisioned as a
//               nationwide dialogue platform, bringing together eminent scholars,
//               thought leaders, and practitioners to explore India's
//               civilizational ethos and its contemporary relevance.
//             </p>
//           </div>

//           <div className="w-full">
//             <img
//               src="/banner3.png"
//               alt="Introduction visual"
//               className="w-full h-auto rounded-xl shadow-2xl object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntroductionSection;

import React from "react";

const IntroductionSection = () => {
  return (
    <section className="relative w-full bg-stone-50 py-20 md:py-32 overflow-hidden">
      
      {/* --- 1. Background Decor (Animated Blob) --- */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT COLUMN: Text Content --- */}
          <div className="space-y-8 relative z-10">
            
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-orange-600"></span>
              <span className="text-sm font-bold tracking-[0.2em] text-orange-600 uppercase">
                The Initiative
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 leading-tight font-display">
              Unveiling{" "}  
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-700">
                 भारत बोध
              </span>
            </h2>

            {/* Paragraph 1 with Drop Cap */}
            <p className="text-lg md:text-xl text-zinc-700 leading-relaxed text-justify">
              <span className="float-left text-5xl font-bold text-orange-500 mr-3 mt-[-6px] font-serif">W</span>
              e are pleased to present our forthcoming national initiative — the 
              <span className="font-semibold text-zinc-900"> "Bharat Bodh Samvad Series 2026"</span>. 
              Conceptualised by <span className="font-bold text-orange-800">ISHAN BODH</span> and <span className="font-bold text-orange-800">NISHREYAS</span>, 
              this series represents a monumental collaboration with the giants of Indian academia.
            </p>

            {/* Logos/Partners List (Text Version) */}
            <div className="border-l-4 border-orange-500 pl-6 py-2 bg-white/50 backdrop-blur-sm rounded-r-lg">
              <p className="text-base text-zinc-600 italic">In collaboration with:</p>
              <ul className="mt-2 space-y-1 font-semibold text-zinc-900">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  Indian Council for Philosophical Research (ICPR)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  Ministry of Education, Govt. of India
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  Central Sanskrit University, New Delhi
                </li>
              </ul>
            </div>

            <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
              This landmark intellectual and cultural series is envisioned as a nationwide dialogue platform, 
              bringing together eminent scholars and thought leaders to explore India's civilizational ethos.
            </p>
          </div>

          {/* --- RIGHT COLUMN: Image & Animation --- */}
          <div className="relative group perspective-1000">
            
            {/* Decorative Frame Behind */}
            <div className="absolute inset-0 bg-orange-200 rounded-2xl transform rotate-3 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white transform transition-transform duration-500 hover:-translate-y-2">
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-60"></div>
              
              {/* Image with Zoom Effect */}
              <img
                src="/banner3.png"
                alt="Introduction visual"
                className="w-full h-[500px] object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
              />


            </div>



          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;