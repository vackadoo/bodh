// "use client";

// import React, { useRef } from "react";

// const ThemeAndFocusArea = () => {
//   const scrollRef = useRef<HTMLDivElement | null>(null);

//   const themes = [
//     {
//       id: "01",
//       category: "Philosophy",
//       date: "Track 01",
//       title: "Indian Culture, Philosophy and History",
//       location: "Main Auditorium, New Delhi",
//       image: "/banner.png",
//     },
//     {
//       id: "02",
//       category: "Heritage",
//       date: "Track 02",
//       title: "Cultural Preservation and Archaeological Heritage",
//       location: "Hall B, Convention Centre",
//       image: "/banner.png",
//     },
//     {
//       id: "03",
//       category: "Geopolitics",
//       date: "Track 03",
//       title: "Maritime Heritage and Geopolitical Significance",
//       location: "Conference Room A",
//       image: "/banner.png",
//     },
//     {
//       id: "04",
//       category: "Economics",
//       date: "Track 04",
//       title: "Economic History and Future Prospects",
//       location: "Hall C, Trade Centre",
//       image: "/banner.png",
//     },
//     {
//       id: "05",
//       category: "Science",
//       date: "Track 05",
//       title: "Ancient Indian Science and Technology",
//       location: "Science Block, IIT Delhi",
//       image: "/banner.png",
//     },
//     {
//       id: "06",
//       category: "Science",
//       date: "Track 05",
//       title: "Ancient Indian Science and Technology",
//       location: "Science Block, IIT Delhi",
//       image: "/banner.png",
//     },
//   ];

//   const handleScroll = (direction: "left" | "right") => {
//     const container = scrollRef.current;
//     if (!container) return;

//     // 1. Get exact measurements
//     const card = container.querySelector<HTMLElement>("[data-card]");
//     if (!card) return;

//     // Width of card + gap (32px from gap-8)
//     const itemSize = card.offsetWidth + 32;
//     const currentScroll = container.scrollLeft;

//     // 2. Calculate the target position
//     // We round the current position to find which "index" we are currently near.
//     let targetScroll;

//     if (direction === "right") {
//       // Snap to next index
//       const nextIndex = Math.floor(currentScroll / itemSize) + 1;
//       targetScroll = nextIndex * itemSize;
//     } else {
//       // Snap to previous index
//       const prevIndex = Math.ceil(currentScroll / itemSize) - 1;
//       targetScroll = prevIndex * itemSize;
//     }

//     // 3. Execute Scroll
//     container.scrollTo({
//       left: targetScroll,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section id="themes" className="py-24 bg-white">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* --- Section Heading --- */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 font-display mb-4">
//             Themes & Focus Areas
//           </h2>
//           <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full" />
//         </div>

//         {/* --- Scrollable Cards Container --- */}
//         <div className="relative group/container">
//           {/* Left Button */}
//           <button
//             type="button"
//             onClick={() => handleScroll("left")}
//             aria-label="Scroll left"
//             className="hidden md:flex items-center justify-center absolute -left-5 lg:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-zinc-100 text-zinc-700 hover:text-orange-600 hover:scale-110 transition-all duration-300 opacity-0 group-hover/container:opacity-100"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           {/* Right Button */}
//           <button
//             type="button"
//             onClick={() => handleScroll("right")}
//             aria-label="Scroll right"
//             className="hidden md:flex items-center justify-center absolute -right-5 lg:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-zinc-100 text-zinc-700 hover:text-orange-600 hover:scale-110 transition-all duration-300 opacity-0 group-hover/container:opacity-100"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>

//           {/* Carousel Track */}
//           <div
//             ref={scrollRef}
//             className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 px-2 scrollbar-hide"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar
//           >
//             {themes.map((theme) => (
//               <div
//                 key={theme.id}
//                 data-card
//                 // Added flex-none to stop shrinking, removed min-w hacks, relied on exact widths
//                 className="
//                   flex-none snap-center 
//                   relative h-[450px] 
//                   w-[85vw] sm:w-[350px] lg:w-[380px] 
//                   overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300
//                 "
//               >
//                 {/* Background Image */}
//                 <div className="absolute inset-0 group">
//                   <img
//                     src={theme.image}
//                     alt={theme.title}
//                     className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
//                 </div>

//                 {/* Badge */}
//                 <div className="absolute top-6 left-6 z-10">
//                   <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider shadow-sm">
//                     {theme.category}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
//                   <p className="text-sm font-medium text-orange-200 mb-2 uppercase tracking-wide">
//                     {theme.date}
//                   </p>

//                   <h3 className="text-2xl font-bold leading-tight mb-4 drop-shadow-md line-clamp-2">
//                     {theme.title}
//                   </h3>

//                   <div className="flex items-center gap-2 text-zinc-300 text-sm font-medium border-t border-white/20 pt-4 mt-2">
//                     <svg
//                       className="w-4 h-4 text-orange-500 flex-shrink-0"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span className="truncate">{theme.location}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ThemeAndFocusArea;

"use client";

import React, { useRef, useState, useEffect } from "react";

