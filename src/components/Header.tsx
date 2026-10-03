import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
          ? 'bg-[#030108]/95 backdrop-blur-xl border-b border-[#7135F5]/30 shadow-2xl shadow-black'
          : 'bg-[#030108]/80 backdrop-blur-md border-b border-[#7135F5]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Navigation Links (aligned to the right) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium ml-auto" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/80 hover:text-[#C6FF00] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C6FF00] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#0C061A] text-white hover:text-[#C6FF00] border border-[#7135F5]/50 focus:outline-none shadow-md shadow-black cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C6FF00]" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#070312] border-b border-[#7135F5]/40 px-4 pt-3 pb-6 space-y-3 shadow-2xl shadow-black"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2.5 rounded-lg text-white hover:bg-[#7135F5]/25 hover:text-[#C6FF00] font-medium transition-colors"
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
              className="flex items-center justify-center w-full py-3 bg-[#090414] hover:bg-[#C6FF00] text-white hover:text-black font-heading font-black text-sm uppercase rounded-xl border border-[#C6FF00] shadow-lg shadow-black transition-all duration-300 cursor-pointer group"
            >
              <span className="text-[#C6FF00] group-hover:text-black transition-colors">Inscribirme Ahora</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
