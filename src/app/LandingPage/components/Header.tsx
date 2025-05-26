"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/ComingSoon" },
  { name: "Contact", href: "/ContactUs" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null); // Keep ref if needed for height based calcs for isVisible, though not strictly necessary for current isVisible logic
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex items-center justify-center p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} className="text-white" />
        </button>
        {/* Nav Links - always white text */}
        <ul className={`hidden sm:flex items-center gap-2 text-base font-medium text-white`}>
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
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9999] bg-black flex flex-col justify-center items-center min-h-screen w-screen">
            <button
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} className="text-white" />
            </button>
            <ul className="flex flex-col gap-8 text-2xl font-semibold text-white items-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="px-8 py-4 rounded-full transition-all duration-200 ease-in-out hover:bg-white/10 hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 