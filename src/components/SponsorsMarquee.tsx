import React from 'react';
import { Tv, Newspaper, Radio, Film, Megaphone, Globe } from 'lucide-react';
import { SPONSORS } from '../data';

export const SponsorsMarquee: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'tv':
        return <Tv className="w-8 h-8 text-[#C6FF00]" />;
      case 'newspaper':
        return <Newspaper className="w-8 h-8 text-[#C6FF00]" />;
      case 'radio':
        return <Radio className="w-8 h-8 text-[#C6FF00]" />;
      case 'film':
        return <Film className="w-8 h-8 text-[#C6FF00]" />;
      case 'megaphone':
        return <Megaphone className="w-8 h-8 text-[#C6FF00]" />;
      default:
        return <Globe className="w-8 h-8 text-[#C6FF00]" />;
    }
  };

  // Duplicate items for continuous marquee loop
  const marqueeItems = [...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <section id="sponsors" className="py-20 bg-[#04010A] border-b border-[#7135F5]/25 overflow-hidden relative shadow-2xl shadow-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-widest">
          Auspiciadores Oficiales & Aliados Mediáticos
        </span>
      </div>

      {/* Marquee with fade mask overlays */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left Fade Edge */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#04010A] to-transparent z-10 pointer-events-none" />
        {/* Right Fade Edge */}
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#04010A] to-transparent z-10 pointer-events-none" />

        {/* Endless Track */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-20 whitespace-nowrap py-4">
          {marqueeItems.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-[#090414] border border-[#7135F5]/35 opacity-80 hover:opacity-100 hover:border-[#C6FF00] hover:bg-[#110724] transition-all cursor-pointer group shrink-0 shadow-lg shadow-black"
            >
              <div className="group-hover:scale-110 transition-transform">
                {getIcon(sponsor.icon)}
              </div>
              <div className="text-left">
                <span className="font-heading font-black text-xl text-white tracking-tight block leading-none">
                  {sponsor.name}
                </span>
                <span className="text-[10px] text-[#9B6CFF] font-semibold uppercase tracking-wider block mt-1">
                  {sponsor.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
