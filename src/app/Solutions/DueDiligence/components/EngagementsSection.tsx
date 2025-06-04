import React, { useRef, useState } from 'react';
import Image from 'next/image';

const EngagementsSection = () => {
  // Mobile scroll logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const logos = [
    '/logos/boksy-logo.png',
    '/logos/Ikea_logo.svg.png',
    '/logos/ne-logo-black.svg',
    '/logos/rething-logo.png',
    '/logos/stabenfeldt-logo.png',
    '/logos/zoion-logo.png',
    '/logos/image_2.png',
    '/logos/image_1.png',
    '/logos/tele2-logo.svg',
    '/logos/image_0.png',
    '/logos/image_3.png'
  ];

  return (
    <section id="engagements-section" data-bg="dark" className="relative w-full overflow-hidden py-8 md:py-26">
      {/* Background image and overlay covering the entire section */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/backgrounds/image4.png"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          className="scale-130"
          style={{ zIndex: 0 }}
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>
      {/* Mobile: Horizontal scroll */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 md:hidden mt-15">
        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide" onScroll={handleScroll} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Slide 1: Left Block */}
          <div className="flex-shrink-0 w-full snap-center px-2">
            <div className="bg-gray-900/80 rounded-2xl  px-4 py-6">
              <h3 className="text-2xl font-bold mb-3 text-white">See who we&apos;ve worked with — and what we&apos;ve delivered.</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-0">
                From early-stage startups to scaled enterprises, we&apos;ve helped teams raise capital, validate infrastructure, and accelerate product delivery.
              </p>
            </div>
          </div>
          {/* Slide 2: Right Block */}
          <div className="flex-shrink-0 w-full snap-center px-2">
            <div className="bg-gray-900/80 rounded-2xl  px-4 py-6">
              <h3 className="text-2xl font-bold mb-3 text-white">Trusted by the teams that don&apos;t cut corners.</h3>
              <p className="text-lg text-gray-300 mb-3">Because diligence isn&apos;t just a checkbox — it&apos;s a competitive edge.</p>
              <a
                href="/ContactUs"
                className="group inline-flex items-center font-semibold text-lg text-blue-400 hover:text-white transition-colors duration-200 underline-offset-4 decoration-2 hover:underline"
              >
                Let&apos;s Talk!
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* Pagination dots */}
        <div className="flex justify-center mt-8 gap-2 mb-8">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentSlide === index ? 'bg-blue-400' : 'bg-gray-400 hover:bg-gray-500'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Desktop: Side-by-side layout */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 hidden md:flex flex-row items-start mt-4 gap-10">
        {/* Left: Description */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white pr-10">See who we&apos;ve worked with — and what we&apos;ve delivered.</h3>
          <p className="text-lg md:text-md text-gray-100 leading-relaxed mb-0 pr-10">
            From early-stage startups to scaled enterprises, we&apos;ve helped teams raise capital, validate infrastructure, and accelerate product delivery.
          </p>
        </div>
        {/* Right: Call to Action */}
        <div className="w-full md:w-1/2 flex flex-col md:mt-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white pl-10">Trusted by the teams that don&apos;t cut corners.</h3>
          <p className="text-lg md:text-md text-gray-100 mb-3 pl-10">Because diligence isn&apos;t just a checkbox — it&apos;s a competitive edge.</p>
          <a
            href="/ContactUs"
            className="group inline-flex items-center font-semibold text-lg text-blue-400 hover:text-white transition-colors pl-10 duration-200 underline-offset-4 decoration-2 hover:underline"
          >
            Let&apos;s Talk!
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
      {/* Logo Carousel */}
      <div className="relative z-20 w-full overflow-x-hidden mt-16">
        <div className="relative">
          <div className="flex gap-4 animate-scroll-x whitespace-nowrap py-4">
            {logos.map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-16 w-32 shrink-0"
                style={{ minWidth: '8rem' }}
              >
                <img
                  src={src}
                  alt="Client logo"
                  height={48}
                  style={{ width: 'auto', height: '48px', imageRendering: 'auto' }}
                  className={`h-12 w-auto${src.includes('ne-logo-black') || src.includes('tele2-logo.svg') ? ' invert' : ''}`}
                  loading="lazy"
                />
              </div>
            ))}
            {/* Repeat for smooth loop */}
            {logos.map((src, i) => (
              <div
                key={'repeat-' + i}
                className="flex items-center justify-center h-16 w-32 shrink-0"
                style={{ minWidth: '8rem' }}
              >
                <img
                  src={src}
                  alt="Client logo"
                  height={48}
                  style={{ width: 'auto', height: '48px', imageRendering: 'auto' }}
                  className={`h-12 w-auto${src.includes('ne-logo-black') || src.includes('tele2-logo.svg') ? ' invert' : ''}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Corrected for seamless loop */
        }
        .animate-scroll-x {
          animation: scroll-x ${logos.length * 2}s linear infinite; /* Duration remains dynamic */
        }
        .invert {
          filter: invert(1) brightness(2);
        }
      `}</style>
    </section>
  );
};

export default EngagementsSection; 