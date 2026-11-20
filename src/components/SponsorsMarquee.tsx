import React from 'react';
import aguasDelInca from '../assets/images/sponsors/aguas_del_inca.webp';
import apupal from '../assets/images/sponsors/apupal.webp';
import diamanteTv from '../assets/images/sponsors/diamante_tv.webp';
import edificaValle from '../assets/images/sponsors/edifica_valle.webp';
import eleveTravel from '../assets/images/sponsors/eleve_travel.webp';
import gmaMotors from '../assets/images/sponsors/gma_motors.webp';
import intimaBiansol from '../assets/images/sponsors/intima_biansol.webp';
import luckyMotos from '../assets/images/sponsors/lucky_motos.webp';
import maniaPorElFutbol from '../assets/images/sponsors/mania_por_el_futbol.webp';
import pasteleriaSraEva from '../assets/images/sponsors/pasteleria_sra_eva.webp';
import clinicaOncologicaImg from '../assets/images/sponsors/clinica_oncologica_peruana.webp';

interface SponsorItem {
  name: string;
  logo: string;
}

const SPONSOR_LOGOS: SponsorItem[] = [
  { name: 'Aguas del Inca', logo: aguasDelInca },
  { name: 'APUPAL - Asociación de Propietarios Las Palmeras', logo: apupal },
  { name: 'Diamante TV', logo: diamanteTv },
  { name: 'Edifica Valle', logo: edificaValle },
  { name: 'Eleve Travel', logo: eleveTravel },
  { name: 'GMA Motors', logo: gmaMotors },
  { name: 'Íntima Biansol Lencería', logo: intimaBiansol },
  { name: 'Lucky Motos', logo: luckyMotos },
  { name: 'Manía por el Fútbol', logo: maniaPorElFutbol },
  { name: 'Dulcería Sra. Eva', logo: pasteleriaSraEva },
  { name: 'Clínica Oncológica Peruana', logo: clinicaOncologicaImg },
];

export const SponsorsMarquee: React.FC = () => {
  const marqueeItems = [...SPONSOR_LOGOS, ...SPONSOR_LOGOS];

  return (
    <section
      id="sponsors"
      className="py-20 bg-[#04010A] border-b border-[#7135F5]/25 overflow-hidden relative shadow-2xl shadow-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
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

      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right edge fade masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#04010A] to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#04010A] to-transparent z-10"
        />

        <div className="animate-marquee items-center">
          {marqueeItems.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="mx-3 sm:mx-4 shrink-0 w-44 sm:w-56 h-28 sm:h-32 rounded-2xl bg-white border-2 border-white/90 hover:border-[#C6FF00] shadow-xl shadow-black/60 hover:shadow-[0_0_24px_rgba(198,255,0,0.28)] p-2.5 sm:p-3 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              title={sponsor.name}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                fetchPriority="high"
                decoding="sync"
                className="w-full h-full object-contain rounded-xl select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
