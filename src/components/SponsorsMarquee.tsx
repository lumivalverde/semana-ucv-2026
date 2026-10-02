import React from 'react';
import { Tv, Newspaper, Radio, Film, Megaphone, Globe } from 'lucide-react';
import { SPONSORS } from '../data';

export const SponsorsMarquee: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'tv':
        return <Tv className="w-8 h-8 text-red-500" />;
      case 'newspaper':
        return <Newspaper className="w-8 h-8 text-red-500" />;
      case 'radio':
        return <Radio className="w-8 h-8 text-red-500" />;
      case 'film':
        return <Film className="w-8 h-8 text-red-500" />;
      case 'megaphone':
        return <Megaphone className="w-8 h-8 text-red-500" />;
      default:
        return <Globe className="w-8 h-8 text-red-500" />;
    }
  };

  // Duplicate items for continuous marquee loop
  const marqueeItems = [...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <section id="sponsors" className="py-16 bg-[#0A152E]/90 border-y border-[#1E3266]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Auspiciadores Oficiales & Aliados Mediáticos
        </span>
      </div>

      {/* Marquee with fade mask overlays */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left Fade Edge */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A152E] to-transparent z-10 pointer-events-none" />
        {/* Right Fade Edge */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A152E] to-transparent z-10 pointer-events-none" />

        {/* Endless Track */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-20 whitespace-nowrap py-4">
          {marqueeItems.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center gap-3 filter grayscale contrast-125 opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group shrink-0"
            >
              <div className="group-hover:scale-110 transition-transform">
                {getIcon(sponsor.icon)}
              </div>
              <div className="text-left">
                <span className="font-heading font-black text-xl text-white tracking-tighter block leading-none">
                  {sponsor.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block mt-0.5">
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
