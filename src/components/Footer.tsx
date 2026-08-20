import React from 'react';
import { Phone, MapPin, Clock, Shield, CreditCard, ChevronRight, MessageSquare, Award } from 'lucide-react';
import { CONTACTS, buildWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const liaWspUrl = buildWhatsAppUrl({ description: 'Consulta general desde pie de página' }, 'lia');
  const fernandoWspUrl = buildWhatsAppUrl({ description: 'Consulta general desde pie de página' }, 'fernando');

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 pt-16 pb-12 relative overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">

          {/* Col 1: Brand Info & High-Impact Logo */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-4 group">
              <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-1 border-2 border-teal-400 shadow-[0_0_30px_rgba(45,212,191,0.45)] group-hover:scale-105 transition-all duration-300 shrink-0">
                <img
                  src="/sbrolla-logo.png"
                  alt="Sbrolla Repuestos Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white leading-none">
                  SBROLLA <span className="text-teal-400">REPUESTOS</span>
                </span>
                <span className="text-[11px] text-zinc-300 font-bold tracking-wider uppercase mt-1 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-rose-400 inline" /> 100 Años de Experiencia
                </span>
                <span className="text-[10px] text-zinc-500 uppercase font-semibold">
                  Bombal - Santa Fe
                </span>
              </div>
            </a>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Empresa centenaria especializada en repuestos y autopartes de alta calidad. 100 Años de Experiencia respaldando cada consulta y garantizando la pieza correcta para tu vehículo.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href={liaWspUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold hover:bg-teal-500 hover:text-zinc-950 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Lia: {CONTACTS.lia.phone}</span>
              </a>

              <a
                href={fernandoWspUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold hover:bg-rose-500 hover:text-zinc-950 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Fernando: {CONTACTS.fernando.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#cotizador" className="hover:text-teal-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-teal-400" /> Cotizador vía WhatsApp
                </a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-teal-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-teal-400" /> Categorías de Repuestos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-teal-400" /> Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contacto & Ubicación</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Bombal - Santa Fe, Argentina</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Lia: {CONTACTS.lia.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Fernando: {CONTACTS.fernando.phone}</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-400">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Horarios de Atención:</span>
                  <span>Lun a Vie: 08:00 a 12:00 hs / 15:00 a 20:00 hs</span>
                  <br />
                  <span>Sábados: 08:00 a 12:00 hs</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Payment Methods */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Formas de Pago & Seguridad</h4>
            <p className="text-xs text-zinc-400">
              Aceptamos los principales medios de pago con cuotas y descuentos por transferencia:
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-zinc-300 flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mercado Pago</span>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-zinc-300 flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-rose-400" />
                <span>Tarjetas Crédito</span>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-zinc-300 flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-teal-400" />
                <span>Transferencia</span>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-zinc-300 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-purple-400" />
                <span>Pago Seguro</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 1921-{new Date().getFullYear()} Sbrolla Repuestos. 100 Años de Experiencia. Bombal - Santa Fe.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Garantía de Repuestos</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
