import React from 'react';

const ContentBlocks = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-16 md:py-24 bg-white text-gray-900">
      <div className="flex flex-col md:flex-row gap-6 md:gap-5 items-stretch">
        {/* Block 1: Capital Execution Mindset */}
        <div className="flex-1 flex flex-col justify-center relative">
          <div className="absolute -left-2 md:-left-4 -top-2 md:-top-4 w-20 h-20 md:w-28 md:h-28 bg-blue-100/50 rounded-3xl blur-xl z-0 animate-pulse-slow" />
          <div className="relative z-10 p-6 md:p-8 bg-slate-50 rounded-xl shadow-xl border border-slate-200 h-full flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Capital Execution Mindset
            </h2>
            <p className="text-base text-gray-700 leading-relaxed flex-grow">
              We were never interested in theory, decks, or frameworks. We've been inside companies where capital strategy was reactive, disjointed, and painfully inefficient. Funding got raised, but delivery collapsed under pressure. <span className="text-blue-600 font-semibold">So we built the opposite</span> — a model where capital raising and project execution operate as one system. Not outsourced, not siloed. <span className="text-blue-600 font-semibold">Real funding, real delivery, at real speed.</span>
            </p>
          </div>
        </div>

        {/* Block 2: Designed Around Results */}
        <div className="flex-1 flex flex-col justify-center relative mt-8 md:mt-0">
          <div className="absolute -right-2 md:-right-4 -bottom-2 md:-bottom-4 w-20 h-20 md:w-28 md:h-28 bg-sky-100/50 rounded-3xl blur-xl z-0 animate-pulse-slow animation-delay-2000" />
          <div className="relative z-10 p-6 md:p-8 bg-slate-50 rounded-xl shadow-xl border border-slate-200 h-full flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Designed Around Results
            </h2>
            <p className="text-base text-gray-700 leading-relaxed flex-grow">
              Advisory doesn't mean much unless it closes. Our experience across €20M+ in startup funding and €200M+ in project budgets taught us that capital is only one part of the equation. <span className="text-blue-600 font-semibold">Structure, clarity, and execution drive everything else.</span> We operate with precision, not noise — delivering strategies that hold up under real conditions, not just boardroom slides.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlocks; 