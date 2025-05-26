import React from 'react';
import { Shuffle, Eye, LifeBuoy } from 'lucide-react';

// Define precise types for timeline steps
interface IconStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  isFinalItem?: false; 
}

interface FinalStep {
  isFinalItem: true;
  title: string;
  description: string;
  icon?: undefined;
}

type TimelineStep = IconStep | FinalStep;

const Feature3 = () => {
  const steps: TimelineStep[] = [
    {
      icon: <Shuffle size={24} className="text-blue-300" />,
      title: "Adaptive Solutions",
      description: "We design flexible strategies that align with your unique objectives, ensuring agility in ever-changing business landscapes.",
    },
    {
      icon: <Eye size={24} className="text-blue-300" />,
      title: "Business Clarity",
      description: "Our insights offer clear guidance, helping you assess risks, explore growth opportunities, and make confident decisions.",
    },
    {
      icon: <LifeBuoy size={24} className="text-blue-300" />,
      title: "Comprehensive Support",
      description: "From strategic consulting to financial advisory, our integrated approach empowers your organization to thrive at every stage.",
    },
    {
      isFinalItem: true, 
      title: "Adamass Intelligence Model",
      description: "Our proprietary Adamass Intelligence model is built upon these core principles, leveraging a generative process refined by over 25 years of cumulative experience to deliver unparalleled insights.",
    },
  ];

  // Consistent sizing for circles and positioning
  const circleWidth = "w-12"; // For sm screens and up, equivalent to 3rem
  const circleHeight = "h-12";
  const lineWidthAndPosition = "left-6"; // (1.5rem) Puts center of line/circle at 1.5rem from li edge
  const textMarginLeft = "ml-[4rem]"; // Provides 1rem gap after a 3rem wide circle area

  return (
    <div
      id="feature3"
      className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
        <div className="absolute inset-0 w-full h-full bg-[url('/backgrounds/image2.png')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      </div>
      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        Empower Your Business
        </h2>
        <p className="text-base lg:text-lg text-gray-300">
        Adamass provides businesses with the insights and expertise they need to navigate complex challenges. By combining over 25 years of cumulative experience with a deep understanding of technology, finance, and strategy, we deliver solutions that drive growth, innovation, and stability. Our tailored approach ensures businesses make informed decisions that unlock new opportunities in dynamic markets.
        </p>
      </div>

      {/* Timeline Container - Centered as a block */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-2xl mx-auto">
          <ol className="relative"> {/* No global border here */}
            {steps.map((step, index) => (
              <li key={index} className={`relative flex items-center min-h-12 ${index === steps.length - 1 ? 'pb-0' : 'pb-24'}`}>
                {/* Vertical Line: Only for items that are NOT the last one */}
                {index < steps.length - 1 && (
                  <div className={`absolute ${lineWidthAndPosition} top-0 w-0.5 h-full bg-gray-700 transform -translate-x-1/2`}></div>
                )}

                {/* Circle Marker */}
                <span
                  className={`absolute ${lineWidthAndPosition} top-0 ${circleWidth} ${circleHeight} rounded-full flex items-center justify-center font-semibold text-lg transform -translate-x-1/2 ${
                    step.isFinalItem 
                      ? 'bg-blue-900 border-2 border-blue-400' // Final item: border only
                      : 'bg-gray-900' // Others: just background
                  }`}
                >
                  {/* Type-safe rendering: only render icon if it's an IconStep */}
                  {!step.isFinalItem && step.icon}
                </span>
                
                {/* Text Content */}
                <div className={`${textMarginLeft}`}>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Feature3; 