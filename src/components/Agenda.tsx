import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { AGENDA_DATA } from '../data';

export const Agenda: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);

  const days = [
    { num: 1, label: 'Día 1: Lun 30 Nov' },
    { num: 2, label: 'Día 2: Mar 01 Dic' },
    { num: 3, label: 'Día 3: Mié 02 Dic' },
    { num: 4, label: 'Día 4: Jue 03 Dic' },
    { num: 5, label: 'Día 5: Vie 04 - Sáb 05 Dic' },
  ];

  const currentItems = AGENDA_DATA[activeDay] || [];

  return (
    <section id="agenda" className="py-24 bg-[#05020D] relative border-b border-[#7135F5]/20">
      {/* Background Accent Gradient */}
      <div className="absolute inset-0 bg-radial from-[#7135F5]/8 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C6FF00] font-bold text-sm tracking-wider uppercase">
            Cronograma del Congreso
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-2">
            Agenda Académica <span className="text-[#9B6CFF]">2026</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base font-normal">
            Explora las actividades programadas para los 5 días de conferencias magistrales, mesas de debate y sesiones plenarias.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {days.map((day) => {
            const isActive = activeDay === day.num;
            return (
              <button
                key={day.num}
                onClick={() => setActiveDay(day.num)}
                className={`px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg shadow-black ${
                  isActive
                    ? 'bg-[#C6FF00] text-black border-2 border-[#C6FF00] shadow-lg shadow-[#C6FF00]/25 scale-105 font-heading font-black'
                    : 'bg-[#090414] text-slate-200 hover:bg-[#C6FF00] hover:text-black border border-[#7135F5]/50 hover:border-[#C6FF00]'
                }`}
              >
                {day.label}
              </button>
            );
          })}
        </div>

        {/* Schedule Cards Container */}
        <div id="agenda-content" className="space-y-4 max-w-4xl mx-auto">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-[#080312] border border-[#7135F5]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#C6FF00] hover:bg-[#0E061E] transition-all group shadow-xl shadow-black"
            >
              <div className="flex items-start gap-4">
                <div className="px-3.5 py-2 rounded-xl bg-[#030108] text-[#C6FF00] font-mono font-bold text-sm border border-[#7135F5]/40 whitespace-nowrap flex items-center gap-1.5 shrink-0 shadow-inner">
                  <Clock className="w-4 h-4 text-[#C6FF00]" />
                  <span>{item.time}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-heading font-black text-lg text-white group-hover:text-[#C6FF00] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 flex items-center gap-2 font-medium">
                    <span>{item.speaker}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:self-center shrink-0">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#0E061E] text-[#9B6CFF] border border-[#7135F5]/35 flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#C6FF00]" />
                  {item.location}
                </span>
                {item.type && (
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg bg-[#7135F5]/20 text-[#C6FF00] border border-[#7135F5]/50">
                    {item.type}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
