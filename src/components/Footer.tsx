import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      color: "hover:text-sky-500",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      color: "hover:text-blue-700",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      color: "hover:text-pink-600",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.205.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      color: "hover:text-red-600",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#FBE9CF] p-10 border-t border-[#E6CFAF]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 mb-14">
          {/* --- Left Column: Brand & Contact (Spans 5 cols) --- */}
          <div className="lg:col-span-5 space-y-7">
            {/* Logo Area */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#4B2418] flex items-center justify-center text-white text-xs font-bold shadow-md">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-15.686 0A11.953 11.953 0 0112 10.5c2.998 0 5.74-1.1 7.843-2.918m-15.686 0A8.959 8.959 0 013 12c0 .778.099 1.533.284 2.253"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-wider text-[#3B1D14]">
                  BHARAT BODH
                </span>
                <span className="text-sm font-bold tracking-wider text-[#3B1D14]">
                  SAMVAD SERIES
                </span>
                <span className="text-xs font-semibold text-[#7A4C35]">
                  2026
                </span>
              </div>
            </div>

            <p className="text-[#5A3A2E] text-sm leading-relaxed max-w-md">
              A nationwide dialogue platform bringing scholars, thought leaders,
              and practitioners together to explore India's civilizational ethos
              and contemporary relevance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-[#8B6A54] transition-colors duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-sm text-[#5A3A2E]">
              <a
                href="mailto:contact@bharatbodhsamvad.org"
                className="flex items-center gap-3 hover:text-orange-700 transition-colors group"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-[#8B6A54] group-hover:text-orange-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                contact@bharatbodhsamvad.org
              </a>

              <div className="flex gap-3">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-[#8B6A54] flex-shrink-0 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-[#3B1D14]">
                      Registered address:
                    </span>{" "}
                    New Delhi, India
                  </p>
                  <p>
                    <span className="font-semibold text-[#3B1D14]">
                      Operating address:
                    </span>{" "}
                    Central Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Columns: Links (Spans 7 cols) --- */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
            {/* Event Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-[#3B1D14] text-lg">Series</h3>
              <ul className="space-y-3">
                {[
                  "Introduction",
                  "About the Series",
                  "Themes & Focus",
                  "Locations",
                  "FAQ",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#5A3A2E] hover:text-orange-700 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Participate Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-[#3B1D14] text-lg">Participate</h3>
              <ul className="space-y-3">
                {["Register", "Partner With Us", "Volunteer"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#5A3A2E] hover:text-orange-700 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-[#3B1D14] text-lg">Legal</h3>
              <ul className="space-y-3">
                {[
                  "Terms of Service",
                  "Privacy Policy",
                  "Cookie Policy",
                  "Refund Policy",
                  "Code of Conduct",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#5A3A2E] hover:text-orange-700 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-6 border-t border-[#E6CFAF] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#7A4C35]">
          <p>© 2026 Bharat Bodh Samvad Series. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#3B1D14] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#3B1D14] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#3B1D14] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
