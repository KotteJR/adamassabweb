"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Mail, ChevronDown, SearchCheck, DollarSign, Lightbulb } from "lucide-react";
import { usePathname } from 'next/navigation';

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    href: "#", // Placeholder, as it's a dropdown trigger
    children: [
      {
        name: "Due Diligence",
        href: "/Solutions/DueDiligence",
        description: "Learn more about our due diligence services.",
        icon: <SearchCheck size={20} />,
      },
      {
        name: "Capital Advisory",
        href: "/Solutions/CapitalAdvisory",
        description: "Learn more about our capital advisory services.",
        icon: <DollarSign size={20} />,
      },
      {
        name: "Strategic Advisory",
        href: "/ComingSoon",
        description: "Coming Soon.",
        icon: <Lightbulb size={20} />,
      },
      {
        name: "Respectfully Disruptive",
        href: "/ComingSoon",
        description: "Adamass x Studiosphere",
        icon: <Lightbulb size={20} />,
      },
      
    ],
  },
  { name: "Contact", href: "/ContactUs" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkBackground, setIsDarkBackground] = useState(true); // Default to dark
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [buttonLeft, setButtonLeft] = useState<number>(0);
  const pathname = usePathname();

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

    const detectBackground = () => {
      if (typeof window !== 'undefined') {
        const header = headerRef.current;
        if (!header) return;
        const headerRect = header.getBoundingClientRect();
        // Get the element directly under the header
        const elements = document.elementsFromPoint(window.innerWidth / 2, headerRect.bottom + 1);
        const section = elements.find(el => el.hasAttribute && el.hasAttribute('data-bg'));
        if (section) {
          const bg = section.getAttribute('data-bg');
          setIsDarkBackground(bg === 'dark');
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      window.addEventListener('scroll', detectBackground);
      
      // Initial check
      detectBackground();
      
      return () => {
        window.removeEventListener('scroll', controlNavbar);
        window.removeEventListener('scroll', detectBackground);
      };
    }
  }, [lastScrollY, pathname]);

  // Dynamic classes based on background
  const headerClasses = isDarkBackground 
    ? "backdrop-blur-lg bg-black/40" 
    : "backdrop-blur-lg bg-white/90 border-b border-gray-200/50";
    
  const textClasses = isDarkBackground 
    ? "text-white" 
    : "text-gray-800";
    
  // const logoFilter = isDarkBackground 
  //   ? "filter brightness-0 invert" 
  //   : "filter brightness-0";
    
  const buttonClasses = isDarkBackground
    ? "bg-blue-600 hover:bg-blue-700 text-white"
    : "bg-blue-600 hover:bg-blue-700 text-white";
    
  const mobileButtonClasses = isDarkBackground
    ? "hover:bg-white/10 focus:ring-blue-500"
    : "hover:bg-gray-900/10 focus:ring-blue-500";

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${headerClasses} ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Full width header with max-width container inside */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Image Logo */}
          <div className="flex items-center">
            <Link href="/" passHref>
              <Image 
                src="/images/adamasslogo.png" 
                alt="Adamass Logo" 
                width={120}
                height={28}
                className={`cursor-pointer object-contain transition-all duration-100 ease-in-out ${isDarkBackground ? 'filter invert brightness-200' : 'filter-none'}`}
                priority
                quality={100}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-8">
            {/* Nav Links */}
            <ul className={`flex items-center gap-2 text-base font-medium transition-all duration-100 ease-in-out ${textClasses}`}>
              {navItems.slice(0, 1).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-full transition-all duration-100 ease-in-out ${isDarkBackground ? "hover:bg-white/10 hover:text-gray-100" : "hover:bg-gray-900/10 hover:text-gray-900"}`}>
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* Solutions Dropdown */}
              <li 
                className="relative"
                onMouseEnter={() => {
                  setSolutionsOpen(true);
                  if (buttonRef.current) {
                    setButtonLeft(buttonRef.current.offsetLeft);
                  }
                }}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  ref={buttonRef}
                  onClick={() => {
                    setSolutionsOpen(!solutionsOpen);
                    if (!solutionsOpen && buttonRef.current) {
                      setButtonLeft(buttonRef.current.offsetLeft);
                    }
                  }}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-100 ease-in-out ${isDarkBackground ? "hover:bg-white/10 hover:text-gray-100" : "hover:bg-gray-900/10 hover:text-gray-900"}`}
                >
                  Solutions <ChevronDown size={16} className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {/* Invisible hover bridge to allow gap */}
                {solutionsOpen && (
                  <div
                    className="absolute"
                    style={{
                      top: '100%',
                      left: buttonLeft - 38,
                      width: '20rem', // match dropdown width (w-80)
                      height: '1.5rem', // mt-6 = 24px
                      zIndex: 49,
                      pointerEvents: 'auto',
                    }}
                  />
                )}
                {solutionsOpen && (
                  <div
                    className={`absolute mt-4 w-80 rounded-b-lg p-3 ${isDarkBackground ? 'bg-black/80 backdrop-blur-lg' : 'bg-white/95 backdrop-blur-md'} z-50`}
                    style={{
                      top: '100%',
                      left: buttonLeft - 38,
                      boxShadow: 'none', // Remove shadow
                    }}
                  >
                    <div className="space-y-2">
                      {navItems.find(item => item.name === "Solutions")?.children?.map((child) => (
                        child.name === 'Respectfully Disruptive' ? (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`flex flex-col items-center justify-center py-2 rounded-md transition-colors duration-150 cursor-pointer ${isDarkBackground ? 'hover:bg-white/10' : 'hover:bg-gray-900/5'}`}
                            onClick={() => setSolutionsOpen(false)}
                          >
                            <img src="/images/adamassxsphere.svg" alt="Adamass x Studiosphere" className="w-32 h-auto mb-1" />
                            <p className={`text-xs ${isDarkBackground ? 'text-gray-400' : 'text-gray-500'} mt-1`}>Coming Soon - Adamass x Studiosphere</p>
                          </Link>
                        ) : (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`group flex items-start gap-3 p-3 rounded-md transition-colors duration-150 ${isDarkBackground ? 'hover:bg-white/10' : 'hover:bg-gray-900/5'}`}
                            onClick={() => setSolutionsOpen(false)}
                          >
                            <div className={`mt-1 ${isDarkBackground ? 'text-blue-400' : 'text-blue-600'}`}>
                              {child.icon}
                            </div>
                            <div>
                              <p className={`font-semibold ${isDarkBackground ? 'text-gray-100' : 'text-gray-800'}`}>{child.name}</p>
                              <p className={`text-xs ${isDarkBackground ? 'text-gray-400' : 'text-gray-500'}`}>{child.description}</p>
                            </div>
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </li>
            </ul>
            
            {/* Contact Us Button */}
            <Link
              href="/ContactUs"
              className={`px-5 py-2 font-semibold rounded-xl transition-all duration-100 ease-in-out shadow-lg hover:shadow-xl flex items-center gap-2 ${buttonClasses}`}
            >
              <Mail size={18} />
              Contact Us
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <button
            className={`sm:hidden flex items-center justify-center p-2 rounded-full focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out ${mobileButtonClasses}`}
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} className={`transition-all duration-300 ease-in-out ${textClasses}`} />
          </button>
        </div>
      </nav>
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
              <li key={item.name} className="w-full text-center">
                {item.children ? (
                  <div className="w-full">
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className="w-full px-8 py-4 rounded-full transition-all duration-200 ease-in-out hover:bg-white/10 hover:text-blue-400 flex items-center justify-center gap-2"
                    >
                      {item.name} <ChevronDown size={20} className={`transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileSolutionsOpen && (
                      <ul className="mt-0 flex flex-col gap-2 items-center">
                        {item.children.map((child) => (
                          <li key={child.name} className="w-full">
                            {child.name === 'Respectfully Disruptive' ? (
                              <Link
                                href={child.href}
                                className="flex flex-col items-center justify-center py-2 rounded-md transition-colors duration-150 cursor-pointer hover:bg-white/10"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileSolutionsOpen(false);
                                }}
                              >
                                <img src="/images/adamassxsphere.svg" alt="Adamass x Studiosphere" className="w-32 h-auto mb-1" />
                                <p className="text-xs text-gray-400 mt-1">Coming Soon - Adamass x Studiosphere</p>
                              </Link>
                            ) : (
                              <Link
                                href={child.href}
                                className="block px-6 py-3 text-lg rounded-full transition-all duration-200 ease-in-out hover:bg-white/15 hover:text-blue-300 w-full"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileSolutionsOpen(false);
                                }}
                              >
                                {child.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-8 py-4 rounded-full transition-all duration-200 ease-in-out hover:bg-white/10 hover:text-blue-400 ${
                      item.name === 'Contact' ? 'bg-blue-600 hover:bg-blue-700' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name === 'Contact' ? 'Contact Us' : item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header; 