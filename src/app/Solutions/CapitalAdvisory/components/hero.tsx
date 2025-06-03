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

  const attemptInteraction = () => {
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
  };

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
  }, [allStatsShown]);

  return (
    <div
        data-bg="dark"
        ref={containerRef}
        className="relative w-full max-w-full flex flex-col justify-center items-center min-h-screen max-h-screen overflow-hidden"
        style={{ height: '100vh' }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full bg-black" />
        <div className="absolute inset-0 w-full h-full bg-[url('/backgrounds/image4.png')] bg-[length:150%] bg-center opacity-60" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full max-h-screen px-4">
        <h1
          className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight mb-4 text-center"
        >
          Capital Strategy.<br className="hidden md:block" /> Engineered for Execution.
        </h1>
        <p
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-center mb-15"
        >
          We partner with ambitious founders and operators to structure funding rounds, optimize capital stacks, and align financial strategy with long-term growth. From seed to strategic expansion, we deliver clarity, precision, and results.
        </p>
        <div className="relative flex flex-col items-center justify-center w-full">
          <div className="w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              <StatDisplay stat={stats[currentStat]} key={stats[currentStat].value} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 