

// "use client";
// import React, { useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const Objectives = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [opacity, setOpacity] = useState(0);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!containerRef.current) return;

//     const rect = containerRef.current.getBoundingClientRect();
//     setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//   };

//   const handleMouseEnter = () => setOpacity(1);
//   const handleMouseLeave = () => setOpacity(0);

//   const objectives = [
//     {
//       id: 1,
//       title: "Civilisational Values",
//       description: "Promote India’s Civilisational Values as guiding principles for contemporary challenges.",
//       icon: (
//         <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: "Intellectual Dialogue",
//       description: "Foster Intellectual Dialogue between scholars, policymakers, and practitioners.",
//       icon: (
//         <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: "National Identity",
//       description: "Strengthen National Identity and civilizational confidence in global contexts.",
//       icon: (
//         <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//         </svg>
//       ),
//     },
//     {
//       id: 4,
//       title: "Youth & Academia",
//       description: "Engage Youth and Academia by inspiring pride in India’s knowledge traditions.",
//       icon: (
//         <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.221 69.17 69.17 0 00-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
//         </svg>
//       ),
//     },
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       },
//     },
//   };

//   return (
//     <section className="py-24 bg-[#FFF8F0] relative overflow-hidden" id="about">
      
//       {/* --- Animated Background Mandala (Slow Spin) --- */}
//       <motion.div 
//         animate={{ rotate: 360 }}
//         transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
//         className="absolute top-0 right-[-10%] w-[600px] h-[600px] opacity-[0.03] pointer-events-none select-none"
//       >
//         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//           <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.3,34.8C60.4,46.7,49.9,56.9,37.8,64.3C25.7,71.8,12,76.5,-1.1,78.4C-14.2,80.3,-27.8,79.4,-40.1,72.7C-52.4,66,-63.4,53.5,-71.3,39.6C-79.2,25.7,-84,10.4,-82.3,-4.2C-80.6,-18.8,-72.4,-32.7,-61.6,-43.3C-50.8,-53.9,-37.4,-61.2,-23.8,-68.8C-10.2,-76.4,3.6,-84.3,17.4,-84.3C31.2,-84.3,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
//         </svg>
//       </motion.div>

//       {/* --- Decorative Gradient Orbs --- */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-300 rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

//       <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
//         {/* --- Header with Reveal Animation --- */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20 max-w-3xl mx-auto"
//         >
//           <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase mb-4 border border-orange-200/50">
//              Vision 2026
//           </span>
//           <h3 className="text-4xl md:text-6xl font-black text-[#3B1D14] font-devanagari mb-6 drop-shadow-sm">
//             Core Objectives
//           </h3>
//           <p className="text-[#5A3A2E] text-lg md:text-xl leading-relaxed font-light">
//             Rekindling the spirit of inquiry and strengthening the foundations of our civilisational heritage through meaningful engagement.
//           </p>
//         </motion.div>

//         {/* --- Mouse Spotlight Grid --- */}
//         <motion.div 
//           ref={containerRef}
//           onMouseMove={handleMouseMove}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative group"
//         >
//           {/* Spotlight Effect overlay - Moves with mouse */}
//           <div
//             className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 rounded-3xl"
//             style={{
//               opacity,
//               background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(234, 88, 12, 0.06), transparent 40%)`,
//             }}
//           />

//           {objectives.map((obj, index) => (
//             <motion.div
//               key={obj.id}
//               variants={itemVariants}
//               whileHover={{ y: -5, scale: 1.02 }}
//               className="relative h-full"
//             >
//               <div className="h-full bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-start overflow-hidden group/card">
                
//                 {/* Subtle gradient border effect on hover */}
//                 <div className="absolute inset-0 border-2 border-transparent group-hover/card:border-orange-500/10 rounded-3xl transition-colors duration-500"></div>

