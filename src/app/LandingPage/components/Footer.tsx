import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Assuming you might want your logo here too

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Optional: Logo */}
          <div className="mb-6">
            <Link href="/" passHref>
                <Image 
                  src="/images/adamasslogo.png" 
                  alt="Adamass Logo"
                  width={140} // Slightly larger for footer if desired
                  height={32} // Adjusted height to maintain aspect ratio
                  className="cursor-pointer object-contain h-8 w-auto" // h-8 for consistent height, w-auto for aspect ratio
                  quality={100}
                />
            </Link>
          </div>

          {/* Copyright text */}
          <p className="text-sm text-center">
            &copy; {currentYear} Adamass. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Fridhemsvägen 2, 217 74 Malmö, Sweden
          </p>
          
          {/* Optional: Minimalist navigation or social links */}
          {/* <div className="flex gap-6 mt-6">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors text-xs">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors text-xs">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 