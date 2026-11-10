import React from 'react';
import { Instagram } from 'lucide-react';

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

          {/* Empty spacer column to preserve grid positioning for surrounding elements */}
          <div aria-hidden="true" className="hidden md:block" />

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
                href="https://www.instagram.com/c0m_360?srtk=YXlkcHJ1ZnppNzRu"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#090414] border border-[#7135F5]/50 text-white hover:text-[#111111] hover:bg-[#C6FF00] hover:border-[#C6FF00] transition-all flex items-center justify-center shadow-lg shadow-black cursor-pointer group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://www.tiktok.com/@comm3600?_r=1&_t=ZS-9BHHSwmHvIy"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#090414] border border-[#7135F5]/50 text-white hover:text-[#111111] hover:bg-[#C6FF00] hover:border-[#C6FF00] transition-all flex items-center justify-center shadow-lg shadow-black cursor-pointer group"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.93-4.48V8.78a8.19 8.19 0 0 0 4.84 1.57v-3.5a4.83 4.83 0 0 1-1-.16z" />
                </svg>
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
