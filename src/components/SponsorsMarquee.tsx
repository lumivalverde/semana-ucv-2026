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

      {/* Coming Soon Placeholder for Sponsors */}
      <div className="max-w-2xl mx-auto px-4 text-center py-6">
        <div className="p-8 rounded-3xl bg-[#090414] border border-[#7135F5]/30 shadow-2xl shadow-black flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-[#7135F5]/20 border border-[#7135F5]/50 flex items-center justify-center mb-4">
            <span className="w-3 h-3 rounded-full bg-[#C6FF00] animate-ping" />
          </div>
          <h4 className="font-heading font-black text-lg text-white mb-2">
            Próximamente
          </h4>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Estamos confirmando las marcas y alianzas estratégicas que formarán parte de COM360 2026.
          </p>
        </div>
      </div>
    </section>
  );
};
