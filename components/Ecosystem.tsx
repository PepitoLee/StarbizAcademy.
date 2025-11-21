import React, { useState, useRef } from 'react';
import { Users, Sparkles, Smartphone, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Ecosystem: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="comunidades" className="relative">
      {/* Global Network Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img 
            src="/images/ecosystem-bg.png" 
            alt="Network" 
            className="w-full h-full object-cover opacity-10 mix-blend-screen fixed-bg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#030014]/80 to-[#030014]"></div>
      </div>

      {/* Header Section */}
      <div className="bg-transparent pt-32 pb-10 text-center px-4 relative z-10">
          <span className="text-gray-500 uppercase tracking-[0.3em] text-sm font-bold">{t.ecosystem.pretitle}</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 font-display">{t.ecosystem.title}</h2>
      </div>

      {/* Community 1: Stareduca (Full Width) */}
      <section className="relative py-24 md:py-32 border-y border-white/5 overflow-hidden backdrop-blur-sm bg-black/20">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/5 skew-x-12 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center">
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
               <div className="flex-1 w-full md:w-auto relative group perspective-1000">
                   {/* Image Container with 3D tilt effect on hover */}
                   <div className="relative w-full aspect-video md:aspect-square max-w-[500px] mx-auto transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-6 will-change-transform">
                      <div className="absolute inset-0 bg-brand-cyan/20 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
                      <img 
                        src="/images/stareduca-community.png" 
                        alt="Comunidad StarEduca" 
                        loading="lazy"
                        decoding="async"
                        className="relative z-10 w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl shadow-brand-cyan/20 group-hover:shadow-brand-cyan/40 transition-all duration-500"
                      />
                      {/* Overlay Glint */}
                      <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 rounded-3xl pointer-events-none mix-blend-overlay"></div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Community 2: Padres 3.0 (Full Width) */}
      <section className="relative py-24 md:py-32 bg-[#050505]">
         <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-orange/5 -skew-x-12 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col-reverse md:flex-row-reverse gap-8 md:gap-16 items-center">
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
               <div className="flex-1 w-full md:w-auto relative group perspective-1000">
                   {/* Image Container with 3D tilt effect on hover */}
                   <div className="relative w-full aspect-video md:aspect-square max-w-[500px] mx-auto transform transition-transform duration-700 group-hover:-rotate-y-12 group-hover:rotate-x-6 will-change-transform">
                      <div className="absolute inset-0 bg-brand-orange/20 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
                      <img 
                        src="/images/parents-community.png" 
                        alt="Comunidad Padres 3.0" 
                        loading="lazy"
                        decoding="async"
                        className="relative z-10 w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl shadow-brand-orange/20 group-hover:shadow-brand-orange/40 transition-all duration-500"
                      />
                       {/* Overlay Glint */}
                      <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 rounded-3xl pointer-events-none mix-blend-overlay"></div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- SECTION 3: STARBOOKS APP (Interactive iPhone) --- */}
      <StarbooksAppSection t={t} />
    </div>
  );
};

