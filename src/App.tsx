import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Speakers } from './components/Speakers';
import { Agenda } from './components/Agenda';
import { Workshops } from './components/Workshops';
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
    <div className="min-h-screen bg-[#050B18] text-slate-100 font-sans selection:bg-[#D91B24] selection:text-white">
      {/* Navigation Header */}
      <Header onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Hero Section with Live Countdown */}
      <main>
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* Highlighted Congress Metrics */}
        <Stats />

        {/* Keynote Speakers Carousel & Details Modal */}
        <Speakers />

        {/* Academic Program Agenda by Days */}
        <Agenda />

        {/* Practical Workshops */}
        <Workshops onOpenRegister={() => setIsRegisterOpen(true)} />

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
