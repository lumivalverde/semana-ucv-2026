import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Play, Hourglass, ShieldCheck, Users } from 'lucide-react';
import isotipoImg from '../assets/images/ISOTIPO.png';

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
    // Target date: November 30, 2026 09:00:00 AM (UTC-5 Lima)
    const targetDate = new Date('2026-11-30T09:00:00').getTime();

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
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#030108] via-[#090414] to-[#030108]"
    >
      {/* Ambient decorative glow orbs in deep violet */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#7135F5]/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#9B6CFF]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#7135F5]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Event status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C061A] border border-[#7135F5]/60 text-[#C6FF00] text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md shadow-black">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF00] animate-ping" />
              SEMANA DE LA COMUNICACIÓN 2026
            </div>

            {/* Isotipo original tal cual fue subido por el usuario */}
            <div className="flex flex-col items-center lg:items-start pt-1 pb-1">
              <div className="relative group inline-block max-w-full">
                <img
                  src={isotipoImg}
                  alt="Isotipo Semana de Comunicadores UCV 2026"
                  className="w-72 sm:w-96 md:w-[460px] max-w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(113,53,245,0.4)] transition-transform duration-500 group-hover:scale-105 select-none"
                  loading="eager"
                />
              </div>
            </div>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              El evento cumbre y referente del periodismo, producción audiovisual, marketing y
              tecnologías de la comunicación. Cinco días intensivos con líderes de la industria
              global.
            </p>

            {/* Key Event Details Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-white font-medium">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#090414] border border-[#7135F5]/40 shadow-md shadow-black">
                <Calendar className="w-4 h-4 text-[#C6FF00]" />
                <span className="text-slate-200">30 de Nov al 5 de Dic 2026</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#090414] border border-[#7135F5]/40 shadow-md shadow-black">
                <MapPin className="w-4 h-4 text-[#C6FF00]" />
                <span className="text-slate-200">Campus UCV - Los Olivos</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenRegister}
                id="hero-register-btn"
                className="w-full sm:w-auto px-8 py-4 bg-[#C6FF00] hover:bg-[#b0e600] text-black font-heading font-black text-base uppercase rounded-xl border-2 border-[#C6FF00] shadow-2xl shadow-[#C6FF00]/25 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Reserva tu Entrada</span>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToAgenda}
                id="hero-agenda-btn"
                className="w-full sm:w-auto px-8 py-4 bg-[#090414] hover:bg-[#C6FF00] text-white hover:text-black font-heading font-bold text-base uppercase rounded-xl border border-[#7135F5]/60 hover:border-[#C6FF00] shadow-lg shadow-black hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Play className="w-4 h-4 text-[#C6FF00] group-hover:text-black fill-current transition-colors" />
                <span>Explorar Agenda</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Countdown Box */}
          <div className="lg:col-span-5">
            <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-[#7135F5]/50 shadow-2xl shadow-black bg-[#080312]/90">
              <div className="absolute -top-3 -right-3 px-3.5 py-1.5 bg-[#C6FF00] text-[#111111] font-heading font-black text-xs rounded-full uppercase tracking-wider shadow-lg shadow-black">
                Faltan Pocos Días
              </div>

              <h3 className="font-heading font-black text-xl text-center text-white mb-6 flex items-center justify-center gap-2">
                <Hourglass className="w-5 h-5 text-[#C6FF00]" />
                <span>Cuenta Regresiva al Evento</span>
              </h3>

              {/* Timer 4-columns */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                <div className="bg-[#030108] p-3 sm:p-4 rounded-2xl border border-[#7135F5]/30 shadow-inner">
                  <span id="cd-days" className="font-heading font-black text-2xl sm:text-4xl text-white">
                    {timeLeft.days}
                  </span>
                  <span className="block text-[10px] sm:text-xs text-[#9B6CFF] font-semibold uppercase mt-1">
                    Días
                  </span>
                </div>
                <div className="bg-[#030108] p-3 sm:p-4 rounded-2xl border border-[#7135F5]/30 shadow-inner">
                  <span id="cd-hours" className="font-heading font-black text-2xl sm:text-4xl text-white">
                    {timeLeft.hours}
                  </span>
                  <span className="block text-[10px] sm:text-xs text-[#9B6CFF] font-semibold uppercase mt-1">
                    Horas
                  </span>
                </div>
                <div className="bg-[#030108] p-3 sm:p-4 rounded-2xl border border-[#7135F5]/30 shadow-inner">
                  <span id="cd-minutes" className="font-heading font-black text-2xl sm:text-4xl text-white">
                    {timeLeft.minutes}
                  </span>
                  <span className="block text-[10px] sm:text-xs text-[#9B6CFF] font-semibold uppercase mt-1">
                    Minutos
                  </span>
                </div>
                <div className="bg-[#030108] p-3 sm:p-4 rounded-2xl border border-[#7135F5]/30 shadow-inner">
                  <span id="cd-seconds" className="font-heading font-black text-2xl sm:text-4xl text-[#C6FF00]">
                    {timeLeft.seconds}
                  </span>
                  <span className="block text-[10px] sm:text-xs text-[#C6FF00] font-semibold uppercase mt-1">
                    Seg
                  </span>
                </div>
              </div>

              {/* Bottom Badges */}
              <div className="mt-6 pt-6 border-t border-[#7135F5]/30 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C6FF00]" />
                  <span>Certificado Oficial UCV</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#9B6CFF]" />
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
