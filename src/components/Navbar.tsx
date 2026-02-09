// "use client";
// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { label: "About", href: "#about" },
//     { label: "Themes", href: "#themes" },
//     { label: "Schedule", href: "#schedule" },
//     { label: "Partners", href: "#partners" },
//   ];

//   const handleNavClick = (href: string) => {
//     setIsOpen(false);
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
//         isScrolled
//           ? "bg-[#F1D1A7]/90 backdrop-blur-md shadow-sm py-4 text-black"
//           : "bg-[#F1D1A7] py-6"
//       }`}
//     >
//       <div className="container mx-auto px-6 md:px-12 max-w-7xl">
//         <div className="flex items-center justify-between">
//           {/* --- Logo --- */}
//           <a
//             href="#"
//             onClick={(e) => {
//               e.preventDefault();
//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }}
//             className="flex items-center gap-2 group"
//           >
//             <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500 font-devanagari">
//               भारत बोध
//             </span>
//           </a>

//           {/* --- Desktop Navigation --- */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick(link.href);
//                 }}
//                 className="text-sm font-medium text-black dark:text-black  hover:text-orange-600 dark:hover:text-orange-400 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {link.label}
//               </a>
//             ))}

//             {/* Optional CTA Button */}
//             <button className="px-5 py-2 text-sm font-semibold text-white bg-orange-600 rounded-full hover:bg-orange-700 transition-transform active:scale-95 shadow-lg shadow-orange-500/20">
//               Register Now
//             </button>
//           </div>

//           {/* --- Mobile Menu Button --- */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 text-zinc-800 dark:text-zinc-200 focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
//               <span
//                 className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
//               />
//               <span
//                 className={`block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
//               />
//               <span
//                 className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
//               />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* --- Mobile Navigation Dropdown --- */}
//       <div
//         className={`absolute top-full left-0 w-full bg-[#F1D1A7] shadow-xl border-t border-zinc-100 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="flex flex-col px-6 py-8 space-y-6">
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleNavClick(link.href);
//               }}
//               className="text-lg font-medium text-zinc-800 dark:text-zinc-200 hover:text-orange-600 dark:hover:text-orange-400 pl-2 border-l-2 border-transparent hover:border-orange-500 transition-all"
//             >
//               {link.label}
//             </a>
//           ))}
//           <button className="w-full mt-4 px-5 py-3 text-center font-bold text-white bg-orange-600 rounded-xl hover:bg-orange-700 active:scale-95 transition-all">
//             Register Now
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Themes", href: "#themes" },
    // { label: "Schedule", href: "#schedule" },
    // { label: "Partners", href: "#partners" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#F1D1A7]/90 backdrop-blur-md shadow-sm py-3 text-black"
          : "bg-[#F1D1A7] py-3"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* --- Logo --- */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });  
            }}
            className="flex items-center gap-3 group"
          >
            {/* Added Logo Image */}
            <img 
              src="/logo.png" 
              alt="Bharat Bodh Logo" 
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            
            {/* <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500 font-devanagari">
              भारत बोध
            </span> */}
          </a>

          {/* --- Desktop Navigation --- */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-lg font-medium text-black dark:text-black hover:text-orange-600 dark:hover:text-orange-400 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}

            {/* Optional CTA Button */}
            <button className="px-5 py-2 text-sm font-semibold text-white bg-orange-600 rounded-full hover:bg-orange-700 transition-transform active:scale-95 shadow-lg shadow-orange-500/20">
              Register Now
            </button>
          </div>

          {/* --- Mobile Menu Button --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-800 dark:black focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* --- Mobile Navigation Dropdown --- */}
      <div
        className={`absolute top-full left-0 w-full bg-[#F1D1A7] shadow-xl border-t border-zinc-100 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-lg font-medium text-zinc-800 dark:text-zinc-200 hover:text-orange-600 dark:hover:text-orange-400 pl-2 border-l-2 border-transparent hover:border-orange-500 transition-all"
            >
              {link.label}
            </a>
          ))}
          <button className="w-full mt-4 px-5 py-3 text-center font-bold text-white bg-orange-600 rounded-xl hover:bg-orange-700 active:scale-95 transition-all">
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;