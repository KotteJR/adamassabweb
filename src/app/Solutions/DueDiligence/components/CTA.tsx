import React from 'react';
import Image from 'next/image';

const CTA = () => {
  return (
    <section data-bg="dark" className="relative bg-black text-white overflow-hidden">
      {/* Abstract background image with overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/backgrounds/image6.png"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-100 scale-150"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />
      </div>
      <div className="relative z-20 max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 md:mt-2 drop-shadow-xl">
            Before the Term Sheet Gets Signed.
        </h2>
        <p className="text-lg md:text-xl text-base text-gray-200 max-w-3xl mx-auto mb-8 drop-shadow">
        Our due diligence process spots red flags others miss — across tech, infra, and financials. Fast, clear, and actionable — exactly when you need it.
        </p>
        <a
          href="/ContactUs"
          className="inline-block bg-blue-600 text-white font-semibold text-base lg:text-lg px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default CTA; 