// --- SUB-COMPONENT: Interactive iPhone Section ---
const StarbooksAppSection = ({ t }: { t: any }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [appLaunched, setAppLaunched] = useState(false);

  // Slide to Unlock Logic
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [0, 200], [1, 0]);
  const textOpacity = useTransform(x, [0, 150], [1, 0]);
  
  const handleDragEnd = () => {
    if (x.get() > 150) {
      setIsUnlocked(true);
    }
  };

  return (
    <section className="relative py-32 overflow-hidden bg-black">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
             
             {/* Text Content */}
             <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-brand-yellow mb-6">
                   <Smartphone size={14} />
                   <span>APP STORE EXCLUSIVE</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white font-display mb-6 tracking-tight">
                   {t.ecosystem.app.title}
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                   {t.ecosystem.app.desc_part1} <span className="text-white font-bold">{t.ecosystem.app.desc_part2}</span> {t.ecosystem.app.desc_part3}
                </p>
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                   {t.ecosystem.app.cta}
                </button>
             </div>

             {/* Interactive iPhone */}
             <div className="flex-1 relative flex justify-center perspective-1000">
                <motion.div 
                   className="relative w-[320px] h-[650px] bg-black rounded-[55px] border-[6px] border-[#3A3A3C] shadow-2xl overflow-hidden"
                   initial={{ rotateY: -10, rotateX: 5 }}
                   whileHover={{ rotateY: 0, rotateX: 0 }}
                   transition={{ type: "spring", stiffness: 100, damping: 20 }}
                   style={{ boxShadow: "0 0 0 2px #B45309, 0 20px 50px -10px rgba(245,158,11,0.3)" }} // Titanium Orange Border
                >
                   {/* --- SCREEN CONTENT --- */}
                   <div className="relative w-full h-full bg-black overflow-hidden">
                      
                      {/* 1. WALLPAPER (Starfield) */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e1b4b_0%,#000000_100%)]">
                         <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                      </div>

                      {/* 2. DYNAMIC ISLAND */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-50 flex items-center justify-center gap-3 px-3">
                         {/* Camera/FaceID sensors */}
                         <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                         <div className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f]"></div>
                      </div>

                      {/* 3. LOCKED SCREEN STATE */}
                      <motion.div 
                         className="absolute inset-0 flex flex-col items-center pt-20 z-20"
                         animate={{ y: isUnlocked ? -700 : 0, opacity: isUnlocked ? 0 : 1 }}
                         transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                         {/* Time */}
                         <h3 className="text-7xl font-bold text-white/90 font-display tracking-tight drop-shadow-lg">09:41</h3>
                         <p className="text-brand-orange font-semibold mt-2">Monday, June 5</p>
                         
                         {/* Notifications */}
                         <div className="mt-8 w-[90%] bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-lg">
                            <div className="flex items-center gap-3 mb-2">
                               <div className="w-5 h-5 rounded bg-brand-cyan flex items-center justify-center text-[10px] font-bold text-black">S</div>
                               <span className="text-xs text-gray-300 font-bold uppercase">STARBIZ • NOW</span>
                            </div>
                            <p className="text-white text-sm font-medium">Bienvenido al sistema operativo del líder.</p>
                         </div>

                         {/* SLIDE TO UNLOCK */}
                         <div className="absolute bottom-10 w-[80%]" ref={constraintsRef}>
                            <motion.div 
                               className="w-full h-[60px] bg-white/10 backdrop-blur-xl rounded-full relative flex items-center px-2"
                               style={{ opacity }}
                            >
                               <motion.div 
                                  className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing z-20"
                                  drag="x"
                                  dragConstraints={constraintsRef}
                                  dragElastic={0.1}
                                  onDragEnd={handleDragEnd}
                                  style={{ x }}
                               >
                                  <ArrowRight size={24} className="text-black" />
                               </motion.div>
                               <motion.span style={{ opacity: textOpacity }} className="absolute w-full text-center text-white/50 text-sm font-medium pointer-events-none">
                                  slide to unlock
                               </motion.span>
                            </motion.div>
                         </div>
                      </motion.div>

                      {/* 4. UNLOCKED HOME SCREEN */}
                      <motion.div 
                         className="absolute inset-0 pt-32 px-6 grid grid-cols-4 gap-4 content-start z-10"
                         initial={{ scale: 0.9, opacity: 0 }}
                         animate={{ scale: isUnlocked ? 1 : 0.9, opacity: isUnlocked ? 1 : 0 }}
                         transition={{ delay: 0.3 }}
                      >
                         {/* App Icons Grid */}
                         {[...Array(12)].map((_, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                               <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm"></div>
                            </div>
                         ))}

                         {/* STARBIZ APP (Center Stage) */}
                         <div className="col-span-4 flex justify-center mt-8">
                            <motion.button 
                               whileTap={{ scale: 0.9 }}
                               onClick={() => setAppLaunched(true)}
                               className="flex flex-col items-center gap-2 group"
                            >
                               <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-orange via-red-500 to-brand-purple shadow-[0_0_30px_rgba(249,115,22,0.4)] flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                  <Sparkles className="text-white w-10 h-10 animate-pulse" />
                                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                               </div>
                               <span className="text-white text-sm font-medium drop-shadow-md">StarbizApp</span>
                            </motion.button>
                         </div>
                      </motion.div>

                      {/* 5. APP LAUNCHED STATE (Full Screen) */}
                      {appLaunched && (
                         <motion.div 
                            className="absolute inset-0 bg-[#0A0A0A] z-30 flex flex-col items-center justify-center"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, type: "spring" }}
                         >
                            <img src="/images/ceo-junior.png" alt="App Interface" className="w-full h-full object-cover opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                               <h3 className="text-3xl font-bold text-white font-display">Welcome, CEO.</h3>
                            </div>
                            {/* Home Bar */}
                            <div className="absolute bottom-2 w-[40%] h-1 bg-white rounded-full left-1/2 -translate-x-1/2"></div>
                         </motion.div>
                      )}

                   </div>
                   
                   {/* Glass Reflection Overlay */}
                   <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-50 rounded-[50px]"></div>
                </motion.div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default Ecosystem;