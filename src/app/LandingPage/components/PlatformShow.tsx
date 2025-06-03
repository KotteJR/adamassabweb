"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const PlatformShow = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabsData = [
    {
      id: 1,
      title: 'Getting Started',
      description: 'Find out how to get started with our platform',
      images: [
        '/platformshow/tab1m1.png',
        '/platformshow/tab1m2.png',
      ],
      extensionContents: [
        (<ol key="gs-ol-1" className="space-y-3 w-full">
          <li className="flex items-start gap-3"><span className="font-bold text-blue-600">1.</span> To get started, fill in the form with the required information.</li>
          <li className="flex items-start gap-3"><span className="font-bold text-blue-600">2.</span> Simply click the Generate Report button to initiate the report.</li>
          <li className="flex items-start gap-3"><span className="font-bold text-blue-600">3.</span> When the report is ready, the Access Report button will turn green and you will be able to click it in order to view the report.</li>
        </ol>),
        (<div key="gs-div-2" className="w-full font-medium">
          We also offer a complete and open database of all previously generated reports. Simply search for the company you are interested in and find out if it&apos;s already been analyzed, if not, feel free to generate a new report.
        </div>)
      ],
      mockupSubTabs: [
        { label: "Generation", title: "Input Form & Generation" },
        { label: "Search Engine", title: "Report Database" },
      ]
    },
    {
      id: 2,
      title: 'How it Works',
      description: 'Learn about our proprietary process',
      images: [
        '/platformshow/tab2m1.png',
      ],
      extensionContents: [
        (<div key="hiw-div-1" className="w-full font-medium">
          We leverage proprietary algorithms and advanced AI to collect and analyze data. Our unique Adamas methodology for technological due diligence applies specialized parameters and insights, ensuring every report is comprehensive, accurate, and tailored to your needs.
        </div>)
      ],
      mockupSubTabs: [
        { label: "Our Method", title: "Adamas Methodology" },
      ]
    },
    {
      id: 3,
      title: 'The Reports',
      description: 'Learn more about the reports.',
      images: [
        '/platformshow/tab3m1.png',
        '/platformshow/tab3m2.png',
        '/platformshow/tab3m3.png',
        '/platformshow/tab3m4.png',
      ],
      extensionContents: [
        (<div key="tr-0" className="w-full font-medium">
          The Adamas Intelligence Report provides our expert verdict and actionable insights based on a comprehensive analysis of all aspects of the company. It includes mitigation strategies and highlights possible synergies—whether for acquisition, investment, or merger—tailored to your specific scenario.
        </div>),
        (<div key="tr-1" className="w-full font-medium">
          The Architecture Analysis section delivers detailed scores, identifies risks and strengths, and offers targeted recommendations and insights to help you understand the technical foundation of the company.
        </div>),
        (<div key="tr-2" className="w-full font-medium">
          Our Security Findings present structured results, highlighting critical issues and prioritized fixes. You&apos;ll see clear recommendations for remediation, ensuring your security posture is robust and up to industry standards.
        </div>),
        (<div key="tr-3" className="w-full font-medium">
          Every aspect of the report concludes with a summary of key insights and recommendations, giving you a concise overview of the most important findings and next steps for every aspect of the analysis.
        </div>)
      ],
      mockupSubTabs: [
        { label: "Verdict", title: "Overall Report Verdict" },
        { label: "Architecture", title: "Architecture Analysis" },
        { label: "Security", title: "Security Findings" },
        { label: "Summaries", title: "Key Summaries & Actions" },
      ]
    },
    {
      id: 4,
      title: 'Try Adamass Intelligence',
      description: 'Create your first report for free.',
      images: [], // No image for Tab 4, only CTA
      extensionContents: [
        (<div key="tai-cta-1" className="flex-1 min-h-0 flex flex-col items-center justify-center px-3 py-8 w-full">
          <h2 className="text-lg sm:text-2xl font-bold text-blue-700 mb-3 mt-3 text-center">Ready to experience Adamass Intelligence?</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6 text-center max-w-xs sm:max-w-xl">Join the platform and unlock actionable insights for your next investment, acquisition, or partnership.</p>
          <a
            href="http://15.236.203.244:3000"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3 rounded-lg shadow transition-colors duration-200 mb-3"
          >
            Launch the Platform
          </a>
        </div>)
      ],
      mockupSubTabs: [
        { label: "Launch", title: "Launch Adamass Intelligence" },
      ]
    },
  ];

  const currentTabData = tabsData.find(tab => tab.id === activeTab);

  // Browser mockup component
  const BrowserMockup = ({ 
    images,
    imageAltPrefix,
    extensionContents,
    mockupSubTabs,
    activeMainTabId,
  }: { 
    images: string[];
    imageAltPrefix: string;
    extensionContents: React.ReactNode[];
    mockupSubTabs: Array<{ label: string; title: string; }>;
    activeMainTabId: number;
    wide?: boolean;
  }) => {
    const [currentSubTabIndex, setCurrentSubTabIndex] = useState(0);

    React.useEffect(() => {
      setCurrentSubTabIndex(0); 
    }, [activeMainTabId]);

    const hasImage = images && images.length > currentSubTabIndex && images[currentSubTabIndex];

    const extensionBoxBorderStyles = hasImage
      ? 'border-l border-r border-b border-gray-200' 
      : 'border-l border-r border-b border-t border-white';

    return (
      <div className={`rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden flex flex-col w-full`}>
        {/* Browser bar */}
        <div className="flex items-center h-12 px-4 bg-gray-100 border-b border-gray-200">
          {/* Window controls */}
          <div className="flex items-center gap-2 mr-4">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-300"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          {/* Address bar container - updated for responsive positioning */}
          <div className="flex-1 flex justify-end md:justify-center">
            <div className="rounded-full bg-gray-200 px-6 py-1 text-sm text-gray-700 font-mono min-w-[180px] max-w-[320px] truncate border border-gray-300 shadow-inner hidden sm:block">
              www.adamass.se/AI
            </div>
          </div>
          {/* Spacer for symmetry on larger screens - hidden on smaller screens */}
          <div className="w-16 hidden md:block"></div>
        </div>
        
        {/* Mockup's Internal Tab bar */}
        {mockupSubTabs && mockupSubTabs.length > 0 && (
          <div className={`relative flex items-end h-9 px-4 pt-2 gap-2 bg-gray-100 border-b border-gray-200 transition-all duration-300 ease-in-out`}>
            {mockupSubTabs.map((subTab, index) => {
              const isActive = index === currentSubTabIndex;
              const isSecondTabToHighlight = index === 1 && mockupSubTabs.length > 1;

              let tabSpecificClasses = '';
              if (isActive) {
                tabSpecificClasses = 'bg-white border-gray-300 text-gray-900';
              } else if (isSecondTabToHighlight) {
                tabSpecificClasses = 'bg-gray-200 border-blue-500 ring-1 ring-blue-400 text-gray-600 hover:bg-gray-50 hover:text-blue-600';
              } else {
                tabSpecificClasses = 'bg-gray-200 border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700';
              }

              // For the second tab, wrap in a relative div and add the label absolutely above
              if (isSecondTabToHighlight) {
                return (
                  <div key={index} className="relative flex flex-col items-center">
                    <span
                      className="absolute -top-9 left-1/2 -translate-x-1/2 text-xs font-bold text-white bg-[#2046F7] px-4 py-1 rounded-full uppercase tracking-wide z-20 animate-jump whitespace-nowrap"
                    >
                      Click Me
                    </span>
                    <div
                      title={subTab.title}
                      className={`rounded-t-lg px-4 py-1 text-sm font-semibold shadow-sm border truncate max-w-[100px] sm:max-w-none cursor-pointer relative ${tabSpecificClasses}`}
                      onClick={() => setCurrentSubTabIndex(index)}
                    >
                      {subTab.label}
                    </div>
                    {/* Custom animation for the Click Me label */}
                    <style jsx>{`
                      @keyframes jump {
                        0%, 100% { transform: translateY(0); }
                        20% { transform: translateY(-6px); }
                        40% { transform: translateY(2px); }
                        60% { transform: translateY(-3px); }
                        80% { transform: translateY(1px); }
                      }
                      .animate-jump {
                        animation: jump 1.2s infinite;
                      }
                    `}</style>
                  </div>
                );
              }

              // All other tabs
              return (
                <div
                  key={index}
                  title={subTab.title}
                  className={`rounded-t-lg px-4 py-1 text-sm font-semibold shadow-sm border truncate max-w-[100px] sm:max-w-none cursor-pointer relative ${tabSpecificClasses}`}
                  onClick={() => setCurrentSubTabIndex(index)}
                >
                  {subTab.label}
                </div>
              );
            })}
            <div className="flex-1"></div>
          </div>
        )}

        {/* Scrollable Content Viewport - NEW WRAPPER */}
        <div className="overflow-y-auto flex-grow min-h-0 max-h-[350px] sm:max-h-[450px] md:max-h-[550px] lg:max-h-[650px]">
          
          {/* Image Display Area (if image exists) */}
          {hasImage && (
            <div className="relative w-full bg-white p-1"> {/* Padding reduced, fixed height removed */}
              <Image 
                src={images[currentSubTabIndex]} 
                alt={`${imageAltPrefix} - ${mockupSubTabs[currentSubTabIndex]?.title || 'View ' + (currentSubTabIndex + 1)}`}
                width={600} // Should ideally be actual image width for aspect ratio
                height={400} // Should ideally be actual image height for aspect ratio
                quality={100} // Ensure full quality
                className="max-w-full h-auto mx-auto block" // For natural size and responsiveness
                priority={currentSubTabIndex === 0} 
              />
            </div>
          )}

          {/* Extension Content Box */}
          {extensionContents && extensionContents.length > currentSubTabIndex && extensionContents[currentSubTabIndex] && (
            <div className={`relative w-full flex justify-center ${hasImage ? 'mt-[-1.25rem]' : 'py-4' }`}>
              {/* This div ensures the extension content is part of the scroll flow and handles its own styling. */}
              <div className={`px-6 py-5 w-full bg-white flex flex-col items-start ${extensionBoxBorderStyles} ${hasImage ? 'rounded-b-2xl' : 'rounded-2xl'}`}>
                {hasImage && (
                   <div className="w-full h-px bg-gray-200 mb-4"></div>
                )}
                {extensionContents[currentSubTabIndex]}
              </div>
            </div>
          )}

          {/* Fallback if no image AND no extension for the selected sub-tab */}
          {!hasImage && 
           (!extensionContents || extensionContents.length <= currentSubTabIndex || !extensionContents[currentSubTabIndex]) &&
           mockupSubTabs && mockupSubTabs.length > 0 && (
              <div className="p-8 text-center text-gray-500 flex-grow flex items-center justify-center">
                Content for {mockupSubTabs[currentSubTabIndex]?.label || `sub-tab ${currentSubTabIndex + 1}`} is not available.
              </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div id="platformshow" className="bg-white text-gray-800" data-bg="light">
      <div className="max-w-7xl mx-auto py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            New platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3 leading-tight">
            Discover Adamass Intelligence
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-4xl">
            Learn more about Adamass Intelligence - our new AI-powered Technological Due Diligence platform. 
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto gap-2 border-b border-gray-300 mb-10 md:flex-row scrollbar-hide">
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              className={`flex-shrink-0 min-w-max py-3 px-4 cursor-pointer border-b-4 transition-all duration-300 ease-in-out rounded-t-lg flex items-center gap-3
                ${activeTab === tab.id ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-300 bg-gray-100'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={`text-lg font-bold ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-400'}`}>
                {String(tab.id).padStart(2, '0')}
              </span>
              <div>
                <p className={`text-sm font-semibold ${activeTab === tab.id ? 'text-blue-700' : 'text-gray-700'}`}>{tab.title}</p>
                <p className={`text-xs ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'}`}>{tab.description}</p>
              </div>
            </div>
          ))}
          {/* Right-arrow scroll hint for mobile */}
          <div className="flex items-center sm:hidden pl-2">
            <ChevronRight size={24} className="text-gray-400 opacity-70" />
          </div>
        </div>

        {currentTabData && currentTabData.mockupSubTabs && currentTabData.extensionContents && (
          <div className="mt-2">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-8 pt-0">
              <BrowserMockup
                images={currentTabData.images}
                imageAltPrefix={currentTabData.title}
                extensionContents={currentTabData.extensionContents}
                mockupSubTabs={currentTabData.mockupSubTabs}
                activeMainTabId={activeTab}
              />
            </div>
          </div>
        )}

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PlatformShow;