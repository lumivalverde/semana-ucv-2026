import React, { useEffect, useState } from 'react';

const DURATION_MS = 3500;
const FADE_DURATION_MS = 650;

const WAVE_BARS = [
  { height: 'h-4', color: 'bg-[#a855f7]', delay: '[animation-delay:0ms]' },
  { height: 'h-7', color: 'bg-[#3b82f6]', delay: '[animation-delay:110ms]' },
  { height: 'h-5', color: 'bg-[#a855f7]', delay: '[animation-delay:220ms]' },
  { height: 'h-9', color: 'bg-[#facc15]', delay: '[animation-delay:330ms]' },
  { height: 'h-6', color: 'bg-[#3b82f6]', delay: '[animation-delay:160ms]' },
  { height: 'h-10', color: 'bg-[#a855f7]', delay: '[animation-delay:60ms]' },
  { height: 'h-6', color: 'bg-[#3b82f6]', delay: '[animation-delay:260ms]' },
  { height: 'h-9', color: 'bg-[#facc15]', delay: '[animation-delay:380ms]' },
  { height: 'h-5', color: 'bg-[#a855f7]', delay: '[animation-delay:140ms]' },
  { height: 'h-7', color: 'bg-[#3b82f6]', delay: '[animation-delay:290ms]' },
  { height: 'h-4', color: 'bg-[#a855f7]', delay: '[animation-delay:90ms]' },
];

const getStatusMessage = (progress: number): string => {
  if (progress < 28) return 'Sintonizando señal COM360...';
  if (progress < 62) return 'Cargando 18+ expositores...';
  if (progress < 92) return 'Preparando agenda y conferencias...';
  return '¡Listo para comenzar!';
};

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;

    // Bloquear scroll tanto en escritorio como en móvil mientras el preloader está activo
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    let animationFrameId = 0;
    let holdTimerId: number | undefined;
    let hideTimerId: number | undefined;
    const startTime = performance.now();

    const restoreScrollAndResetPosition = () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const ratio = Math.min(elapsed / DURATION_MS, 1);
      const nextProgress = Math.round(ratio * 100);
      setProgress(nextProgress);

      if (ratio < 1) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        holdTimerId = window.setTimeout(() => {
          restoreScrollAndResetPosition();
          setIsFadingOut(true);

          hideTimerId = window.setTimeout(() => {
            window.scrollTo(0, 0);
            setIsHidden(true);
          }, FADE_DURATION_MS);
        }, 120);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (holdTimerId !== undefined) window.clearTimeout(holdTimerId);
      if (hideTimerId !== undefined) window.clearTimeout(hideTimerId);
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, []);

  const statusMessage = getStatusMessage(progress);

  return (
    <div
      id="com360-preloader"
      role="status"
      aria-live="polite"
      aria-hidden={isHidden}
      className={`fixed inset-0 w-[100vw] h-[100dvh] z-[9999] flex flex-col items-center justify-center px-4 bg-gradient-to-br from-[#050a18] via-[#091024] to-[#0f172a] select-none transition-opacity duration-700 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${isHidden ? 'invisible pointer-events-none' : 'visible'}`}
    >
      {/* Cuadrícula tecnológica sutil */}
      <div className="absolute inset-0 preloader-grid opacity-80 pointer-events-none" />

      {/* Resplandor ambiental morado en el centro */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[460px] sm:h-[460px] rounded-full bg-[#a855f7]/20 blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-[#3b82f6]/15 blur-[80px] pointer-events-none" />

      {/* Contenedor central */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Núcleo central adaptable con anillos giratorios */}
        <div className="relative w-44 h-44 sm:w-64 sm:h-64 flex items-center justify-center">
          {/* Anillo exterior morado vibrante */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#a855f7] border-r-[#a855f7]/45 shadow-[0_0_24px_rgba(168,85,247,0.35)] preloader-ring-outer" />

          {/* Anillo medio azul eléctrico */}
          <div className="absolute inset-2.5 sm:inset-3.5 rounded-full border-2 border-transparent border-b-[#3b82f6] border-l-[#3b82f6]/50 shadow-[0_0_20px_rgba(59,130,246,0.28)] preloader-ring-middle" />

          {/* Anillo interior con acento dorado */}
          <div className="absolute inset-5 sm:inset-7 rounded-full border border-dashed border-[#facc15]/65 preloader-ring-inner" />

          {/* Núcleo oscuro interno mostrando únicamente COM360 */}
          <div className="relative z-10 w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-[#050a18]/85 backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.22)] flex items-center justify-center">
            <div className="font-heading font-black text-[30px] sm:text-[44px] tracking-tight leading-none">
              <span className="text-white">COM</span>
              <span className="bg-gradient-to-r from-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent">
                360
              </span>
            </div>
          </div>
        </div>

        {/* Ondas de señal audiovisual debajo */}
        <div
          aria-hidden="true"
          className="mt-5 sm:mt-7 flex items-center justify-center gap-1.5 h-8 sm:h-10"
        >
          {WAVE_BARS.map((bar, idx) => (
            <span
              key={idx}
              className={`w-1 sm:w-1.5 rounded-full ${bar.height} ${bar.color} ${bar.delay} preloader-wave-bar shadow-[0_0_10px_rgba(168,85,247,0.35)]`}
            />
          ))}
        </div>

        {/* Barra de progreso, porcentaje y mensaje dinámico */}
        <div className="mt-5 sm:mt-7 w-[min(360px,85vw)] flex flex-col gap-2.5">
          <div className="w-full h-2 sm:h-2.5 rounded-full bg-slate-900/90 border border-white/10 overflow-hidden shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#facc15] shadow-[0_0_16px_rgba(168,85,247,0.65)] transition-[width] duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] sm:text-sm font-medium text-slate-200 whitespace-nowrap truncate">
              {statusMessage}
            </span>
            <span className="text-xs sm:text-sm font-mono font-bold text-[#facc15] tabular-nums shrink-0">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
