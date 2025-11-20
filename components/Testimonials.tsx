
import React from 'react';
import { History, Terminal, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const data = t.testimonials;

  return (
    <section className="py-24 md:py-32 bg-[#030303] border-t border-white/10 relative overflow-hidden">
       {/* Background subtle grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col items-center mb-20 text-center">
             <div className="flex items-center gap-2 mb-4 opacity-60">
                <Terminal size={16} className="text-brand-cyan" />
                <span className="font-mono text-xs text-brand-cyan uppercase tracking-[0.3em]">Transmission Log</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-4 tracking-tight">
                {data.title}
             </h2>
             <p className="text-gray-400 max-w-xl">{data.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
             
             {/* LEFT COLUMN: HISTORICAL IMPACT (Featured Elegant Card) */}
             <div className="relative">
                {/* Decorative background blob */}
                <div className="absolute -inset-4 bg-brand-orange/5 rounded-[2rem] blur-xl pointer-events-none"></div>
                
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="relative bg-[#080808] border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden shadow-2xl"
                >
                   {/* Golden sheen effect */}
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange/0 via-brand-orange/50 to-brand-orange/0"></div>
                   
                   {/* Watermark Year */}
                   <span className="absolute -right-4 -top-4 text-[120px] font-bold text-white/[0.02] font-display leading-none select-none pointer-events-none">
                      2021
                   </span>

                   <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono tracking-widest uppercase mb-8">
                         <History size={12} />
                         <span>Archived Record</span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white font-display mb-6 leading-tight">
                         {data.historical.title}
                      </h3>
                      
                      <p className="text-lg text-gray-400 leading-relaxed mb-8 font-light border-l-2 border-white/5 pl-6">
                         {data.historical.desc}
                      </p>

                      <div className="relative bg-white/[0.02] rounded-xl p-6 border border-white/5">
                         <Quote className="absolute -top-3 -left-3 text-brand-orange bg-[#080808] p-1 rounded-full border border-brand-orange/20" size={24} fill="currentColor" />
                         <p className="text-xl md:text-2xl text-white/90 italic font-serif leading-relaxed">
                            {data.historical.quote}
                         </p>
                      </div>
                   </div>
                </motion.div>
             </div>

             {/* RIGHT COLUMN: CURRENT TESTIMONIALS (Minimal List) */}
             <div className="flex flex-col gap-12 pt-4">
                {data.list.map((item: any, i: number) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.15 }}
                       className="group"
                    >
                       <div className="flex items-start gap-6">
                          <div className="shrink-0 mt-1">
                             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10 transition-colors duration-300">
                                <span className="font-mono text-xs text-gray-500 group-hover:text-brand-cyan">0{i+1}</span>
                             </div>
                          </div>
                          <div>
                             <p className="text-lg text-gray-300 mb-4 leading-relaxed group-hover:text-white transition-colors font-light">
                                "{item.quote}"
                             </p>
                             <div className="flex items-center gap-3">
                                <div className="h-px w-6 bg-white/10 group-hover:bg-brand-cyan/50 transition-colors"></div>
                                <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest">{item.role}</span>
                             </div>
                          </div>
                       </div>
                    </motion.div>
                ))}
             </div>

          </div>
       </div>
    </section>
  );
};

export default Testimonials;
