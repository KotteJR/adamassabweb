"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

const TimerPage = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 60);
    targetDate.setHours(0, 0, 0, 0); // Set to midnight for a clean 60-day start

    const difference = +targetDate - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return null;
    }

    return (
      <div key={interval} className="text-center p-3 sm:p-4 bg-neutral-800 rounded-lg shadow-xl min-w-[70px] sm:min-w-[90px]">
        <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          {String(timeLeft[interval]).padStart(2, '0')}
        </div>
        <div className="text-xs sm:text-sm uppercase text-gray-300 tracking-wider pt-1">
          {interval}
        </div>
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
          Exciting Things Are Coming!
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 sm:mb-12 md:mb-16">
          This page is still under construction. We are working hard to bring you all information about us. Stay tuned!
        </p>
        
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20">
          {timerComponents.length ? timerComponents : <span>Loading timer...</span>}
        </div>

        <p className="text-md text-gray-400 mb-8">
          The countdown is on for a new experience.
        </p>

        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black group">
            <Home size={20} className="mr-2 -ml-1 group-hover:scale-110 transition-transform" />
            Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default TimerPage; 