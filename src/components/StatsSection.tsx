import React from 'react';
import { motion } from 'framer-motion';
import { STATS_DATA } from '../utils/mockData';
import { Boxes, ShieldCheck, Award, UserCheck } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-8 h-8 text-teal-400" />;
      case 'Boxes':
        return <Boxes className="w-8 h-8 text-rose-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-teal-400" />;
      case 'UserCheck':
        return <UserCheck className="w-8 h-8 text-rose-400" />;
      default:
        return <Boxes className="w-8 h-8 text-teal-400" />;
    }
  };

  return (
    <section className="py-16 bg-zinc-950 relative border-t border-b border-zinc-900/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            Respaldo & Confianza Sbrolla
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-3 tracking-tight">
            100 Años Respaldando al Mercado Automotriz
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Números que avalan nuestra dedicación y precisión técnica en el mercado autopartista desde 1921.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-teal-500/40 hover:bg-zinc-900/90 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-teal-500/30 group-hover:scale-110 transition-transform">
                  {getStatIcon(stat.iconName)}
                </div>
                <div className="w-2 h-2 rounded-full bg-teal-400/40 group-hover:bg-teal-400 transition-colors" />
              </div>

              <div className="text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-teal-300 transition-colors">
                {stat.value}
              </div>

              <div className="text-sm font-bold text-zinc-200 mt-1">
                {stat.label}
              </div>

              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
