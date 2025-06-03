"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  {
    value: '€20M+',
    label: 'Seed Capital Raised',
    description: 'For early-stage tech startups over the past 5 years.'
  },
  {
    value: '€200M+',
    label: 'Project Budgets Involved',
    description: 'Raised, scoped, or executed across large-scale tech initiatives'
  },
  {
    value: '50+',
    label: 'Companies Backed',
    description: 'Across capital raising and project-based funding engagements'
  },
  {
    value: '90%',
    label: 'Client Retention Rate',
    description: 'Clients returned or referred new engagements'
  }
];

const ProgressCircle = ({ current, total }: { current: number, total: number }) => {
  const radius = 24;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = (current + 1) / total;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="block">
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#2563eb"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s' }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

const StatDisplay = ({ stat }: { stat: typeof stats[0] }) => (
  <motion.div
    key={stat.value}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center justify-center min-h-[300px]"
  >
    <span className="text-6xl font-bold text-gray-900 mb-2">{stat.value}</span>
    <span className="text-2xl font-semibold text-gray-900 mb-1">{stat.label}</span>
    <span className="text-lg text-gray-500 text-center max-w-xl">{stat.description}</span>
  </motion.div>
);

const CapitalAdvisory = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [allStatsShown, setAllStatsShown] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Prevent scrolling to next section until all stats are shown
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!allStatsShown && e.deltaY > 0) {
        e.preventDefault();
        if (currentStat < stats.length - 1) {
          setCurrentStat((prev) => Math.min(prev + 1, stats.length - 1));
        } else {
          setAllStatsShown(true);
        }
      }
    };
    const node = statsRef.current;
    if (node) {
      node.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (node) node.removeEventListener('wheel', handleWheel);
    };
  }, [currentStat, allStatsShown]);

  // Prevent scroll on body until all stats are shown
  useEffect(() => {
    if (!allStatsShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [allStatsShown]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div ref={heroRef} className="w-full min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Capital Strategy.<br className="hidden md:block" /> Engineered for Execution.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          We partner with ambitious founders and operators to structure funding rounds, optimize capital stacks, and align financial strategy with long-term growth. From seed to strategic expansion, we deliver clarity, precision, and results.
        </p>
      </div>
      {/* Stat Section */}
      <div ref={statsRef} className="relative flex flex-col items-center justify-center w-full min-h-screen" style={{ minHeight: 340 }}>
        <div className="absolute left-8 top-1/2 -translate-y-1/2">
          <ProgressCircle current={currentStat} total={stats.length} />
        </div>
        <div className="w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            <StatDisplay stat={stats[currentStat]} key={stats[currentStat].value} />
          </AnimatePresence>
        </div>
      </div>
      {/* Spacer to allow scroll after all stats */}
      <div style={{ height: allStatsShown ? 400 : 0, transition: 'height 0.5s' }} />
    </div>
  );
};

export default CapitalAdvisory; 