//                 {/* Icon Container with Pop effect */}
//                 <div className="relative mb-6">
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFF8F0] to-[#FFE4C4] text-orange-600 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] border border-white group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform duration-300 ease-out">
//                     {obj.icon}
//                   </div>
//                 </div>

//                 {/* Text Content */}
//                 <div className="relative z-10">
//                   <h4 className="text-xl font-bold text-[#3B1D14] mb-3 group-hover/card:text-orange-700 transition-colors">
//                     {obj.title}
//                   </h4>
//                   <p className="text-[#5A3A2E]/80 text-sm leading-relaxed mb-6">
//                     {obj.description}
//                   </p>
//                 </div>

//                 {/* Bottom Active Indicator */}
//                 <div className="mt-auto flex items-center gap-2 text-xs font-bold text-orange-600 opacity-0 -translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300">
//                   <span>EXPLORE</span>
//                   <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                   </svg>
//                 </div>

//                 {/* Decorative background swish on hover */}
//                 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-orange-100 to-transparent rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Objectives;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Objectives = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const objectives = [
    {
      id: 1,
      title: "Civilisational Values",
      description: "Promote India’s Civilisational Values as guiding principles for contemporary challenges.",
      lightColor: "bg-orange-50",
      activeColor: "bg-white",
      // Subtle texture pattern
      pattern: "radial-gradient(#ea580c 0.5px, transparent 0.5px)", 
    },
    {
      id: 2,
      title: "Intellectual Dialogue",
      description: "Foster Intellectual Dialogue between scholars, policymakers, and practitioners.",
      lightColor: "bg-[#FFF8F0]",
      activeColor: "bg-white",
      pattern: "linear-gradient(to right, #8B4513 1px, transparent 1px) 0 0 / 20px 20px",
    },
    {
      id: 3,
      title: "National Identity",
      description: "Strengthen National Identity and civilizational confidence in global contexts.",
      lightColor: "bg-red-50",
      activeColor: "bg-white",
      pattern: "repeating-linear-gradient(45deg, #b91c1c 0, #b91c1c 0.5px, transparent 0, transparent 10px)",
    },
    {
      id: 4,
      title: "Youth & Academia",
      description: "Engage Youth and Academia by inspiring pride in India’s knowledge traditions.",
      lightColor: "bg-stone-100",
      activeColor: "bg-white",
      pattern: "radial-gradient(#444 0.5px, transparent 0.5px)",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative overflow-hidden" id="about">
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
      
            <h3 className="text-3xl md:text-5xl font-black text-[#2A1B17] font-devanagari">
              CORE OBJECTIVES
            </h3>
          </div>
        </div>

        {/* --- Minimalist Accordion --- */}
        {/* Height reduced to 320px on desktop */}
        <div className="flex flex-col md:flex-row h-[500px] md:h-[320px] gap-2 md:gap-3">
          {objectives.map((obj) => {
            const isActive = activeId === obj.id;
            
            return (
              <motion.div
                key={obj.id}
                layout
                onClick={() => setActiveId(obj.id)}
                className={`
                  relative rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-black/5
                  ${isActive ? "flex-[3] shadow-xl" : "flex-[1] hover:flex-[1.2] hover:bg-white/50"}
                  ${isActive ? obj.activeColor : obj.lightColor}
                `}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                {/* Background Pattern */}
                <div 
                   className={`absolute inset-0 opacity-[0.03] pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-[0.06]' : 'opacity-0'}`}
                   style={{ backgroundImage: obj.pattern, backgroundSize: '12px 12px' }}
                ></div>

                <div className="relative h-full w-full p-6 md:p-8 flex flex-col md:flex-row items-center">
                  
                  {/* --- Collapsed View (Strip) --- */}
                  <div className={`flex flex-row md:flex-col items-center justify-between h-full w-full md:w-auto transition-all duration-300 absolute md:relative inset-0 md:inset-auto p-4 md:p-0 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <span className="text-lg font-black text-black/20">0{obj.id}</span>
                    
                    {/* Vertical Text */}
                    <div className="hidden md:block rotate-180 flex-1 py-4 writing-mode-vertical text-center">
                       <span className="text-sm font-bold text-[#3B1D14] whitespace-nowrap tracking-wider uppercase opacity-60" style={{ writingMode: 'vertical-rl' }}>
                         {obj.title}
                       </span>
                    </div>

                    {/* Mobile Horizontal Title */}
                    <span className="md:hidden font-bold text-[#3B1D14] text-sm opacity-80">
                        {obj.title}
                    </span>
                  </div>


                  {/* --- Expanded View (Content) --- */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex-1 flex flex-col justify-center h-full z-10 pl-2"
                      >
                         {/* Giant Background Number */}
                        <span className="absolute right-0 bottom-[-20px] text-[10rem] font-black text-black/[0.03] leading-none pointer-events-none select-none font-serif">
                            {obj.id}
                        </span>

                        <h3 className="text-2xl md:text-3xl font-black text-[#2A1B17] mb-3 leading-tight tracking-tight">
                            {obj.title}
                        </h3>
                        <div className="w-12 h-1 bg-orange-500 mb-4 rounded-full opacity-80"></div>
                        <p className="text-base md:text-lg text-[#5A3A2E] leading-relaxed max-w-lg font-medium opacity-90">
                            {obj.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Objectives;