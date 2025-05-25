"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "#solutions" },
  { name: "Contact", href: "/ContactUs" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-center pt-4 pb-4 bg-transparent transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="flex items-center justify-between w-full max-w-5xl bg-white/70 rounded-full shadow-sm px-6 py-3 backdrop-blur-lg">
        {/* Image Logo */}
        <div className="flex items-center -mt-1">
          <Link href="/" passHref>
            <Image 
              src="/images/adamasslogo.png" 
              alt="Adamass Logo" 
              width={120}
              height={28}
              className="cursor-pointer object-contain"
              priority
              quality={100}
            />
          </Link>
        </div>
        {/* Nav Links */}
        <ul className="flex items-center gap-2 text-base font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all duration-200 ease-in-out"
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