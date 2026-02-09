import React from "react";

const AboutSeriesSection = () => {
  return (
    <section className="w-full bg-[#F7F4EF] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl text-center font-extrabold text-[#4B2418] tracking-wide">
            ABOUT THE SERIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_16px_35px_rgba(0,0,0,0.18)] border border-black/5">
            <h3 className="text-xl font-bold text-[#4B2418] mb-4">
              Lectures & Dialogues
            </h3>
            <p className="text-zinc-700 leading-relaxed">
              Around 100 lecture sessions, panel discussions, workshops, and
              dialogues.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_16px_35px_rgba(0,0,0,0.18)] border border-black/5">
            <h3 className="text-xl font-bold text-[#4B2418] mb-4">
              Nationwide Reach
            </h3>
            <p className="text-zinc-700 leading-relaxed">
              To be conducted across India.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_16px_35px_rgba(0,0,0,0.18)] border border-black/5">
            <h3 className="text-xl font-bold text-[#4B2418] mb-4">
              Inaugural Session
            </h3>
            <p className="text-zinc-700 leading-relaxed">10 February 2026.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSeriesSection;
