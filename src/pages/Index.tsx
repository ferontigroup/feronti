import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import WhatWeDoSection from '@/components/landing/WhatWeDoSection';
import HowWeHelpSection from '@/components/landing/HowWeHelpSection';
import OurWaySection from '@/components/landing/OurWaySection';
import ApproachSection from '@/components/landing/ApproachSection';
import ForWhoSection from '@/components/landing/ForWhoSection';
import PositionSection from '@/components/landing/PositionSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <HowWeHelpSection />
        <OurWaySection />
        <ApproachSection />
        <ForWhoSection />
        <PositionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
