"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Feature1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Handle scroll to update pagination dots
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const slideWidth = scrollRef.current.clientWidth;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  // Handle pagination dot click
  const scrollToSlide = (slideIndex: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: slideIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const cardData = [
    {
      title: "Due Diligence",
      description: "Thorough risk assessments, operational insights, and full-spectrum validation to support critical investment decisions.",
      imgSrc: "/images/dd.png",
      imgAlt: "Visual insights and data analytics interface",
      href: "/Solutions/DueDiligence"
    }, {
      title: "Strategic Advisory",
      description: "Guiding companies through market entry, growth planning, and business transformation with precision and clarity.",
      imgSrc: "/images/strategic.png",
      imgAlt: "AI robot pointing at system optimization interface",
      href: "/ComingSoon"
    }, {
      title: "Capital Advisory",
      description: "Structuring and sourcing capital solutions tailored to your business stage, investor profile, and long-term objectives.",
      imgSrc: "/images/capital.png",
      imgAlt: "AI robot observing data on a large transparent screen",
      href: "/Solutions/CapitalAdvisory"
    }
  ];

  return (
    <div id="feature1" className="bg-white text-gray-800" data-bg="light">
      <div className="max-w-7xl mx-auto py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-20 gap-5">
          <div className="lg:w-1/2">
            <p className="text-md text-gray-500 mb-2 uppercase tracking-wider font-medium">What adamass is about</p>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-black leading-tight">Learn more about our Expertise</h2>
          </div>
          <div className="lg:w-5/12 text-base leading-relaxed text-gray-600 mt-0 lg:mt-[2.75rem]">
            <p className="mb-8">Every step covered—simplify your investments. We manage fund setup, compliance, taxes, and everything in between.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/ContactUs"
                className="flex items-center justify-center py-3 px-6 rounded-md text-base font-semibold text-center cursor-pointer transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
              >
                Contact an Advisor
              </a>
              <a
                href="/Solutions/CapitalAdvisory"
                className="py-3 px-6 rounded-md text-base font-semibold cursor-pointer transition-all duration-200 ease-in-out border-2 border-blue-600 bg-white text-blue-600 shadow-sm text-center
                  hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile: Horizontal scroll with pagination */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            onScroll={handleScroll}
            style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE and Edge */
            }}
          >
            {cardData.map((card, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full snap-center"
              >
                <div className="text-white relative rounded-lg overflow-hidden min-h-[450px] sm:min-h-[500px] flex flex-col justify-end group shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mx-4 sm:mx-6 lg:mx-8">
                  <Image
                    src={card.imgSrc}
                    alt={card.imgAlt}
                    layout="fill"
                    objectFit="cover"
                    className="z-0 rounded-lg"
                  />
                  <div className="p-6 sm:p-8 relative z-10 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm sm:text-base opacity-90 mb-4">{card.description}</p>
                    <Link href={card.href} passHref legacyBehavior>
                      <a className="inline-flex items-center justify-center w-10 h-10 bg-white text-black rounded-full text-2xl font-bold cursor-pointer transition-colors hover:bg-gray-200">
                        <ArrowRight size={24} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Hide scrollbar for webkit browsers */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
        
        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          {cardData.map((card, index) => (
            <div 
              key={index} 
              className="text-white relative rounded-lg overflow-hidden min-h-[450px] sm:min-h-[500px] flex flex-col justify-end group shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <Image
                src={card.imgSrc}
                alt={card.imgAlt}
                layout="fill"
                objectFit="cover"
                className="z-0 rounded-lg"
              />
              <div className="p-6 sm:p-8 relative z-10 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm sm:text-base opacity-90 mb-4">{card.description}</p>
                <Link href={card.href} passHref legacyBehavior>
                  <a className="inline-flex items-center justify-center w-10 h-10 bg-white text-black rounded-full text-2xl font-bold cursor-pointer transition-colors hover:bg-gray-200">
                    <ArrowRight size={24} />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature1; 