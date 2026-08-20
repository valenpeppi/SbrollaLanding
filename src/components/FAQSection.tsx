import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../utils/mockData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const liaWspUrl = buildWhatsAppUrl({ description: 'Consulta sobre dudas frecuentes' }, 'lia');
  const fernandoWspUrl = buildWhatsAppUrl({ description: 'Consulta sobre dudas frecuentes' }, 'fernando');

  return (
    <section id="faq" className="py-20 bg-zinc-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            Dudas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes de Nuestros Clientes
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Todo lo que necesitás saber sobre compatibilidad de piezas, métodos de pago y atención personalizada.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-2xl bg-zinc-900/70 border border-zinc-800 overflow-hidden transition-colors hover:border-teal-500/30"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-teal-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-teal-300 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-teal-500/10 border-teal-500/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/40 pl-14">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Help Banner with 2 Separate Buttons (Lia & Fernando) */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-teal-500/30 text-center sm:flex sm:items-center sm:justify-between gap-4 shadow-xl">
          <div className="text-left space-y-1 mb-4 sm:mb-0">
            <h3 className="font-bold text-white text-base">¿Tenés alguna otra duda específica?</h3>
            <p className="text-xs text-zinc-400">Lia y Fernando responden tus consultas personalizadas al instante.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0 justify-center sm:justify-end">
            <a
              href={liaWspUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-teal-600 hover:bg-teal-500 shadow-md shadow-teal-600/20 transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar a Lia</span>
            </a>

            <a
              href={fernandoWspUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-rose-600 hover:bg-rose-500 shadow-md shadow-rose-600/20 transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar a Fernando</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
