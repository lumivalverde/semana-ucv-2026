import React from 'react';
import elPeruano from '../assets/images/sponsors/el_peruano.png';
import andina from '../assets/images/sponsors/andina.png';
import experienciaAmerica from '../assets/images/sponsors/experiencia_america.png';
import apepo from '../assets/images/sponsors/apepo.png';
import laParlante from '../assets/images/sponsors/la_parlante.png';
import macondo from '../assets/images/sponsors/macondo.png';
import atomica from '../assets/images/sponsors/atomica.png';
import caricatoons from '../assets/images/sponsors/caricatoons.png';

interface SponsorItem {
  name: string;
  logo: string;
}

const SPONSOR_LOGOS: SponsorItem[] = [
  { name: 'El Peruano', logo: elPeruano },
  { name: 'Andina', logo: andina },
  { name: 'Experiencia América', logo: experienciaAmerica },
  { name: 'APEPO', logo: apepo },
  { name: 'La Parlante', logo: laParlante },
  { name: 'Macondo Comunicaciones', logo: macondo },
  { name: 'Atomica', logo: atomica },
  { name: 'Caricatoons', logo: caricatoons },
];

export const SponsorsMarquee: React.FC = () => {
  // Multiply items for an uninterrupted continuous looping marquee
  const marqueeItems = [
    ...SPONSOR_LOGOS,
    ...SPONSOR_LOGOS,
    ...SPONSOR_LOGOS,
    ...SPONSOR_LOGOS,
  ];

  return (
    <section
      id="sponsors"
      className="py-20 bg-[#04010A] border-b border-[#7135F5]/25 overflow-hidden relative shadow-2xl shadow-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-widest inline-block px-3 py-1 rounded-full bg-[#7135F5]/15 border border-[#7135F5]/40 mb-3">
          Alianzas Estratégicas
        </span>
        <h3 className="font-heading font-black text-2xl sm:text-4xl text-white">
          Auspiciadores Oficiales & Aliados Mediáticos
        </h3>
        <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
          Marcas y medios aliados que impulsan la edición 2026.
        </p>
      </div>

      {/* Marquee with fade mask overlays */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        {/* Left Fade Edge */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#04010A] to-transparent z-10 pointer-events-none" />
        {/* Right Fade Edge */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#04010A] to-transparent z-10 pointer-events-none" />

        {/* Endless Moving Track */}
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap py-3 cursor-pointer">
          {marqueeItems.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex items-center justify-center w-52 sm:w-60 h-28 sm:h-32 px-5 py-4 rounded-2xl bg-white border-2 border-white/90 hover:border-[#C6FF00] shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(198,255,0,0.25)] hover:scale-105 transition-all duration-300 group shrink-0"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-16 sm:max-h-20 w-auto max-w-full object-contain select-none group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
