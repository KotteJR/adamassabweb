import Hero from './components/Hero';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import PlatformShow from './components/PlatformShow';

export default function LandingPage() {
  return (
    <main className="pt-24">
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <PlatformShow />
      {/* Add other sections here if any */}
    </main>
  );
} 