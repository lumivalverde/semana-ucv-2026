import React, { useState } from 'react';
import { Clock, User, MapPin, Sparkles } from 'lucide-react';
import { AGENDA_DATA } from '../data';

export const Agenda: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);

  const days = [
    { num: 1, label: 'Día 1: Lunes 19' },
    { num: 2, label: 'Día 2: Martes 20' },
    { num: 3, label: 'Día 3: Miércoles 21' },
    { num: 4, label: 'Día 4: Jueves 22' },
    { num: 5, label: 'Día 5: Viernes 23' },
  ];

  const currentItems = AGENDA_DATA[activeDay] || [];

  return (
    <section id="agenda" className="py-24 bg-[#0A152E] relative border-t border-[#1E3266]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D91B24] font-bold text-sm tracking-wider uppercase">
            Cronograma del Congreso
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-2">
            Agenda Académica 2026
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Explora las actividades programadas para los 5 días de conferencias magistrales, paneles de debate y talleres de especialización.
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
                className={`px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#D91B24] text-white shadow-lg shadow-[#D91B24]/25 scale-105'
                    : 'bg-[#111F42] text-slate-300 hover:bg-[#1E3266] border border-[#1E3266]'
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
              className="p-5 rounded-2xl bg-[#050B18] border border-[#1E3266]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#D91B24]/60 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="px-3.5 py-2 rounded-xl bg-[#111F42] text-[#D91B24] font-mono font-bold text-sm border border-[#1E3266] whitespace-nowrap flex items-center gap-1.5 shrink-0">
                  <Clock className="w-4 h-4 text-[#D91B24]" />
                  <span>{item.time}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-heading font-bold text-lg text-white group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#D91B24]" />
                    <span>{item.speaker}</span>
                  </p>
                </div>
              </div>
              <div className="text-xs text-slate-300 font-medium sm:text-right bg-[#111F42]/60 px-3.5 py-1.5 rounded-lg border border-[#1E3266] w-fit sm:shrink-0 flex items-center gap-1.5 self-start sm:self-center">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
