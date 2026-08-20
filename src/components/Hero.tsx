import React from 'react';
import { QuickQuoteWidget } from './QuickQuoteWidget';
import { VehicleData } from '../types';
import { Award, ShieldCheck, UserCheck } from 'lucide-react';

interface HeroProps {
  onOpenModal: (data: Partial<VehicleData>) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 md:pb-28 bg-zinc-950 overflow-hidden bg-grid-pattern">

      {/* Sbrolla Brand Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-teal-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-rose-500/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-600/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Badges & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-5">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-teal-500/40 text-xs font-semibold text-zinc-300 shadow-[0_0_20px_rgba(45,212,191,0.2)] backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-teal-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-rose-400" /> Sbrolla Repuestos (1921-2021)
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-300">Bombal - Santa Fe</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            100 Años Respaldando tu Vehículo con los{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-rose-400">
              Mejores Repuestos
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Trayectoria centenaria desde Bombal, Santa Fe. Cotizá al instante seleccionando tu vehículo con atención personalizada por WhatsApp con Lia y Fernando.
          </p>

          {/* Quick Features Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-zinc-300">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-teal-400" />
              <span>100 Años de Experiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-400" />
              <span>Garantía de Fábrica</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-teal-400" />
              <span>Atención Directa (Lia & Fernando)</span>
            </div>
          </div>
        </div>

        {/* Interactive Quick Quote Widget */}
        <QuickQuoteWidget onOpenModal={onOpenModal} />

        {/* Bottom Social Proof Bar */}
        <div className="mt-12 max-w-4xl mx-auto pt-8 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-teal-500/20">
            <div className="text-xl font-black text-teal-300">100 Años</div>
            <div className="text-[11px] text-zinc-400">de Experiencia (1921-2021)</div>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-rose-500/20">
            <div className="text-xl font-black text-rose-400">+15.000</div>
            <div className="text-[11px] text-zinc-400">Repuestos en Stock</div>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-teal-500/20">
            <div className="text-xl font-black text-teal-300">&lt; 5 min</div>
            <div className="text-[11px] text-zinc-400">Tiempo de Respuesta</div>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-rose-500/20">
            <div className="text-xl font-black text-rose-400">100%</div>
            <div className="text-[11px] text-zinc-400">Atención Personalizada</div>
          </div>
        </div>

      </div>
    </section>
  );
};
