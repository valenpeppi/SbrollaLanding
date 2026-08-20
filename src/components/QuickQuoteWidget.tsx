import React, { useState, useMemo } from 'react';
import { CAR_CATALOG, CATEGORIES_DATA } from '../utils/mockData';
import { VehicleData } from '../types';
import { Shield, CheckCircle2, ChevronRight, CornerDownRight, Zap, User } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface QuickQuoteWidgetProps {
  onOpenModal: (data: Partial<VehicleData>) => void;
}

export const QuickQuoteWidget: React.FC<QuickQuoteWidgetProps> = ({ onOpenModal }) => {
  // Form State
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedContact, setSelectedContact] = useState<'lia' | 'fernando'>('lia');

  // Cascading lists
  const availableModels = useMemo(() => {
    if (!selectedBrand) return [];
    const brandData = CAR_CATALOG.find((b) => b.brand === selectedBrand);
    return brandData ? brandData.models : [];
  }, [selectedBrand]);

  const availableYears = useMemo(() => {
    if (!selectedModel) return [];
    const modelData = availableModels.find((m) => m.name === selectedModel);
    return modelData ? modelData.years : [];
  }, [selectedModel, availableModels]);

  // Handlers
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(e.target.value);
    setSelectedModel('');
    setSelectedYear('');
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
    setSelectedYear('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const vehiclePayload: Partial<VehicleData> = {
      brand: selectedBrand,
      model: selectedModel,
      year: selectedYear,
      partCategory: selectedCategory,
      description: description,
      selectedContact: selectedContact,
    };

    onOpenModal(vehiclePayload);
  };

  const directWspUrl = buildWhatsAppUrl(
    { brand: selectedBrand, model: selectedModel, year: selectedYear, partCategory: selectedCategory, description },
    selectedContact
  );

  return (
    <div id="cotizador" className="w-full max-w-4xl mx-auto px-1 sm:px-0">
      <div className="relative rounded-2xl sm:rounded-3xl bg-zinc-900/90 border border-teal-500/30 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden group">
        
        {/* Glow backdrop ambient effect */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/25 transition-all duration-700"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-rose-500/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header Widget */}
        <div className="pb-5 border-b border-zinc-800/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-rose-400" />
            <span>Cotizador vía WhatsApp</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Buscador & Cotizador de Repuestos
          </h2>
        </div>

        {/* Contact Selector */}
        <div className="my-5 p-3.5 sm:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
          <label className="block text-xs font-bold uppercase text-zinc-400 tracking-wider mb-2.5">
            Elegí con quién querés cotizar por WhatsApp:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => setSelectedContact('lia')}
              className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                selectedContact === 'lia'
                  ? 'bg-teal-500/10 border-teal-500 text-white font-bold shadow-md shadow-teal-500/10'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <User className={`w-4 h-4 shrink-0 ${selectedContact === 'lia' ? 'text-teal-400' : 'text-zinc-500'}`} />
                <div className="text-left">
                  <div className="text-sm font-semibold">Contactar a Lia</div>
                  <div className="text-[11px] font-mono text-zinc-400">Tel: 3465 40 6554</div>
                </div>
              </div>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${selectedContact === 'lia' ? 'border-teal-400 bg-teal-400' : 'border-zinc-700'}`}>
                {selectedContact === 'lia' && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />}
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedContact('fernando')}
              className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                selectedContact === 'fernando'
                  ? 'bg-rose-500/10 border-rose-500 text-white font-bold shadow-md shadow-rose-500/10'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <User className={`w-4 h-4 shrink-0 ${selectedContact === 'fernando' ? 'text-rose-400' : 'text-zinc-500'}`} />
                <div className="text-left">
                  <div className="text-sm font-semibold">Contactar a Fernando</div>
                  <div className="text-[11px] font-mono text-zinc-400">Tel: 3465 66 8730</div>
                </div>
              </div>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${selectedContact === 'fernando' ? 'border-rose-400 bg-rose-400' : 'border-zinc-700'}`}>
                {selectedContact === 'fernando' && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />}
              </div>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Cascading Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            {/* Marca */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                1. Marca del Vehículo <span className="text-teal-400">*</span>
              </label>
              <select
                value={selectedBrand}
                onChange={handleBrandChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
              >
                <option value="">Seleccionar Marca...</option>
                {CAR_CATALOG.map((b) => (
                  <option key={b.brand} value={b.brand}>
                    {b.brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Modelo */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                2. Modelo <span className="text-teal-400">*</span>
              </label>
              <select
                value={selectedModel}
                onChange={handleModelChange}
                disabled={!selectedBrand}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <option value="">
                  {!selectedBrand ? 'Primero elegí marca' : 'Seleccionar Modelo...'}
                </option>
                {availableModels.map((m) => (
                  <option key={m.name} value={m.name}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Año */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                3. Año del Vehículo
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                disabled={!selectedModel}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <option value="">
                  {!selectedModel ? 'Primero elegí modelo' : 'Seleccionar Año...'}
                </option>
                {availableYears.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category & Description Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Categoría del Repuesto (Opcional)
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
              >
                <option value="">Todas las Categorías / No estoy seguro</option>
                {CATEGORIES_DATA.map((cat) => (
                  <option key={cat.id} value={cat.title}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Detalle / Nombre del Repuesto
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ej: Pastillas de freno delanteras, amortiguador..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors placeholder:text-zinc-600"
              />
            </div>
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3.5 sm:py-4 px-5 sm:px-6 rounded-2xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-teal-500 via-teal-600 to-rose-500 hover:from-teal-400 hover:to-rose-400 shadow-[0_0_30px_rgba(45,212,191,0.35)] hover:shadow-[0_0_40px_rgba(45,212,191,0.55)] border border-teal-300/40 transition-all duration-300 flex items-center justify-center gap-2.5 transform active:scale-95 group cursor-pointer"
            >
              <span>Consultar a {selectedContact === 'lia' ? 'Lia' : 'Fernando'} por WhatsApp</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={directWspUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 sm:py-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-teal-500/30 text-xs font-bold text-center transition-colors flex items-center justify-center gap-2"
            >
              <span>Abrir WhatsApp</span>
              <CornerDownRight className="w-4 h-4 text-teal-400" />
            </a>
          </div>

          {/* Micro Guarantee footer */}
          <div className="flex flex-wrap items-center justify-between text-xs text-zinc-400 pt-2 border-t border-zinc-800/60 gap-2">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              100 Años de Experiencia respaldando cada respuesta
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              Sin compromiso de compra
            </span>
          </div>

        </form>
      </div>
    </div>
  );
};
