
import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Programs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="programas" className="bg-[#020205] relative overflow-hidden">
        
        {/* Background Ambience for Section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-orange/5 blur-[100px] pointer-events-none"></div>

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
                                        {t.programs.urgent} // PROTOCOL_INIT
                                    </span>
                                </div>

                                <h2 className="text-5xl md:text-7xl font-bold text-white font-display mb-4 tracking-tight">
                                    VERANO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">2026</span>
                                </h2>
                                
                                <p className="text-2xl text-white/80 font-light mb-8 border-l-2 border-brand-orange/50 pl-6 italic">
                                    {t.programs.summer.subtitle}
                                </p>

                                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                                    {t.programs.summer.desc}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                    <a 
                                        href="#contacto" 
                                        className="group relative px-8 py-4 bg-brand-orange text-black font-bold text-sm uppercase tracking-widest rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {t.programs.summer.cta} <ArrowRight size={16} />
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    </a>
                                    
                                    <div className="flex items-center gap-3 text-gray-500 text-sm font-mono">
                                        <Clock size={16} className="text-brand-orange" />
                                        <span>DEADLINE: <span className="text-gray-300 border-b border-gray-600 pb-0.5">{t.programs.deadline}</span></span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Panel: The Specs / Visual */}
                        <div className="lg:col-span-5 bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-white/10 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                            {/* Decorative Circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="relative z-10 space-y-6">
                                <h3 className="text-white font-display font-bold text-xl uppercase tracking-wider mb-6 flex items-center gap-2">
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

        {/* SECTION 2: CEO JUNIOR (Clean Minimal) */}
        <div className="relative w-full py-32 bg-[#050510] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-6">
                           <span className="text-brand-cyan text-6xl font-display font-bold">CEO</span>
                           <span className="text-white/20 text-6xl font-display font-bold">JR</span>
                        </div>
                        <span className="block text-brand-cyan font-mono text-sm uppercase tracking-[0.2em] mb-6">
                            {t.programs.ceo.badge}
                        </span>
                        <h3 className="text-4xl font-bold text-white mb-6">
                            {t.programs.ceo.title}
                        </h3>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            {t.programs.ceo.desc}
                        </p>
                        
                        <div className="p-6 border-l-2 border-brand-cyan bg-brand-cyan/5 mb-10">
                            <p className="text-brand-cyan font-bold text-lg mb-1">{t.programs.ceo.highlight}</p>
                            <p className="text-gray-500 text-sm">Utah, USA Exchange Eligibility Verified.</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 mb-10">
                            <div>
                                <h4 className="text-white font-bold mb-2">{t.programs.ceo.f1_title}</h4>
                                <p className="text-sm text-gray-500">{t.programs.ceo.f1_desc}</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">{t.programs.ceo.f2_title}</h4>
                                <p className="text-sm text-gray-500">{t.programs.ceo.f2_desc}</p>
                            </div>
                        </div>

                        <a href="#contacto" className="group inline-flex items-center gap-2 text-white font-bold text-lg border-b border-brand-cyan pb-1 hover:text-brand-cyan transition-colors">
                            {t.programs.ceo.cta} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>

                    <div className="lg:col-span-5 relative h-[500px] hidden lg:block">
                        {/* Minimalist Vertical Card Representation */}
                        <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden border border-white/10 opacity-80 shadow-2xl">
                           <div className="absolute inset-0 grid-bg opacity-30"></div>
                           {/* Decorative UI Elements */}
                           <div className="absolute top-8 left-8 w-12 h-1 bg-brand-cyan"></div>
                           <div className="absolute bottom-8 right-8 text-8xl font-display font-bold text-white/5">JR</div>
                           
                           {/* Abstract geometric shape */}
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full flex items-center justify-center">
                              <div className="w-32 h-32 border border-brand-cyan/30 rounded-full"></div>
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