const ThemeAndFocusArea = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const themes = [
    {
      id: "01",
      category: "Philosophy",
      date: "Track 01",
      title: "Indian Culture, Philosophy and History",
      location: "Main Auditorium, New Delhi",
      image: "/banner.png",
    },
    {
      id: "02",
      category: "Heritage",
      date: "Track 02",
      title: "Cultural Preservation and Archaeological Heritage",
      location: "Hall B, Convention Centre",
      image: "/banner.png",
    },
    {
      id: "03",
      category: "Geopolitics",
      date: "Track 03",
      title: "Maritime Heritage and Geopolitical Significance",
      location: "Conference Room A",
      image: "/banner.png",
    },
    {
      id: "04",
      category: "Economics",
      date: "Track 04",
      title: "Economic History and Future Prospects",
      location: "Hall C, Trade Centre",
      image: "/banner.png",
    },
    {
      id: "05",
      category: "Science",
      date: "Track 05",
      title: "Ancient Indian Science and Technology",
      location: "Science Block, IIT Delhi",
      image: "/banner.png",
    },
    {
      id: "06",
      category: "Innovation",
      date: "Track 06",
      title: "Modern Indian Innovation and Startups",
      location: "Tech Park, Bangalore",
      image: "/banner.png",
    },
  ];

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Calculate max index based on cards per view
  const maxIndex = Math.max(0, themes.length - cardsPerView);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    let newIndex = currentIndex;

    if (direction === "right") {
      newIndex = Math.min(currentIndex + 1, maxIndex);
    } else {
      newIndex = Math.max(currentIndex - 1, 0);
    }

    // Calculate scroll position
    const card = container.querySelector<HTMLElement>("[data-card]");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 32; // gap-8 = 32px
    const scrollPosition = newIndex * (cardWidth + gap);

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setCurrentIndex(newIndex);
  };

  // Disable scroll wheel and touch scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const preventScroll = (e: WheelEvent | TouchEvent) => {
      e.preventDefault();
    };

    container.addEventListener("wheel", preventScroll, { passive: false });
    container.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", preventScroll);
      container.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <section id="themes" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* --- Section Heading --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 font-display mb-4">
            Themes & Focus Areas
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full" />
        </div>

        {/* --- Scrollable Cards Container --- */}
        <div className="relative group/container">
          {/* Left Button */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={currentIndex === 0}
            aria-label="Scroll left"
            className={`
              flex items-center justify-center 
              absolute -left-3 sm:-left-5 lg:-left-12 top-1/2 -translate-y-1/2 z-20 
              w-10 h-10 sm:w-12 sm:h-12 
              rounded-full bg-white shadow-xl border border-zinc-100 
              text-zinc-700 hover:text-orange-600 hover:scale-110 
              transition-all duration-300
              ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:opacity-100'}
              md:opacity-0 md:group-hover/container:opacity-100
            `}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Button */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={currentIndex >= maxIndex}
            aria-label="Scroll right"
            className={`
              flex items-center justify-center 
              absolute -right-3 sm:-right-5 lg:-right-12 top-1/2 -translate-y-1/2 z-20 
              w-10 h-10 sm:w-12 sm:h-12 
              rounded-full bg-white shadow-xl border border-zinc-100 
              text-zinc-700 hover:text-orange-600 hover:scale-110 
              transition-all duration-300
              ${currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:opacity-100'}
              md:opacity-0 md:group-hover/container:opacity-100
            `}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Track */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden scroll-smooth pb-8 px-2"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {themes.map((theme) => (
              <div
                key={theme.id}
                data-card
                className="
                  flex-none 
                  relative h-[400px] sm:h-[450px]
                  w-[calc(100vw-3rem)] 
                  sm:w-[calc(50vw-3rem)] 
                  lg:w-[calc(33.333%-1.5rem)]
                  overflow-hidden rounded-xl cursor-pointer 
                  shadow-lg hover:shadow-2xl 
                  transition-shadow duration-300
                "
              >
                {/* Background Image */}
                <div className="absolute inset-0 group">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Badge */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
                  <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-orange-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    {theme.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 text-white z-10">
                  <p className="text-xs sm:text-sm font-medium text-orange-200 mb-2 uppercase tracking-wide">
                    {theme.date}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-3 sm:mb-4 drop-shadow-md line-clamp-2">
                    {theme.title}
                  </h3>

                  <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm font-medium border-t border-white/20 pt-3 sm:pt-4 mt-2">
                    <svg
                      className="w-4 h-4 text-orange-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="truncate">{theme.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = scrollRef.current;
                  if (!container) return;
                  
                  const card = container.querySelector<HTMLElement>("[data-card]");
                  if (!card) return;
                  
                  const cardWidth = card.offsetWidth;
                  const gap = 32;
                  const scrollPosition = index * (cardWidth + gap);
                  
                  container.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth",
                  });
                  
                  setCurrentIndex(index);
                }}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${currentIndex === index 
                    ? 'bg-orange-600 w-8' 
                    : 'bg-zinc-300 hover:bg-orange-400'
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeAndFocusArea;