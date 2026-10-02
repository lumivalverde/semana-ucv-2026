import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Play, Hourglass, ShieldCheck, Users } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    // Target date: October 19, 2026 09:00:00 AM (UTC-5 Lima)
    const targetDate = new Date('2026-10-19T09:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAgenda = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#agenda')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#050B18] via-[#0A152E] to-[#050B18]"
    >
      {/* Ambient decorative glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D91B24]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Event status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111F42] border border-[#D91B24]/40 text-[#D91B24] text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D91B24] animate-ping" />
              Congreso Internacional Académico 2026
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08]">
              Traspasando <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-[#D91B24] to-red-400">
                Fronteras Digitales
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              El evento cumbre y referente del periodismo, producción audiovisual, marketing y
              tecnologías de la comunicación. Cinco días intensivos con líderes de la industria
              global.
            </p>

            {/* Key Event Details Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111F42]/70 border border-[#1E3266]">
                <Calendar className="w-4 h-4 text-[#D91B24]" />
                <span>19 - 23 de Octubre, 2026</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111F42]/70 border border-[#1E3266]">
                <MapPin className="w-4 h-4 text-[#D91B24]" />
                <span>Campus UCV & Modalidad Híbrida</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenRegister}
                id="hero-register-btn"
                className="w-full sm:w-auto px-8 py-4 bg-[#D91B24] hover:bg-red-600 text-white font-bold rounded-xl shadow-xl shadow-[#D91B24]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Reserva tu Entrada</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={scrollToAgenda}
                id="hero-agenda-btn"
                className="w-full sm:w-auto px-8 py-4 bg-[#111F42] hover:bg-[#1E3266] text-white font-semibold rounded-xl border border-[#1E3266] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#D91B24] fill-current" />
                <span>Explorar Agenda</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Countdown Box */}
          <div className="lg:col-span-5">
            <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-[#1E3266]/80 shadow-2xl">
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-[#D91B24] text-white font-bold text-xs rounded-full uppercase tracking-wider shadow-md">
                Faltan Pocos Días
              </div>

              <h3 className="font-heading font-bold text-xl text-center text-white mb-6 flex items-center justify-center gap-2">
                <Hourglass className="w-5 h-5 text-[#D91B24]" />
                <span>Cuenta Regresiva al Evento</span>
              </h3>

              {/* Timer 4-columns */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                <div className="bg-[#050B18]/90 p-3 sm:p-4 rounded-2xl border border-[#1E3266]">
                  <span id="cd-days" className="font-heading font-black text-2xl sm:text-4xl text-white">
                    {timeLeft.days}
                  </span>
                  <span className="block text-[10px] sm:text-xs text-slate-400 font-medium uppercase mt-1">
                    Días
                  </span>
                </div>
                <div className="bg-[#050B18]/90 p-3 sm:p-4 rounded-2xl border border-[#1E3266]">
                  <span id="cd-hours" className="font-heading font-black text-2xl sm:text-4xl text-white">
                    {timeLeft.hours}
                  </span>
                  <span className="block text-[10px] sm:text-xs text-slate-400 font-medium uppercase mt-1">
                    Horas
                  </span>
                </div>
                <div className="bg-[#050B18]/90 p-3 sm:p-4 rounded-2xl border border-[#1E3266]">
                  <span id="cd-minutes" className="font-heading font-black text-2xl sm:text-4xl text-white">
                    {timeLeft.minutes}
                  </span>
                  <span className="block text-[10px] sm:text-xs text-slate-400 font-medium uppercase mt-1">
                    Minutos
                  </span>
                </div>
                <div className="bg-[#050B18]/90 p-3 sm:p-4 rounded-2xl border border-[#1E3266]">
                  <span id="cd-seconds" className="font-heading font-black text-2xl sm:text-4xl text-[#D91B24]">
                    {timeLeft.seconds}
                  </span>
                  <span className="block text-[10px] sm:text-xs text-slate-400 font-medium uppercase mt-1">
                    Seg
                  </span>
                </div>
              </div>

              {/* Bottom Badges */}
              <div className="mt-6 pt-6 border-t border-[#1E3266]/60 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Certificado Oficial UCV</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Aforo Limitado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
