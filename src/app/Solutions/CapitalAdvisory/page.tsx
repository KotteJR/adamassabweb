import Hero from './components/hero';
import ContentBlocks from './components/ContentBlocks';
import CTA from '../../Solutions/DueDiligence/components/CTA';

export default function CapitalAdvisoryPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ContentBlocks />
      <CTA />
    </main>
  );
}