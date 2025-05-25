import React from 'react';

// Removed FeatureVisual as it's no longer needed.

const Feature3 = () => {
  const steps = [
    {
      number: 1,
      title: "Monitor Deployments live",
      description: "Track your deployments with clarity, seeing updates take place as they happen.",
    },
    {
      number: 2,
      title: "Immediate Issue Detection",
      description: "Spot issues instantly and address them with precise metrics for optimized performance.",
    },
    {
      number: 3,
      title: "Revert to a Stable Version",
      description: "Quickly roll back to a previous, stable version if any issues arise post-deployment.",
    },
    {
      // No number, this will be the special blue-outlined circle marker
      isFinalItem: true, 
      title: "Deployment Excellence",
      description: "Achieve seamless and confident deployments with our integrated platform features and comprehensive oversight.",
    },
  ];

  // Consistent sizing for circles and positioning
  const circleWidth = "w-12"; // For sm screens and up, equivalent to 3rem
  const circleHeight = "h-12";
  const lineWidthAndPosition = "left-6"; // (1.5rem) Puts center of line/circle at 1.5rem from li edge
  const textMarginLeft = "ml-[4rem]"; // Provides 1rem gap after a 3rem wide circle area

  return (
    <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        Empower Your Business
        </h2>
        <p className="text-base lg:text-lg text-gray-300">
        Adamass provides businesses with the insights and expertise they need to navigate complex challenges. By combining over 25 years of cumulative experience with a deep understanding of technology, finance, and strategy, we deliver solutions that drive growth, innovation, and stability. Our tailored approach ensures businesses make informed decisions that unlock new opportunities in dynamic markets.
        </p>
      </div>

      {/* Timeline Container - Centered as a block */}
      <div className="w-full flex justify-center">
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
                  className={`absolute ${lineWidthAndPosition} top-0 ${circleWidth} ${circleHeight} rounded-full flex items-center justify-center font-semibold text-lg ring-4 ring-black transform -translate-x-1/2 ${step.isFinalItem ? 'bg-blue-900 border-2 border-blue-400 text-blue-200' : 'bg-gray-900 text-gray-200'}`}
                >
                  {step.number && step.number}
                  {/* Final item circle is decorative, no number text explicitly needed here unless desired */}
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