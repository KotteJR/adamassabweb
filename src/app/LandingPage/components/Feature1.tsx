import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Feature1 = () => {
  const cardData = [
    {
      title: "Complete Due Diligence",
      description: "Thorough risk assessments, operational insights, and full-spectrum validation to support critical investment decisions.",
      imgSrc: "/images/dd.png",
      imgAlt: "Visual insights and data analytics interface"
    }, {
      title: "Strategic Advisory",
      description: "Guiding companies through market entry, growth planning, and business transformation with precision and clarity.",
      imgSrc: "/images/strategic.png",
      imgAlt: "AI robot pointing at system optimization interface"
    }, {
      title: "Capital Advisory",
      description: "Structuring and sourcing capital solutions tailored to your business stage, investor profile, and long-term objectives.",
      imgSrc: "/images/capital.png",
      imgAlt: "AI robot observing data on a large transparent screen"
    }
  ];

  return (
    <div id="feature1" className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-20 gap-10">
          <div className="lg:w-1/2">
            <p className="text-md text-gray-500 mb-2 uppercase tracking-wider font-medium">What adamass is about</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">Learn more about our Expertise.</h2>
          </div>
          <div className="lg:w-5/12 text-base leading-relaxed text-gray-600 mt-0 lg:mt-[2.75rem]">
            <p className="mb-8">Every step covered—simplify your investments. We manage fund setup, compliance, taxes, and everything in between.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/ContactUs"
                className="py-3 px-6 rounded-md text-base font-semibold text-center cursor-pointer transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
              >
                Contact an Advisor
              </a>
              <button 
                className="py-3 px-6 rounded-md text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out border bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200 shadow-sm"
              >
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <Link href="/ComingSoon" passHref legacyBehavior>
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