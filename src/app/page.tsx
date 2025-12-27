import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import InventorySection from '@/components/InventorySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ReservationWidget from '@/components/ReservationWidget';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustSection />
      <InventorySection />
      <TestimonialsSection />
      <ReservationWidget />
      <CallToAction />
      <Footer />
    </main>
  );
}
