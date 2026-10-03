import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { SPEAKERS } from '../data';
import { Speaker } from '../types';
import { SpeakerModal } from './SpeakerModal';

export const Speakers: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="ponentes" className="py-24 relative bg-[#030108] border-b border-[#7135F5]/20">
      {/* Background Section Accent Lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#7135F5]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-[#C6FF00] font-bold text-sm tracking-wider uppercase mb-2">
              Keynote Speakers
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white">
              Ponentes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B6CFF] to-[#C6FF00]">Clase Mundial</span>
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl text-base font-normal">
              Haz clic en cualquiera de nuestras figuras destacadas para desplegar su perfil
              completo, trayectoria y temas de ponencia.
            </p>
          </div>

          {/* Carousel Slider Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              id="speaker-prev"
              className="w-12 h-12 rounded-xl bg-[#090414] border border-[#7135F5]/50 text-white hover:bg-[#7135F5] hover:text-white hover:border-[#C6FF00] shadow-lg shadow-black transition-all flex items-center justify-center focus:outline-none cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={scrollRight}
              id="speaker-next"
              className="w-12 h-12 rounded-xl bg-[#090414] border border-[#7135F5]/50 text-white hover:bg-[#7135F5] hover:text-white hover:border-[#C6FF00] shadow-lg shadow-black transition-all flex items-center justify-center focus:outline-none cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Dynamic Carousel Track */}
        <div className="relative overflow-hidden rounded-2xl py-2">
          <div
            ref={trackRef}
            id="speakers-track"
            className="flex gap-6 transition-transform duration-500 ease-out no-scrollbar overflow-x-auto snap-x snap-mandatory pb-4"
          >
            {SPEAKERS.map((speaker) => (
              <div
                key={speaker.id}
                onClick={() => setSelectedSpeaker(speaker)}
                className="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-[#080312] rounded-3xl p-6 border border-[#7135F5]/40 glow-hover snap-start cursor-pointer flex flex-col justify-between group shadow-2xl shadow-black"
              >
                <div>
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-5 bg-[#030108] border border-[#7135F5]/30">
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-[#030108]/90 backdrop-blur-md border border-[#7135F5]/50 text-xs text-white px-2.5 py-1 rounded-full font-semibold flex items-center gap-1 shadow-md shadow-black">
                      <span>{speaker.flagEmoji || '📍'}</span>
                      <span>{speaker.country}</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-xl text-white group-hover:text-[#C6FF00] transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-[#9B6CFF] text-xs font-semibold uppercase tracking-wider mt-1">
                    {speaker.role}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">{speaker.company}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#7135F5]/25 flex items-center justify-between text-xs font-bold text-white">
                  <span className="text-slate-300 group-hover:text-[#C6FF00] transition-colors">
                    Ver Ponencia & Bio
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#7135F5]/25 flex items-center justify-center border border-[#7135F5] group-hover:bg-[#7135F5] group-hover:border-[#C6FF00] transition-colors shadow-sm">
                    <ArrowRight className="w-4 h-4 text-[#C6FF00]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Speaker Detail Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </section>
  );
};
