import React from 'react';
import Hero from './components/Hero';
import Feature1 from './components/Feature1';
import PlatformShow from './components/PlatformShow';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';

// Renamed from LandingPage to avoid conflict when used in src/app/page.tsx
const LandingPageComponent = () => {
  return (
    <div>
      <Hero />
      <Feature1 />
      <Feature3 />
      <PlatformShow />
      <Feature2 />
      
    </div>
  );
};

export default LandingPageComponent; 