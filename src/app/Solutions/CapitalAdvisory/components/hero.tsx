"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  {
    value: '€20M+',
    label: 'Seed Capital Raised',
    description: 'We have helped early-stage tech startups raise over €20 million in seed capital over the past 5 years. Our team guides founders through every step of the fundraising process, from pitch preparation to investor negotiations.'
  },
  {
    value: '€200M+',
    label: 'Project Budgets Involved',
    description: 'Our advisory team has been involved in raising, scoping, or executing over €200 million in project budgets for large-scale tech initiatives. We provide strategic oversight and financial structuring to maximize project success and long-term value.'
  },
  {
    value: '50+',
    label: 'Companies Backed',
    description: 'We have supported more than 50 companies through capital raising and project-based funding engagements. Our clients benefit from tailored solutions that address their unique challenges and opportunities.'
  },
  {
    value: '90%',
    label: 'Client Retention Rate',
    description: '90% of our clients return for additional services or refer new engagements, reflecting our commitment to exceptional results and trusted relationships. We prioritize transparency, responsiveness, and measurable impact in every project.'
  }
];

const QUIET_PERIOD_MS = 1200; // Must be longer than animation

const StatDisplay = ({ stat }: { stat: typeof stats[0] }) => (
  <motion.div
    key={stat.value}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.6 }} // Animation is 600ms
    className="flex flex-col items-center justify-center min-h-[180px]"
  >
    <span className="text-6xl font-bold text-white mb-2">{stat.value}</span>
    <span className="text-2xl font-semibold text-white mb-1">{stat.label}</span>
    <span className="text-lg text-gray-300 text-center max-w-xl">{stat.description}</span>
  </motion.div>
);

const preventScroll = (e: Event) => {
  e.preventDefault();
  return false;
};

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [allStatsShown, setAllStatsShown] = useState(false);
  const isTransitioningRef = useRef(false);
  const quietPeriodTimerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const attemptInteraction = useCallback(() => {
    if (isTransitioningRef.current || allStatsShown) {
      return; // Already transitioning or all stats shown
    }
    isTransitioningRef.current = true;
    setCurrentStat((prev) => {
      if (prev < stats.length - 1) {
        return prev + 1;
      } else {
        setAllStatsShown(true);
        return prev;
      }
    });
    if (quietPeriodTimerRef.current) clearTimeout(quietPeriodTimerRef.current);
    quietPeriodTimerRef.current = setTimeout(() => {
      isTransitioningRef.current = false;
    }, QUIET_PERIOD_MS);
  }, [allStatsShown]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!allStatsShown) e.preventDefault();
      if (e.deltaY > 0) {
        attemptInteraction();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!allStatsShown) e.preventDefault();
      attemptInteraction(); 
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!allStatsShown) e.preventDefault();
      const keys = ["ArrowDown", "ArrowRight", "PageDown", "Space", " "];
      if (keys.includes(e.key)) {
        attemptInteraction();
      }
    };

    const node = containerRef.current;
    if (node) {
      node.addEventListener('wheel', handleWheel, { passive: false });
      node.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const originalHtmlOverflow = htmlElement.style.overflow;
    const originalBodyOverflow = bodyElement.style.overflow;

    if (!allStatsShown) {
      htmlElement.style.overflow = 'hidden';
      bodyElement.style.overflow = 'hidden';
      window.addEventListener('scroll', preventScroll, { passive: false });
    } else {
      htmlElement.style.overflow = originalHtmlOverflow;
      bodyElement.style.overflow = originalBodyOverflow;
    }

    return () => {
      if (node) {
        node.removeEventListener('wheel', handleWheel);
        node.removeEventListener('touchmove', handleTouchMove);
      }
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', preventScroll);
      htmlElement.style.overflow = originalHtmlOverflow;
      bodyElement.style.overflow = originalBodyOverflow;
      if (quietPeriodTimerRef.current) clearTimeout(quietPeriodTimerRef.current);
    };
  }, [allStatsShown, attemptInteraction]);

  return (
    <div
      data-bg="dark"
      ref={containerRef}
      className="relative w-full max-w-full md:min-h-screen md:h-screen overflow-hidden pt-24 md:pt-0"
      style={{ height: undefined }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between gap-x-12 px-4 md:px-8 md:h-full mt-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 w-full h-full bg-black" />
          <div className="absolute inset-0 w-full h-full bg-[url('/backgrounds/image4.png')] bg-[length:150%] bg-center opacity-60" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
        </div>

        {/* Left: Title & Paragraph */}
        <div className="w-full max-w-2xl flex flex-col justify-center h-full z-10 items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 w-full">
            Capital Strategy. Engineered for Execution.
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 max-w-lg w-full mb-2">
            We partner with ambitious founders and operators to structure funding rounds, optimize capital stacks, and align financial strategy with long-term growth. From seed to strategic expansion, we deliver clarity, precision, and results.
          </p>
          <div className="mt-8 mb-8 flex flex-col gap-4 w-full mx-auto sm:flex-row sm:max-w-none sm:mx-0 sm:w-auto md:max-w-md">
            <a 
              href="/ComingSoon"
              className="w-full min-w-50 flex items-center justify-center py-3 px-6 rounded-md text-base font-semibold text-center cursor-pointer transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap"
            >
              See Case Studies
            </a>
            <a
              href="/ContactUs"
              className="w-full min-w-50 py-3 px-6 rounded-md text-base font-semibold cursor-pointer transition-all duration-200 ease-in-out bg-white text-gray-900 shadow-sm text-center
                hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right: Animated Stats */}
        <div className="w-full max-w-2xl flex flex-col justify-center z-10 items-center md:items-end mt-8 md:mt-0 md:justify-center">
          <div className="w-full flex justify-center md:justify-end md:items-center md:h-80 md:mt-12 mt-4 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={stats[currentStat].value}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-full md:max-w-md flex flex-col justify-center rounded-2xl backdrop-blur-md border border-white/5 mx-auto md:ml-auto md:mr-0 md:self-auto md:h-80 mb-20"
              >
                <div className="flex flex-col justify-center h-full w-full px-4 md:px-10 py-5 md:py-14 text-center md:text-left">
                  <span className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-blue-200 via-blue-300 via-blue-500 via-blue-700 to-blue-400 bg-clip-text text-transparent">{stats[currentStat].value}</span>
                  <span className="text-xl font-semibold text-white mb-1">{stats[currentStat].label}</span>
                  <span className="text-base text-gray-300 hidden md:block">{stats[currentStat].description}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 