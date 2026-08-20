import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { CategoryGrid } from './components/CategoryGrid';
import { StatsSection } from './components/StatsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { VehicleData } from './types';
import { buildWhatsAppUrl, CONTACTS } from './utils/whatsapp';
import { MessageSquare } from 'lucide-react';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteData, setQuoteData] = useState<Partial<VehicleData>>({});

  const handleOpenModal = (data: Partial<VehicleData>) => {
    setQuoteData(data);
    setModalOpen(true);
  };

  const handleSelectCategory = (categoryTitle: string) => {
    setQuoteData((prev) => ({ ...prev, partCategory: categoryTitle }));
  };

  const liaWspUrl = buildWhatsAppUrl(quoteData, 'lia');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-teal-500 selection:text-zinc-950 relative">
      
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <TrustBadges />
        <CategoryGrid onSelectCategory={handleSelectCategory} onOpenModal={handleOpenModal} />
        <StatsSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Modal Preview */}
      <WhatsAppModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={quoteData}
      />

      {/* Floating WhatsApp Action Button (Mobile & Desktop) */}
      <a
        href={liaWspUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] border border-emerald-300/30 transition-all duration-300 transform hover:scale-105 active:scale-95 group"
        aria-label="Contactar por WhatsApp"
        title={`Cotizar por WhatsApp con Lia (${CONTACTS.lia.phone})`}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">WhatsApp Lia</span>
      </a>

    </div>
  );
}

export default App;
