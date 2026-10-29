import React from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { B2BSection } from '@/components/landing/B2BSection';
import { Footer } from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2D3142]">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <B2BSection />
      </main>
      <Footer />
    </div>
  );
}