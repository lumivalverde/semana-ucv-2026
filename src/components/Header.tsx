import React, { useState, useEffect } from 'react';
import { Ticket, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Ponentes', href: '#ponentes' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Talleres', href: '#talleres' },
    { name: 'Sponsors', href: '#sponsors' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050B18]/90 backdrop-blur-xl border-b border-[#1E3266]/70 shadow-xl shadow-black/40'
          : 'bg-[#0A152E]/70 backdrop-blur-md border-b border-[#1E3266]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo UCV */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-3 group focus:outline-none"
            id="brand-logo-link"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D91B24] to-[#990008] flex items-center justify-center font-heading font-black text-white text-xl shadow-lg shadow-[#D91B24]/30 group-hover:scale-105 transition-transform">
              UCV
            </div>
            <div>
              <div className="font-heading font-bold text-lg tracking-tight text-white leading-none">
                SEMANA DE <span className="text-[#D91B24]">COMUNICADORES</span>
              </div>
              <div className="text-xs text-slate-400 font-semibold tracking-widest uppercase mt-1">
                Vallejo 2026
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links (aligned to the right) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium ml-auto" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-[#D91B24] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D91B24] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#0A152E] text-slate-300 hover:text-white border border-[#1E3266] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#0A152E] border-b border-[#1E3266] px-4 pt-3 pb-6 space-y-3 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2.5 rounded-lg text-slate-200 hover:bg-[#111F42] hover:text-[#D91B24] font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              id="mobile-register-btn"
              className="flex items-center justify-center w-full py-3 bg-[#D91B24] text-white font-bold rounded-xl shadow-md hover:bg-red-600 transition-colors"
            >
              <Ticket className="w-4 h-4 mr-2" />
              <span>Inscribirme Ahora</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
