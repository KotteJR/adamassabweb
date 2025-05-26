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
    },
    {
      id: 2,
      title: 'How it Works',
      description: 'Learn about our proprietary process',
      images: [
        '/platformshow/tab2m1.png',
      ],
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
    },
    {
      id: 4,
      title: 'Try Adamass Intelligence',
      description: 'Create your first report for free.',
      images: [
        '/platformshow/tab4m1.png',
        '/platformshow/tab4m2.png',
      ],
    },
  ];

  const currentTabData = tabsData.find(tab => tab.id === activeTab);

  // Browser mockup component
  const BrowserMockup = ({ src, alt, activeTab, wide = false, children }: { src?: string, alt?: string, activeTab: number, wide?: boolean, children?: React.ReactNode }) => (
    <div className={`rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden flex flex-col w-full ${wide ? 'max-w-5xl' : 'max-w-xl'} mx-auto`}>
      {/* Browser bar with window controls and address bar */}
      <div className="flex items-center h-12 px-4 bg-gray-100 border-b border-gray-200">
        {/* Window controls */}
        <div className="flex items-center gap-2 mr-4">
          <span className="w-3 h-3 rounded-full bg-red-400"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-300"></span>
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
        </div>
        {/* Address bar centered */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-full bg-gray-200 px-6 py-1 text-sm text-gray-700 font-mono min-w-[180px] max-w-[320px] truncate border border-gray-300 shadow-inner">
            www.adamass.se/AI
          </div>
        </div>
        {/* Spacer for symmetry */}
        <div className="w-16"></div>
      </div>
      {/* Tab bar (below address bar) */}
      <div className="flex items-end h-9 px-4 pt-2 gap-2 bg-gray-100 border-b border-gray-200">
        <div className={`rounded-t-lg px-4 py-1 text-sm font-semibold shadow-sm border ${activeTab === 1 ? 'bg-white border-gray-300 text-gray-900' : 'bg-gray-200 border-transparent text-gray-500'} truncate max-w-[80px] sm:max-w-none`} title="Inputs">Inputs</div>
        <div className={`rounded-t-lg px-4 py-1 text-sm font-semibold shadow-sm border ${activeTab === 2 ? 'bg-white border-gray-300 text-gray-900' : 'bg-gray-200 border-transparent text-gray-500'} truncate max-w-[80px] sm:max-w-none`} title="How it Works">How it ...</div>
        <div className={`rounded-t-lg px-4 py-1 text-sm font-semibold shadow-sm border ${activeTab === 3 ? 'bg-white border-gray-300 text-gray-900' : 'bg-gray-200 border-transparent text-gray-400'} truncate max-w-[80px] sm:max-w-none`} title="Reports">Reports</div>
        <div className={`rounded-t-lg px-4 py-1 text-sm font-semibold shadow-sm border ${activeTab === 4 ? 'bg-white border-gray-300 text-gray-900' : 'bg-gray-200 border-transparent text-gray-300'} truncate max-w-[80px] sm:max-w-none`} title="Discover Adamass AI">Discover ...</div>
        <div className="flex-1"></div>
      </div>
      {/* Content area: image and children (extension) */}
      {src && (
        <div className="relative w-full bg-white h-[240px] sm:h-[300px] md:h-[340px] lg:h-[380px] p-4 flex items-center justify-center">
          <Image 
            src={src} 
            alt={alt || ''} 
            width={600}
            height={400}
            className="object-contain w-full h-full"
          />
        </div>
      )}
      {children}
    </div>
  );

  return (
    <div id="platformshow" className="bg-white text-gray-800">
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

        <div className="flex flex-nowrap overflow-x-auto gap-2 border-b border-gray-300 mb-10 md:flex-row">
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

        {currentTabData && (
          <div className="mt-6">
            {activeTab === 3 ? (
              <div className="relative">
                <div className="flex flex-nowrap overflow-x-auto gap-4 md:grid md:grid-cols-2 md:gap-8 w-full max-w-7xl mx-auto pt-8">
                  {currentTabData.images.map((img, idx) => (
                    <div key={idx} className="flex flex-col items-center min-w-[90vw] md:min-w-0 w-full">
                      <BrowserMockup
                        src={img}
                        alt={currentTabData.title + ' ' + (idx+1)}
                        activeTab={activeTab}
                      >
                        {/* Extension sheet below browser mockup */}
                        <div className={
                          `relative w-full flex justify-center`
                        }>
                          <div className={
                            `mt-[-1.25rem] rounded-b-2xl px-6 py-5 w-full bg-white flex flex-col items-start border-l border-r border-b border-gray-200`
                          }>
                            {/* Divider line */}
                            <div className="w-full h-px bg-gray-200 mb-4"></div>
                            {idx === 0 && (
                              <div className="w-full font-medium">
                                The Adamas Intelligence Report provides our expert verdict and actionable insights based on a comprehensive analysis of all aspects of the company. It includes mitigation strategies and highlights possible synergies—whether for acquisition, investment, or merger—tailored to your specific scenario.
                              </div>
                            )}
                            {idx === 1 && (
                              <div className="w-full font-medium">
                                The Architecture Analysis section delivers detailed scores, identifies risks and strengths, and offers targeted recommendations and insights to help you understand the technical foundation of the company.
                              </div>
                            )}
                            {idx === 2 && (
                              <div className="w-full font-medium">
                                Our Security Findings present structured results, highlighting critical issues and prioritized fixes. You&apos;ll see clear recommendations for remediation, ensuring your security posture is robust and up to industry standards.
                              </div>
                            )}
                            {idx === 3 && (
                              <div className="w-full font-medium">
                                Every aspect of the report concludes with a summary of key insights and recommendations, giving you a concise overview of the most important findings and next steps for every aspect of the analysis.
                              </div>
                            )}
                          </div>
                        </div>
                      </BrowserMockup>
                    </div>
                  ))}
                </div>
                {/* Right-arrow scroll hint for mobile */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 sm:hidden pointer-events-none">
                  <ChevronRight size={32} className="text-gray-400 opacity-70" />
                </div>
              </div>
            ) : activeTab === 4 ? (
              <div className="flex flex-col items-center justify-center py-8">
                <BrowserMockup activeTab={activeTab} wide={true}>
                  <div className="flex-1 min-h-0 flex flex-col items-center justify-center px-3 py-8 w-full overflow-y-auto">
                    <h2 className="text-lg sm:text-2xl font-bold text-blue-700 mb-3 mt-3 text-center">Ready to experience Adamass Intelligence?</h2>
                    <p className="text-sm sm:text-base text-gray-700 mb-6 text-center max-w-xs sm:max-w-xl">Join the platform and unlock actionable insights for your next investment, acquisition, or partnership.</p>
                    <a
                      href="/platform" // Change to your actual platform URL if needed
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3 rounded-lg shadow transition-colors duration-200 mb-3"
                    >
                      Launch the Platform
                    </a>
                  </div>
                </BrowserMockup>
              </div>
            ) : activeTab === 1 ? (
              <div className="flex flex-nowrap overflow-x-auto gap-4 md:grid md:grid-cols-2 md:gap-8 w-full max-w-7xl mx-auto pt-8">
                {currentTabData.images.map((img, idx) => (
                  <div key={idx} className="flex flex-col items-center min-w-[90vw] md:min-w-0 w-full">
                    <BrowserMockup
                      src={img}
                      alt={currentTabData.title + ' ' + (idx + 1)}
                      activeTab={activeTab}
                    >
                      {/* Extension sheet for Tab 1 */}
                      <div className="relative w-full flex justify-center">
                        <div className="mt-[-1.25rem] rounded-b-2xl px-6 py-5 w-full bg-white flex flex-col items-start border-l border-r border-b border-gray-200">
                          <div className="w-full h-px bg-gray-200 mb-4"></div>
                          {idx === 0 ? (
                            <ol className="space-y-3 w-full">
                              <li className="flex items-start gap-3"><span className="font-bold text-blue-600">1.</span> To get started, fill in the form with the required information.</li>
                              <li className="flex items-start gap-3"><span className="font-bold text-blue-600">2.</span> Simply click the Generate Report button to initiate the report.</li>
                              <li className="flex items-start gap-3"><span className="font-bold text-blue-600">3.</span> When the report is ready, the Access Report button will turn green and you will be able to click it in order to view the report.</li>
                            </ol>
                          ) : (
                            <div className="w-full font-medium">
                              We also offer a complete and open database of all previously generated reports. Simply search for the company you are interested in and find out if it&apos;s already been analyzed, if not, feel free to generate a new report.
                            </div>
                          )}
                        </div>
                      </div>
                    </BrowserMockup>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 pt-8 items-start justify-center">
                {currentTabData.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center w-full"
                  >
                    <BrowserMockup
                      src={img}
                      alt={currentTabData.title + ' ' + (idx+1)}
                      activeTab={activeTab} 
                      wide={true}
                    >
                      {/* Extension sheet for Tab 2 */}
                      <div className="relative w-full flex justify-center">
                        <div className="mt-[-1.25rem] rounded-b-2xl px-6 py-5 w-full bg-white flex flex-col items-start border-l border-r border-b border-gray-200">
                          <div className="w-full h-px bg-gray-200 mb-4"></div>
                          {activeTab === 2 ? (
                             <div className="w-full font-medium">
                             We leverage proprietary algorithms and advanced AI to collect and analyze data. Our unique Adamas methodology for technological due diligence applies specialized parameters and insights, ensuring every report is comprehensive, accurate, and tailored to your needs.
                           </div>
                          ) : (
                            <div className="w-full text-center">Informative extension for {idx === 0 ? 'left' : 'right'} mockup (Tab {activeTab})</div>
                          )}
                        </div>
                      </div>
                    </BrowserMockup>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformShow; 