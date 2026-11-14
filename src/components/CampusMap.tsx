import React, { useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import croquisUcvImg from '../assets/images/croquis-ucv.webp';

interface HotspotItem {
  id: string;
  top: string;
  left: string;
  color: 'azul' | 'rosa' | 'verde' | 'naranja' | 'rojo' | 'amarillo';
  badge: string;
  title: string;
  description: string;
}

const CAMPUS_HOTSPOTS: HotspotItem[] = [
  {
    id: 'pabellon-c',
    top: '32.8%',
    left: '32.3%',
    color: 'azul',
    badge: 'Pabellón C (4)',
    title: 'Aulas y Talleres',
    description: 'Sesiones paralelas y workshops.',
  },
  {
    id: 'pabellon-d',
    top: '55.8%',
    left: '59.5%',
    color: 'rosa',
    badge: 'Pabellón D (5)',
    title: 'Zona Académica',
    description: 'Actividades y exposiciones de carrera.',
  },
  {
    id: 'pabellon-b',
    top: '34.4%',
    left: '67.1%',
    color: 'verde',
    badge: 'Pabellón B (7)',
    title: 'Salas de Ponencias',
    description: 'Mesas redondas y conversatorios.',
  },
  {
    id: 'pabellon-a',
    top: '28.6%',
    left: '53.6%',
    color: 'verde',
    badge: 'Pabellón A (8)',
    title: 'Pabellón Principal',
    description: 'Aulas y laboratorios de comunicación.',
  },
  {
    id: 'pabellon-e',
    top: '24.8%',
    left: '74.6%',
    color: 'naranja',
    badge: 'Pabellón E (11)',
    title: 'Zona de Talleres',
    description: 'Espacios de producción y networking.',
  },
  {
    id: 'auditorio-magnum',
    top: '12.6%',
    left: '71.0%',
    color: 'rojo',
    badge: 'Auditorio Magnum (12)',
    title: 'Ponencia Magistral',
    description: 'Charlas centrales e inauguración.',
  },
  {
    id: 'auditorio-caynas',
    top: '13.6%',
    left: '83.3%',
    color: 'rosa',
    badge: 'Auditorio Los Caynas (13)',
    title: 'Panel de Invitados',
    description: 'Conversatorios y ponencias especiales.',
  },
  {
    id: 'google-lab',
    top: '50.0%',
    left: '41.8%',
    color: 'amarillo',
    badge: 'Google Lab (16)',
    title: 'Laboratorio Digital',
    description: 'Talleres de innovación, IA y medios.',
  },
];

export const CampusMap: React.FC = () => {
  const croquisRef = useRef<HTMLDivElement>(null);
  const brilloRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const croquis = croquisRef.current;
    const brillo = brilloRef.current;
    if (!croquis || !brillo) return;

    const rect = croquis.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotarX = (y / rect.height - 0.5) * -10;
    const rotarY = (x / rect.width - 0.5) * 10;
    croquis.style.transform = `rotateX(${rotarX}deg) rotateY(${rotarY}deg)`;

    const porcX = (x / rect.width) * 100;
    const porcY = (y / rect.height) * 100;
    brillo.style.background = `radial-gradient(circle at ${porcX}% ${porcY}%, rgba(255,255,255,0.22), transparent 60%)`;
  };

  const handleMouseLeave = () => {
    if (croquisRef.current) {
      croquisRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <section id="campus" className="py-24 bg-[#04010A] relative border-b border-[#7135F5]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#C6FF00] font-bold text-sm tracking-wider uppercase inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Mapa de Ambientes
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-2">
            Croquis Interactivo del <span className="text-[#9B6CFF]">Campus UCV</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base font-normal">
            Pasa el cursor o toca los puntos interactivos sobre el mapa para ubicar cada auditorio, pabellón y laboratorio de la jornada.
          </p>
        </div>

        <div className="escena-campus">
          <div
            ref={croquisRef}
            className="mapa-3d"
            id="croquisInteractivo"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Reflejo dinámico al mover el cursor */}
            <div
              ref={brilloRef}
              className="brillo-mouse"
              id="brillo"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18), transparent 60%)',
              }}
            />

            {/* Imagen panorámica del campus */}
            <img
              src={croquisUcvImg}
              alt="Croquis Campus UCV"
              className="img-campus select-none"
              fetchPriority="high"
            />

            {/* Puntos interactivos del campus */}
            {CAMPUS_HOTSPOTS.map((spot) => (
              <div
                key={spot.id}
                className={`hotspot ${activeId === spot.id ? 'activo' : ''}`}
                style={{ top: spot.top, left: spot.left }}
                tabIndex={0}
                role="button"
                aria-label={`${spot.badge}: ${spot.title}`}
                onClick={() => setActiveId(activeId === spot.id ? null : spot.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveId(activeId === spot.id ? null : spot.id);
                  }
                }}
              >
                <span className={`pulso ${spot.color}`} />
                <div className="tarjeta-info">
                  <span className={`badge ${spot.color}`}>{spot.badge}</span>
                  <h4>{spot.title}</h4>
                  <p>{spot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
