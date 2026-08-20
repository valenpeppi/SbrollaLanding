import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-teal-500/20 py-2.5 sm:py-3 shadow-lg shadow-black/80'
          : 'bg-gradient-to-b from-zinc-950/95 via-zinc-950/70 to-transparent py-3.5 sm:py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">

          {/* Logo Oficial Sbrolla Repuestos */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none shrink">
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white p-0.5 border border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.3)] group-hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-300 shrink-0">
              <img
                src="/sbrolla-logo.png"
                alt="Sbrolla Repuestos Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-base sm:text-xl tracking-tight text-white leading-none group-hover:text-teal-300 transition-colors truncate">
                SBROLLA <span className="text-teal-400 font-black">REPUESTOS</span>
              </span>
              <span className="text-[9px] sm:text-[11px] text-zinc-400 font-semibold tracking-wide uppercase mt-0.5 sm:mt-1 flex items-center gap-1 truncate">
                <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-400 shrink-0" />
                <span className="truncate">100 Años de Experiencia</span>
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#cotizador"
              className="text-sm font-medium text-zinc-300 hover:text-teal-400 transition-colors"
            >
              Cotizador vía WhatsApp
            </a>
            <a
              href="#categorias"
              className="text-sm font-medium text-zinc-300 hover:text-teal-400 transition-colors"
            >
              Categorías
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-zinc-300 hover:text-teal-400 transition-colors"
            >
              Preguntas Frecuentes
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-teal-500/20 px-4 pt-4 pb-6 mt-3 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <a
            href="#cotizador"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-200 hover:bg-zinc-900 hover:text-teal-400"
          >
            Cotizador vía WhatsApp
          </a>
          <a
            href="#categorias"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-200 hover:bg-zinc-900 hover:text-teal-400"
          >
            Categorías de Repuestos
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-200 hover:bg-zinc-900 hover:text-teal-400"
          >
            Preguntas Frecuentes
          </a>
        </div>
      )}
    </header>
  );
};
