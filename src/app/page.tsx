import Hero from '@/components/Hero';
import InventorySection from '@/components/InventorySection';
import RequirementsSection from '@/components/RequirementsSection';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SectionDivider />
      <InventorySection />
      <SectionDivider />
      <RequirementsSection />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <TrustSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <CallToAction />
      <Footer />
    </main>
  );
}
