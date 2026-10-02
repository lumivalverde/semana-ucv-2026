import React from 'react';
import { Globe, Video, Share2, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050B18] border-t border-[#1E3266]/80 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#1E3266]/60">
          {/* UCV Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#D91B24] flex items-center justify-center font-heading font-black text-white text-lg shadow-md shadow-[#D91B24]/30">
                UCV
              </div>
              <span className="font-heading font-bold text-lg text-white leading-tight">
                UNIVERSIDAD CÉSAR VALLEJO
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Escuela Profesional de Ciencias de la Comunicación. Formando profesionales líderes e
              innovadores con valores, sentido humano y visión global.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 tracking-wide text-sm">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#D91B24] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#ponentes" className="hover:text-[#D91B24] transition-colors">
                  Ponentes Invitados
                </a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-[#D91B24] transition-colors">
                  Programa de Conferencias
                </a>
              </li>
              <li>
                <a href="#talleres" className="hover:text-[#D91B24] transition-colors">
                  Talleres Prácticos
                </a>
              </li>
            </ul>
          </div>

          {/* Campuses */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 tracking-wide text-sm">
              Sedes Participantes
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D91B24]" />
                Campus Lima Norte
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D91B24]" />
                Campus Trujillo
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D91B24]" />
                Campus Piura
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Transmisión Global Online
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 tracking-wide text-sm">
              Canales Oficiales
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Síguenos para transmisiones en vivo y coberturas en tiempo real.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#111F42] border border-[#1E3266] text-slate-300 hover:text-white hover:bg-[#D91B24] hover:border-[#D91B24] transition-all flex items-center justify-center shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#111F42] border border-[#1E3266] text-slate-300 hover:text-white hover:bg-[#D91B24] hover:border-[#D91B24] transition-all flex items-center justify-center shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#111F42] border border-[#1E3266] text-slate-300 hover:text-white hover:bg-[#D91B24] hover:border-[#D91B24] transition-all flex items-center justify-center shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal and Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; 2026 Universidad César Vallejo - Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">
            Semana de Comunicadores 2026 | Escuela de Ciencias de la Comunicación
          </p>
        </div>
      </div>
    </footer>
  );
};
