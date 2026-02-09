import React from "react";

const IntroductionSection = () => {
  return (
    <section className="w-full bg-white text-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
              INTRODUCTION
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-black">
              We are pleased to present our forthcoming national initiative -
              the "Bharat Bodh Samvad Series 2026", conceptualised and organised
              by ISHAN BODH and NISHREYAS, in collaboration with the Indian
              Council for Philosophical Research (ICPR), Ministry of Education,
              Government of India, and the Central Sanskrit University, New
              Delhi.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-black">
              This landmark intellectual and cultural series is envisioned as a
              nationwide dialogue platform, bringing together eminent scholars,
              thought leaders, and practitioners to explore India's
              civilizational ethos and its contemporary relevance.
            </p>
          </div>

          <div className="w-full">
            <img
              src="/banner.png"
              alt="Introduction visual"
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
