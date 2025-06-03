import React from 'react';
import { LightbulbOff, Workflow, Target, Layers, LucideProps } from 'lucide-react'; // Example icons

interface PillarCardProps {
  icon: (props: LucideProps) => React.ReactElement; // Changed to React.ReactElement
  title: string;
  text: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ icon: Icon, title, text }) => {
  return (
    <div className="flex-1 bg-gray-50 p-6 rounded-xl flex flex-col min-w-[280px] sm:min-w-0" data-bg="light">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-blue-200 relative mr-4 shrink-0">
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-7 h-7 rounded-full bg-blue-400 opacity-20 blur-[6px] z-0"></span>
          </span>
          <Icon className="text-blue-600 relative z-10" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
    </div>
  );
};

// Updated pillarData to pass icon components directly
const pillarData: PillarCardProps[] = [
  {
    icon: (props) => <LightbulbOff {...props} />,
    title: "Beyond Theory",
    text: "We move past abstract frameworks to address real-world inefficiencies of disjointed capital strategies."
  },
  {
    icon: (props) => <Workflow {...props} />,
    title: "Integrated Execution",
    text: "Our model unites capital raising and project delivery into one seamless system for real funding at real speed."
  },
  {
    icon: (props) => <Target {...props} />,
    title: "Results, Not Reports",
    text: "Advisory means little unless it closes. We focus on tangible outcomes and strategies that deliver."
  },
  {
    icon: (props) => <Layers {...props} />,
    title: "More Than Capital",
    text: "Recognizing capital is just one piece, we emphasize structure, clarity, and execution for robust, real-world success."
  }
];

const ContentBlocks = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24" data-bg="light">
      <div className="max-w-7xl mx-auto px-4">
        {/* Two-Column Title and Paragraph Section - Styled like "Delivered with Precision" example */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-12 lg:gap-16 mb-12 md:mb-20">
          {/* Left Column: Eyebrow & Main Title */}
          <div className="md:w-1/2">

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Our Differentiated<br />Approach
            </h2>
          </div>
          {/* Right Column: Paragraph */}
          <div className="md:w-1/2 mt-4 md:mt-2">
            <p className="text-base text-gray-600 leading-relaxed">
              We combine deep technical insight with financial acumen, focusing on actionable strategies that drive tangible results and long-term growth for your ventures.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {pillarData.map((pillar, index) => (
            <PillarCard key={index} icon={pillar.icon} title={pillar.title} text={pillar.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentBlocks; 