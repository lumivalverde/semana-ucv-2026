import React from 'react';

interface CountryFlagProps {
  country: string;
  className?: string;
}

const normalizeCountry = (name: string): string =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

export const CountryFlag: React.FC<CountryFlagProps> = ({
  country,
  className = 'w-4 h-3 rounded-[2px] shrink-0 overflow-hidden ring-1 ring-white/20',
}) => {
  const key = normalizeCountry(country);

  // Perú
  if (key.includes('peru')) {
    return (
      <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
        <rect width="1" height="2" x="0" fill="#D91023" />
        <rect width="1" height="2" x="1" fill="#FFFFFF" />
        <rect width="1" height="2" x="2" fill="#D91023" />
      </svg>
    );
  }

  // Colombia
  if (key.includes('colombia')) {
    return (
      <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
        <rect width="6" height="2" y="0" fill="#FCD116" />
        <rect width="6" height="1" y="2" fill="#003893" />
        <rect width="6" height="1" y="3" fill="#CE1126" />
      </svg>
    );
  }

  // México
  if (key.includes('mexico')) {
    return (
      <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
        <rect width="2" height="4" x="0" fill="#006847" />
        <rect width="2" height="4" x="2" fill="#FFFFFF" />
        <rect width="2" height="4" x="4" fill="#CE1126" />
        <circle cx="3" cy="2" r="0.45" fill="#8B5A2B" />
      </svg>
    );
  }

  // España
  if (key.includes('espana') || key.includes('spain')) {
    return (
      <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
        <rect width="6" height="1" y="0" fill="#AA151B" />
        <rect width="6" height="2" y="1" fill="#F1BF00" />
        <rect width="6" height="1" y="3" fill="#AA151B" />
        <rect width="0.6" height="0.8" x="1.2" y="1.6" fill="#AA151B" rx="0.15" />
      </svg>
    );
  }

  // Argentina
  if (key.includes('argentina')) {
    return (
      <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
        <rect width="6" height="1.33" y="0" fill="#74ACDF" />
        <rect width="6" height="1.34" y="1.33" fill="#FFFFFF" />
        <rect width="6" height="1.33" y="2.67" fill="#74ACDF" />
        <circle cx="3" cy="2" r="0.4" fill="#F6B40E" />
      </svg>
    );
  }

  // Chile
  if (key.includes('chile')) {
    return (
      <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
        <rect width="6" height="2" y="0" fill="#FFFFFF" />
        <rect width="6" height="2" y="2" fill="#D52B1E" />
        <rect width="2" height="2" x="0" y="0" fill="#0039A6" />
        <circle cx="1" cy="1" r="0.35" fill="#FFFFFF" />
      </svg>
    );
  }

  // Brasil
  if (key.includes('brasil') || key.includes('brazil')) {
    return (
      <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
        <rect width="6" height="4" fill="#009C3B" />
        <polygon points="3,0.4 5.4,2 3,3.6 0.6,2" fill="#FFDF00" />
        <circle cx="3" cy="2" r="0.85" fill="#002776" />
      </svg>
    );
  }

  // Ecuador
  if (key.includes('ecuador')) {
    return (
      <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
        <rect width="6" height="2" y="0" fill="#FFD100" />
        <rect width="6" height="1" y="2" fill="#0033A0" />
        <rect width="6" height="1" y="3" fill="#EF3340" />
        <circle cx="3" cy="2" r="0.35" fill="#8B5A2B" />
      </svg>
    );
  }

  // Bolivia
  if (key.includes('bolivia')) {
    return (
      <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
        <rect width="6" height="1.33" y="0" fill="#D52B1E" />
        <rect width="6" height="1.34" y="1.33" fill="#F9E300" />
        <rect width="6" height="1.33" y="2.67" fill="#007934" />
      </svg>
    );
  }

  // Venezuela
  if (key.includes('venezuela')) {
    return (
      <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
        <rect width="6" height="1.33" y="0" fill="#FFCC00" />
        <rect width="6" height="1.34" y="1.33" fill="#00247D" />
        <rect width="6" height="1.33" y="2.67" fill="#CF142B" />
      </svg>
    );
  }

  // Paraguay
  if (key.includes('paraguay')) {
    return (
      <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
        <rect width="6" height="1.33" y="0" fill="#D52B1E" />
        <rect width="6" height="1.34" y="1.33" fill="#FFFFFF" />
        <rect width="6" height="1.33" y="2.67" fill="#0038A8" />
      </svg>
    );
  }

  // Uruguay
  if (key.includes('uruguay')) {
    return (
      <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
        <rect width="6" height="4" fill="#FFFFFF" />
        <rect width="6" height="0.5" y="0.5" fill="#0038A8" />
        <rect width="6" height="0.5" y="1.5" fill="#0038A8" />
        <rect width="6" height="0.5" y="2.5" fill="#0038A8" />
        <rect width="6" height="0.5" y="3.5" fill="#0038A8" />
        <rect width="2.2" height="2.2" x="0" y="0" fill="#FFFFFF" />
        <circle cx="1.1" cy="1.1" r="0.55" fill="#FCD116" />
      </svg>
    );
  }

  // Estados Unidos / USA
  if (key.includes('estados unidos') || key === 'usa' || key.includes('ee.uu') || key.includes('united states')) {
    return (
      <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
        <rect width="6" height="4" fill="#FFFFFF" />
        <rect width="6" height="0.57" y="0" fill="#B22234" />
        <rect width="6" height="0.57" y="1.14" fill="#B22234" />
        <rect width="6" height="0.57" y="2.28" fill="#B22234" />
        <rect width="6" height="0.57" y="3.43" fill="#B22234" />
        <rect width="2.6" height="2.1" x="0" y="0" fill="#3C3B6E" />
      </svg>
    );
  }

  // Fallback globe icon for any other country
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="#C6FF00" strokeWidth="1.5" />
      <ellipse cx="8" cy="8" rx="3.2" ry="7" stroke="#C6FF00" strokeWidth="1.2" />
      <line x1="1" y1="8" x2="15" y2="8" stroke="#C6FF00" strokeWidth="1.2" />
    </svg>
  );
};
