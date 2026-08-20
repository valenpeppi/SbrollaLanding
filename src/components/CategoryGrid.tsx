import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES_DATA } from '../utils/mockData';
import { VehicleData } from '../types';
import { Disc, Activity, Cog, RotateCw, Droplet, Zap, ChevronRight, Check, MessageSquare } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface CategoryGridProps {
  onSelectCategory: (categoryTitle: string) => void;
  onOpenModal: (data: Partial<VehicleData>) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory, onOpenModal }) => {
  
  // Icon mapper helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Disc':
        return <Disc className="w-7 h-7 text-teal-400" />;
      case 'Activity':
        return <Activity className="w-7 h-7 text-teal-400" />;
      case 'Cog':
        return <Cog className="w-7 h-7 text-teal-400" />;
      case 'RotateCw':
        return <RotateCw className="w-7 h-7 text-teal-400" />;
      case 'Droplet':
        return <Droplet className="w-7 h-7 text-teal-400" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-teal-400" />;
      default:
        return <Cog className="w-7 h-7 text-teal-400" />;
    }
  };

  const handleCategoryClick = (categoryTitle: string) => {
    onSelectCategory(categoryTitle);
    onOpenModal({ partCategory: categoryTitle, description: `Consulta sobre categoría ${categoryTitle}` });
  };

  return (
    <section id="categorias" className="py-20 bg-zinc-950 relative border-t border-zinc-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
              Catálogo Especializado Sbrolla
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              Categorías Principales de Repuestos
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Stock permanente en líneas originales y alternativas certificadas de máxima durabilidad.
            </p>
          </div>

          <a
            href="#cotizador"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 group transition-colors"
          >
            <span>Ver todo el catálogo en el cotizador vía WhatsApp</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Categories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_DATA.map((cat, index) => {
            const categoryWspUrl = buildWhatsAppUrl({
              partCategory: cat.title,
              description: `Consulta directa para la categoría ${cat.title}`
            });

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-zinc-900/80 border border-zinc-800/80 p-6 shadow-lg hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glowing top line accent */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-teal-500/0 to-transparent group-hover:via-teal-400 transition-all duration-500" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:border-teal-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getIcon(cat.iconName)}
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      Stock Disponible
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Popular items checklist */}
                  <div className="mt-5 pt-4 border-t border-zinc-800/60 space-y-2">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                      Piezas frecuentes:
                    </span>
                    {cat.popularItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleCategoryClick(cat.title)}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-zinc-800 hover:bg-teal-500 hover:text-zinc-950 transition-all duration-300 text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Cotizar Categoría</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={categoryWspUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white border border-emerald-500/20 transition-colors"
                    title={`Pedir ${cat.title} directo por WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
