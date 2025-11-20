import React from 'react';
import { Smartphone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const StarbooksApp: React.FC = () => {
  const { t } = useLanguage();

  return (
      <section id="app" className="py-32 relative bg-[#030014] overflow-hidden border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
              <Smartphone className="text-white w-12 h-12 mx-auto mb-8 opacity-80" strokeWidth={1} />
              <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 font-display tracking-tighter">{t.ecosystem.app.title}</h2>
              <p className="text-2xl text-gray-400 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                  {t.ecosystem.app.desc_part1} <span className="text-white font-bold border-b-2 border-brand-orange">{t.ecosystem.app.desc_part2}</span> {t.ecosystem.app.desc_part3}
              </p>
              <a href="#contacto" className="inline-flex items-center gap-3 text-black bg-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  {t.ecosystem.app.cta} <ArrowRight size={20} />
              </a>
          </div>
      </section>
  );
};

export default StarbooksApp;