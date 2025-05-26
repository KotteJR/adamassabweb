"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/ComingSoon" },
  { name: "Contact", href: "/ContactUs" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null); // Keep ref if needed for height based calcs for isVisible, though not strictly necessary for current isVisible logic

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-center pt-6 pb-4 bg-transparent transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Updated nav styling: black blur, white border */}
      <nav className={`flex items-center justify-between w-full max-w-5xl rounded-full shadow-lg px-6 py-3 backdrop-blur-lg bg-black/40 border border-white/30`}>
        {/* Image Logo - attempt to make it white with filter */}
        <div className="flex items-center -mt-1">
          <Link href="/" passHref>
            <Image 
              src="/images/adamasslogo.png" 
              alt="Adamass Logo" 
              width={120}
              height={28}
              className="cursor-pointer object-contain filter brightness-0 invert" // Applied filter
              priority
              quality={100}
            />
          </Link>
        </div>
        {/* Nav Links - always white text */}
        <ul className={`flex items-center gap-2 text-base font-medium text-white`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`px-4 py-2 rounded-full transition-all duration-200 ease-in-out hover:bg-white/10 hover:text-gray-100`} // Adjusted hover for white text
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header; 