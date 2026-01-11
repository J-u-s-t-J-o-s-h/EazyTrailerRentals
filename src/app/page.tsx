import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import InventorySection from '@/components/InventorySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQ from '@/components/FAQ';
import ReservationWidget from '@/components/ReservationWidget';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <TrustSection />
      <SectionDivider />
      <InventorySection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <ReservationWidget />
      <SectionDivider />
      <CallToAction />
      <Footer />
    </main>
  );
}
