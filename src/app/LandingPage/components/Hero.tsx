"use client";
import React from "react";
import { ChevronDown, Sparkle, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative w-screen h-screen min-h-[100vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image with opacity and gradient overlay */}
      <div className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
        <div className="absolute inset-0 w-full h-full bg-[url('/backgrounds/image7.png')] bg-[length:150%] bg-center opacity-60" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        {/* Content (no overlay box) */}
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Badges */}
          <div className="flex gap-4 mb-6">
            <span className="inline-flex items-center gap-2 bg-blue-600/90 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
              <Sparkle size={16} className="text-white" /> AI-Powered Insights
            </span>
            <span className="inline-flex items-center gap-2 bg-white/90 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
              <ShieldCheck size={16} className="text-blue-600" /> Trusted by Industry Leaders
            </span>
          </div>
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-400 via-blue-200 via-blue-300 via-blue-500 via-blue-700 to-blue-400 bg-clip-text text-transparent drop-shadow-xl max-w-5xl mx-auto">
            Impact through Innovation.
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-4xl text-center mb-10">
          Unlock smarter decision-making with expert-driven analysis and advanced AI insights. We empower investors, businesses, and startups with in-depth technology assessments, risk evaluations, and strategic growth solutions.
          </p>
          {/* CTA Button */}
          <a
            href="/ContactUs"
            className="bg-white text-black font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 mx-auto mb-0"
          >
            Get in Touch
          </a>
        </div>
        {/* Scroll Down Arrow */}
        <button
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/10 flex justify-center items-center text-3xl animate-bounce focus:outline-none border border-white/20"
          aria-label="Scroll to next section"
          onClick={() => {
            const el = document.getElementById("feature1");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown size={32} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero; 