import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Speakers } from './components/Speakers';
import { Agenda } from './components/Agenda';
import { CampusMap } from './components/CampusMap';
import { CommunityTikTok } from './components/CommunityTikTok';
import { SponsorsMarquee } from './components/SponsorsMarquee';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';

export default function App() {
  // Closed by default so the registration modal does not pop up automatically on load
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      window.scrollTo(0, 0);
    };

    scrollToTop();

    window.addEventListener('load', scrollToTop);
    window.addEventListener('beforeunload', scrollToTop);

    return () => {
      window.removeEventListener('load', scrollToTop);
      window.removeEventListener('beforeunload', scrollToTop);
    };
  }, []);

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

        {/* Interactive 3D Campus Map */}
        <CampusMap />

        {/* Comunidad COM360 TikTok Feed Section */}
        <CommunityTikTok />

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
