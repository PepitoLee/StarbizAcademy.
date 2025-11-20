
import React from 'react';
import { Users, Sparkles, Smartphone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Ecosystem: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="comunidades">
      {/* Header Section */}
      <div className="bg-space-black pt-32 pb-10 text-center px-4">
          <span className="text-gray-500 uppercase tracking-[0.3em] text-sm font-bold">{t.ecosystem.pretitle}</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 font-display">{t.ecosystem.title}</h2>
      </div>

      {/* Community 1: Stareduca (Full Width) */}
      <section className="relative py-24 md:py-32 bg-[#02040a] border-y border-white/5 overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/5 skew-x-12 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
               <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-brand-cyan text-black flex items-center justify-center mb-8">
                     <Users size={32} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white font-display mb-2">{t.ecosystem.stareduca.title}</h3>
                  <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-6">{t.ecosystem.stareduca.subtitle}</p>
                  <p className="text-gray-400 text-xl leading-relaxed mb-8">
                     {t.ecosystem.stareduca.desc}
                  </p>
                  <ul className="space-y-3 mb-10">
                     {t.ecosystem.stareduca.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                           <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span> {f}
                        </li>
                     ))}
                  </ul>
                  <a href="#contacto" className="text-white border-b border-brand-cyan pb-1 hover:text-brand-cyan transition-colors font-bold uppercase tracking-wide">
                     {t.ecosystem.stareduca.cta}
                  </a>
               </div>
               <div className="flex-1 hidden md:block">
                   {/* Abstract visual representation instead of a box */}
                   <div className="text-[200px] font-display font-bold text-white/5 leading-none select-none">
                      STAR <br/> EDUCA
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Community 2: Padres 3.0 (Full Width) */}
      <section className="relative py-24 md:py-32 bg-[#050505]">
         <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-orange/5 -skew-x-12 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
               <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange text-black flex items-center justify-center mb-8">
                     <Sparkles size={32} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white font-display mb-2">{t.ecosystem.parents.title}</h3>
                  <p className="text-brand-orange font-mono text-sm uppercase tracking-widest mb-6">{t.ecosystem.parents.subtitle}</p>
                  <p className="text-gray-400 text-xl leading-relaxed mb-8">
                     {t.ecosystem.parents.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                     <div>
                        <h4 className="text-white font-bold mb-1">{t.ecosystem.parents.f1_title}</h4>
                        <p className="text-sm text-gray-500">{t.ecosystem.parents.f1_desc}</p>
                     </div>
                     <div>
                        <h4 className="text-white font-bold mb-1">{t.ecosystem.parents.f2_title}</h4>
                        <p className="text-sm text-gray-500">{t.ecosystem.parents.f2_desc}</p>
                     </div>
                  </div>
                  <a href="#contacto" className="text-white border-b border-brand-orange pb-1 hover:text-brand-orange transition-colors font-bold uppercase tracking-wide">
                     {t.ecosystem.parents.cta}
                  </a>
               </div>
               <div className="flex-1 hidden md:block text-right">
                   <div className="text-[200px] font-display font-bold text-white/5 leading-none select-none">
                      PADRES <br/> 3.0
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* App Section */}
      <section className="py-32 relative bg-space-black overflow-hidden border-t border-white/5">
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
    </div>
  );
};

export default Ecosystem;
