import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020105] border-t border-[#7135F5]/30 pt-16 pb-12 text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#7135F5]/25">
          {/* UCV Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#7135F5] border border-[#9B6CFF] flex items-center justify-center font-heading font-black text-[#C6FF00] text-lg shadow-md shadow-[#7135F5]/40">
                UCV
              </div>
              <span className="font-heading font-black text-lg text-white leading-tight">
                UNIVERSIDAD CÉSAR VALLEJO
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Escuela Profesional de Ciencias de la Comunicación. Formando profesionales líderes e
              innovadores con valores, sentido humano y visión global.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-black text-white mb-4 tracking-wide text-sm">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-[#C6FF00] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#ponentes" className="hover:text-[#C6FF00] transition-colors">
                  Ponentes Invitados
                </a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-[#C6FF00] transition-colors">
                  Programa de Conferencias
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-[#C6FF00] transition-colors">
                  Aliados & Sponsors
                </a>
              </li>
            </ul>
          </div>

          {/* Campuses */}
          <div>
            <h4 className="font-heading font-black text-white mb-4 tracking-wide text-sm">
              Sedes Participantes
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]" />
                Campus Lima Norte
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]" />
                Campus Trujillo
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]" />
                Campus Piura
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]" />
                Campus Chiclayo & Chimbote
              </li>
            </ul>
          </div>

          {/* Connect & Social Icons */}
          <div>
            <h4 className="font-heading font-black text-white mb-4 tracking-wide text-sm">
              Comunidad Vallejiana
            </h4>
            <p className="text-xs text-slate-400 mb-4 font-normal">
              Comparte tu experiencia usando el hashtag oficial{' '}
              <span className="text-[#C6FF00] font-bold">#SemanaComunicadoresUCV</span>
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#090414] border border-[#7135F5]/50 text-white hover:text-[#111111] hover:bg-[#C6FF00] hover:border-[#C6FF00] transition-all flex items-center justify-center shadow-lg shadow-black cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#090414] border border-[#7135F5]/50 text-white hover:text-[#111111] hover:bg-[#C6FF00] hover:border-[#C6FF00] transition-all flex items-center justify-center shadow-lg shadow-black cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#090414] border border-[#7135F5]/50 text-white hover:text-[#111111] hover:bg-[#C6FF00] hover:border-[#C6FF00] transition-all flex items-center justify-center shadow-lg shadow-black cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2026 Universidad César Vallejo. Escuela Profesional de Ciencias de la Comunicación. Todos
            los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Términos & Condiciones
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Políticas de Privacidad
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
