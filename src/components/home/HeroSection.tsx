import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden bg-gradient-to-b from-orange-50/50 to-white dark:from-zinc-900 dark:to-zinc-950">
      {/* --- Main Hero Image --- */}
      <div className="relative z-10 w-full h-screen">
        <img
          src="/banner.png"
          alt="Hero banner"
          className="w-full h-full object-contain"
        />
      </div>

      {/* --- Marquee Banner --- */}
      <div className="w-full bg-[#5B2B1D] text-white py-3 overflow-hidden">
        <div className="marquee">
          <div className="marquee__track">
            <span className="mx-8 text-sm md:text-base tracking-wide uppercase">
              Bharat Bodh Samvad Series
            </span>
            <span className="mx-8 text-sm md:text-base tracking-wide uppercase">
              Bharat Bodh Samvad Series
            </span>
            <span className="mx-8 text-sm md:text-base tracking-wide uppercase">
              Bharat Bodh Samvad Series
            </span>
            <span className="mx-8 text-sm md:text-base tracking-wide uppercase">
              Bharat Bodh Samvad Series
            </span>
            <span className="mx-8 text-sm md:text-base tracking-wide uppercase">
              Bharat Bodh Samvad Series
            </span>
            <span className="mx-8 text-sm md:text-base tracking-wide uppercase">
              Bharat Bodh Samvad Series
            </span>
          </div>
          <div className="marquee__track" aria-hidden="true">
            <span className="mx-8 text-sm md:text-base tracking-wide uppercase">
              Bharat Bodh Samvad Series
            </span>
            <span className="mx-8 text-sm md:text-base tracking-wide uppercase">
              Bharat Bodh Samvad Series
            </span>
            <span className="mx-8 text-sm md:text-base tracking-wide uppercase">
              Bharat Bodh Samvad Series
            </span>
            <span className="mx-8 text-sm md:text-base tracking-wide uppercase">
              Bharat Bodh Samvad Series
            </span>
            <span className="mx-8 text-sm md:text-base tracking-wide uppercase">
              Bharat Bodh Samvad Series
            </span>
            <span className="mx-8 text-sm md:text-base tracking-wide uppercase">
              Bharat Bodh Samvad Series
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
