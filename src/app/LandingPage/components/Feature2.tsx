import React from 'react';
import { CheckCircle, Brain, Cpu, Users } from 'lucide-react';

// Removed PlaceholderIcon as icons will be defined per feature

const Feature2 = () => {
  const features = [
    {
      number: '01',
      title: 'Strategic Insight',
      description: 'We leverage deep industry expertise and data-driven insights to deliver strategic guidance tailored to your unique challenges.',
      icon: <Brain size={32} className="text-gray-300" />
    },
    {
      number: '02',
      title: 'Tech Excellence',
      description: 'Our proprietary AI tools enhance decision-making, providing precision and efficiency in every analysis.',
      icon: <Cpu size={32} className="text-gray-300" />
    },
    {
      number: '03',
      title: 'Collaborative Execution',
      description: 'We prioritize close collaboration, ensuring practical solutions that align with your goals and drive measurable results.',
      icon: <Users size={32} className="text-gray-300" />
    },
  ];

  return (
    <div id="feature2" className="relative bg-black text-white py-16 lg:py-24 px-0 overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
        <div className="absolute inset-0 w-full h-full bg-[url('/backgrounds/image10.png')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 bg-gray-900/90 text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            <CheckCircle size={20} className="text-blue-400" />
            Why choose us?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Learn more about our Approach
          </h2>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
          Unlock new levels of efficiency and collaboration with tools designed to accelerate your business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900/80 p-6 md:p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out text-left flex flex-col">
              <div className="flex items-center mb-4">
                <span className="bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-md mr-4">
                  {feature.number}
                </span>
                <h3 className="text-lg lg:text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-grow">
                {feature.description}
              </p>
              <div className="mt-auto pt-6 border-t border-gray-800 flex justify-center">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                  {React.cloneElement(feature.icon as React.ReactElement<{ className?: string; size?: number }>, { className: 'text-blue-500 drop-shadow-[0_0_12px_theme(colors.blue.700)]', size: 32 })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature2; 