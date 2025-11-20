
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award, MapPin, User, Cpu, Globe, Zap, Hash, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: User,
      color: "text-cyan-400",
      borderColor: "border-cyan-500",
      shadowColor: "shadow-cyan-500/20",
      spotlight: "from-cyan-500/20 via-cyan-900/5 to-transparent",
      id: "001",
      label: "ARCHITECT",
      subtitle: t.about.card1.title,
      content: t.about.card1.desc,
      meta: ["Access Granted", "Level 7 Clearance"]
    },
    {
      icon: MapPin,
      color: "text-emerald-400",
      borderColor: "border-emerald-500",
      shadowColor: "shadow-emerald-500/20",
      spotlight: "from-emerald-500/20 via-emerald-900/5 to-transparent",
      id: "004",
      label: "LOCATION",
      subtitle: t.about.card2.title,
      content: (
        <div className="space-y-2">
           <p>{t.about.card2.desc}</p>
           <div className="inline-flex items-center gap-3 bg-emerald-950/30 px-3 py-2 rounded border border-emerald-500/20 mt-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase">{t.about.card2.status_val}</span>
           </div>
        </div>
      ),
      meta: ["Utah_USA", "Global_Link"]
    },
    {
      icon: Cpu,
      color: "text-purple-400",
      borderColor: "border-purple-500",
      shadowColor: "shadow-purple-500/20",
      spotlight: "from-purple-500/20 via-purple-900/5 to-transparent",
      id: "002",
      label: "CORE SYSTEM",
      subtitle: "Misión & Visión",
      content: (
        <div className="space-y-4">
          <div className="relative pl-4 border-l border-purple-500/30">
            <h4 className="text-purple-400 font-display font-bold text-lg uppercase mb-1">{t.about.mission.title}</h4>
            <p className="text-sm text-gray-300">{t.about.mission.desc}</p>
          </div>
          <div className="relative pl-4 border-l border-cyan-500/30">
             <h4 className="text-cyan-400 font-display font-bold text-lg uppercase mb-1">{t.about.vision.title}</h4>
             <p className="text-sm text-gray-300">{t.about.vision.desc}</p>
          </div>
        </div>
      ),
      meta: ["Strategic", "Future_Ready"]
    },
    {
      icon: Award,
      color: "text-orange-400",
      borderColor: "border-orange-500",
      shadowColor: "shadow-orange-500/20",
      spotlight: "from-orange-500/20 via-orange-900/5 to-transparent",
      id: "003",
      label: "PROTOCOL",
      subtitle: t.about.values.title,
      content: (
        <div className="space-y-3">
          <p>{t.about.values.desc}</p>
          <div className="flex flex-wrap gap-2 pt-2">
             {['Fe', 'Ciencia', 'Liderazgo', 'Servicio'].map((v, i) => (
               <span key={i} className="text-[10px] font-mono text-orange-300 bg-orange-950/30 px-2 py-1 border border-orange-500/20 uppercase tracking-widest hover:bg-orange-500/20 transition-colors">
                 {v}
               </span>
             ))}
          </div>
        </div>
      ),
      meta: ["Ethics_Verified", "Code_Red"]
    }
  ];

  return (
    <section id="quienes-somos" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}>
      </div>
      
      {/* Ambient Light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Sticky Header / Console */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit">
             <div className="relative">
                {/* Decorative Lines */}
                <div className="absolute -top-8 left-0 w-20 h-1 bg-brand-cyan mb-4"></div>
                <div className="absolute -top-8 left-24 w-4 h-1 bg-brand-purple mb-4"></div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-[0.9] tracking-tight mb-6">
                  {t.about.main_title}
                </h2>

                              <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
                                {t.about.intro_desc}
                              </p>
             </div>
          </div>

          {/* Right Column - Scrollable Cards */}
          <div className="lg:col-span-8 flex flex-col gap-8">
             {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                     {/* Connector Line (Visual only) */}
                     {index !== items.length - 1 && (
                        <div className="absolute left-[27px] top-16 bottom-[-32px] w-px bg-white/5 group-hover:bg-white/10 transition-colors hidden md:block"></div>
                     )}

                     {/* Card Container */}
                     <div className={`
                        relative overflow-hidden
                        bg-[#1A1A2E]
                        border-l-4 ${item.borderColor.replace('border-', 'border-')}
                        border-t border-r border-b border-white/20
                        p-6 md:p-8 rounded-r-2xl rounded-bl-2xl rounded-tl-sm
                        transition-all duration-500
                        shadow-lg
                        hover:shadow-2xl ${item.shadowColor}
                        group-hover:translate-x-2
                     `}>
                        {/* 1. Creative Background Spotlight (Animated) */}
                        <div className={`
                           absolute -top-[100px] -right-[100px] w-[300px] h-[300px] 
                           bg-gradient-to-br ${item.spotlight} 
                           blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-500
                           rounded-full pointer-events-none
                        `}></div>
                        
                        {/* 2. Tech Grid Overlay (Subtle) */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-6">
                           {/* Icon Column */}
                           <div className="shrink-0 relative">
                              {/* Glowing Icon Container */}
                              <div className={`
                                 w-16 h-16 rounded-xl 
                                 bg-[#12121a] border border-white/10
                                 flex items-center justify-center
                                 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500
                                 relative z-10
                                 ${item.shadowColor} shadow-lg
                              `}>
                                 <Icon size={32} className={item.color} />
                              </div>
                              {/* Decorative line below icon */}
                              <div className={`absolute top-full left-1/2 -translate-x-1/2 h-10 w-px bg-gradient-to-b from-${item.color.split('-')[1]}-500/50 to-transparent`}></div>
                           </div>

                           {/* Content Column */}
                           <div className="flex-1">
                              {/* Header Meta - Tech Style */}
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                                 <div className={`px-2 py-0.5 rounded bg-${item.color.split('-')[1]}-950/50 border border-${item.color.split('-')[1]}-500/30`}>
                                    <span className={`font-mono text-[10px] font-bold tracking-widest uppercase ${item.color}`}>
                                       {item.label}
                                    </span>
                                 </div>
                                 <span className="text-[10px] text-white font-mono">/// ID_{item.id}</span>
                              </div>

                              <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-4 group-hover:text-white transition-colors flex items-center gap-2">
                                 {item.subtitle}
                                 <span className="opacity-0 group-hover:opacity-100 transition-opacity text-lg text-gray-500">→</span>
                              </h3>

                              <div className="text-gray-400 leading-relaxed text-sm md:text-base">
                                 {item.content}
                              </div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
                );
             })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
