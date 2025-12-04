
import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Programs: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="programas" className="bg-[#020205] relative overflow-hidden">
        
        {/* Background Ambience for Section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-orange/5 blur-[100px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="bg-transparent pt-32 pb-10 text-center px-4 relative z-10">
            <span className="text-gray-500 uppercase tracking-[0.3em] text-sm font-bold">// STARBIZ ACADEMY</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 font-display">PROGRAMAS</h2>
        </div>

        {/* SECTION 1: SUMMER 2026 - "THE GOLDEN ECLIPSE" DESIGN */}
        <div className="relative w-full py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Main Glass Card */}
                <div className="relative bg-[#0A0A10]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_50px_-10px_rgba(255,107,0,0.15)]">
                    
                    {/* Top Glow Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent"></div>
                    
                    <div className="grid lg:grid-cols-12 gap-0">
                        
                        {/* Left Panel: The Offer */}
                        <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 relative">
                            {/* Background Texture */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative z-10"
                            >
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                                    </span>
                                    <span className="text-brand-orange font-mono text-xs font-bold uppercase tracking-[0.2em]">
                                        {t.programs.urgent}
                                    </span>
                                </div>

                                <h2 className="text-5xl md:text-7xl font-bold text-white font-display mb-4 tracking-tight">
                                    CEO JUNIOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">2026</span>
                                </h2>
                                
                                <p className="text-2xl text-white/80 font-light mb-8 border-l-2 border-brand-orange/50 pl-6 italic">
                                    {t.programs.summer.subtitle}
                                </p>

                                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                                    {t.programs.summer.desc}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                    <a
                                        href="https://landingnueva-three.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative px-8 py-4 bg-brand-orange text-black font-bold text-sm uppercase tracking-widest rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {t.programs.summer.cta} <ArrowRight size={16} />
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    </a>
                                    
                                    <div className="flex items-center gap-3 text-gray-500 text-sm font-mono">
                                        <Clock size={16} className="text-brand-orange" />
                                        <span className="text-gray-300">{t.programs.deadline}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Panel: The Specs / Visual */}
                        <div className="lg:col-span-5 relative overflow-hidden min-h-[400px] lg:min-h-0">
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src="/images/programs-bg.png" 
                                    alt="Ascending platforms" 
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover opacity-60 mix-blend-screen hover:scale-105 transition-transform duration-1000" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A10] via-transparent to-transparent"></div>
                            </div>

                            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full bg-black/20 backdrop-blur-sm">
                                <h3 className="text-white font-display font-bold text-xl uppercase tracking-wider mb-6 flex items-center gap-2 drop-shadow-md">
                                    <Sparkles size={18} className="text-brand-yellow" /> 
                                    Modules Included
                                </h3>

                                <div className="grid grid-cols-1 gap-4">
                                   {t.programs.summer.features.map((f: string, i: number) => (
                                       <motion.div 
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="group flex items-center justify-between p-4 rounded-xl bg-[#050508] border border-white/5 hover:border-brand-orange/30 transition-colors"
                                       >
                                           <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                                               <CheckCircle2 size={16} className="text-brand-orange/50 group-hover:text-brand-orange transition-colors" />
                                               <span className="text-sm font-medium">{f}</span>
                                           </div>
                                           {/* Decorative dots */}
                                           <div className="flex gap-1">
                                                <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-brand-orange transition-colors"></div>
                                                <div className="w-1 h-1 rounded-full bg-white/10"></div>
                                           </div>
                                       </motion.div>
                                   ))}
                                </div>

                                {/* Exchange Program Eligibility */}
                                <div className="group flex items-center justify-between p-4 rounded-xl bg-[#050508] border border-brand-cyan/30 hover:border-brand-cyan/50 transition-colors mt-4">
                                    <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                                        <CheckCircle2 size={16} className="text-brand-cyan group-hover:text-brand-cyan transition-colors" />
                                        <span className="text-sm font-medium">
                                            {language === 'es' ? 'Incluye elegibilidad para el Programa de Intercambio en EE. UU.' : 'Includes eligibility for the U.S. Exchange Program'}
                                        </span>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-1 h-1 rounded-full bg-brand-cyan/30 group-hover:bg-brand-cyan transition-colors"></div>
                                        <div className="w-1 h-1 rounded-full bg-white/10"></div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-600 uppercase tracking-widest">
                                    <span>Slots: Limited</span>
                                    <span>Batch: #2026_ALPHA</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
  );
};

export default Programs;
