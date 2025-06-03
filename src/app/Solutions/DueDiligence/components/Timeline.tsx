import React from 'react';
import { PhoneCall, FolderOpen, SearchCheck, FileText } from 'lucide-react';

// Removed unused IconStep and FinalStep interfaces

const steps = [
  {
    icon: <PhoneCall size={24} className="text-blue-600 relative z-10" />,
    title: "Discovery Call",
    description: "Kick off with a focused call to understand your needs and objectives.",
  },
  {
    icon: <FolderOpen size={24} className="text-blue-600 relative z-10" />,
    title: "Access & Review",
    description: "We securely access and review your documentation and systems.",
  },
  {
    icon: <SearchCheck size={24} className="text-blue-600 relative z-10" />,
    title: "Deep Dive & Findings",
    description: "Our experts perform a deep technical analysis and identify key findings.",
  },
  {
    icon: <FileText size={24} className="text-blue-600 relative z-10" />,
    title: "Report + Action Plan",
    description: "Receive a clear, actionable report with prioritized recommendations.",
  },
];

const Timeline = () => {
  return (
    <section data-bg="light" className="bg-white text-black">
      <div className="max-w-7xl mx-auto py-0 px-4 sm:px-6 lg:px-8">
        {/* Mobile Vertical Timeline */}
        <div className="relative md:hidden" style={{ minHeight: 520 }}>
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gray-200 z-0" style={{ minHeight: 520 }} />
          <div className="flex flex-col gap-20 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="grid grid-cols-3 items-center w-full">
                  {/* Left: text or empty */}
                  {isEven ? (
                    <div className="flex justify-end pr-2 text-right">
                      <div className="max-w-xs">
                        <h3 className="text-base lg:text-lg font-semibold text-black mb-1.5">{step.title}</h3>
                        <p className="text-sm lg:text-base text-gray-500 leading-relaxed max-w-[15rem] ml-auto">{step.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                  {/* Center: icon always on the line */}
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-blue-200 relative">
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-7 h-7 rounded-full bg-blue-400 opacity-20 blur-[6px] z-0"></span>
                      </span>
                      {step.icon}
                    </div>
                  </div>
                  {/* Right: text or empty */}
                  {!isEven ? (
                    <div className="flex justify-start pl-2 text-left">
                      <div className="max-w-xs">
                        <h3 className="text-base lg:text-lg font-semibold text-black mb-1.5">{step.title}</h3>
                        <p className="text-sm lg:text-base text-gray-500 leading-relaxed max-w-[15rem] mr-auto">{step.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Desktop Timeline Grid */}
        <div className="w-full flex justify-center hidden md:block">
          <div className="max-w-7xl mx-auto w-full mt-15">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="relative">
                {/* Horizontal Line */}
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 z-0" />
                <div className="grid grid-cols-4 gap-y-28 gap-x-16 relative z-10">
                  {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      {/* Icon Circle with Glow Behind Icon */}
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white border border-blue-200 relative">
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-7 h-7 rounded-full bg-blue-400 opacity-20 blur-[6px] z-0"></span>
                        </span>
                        {step.icon}
                      </div>
                      {/* Text Content */}
                      <div className="max-w-xs mx-auto">
                        <h3 className="text-base lg:text-lg font-semibold text-black mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-sm lg:text-md text-gray-500 leading-relaxed max-w-[15rem] mx-auto">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 