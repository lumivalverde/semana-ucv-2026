import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Speakers } from './components/Speakers';
import { Agenda } from './components/Agenda';
import { SponsorsMarquee } from './components/SponsorsMarquee';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';

export default function App() {
  // Opens automatically when entering the page so users can register immediately
  const [isRegisterOpen, setIsRegisterOpen] = useState(true);

  const handleRegistrationSuccess = (_fullName: string) => {
    // Registered successfully
  };

  return (
    <div className="min-h-screen bg-[#030108] text-white font-sans selection:bg-[#C6FF00] selection:text-[#111111]">
      {/* Navigation Header */}
      <Header onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Hero Section with Live Countdown */}
      <main className="divide-y divide-[#7135F5]/20">
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* Highlighted Congress Metrics */}
        <Stats />

        {/* Keynote Speakers Carousel & Details Modal */}
        <Speakers />

        {/* Academic Program Agenda by Days */}
        <Agenda />

        {/* Sponsors & Media Partners Marquee */}
        <SponsorsMarquee />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Registration Modal Dialog */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSuccess={handleRegistrationSuccess}
      />
    </div>
  );
}
