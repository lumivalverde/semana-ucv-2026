import React, { useEffect } from 'react';
import { X, Globe, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Speaker } from '../types';

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
}

export const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (speaker) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [speaker, onClose]);

  return (
    <AnimatePresence>
      {speaker && (
        <motion.div
          id="speaker-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-[#050B18]/80 backdrop-blur-xl"
        >
          {/* Floating Modal Container */}
          <motion.div
            id="modal-container"
            initial={{ opacity: 0, scale: 0.91, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 16 }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative glass-modal w-full max-w-4xl lg:max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl p-6 sm:p-8 md:p-10 border border-[#D91B24]/50 shadow-[0_0_60px_-15px_rgba(217,27,36,0.3)] z-10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              id="modal-close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-[#111F42] border border-[#1E3266] text-slate-300 hover:text-white hover:bg-[#D91B24] transition-colors flex items-center justify-center cursor-pointer z-20 shadow-md"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>

        {/* Modal Content Grid: Information on Left, Large Image on Right */}
        <div id="modal-content" className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Left Column: Speaker Information */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6 order-2 md:order-1 pr-0 md:pr-2">
            <div className="space-y-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#D91B24]/20 text-[#D91B24] px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-[#D91B24]/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  Keynote Speaker Internacional
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white mt-3 leading-tight">
                  {speaker.name}
                </h3>
                <p className="text-base text-slate-200 font-semibold mt-1">
                  {speaker.role} — <span className="text-[#D91B24]">{speaker.company}</span>
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#D91B24]" />
                  <span>
                    {speaker.flagEmoji} {speaker.country}
                  </span>
                </p>
              </div>

              {/* Keynote Topic Highlight */}
              <div className="p-5 rounded-2xl bg-[#050B18] border border-[#1E3266] space-y-2.5 shadow-inner">
                <div className="text-xs text-[#D91B24] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D91B24]" />
                  Tema de Exposición
                </div>
                <div className="text-base sm:text-lg font-bold text-white leading-snug">
                  {speaker.topic}
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-2 pt-1 border-t border-[#1E3266]/50 mt-2">
                  <Clock className="w-4 h-4 text-[#D91B24]" />
                  <span className="font-medium">{speaker.time}</span>
                </div>
              </div>

              {/* Professional Biography */}
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Biografía Profesional
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="pt-4 border-t border-[#1E3266] flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Semana de Comunicadores UCV 2026
              </span>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#D91B24] hover:bg-red-600 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-lg shadow-[#D91B24]/20 active:scale-95"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>

          {/* Right Column: Large Speaker Portrait Image */}
          <div className="md:col-span-5 order-1 md:order-2 flex flex-col justify-center">
            <div className="relative w-full h-80 sm:h-96 md:h-full min-h-[320px] md:min-h-[440px] rounded-3xl overflow-hidden border-2 border-[#D91B24] shadow-2xl shadow-[#D91B24]/20 group">
              <img
                src={speaker.photo}
                alt={speaker.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/90 via-transparent to-transparent pointer-events-none" />

              {/* Floating Country & Identity Badge */}
              <div className="absolute top-4 left-4 bg-[#050B18]/85 backdrop-blur-md border border-[#1E3266] text-xs text-white px-3 py-1.5 rounded-full font-semibold flex items-center gap-1.5 shadow-lg">
                <span className="text-base leading-none">{speaker.flagEmoji || '📍'}</span>
                <span>{speaker.country}</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-center sm:text-left">
                <div className="text-[11px] font-bold text-[#D91B24] uppercase tracking-widest bg-[#050B18]/90 py-1 px-3 rounded-lg border border-[#1E3266] inline-block shadow">
                  Ponente Destacado
                </div>
              </div>
            </div>
          </div>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
