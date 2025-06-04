"use client";

import React, { useState, useRef, RefObject } from 'react';
import Timeline from './Timeline';
import { Code, DollarSign, Server, TrendingUp, Info, ClockFading } from 'lucide-react';
import EngagementsSection from './EngagementsSection';

// Tab bar component
interface TabBarProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}
function TabBar({ activeTab, setActiveTab }: TabBarProps) {
  return (
    <div className="flex w-full bg-transparent overflow-x-auto mt-4">
      <button
        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold transition ${activeTab === 0 ? 'bg-white text-blue-700 border-t-4 border-blue-600' : 'bg-gray-100 text-gray-500 border-t-4 border-transparent rounded-bl-2xl'} relative z-10`}
        style={{ minWidth: 0 }}
        onClick={() => setActiveTab(0)}
      >
        <Info size={20} /> About
      </button>
      <button
        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold transition ${activeTab === 1 ? 'bg-white text-blue-700 border-t-4 border-blue-600' : 'bg-gray-100 text-gray-500 border-t-4 border-transparent rounded-br-2xl'} relative z-10`}
        style={{ minWidth: 0 }}
        onClick={() => setActiveTab(1)}
      >
        <ClockFading size={20} /> Process
      </button>
    </div>
  );
}

interface Feature {
  icon: React.ReactNode;
  title: string;
}

interface AboutTabProps {
  features: Feature[];
  paragraph: string;
  scrollRef: RefObject<HTMLDivElement | null>;
  handleScroll: () => void;
  scrollToSlide: (slideIndex: number) => void;
  currentSlide: number;
}
function AboutTab({ features, paragraph, scrollRef, handleScroll, scrollToSlide, currentSlide }: AboutTabProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden">
          <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide" onScroll={handleScroll} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Slide 1: Paragraph */}
            <div className="flex-shrink-0 w-full snap-center px-2">
              <div className="bg-gray-50 rounded-xl px-4 py-6 h-[300px] mb-8 md:mb-0">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 max-w-4xl mx-auto">Our Comprehensive Approach</h3>
                  <p className="text-lg lg:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">{paragraph}</p>
                </div>
              </div>
            </div>
            {/* Slide 2: Features */}
            <div className="flex-shrink-0 w-full snap-center px-2">
              <div className="bg-gray-50 rounded-xl px-4 py-6 h-[300px]">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 max-w-4xl mx-auto mt">What We Evaluate</h3>
                  <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-4 max-w-lg">
                      {features.map((feature: Feature, index: number) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 flex items-center text-left">
                          <div className="relative flex items-center justify-center mr-3">
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-7 h-7 rounded-full bg-blue-500 opacity-5 blur-[4px] z-0"></span>
                            </span>
                            <span className="text-blue-600 relative z-10">{feature.icon}</span>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">{feature.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination dots */}
          <div className="flex justify-center mt-2 gap-2 mb-10">
            {[0, 1].map((index: number) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Desktop: Cards at top, text below */}
        <div className="hidden md:block">
          <div className="bg-gray-50 rounded-xl p-8 max-w-7xl mx-auto md:h-[300px] mb-0 md:mb-0">
            <div className="mb-8">
              <div className="grid grid-cols-4 gap-6">
                {features.map((feature: Feature, index: number) => (
                  <div key={index} className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative flex justify-center mb-3">
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-7 h-7 rounded-full bg-blue-600 opacity-20 blur-[6px] z-0"></span>
                      </span>
                      <span className="text-blue-600 relative z-10">{feature.icon}</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{feature.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-justify border-t border-gray-200 pt-6">
              <p className="text-md text-gray-600 leading-relaxed max-w-7xl mx-auto">{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Mobile slide logic
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const slideWidth = scrollRef.current.clientWidth;
      setCurrentSlide(Math.round(scrollLeft / slideWidth));
    }
  };
  const scrollToSlide = (slideIndex: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: slideIndex * slideWidth, behavior: 'smooth' });
    }
  };

  const paragraph = 'We conduct deep technical and financial due diligence to uncover risks, validate scalability, and ensure alignment between product, architecture, and business fundamentals. Our reviews support investors, acquirers, and founders looking to make confident, high-stakes decisions.';
  const features: Feature[] = [
    { icon: <Code size={24} />, title: 'Codebase, architecture & security evaluation' },
    { icon: <DollarSign size={24} />, title: 'Financial performance & cost structure analysis' },
    { icon: <Server size={24} />, title: 'Infra, DevOps & scalability assessments' },
    { icon: <TrendingUp size={24} />, title: 'Cap table, burn rate & funding viability checks' },
  ];

  return (
    <section data-bg="light" className="bg-white text-gray-800">
      <div className="w-full md:max-w-full mx-auto md:h-screen md:min-h-[100vh] md:max-h-screen flex items-start justify-start md:items-center md:justify-center mt-30 mb-4 md:mt-0">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col w-full items-center justify-center gap-y-8">
            {/* Hero Top Section: Headline, paragraph, tab selector */}
            <div className="flex flex-col md:flex-row items-stretch w-full md:mb-12">
              {/* Left: Headline */}
              <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
                <p className="text-md text-gray-500 uppercase tracking-wider font-medium mb-2 mt-0 md:mt-0 md:mb-2">Technical & Financial Due Diligence</p>
                <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-black leading-tight mb-2 mt-2 md:mb-4 md:mt-0">
                  Delivered<br className="hidden md:block" /> with Precision.
                </h2>
              </div>
              {/* Right: Paragraph and Tabs below */}
              <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
                <div className="w-full max-w-xl ml-auto">
                  <p className="text-base lg:text-md text-gray-600 leading-relaxed mt-2 md:mt-0 mb-8 md:mb-8">
                    We validate the tech stack, assess scalability & security, and analyze financial health — giving investors the clarity they need to close with confidence.
                  </p>
                  <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
              </div>
            </div>
            {/* Tab Content */}
            <div className="w-full">
              {activeTab === 0 && (
                <AboutTab features={features} paragraph={paragraph} scrollRef={scrollRef} handleScroll={handleScroll} scrollToSlide={scrollToSlide} currentSlide={currentSlide} />
              )}
              {activeTab === 1 && (
                <div className="flex justify-center w-full">
                  <div className="w-full">
                    <div className="bg-white rounded-xl p-0 md:p-8 w-full mb-8 md:mb-0 md:h-[300px] mb-2">
                      <Timeline />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Engagements section below hero */}
      <EngagementsSection />
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Hero; 