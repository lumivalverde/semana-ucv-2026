import React from 'react';
import { Clock, Laptop, Sparkles, CheckCircle2 } from 'lucide-react';
import { WORKSHOPS } from '../data';

interface WorkshopsProps {
  onOpenRegister: () => void;
}

export const Workshops: React.FC<WorkshopsProps> = ({ onOpenRegister }) => {
  return (
    <section id="talleres" className="py-24 bg-[#050B18] border-t border-[#1E3266]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#D91B24] font-bold text-sm tracking-wider uppercase">
              Sesiones Prácticas
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-1">
              Talleres Especializados
            </h2>
          </div>
          <p className="text-slate-400 mt-3 md:mt-0 max-w-md text-sm">
            Cupos limitados por aula tecnológica con estaciones de trabajo individuales. Acceso
            reservado para asistentes registrados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WORKSHOPS.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-[#0A152E] rounded-2xl p-6 border border-[#1E3266] glow-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-3">
                  <span className="text-[#D91B24] tracking-wider">{workshop.category}</span>
                  <span className="bg-[#D91B24]/20 px-2.5 py-1 rounded text-[#D91B24] text-[10px] tracking-wider">
                    {workshop.vacancies}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2 leading-snug">
                  {workshop.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {workshop.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-[#1E3266]/60 flex items-center justify-between text-xs text-slate-300 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D91B24]" />
                    <span>{workshop.duration}</span>
                  </span>
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-blue-400" />
                    <span>{workshop.room}</span>
                  </span>
                </div>

                <button
                  onClick={onOpenRegister}
                  className="w-full py-2.5 px-4 bg-[#111F42] hover:bg-[#D91B24] hover:text-white text-slate-200 text-xs font-bold rounded-xl border border-[#1E3266] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Reservar Cupo en Taller</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
