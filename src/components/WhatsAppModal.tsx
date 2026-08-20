import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ExternalLink, ShieldCheck, Car, Settings, FileText, User } from 'lucide-react';
import { VehicleData } from '../types';
import { CONTACTS, buildWhatsAppUrl } from '../utils/whatsapp';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Partial<VehicleData>;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const [selectedContactKey, setSelectedContactKey] = useState<'lia' | 'fernando'>(
    data.selectedContact || 'lia'
  );

  const activeContact = CONTACTS[selectedContactKey];
  const finalUrl = buildWhatsAppUrl(data, selectedContactKey);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-zinc-900 border border-teal-500/30 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header Modal */}
          <div className="flex items-center justify-between p-5 border-b border-zinc-800 bg-zinc-950/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">Cotización por WhatsApp</h3>
                <p className="text-xs text-zinc-400">Mensaje directo para Sbrolla Repuestos</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-4">
            
            {/* Contact Switcher in Modal */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                Seleccionar Destinatario:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedContactKey('lia')}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    selectedContactKey === 'lia'
                      ? 'bg-teal-500/20 border-teal-500 text-teal-300'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Lia (3465 40 6554)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedContactKey('fernando')}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    selectedContactKey === 'fernando'
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Fernando (3465 66 8730)</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-zinc-800/60">
                <span className="font-mono text-teal-300 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Mensaje para {activeContact.name}
                </span>
                <span className="text-zinc-500 font-mono">{activeContact.phone}</span>
              </div>

              <div className="text-sm font-sans space-y-2 text-zinc-200">
                <p className="font-semibold text-teal-300">
                  👋 Hola {activeContact.name} (Sbrolla Repuestos), necesito cotizar lo siguiente:
                </p>

                {(data.brand || data.model) && (
                  <div className="flex items-start gap-2 bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800 text-xs">
                    <Car className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-400">Vehículo:</span>
                      <p className="font-bold text-white">
                        {data.brand || ''} {data.model || ''} ({data.year || 'Año S/D'})
                      </p>
                    </div>
                  </div>
                )}

                {data.partCategory && (
                  <div className="flex items-start gap-2 bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800 text-xs">
                    <Settings className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-400">Categoría de Pieza:</span>
                      <p className="font-semibold text-teal-300">{data.partCategory}</p>
                    </div>
                  </div>
                )}

                {data.description && (
                  <div className="flex items-start gap-2 bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800 text-xs">
                    <FileText className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-400">Detalle / Especificaciones:</span>
                      <p className="text-zinc-200">{data.description}</p>
                    </div>
                  </div>
                )}

                <p className="text-xs text-zinc-400 pt-1 italic">
                  ¿Tienen stock y precio disponible?
                </p>
              </div>
            </div>

            {/* Trust Guarantee inside modal */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-xs text-teal-300">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>100 Años de Experiencia respaldando la compatibilidad de cada repuesto.</span>
            </div>
          </div>

          {/* Footer Modal CTA */}
          <div className="flex items-center justify-end gap-3 p-5 border-t border-zinc-800 bg-zinc-950/80">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              Modificar datos
            </button>
            <a
              href={finalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all transform active:scale-95"
            >
              <span>Enviar a {activeContact.name} por WhatsApp</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
