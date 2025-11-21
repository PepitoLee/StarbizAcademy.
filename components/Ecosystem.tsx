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

// --- SUB-COMPONENT: Interactive 3D iPhone Section ---
const StarbooksAppSection = ({ t }: { t: any }) => {
  const [powerState, setPowerState] = useState<'off' | 'booting' | 'on'>('off');
  
  // Rotation State - Infinite Freedom
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Map drag distance directly to rotation degrees (1px = 0.5deg for smooth control)
  const rotateX = useTransform(y, (value) => value * -0.5); 
  const rotateY = useTransform(x, (value) => value * 0.5);

  const handlePowerOn = () => {
    if (powerState === 'off') {
      setPowerState('booting');
      // Boot sequence
      setTimeout(() => {
        setPowerState('on');
      }, 3500); // 3.5s boot time
    }
  };

  return (
    <section className="relative py-32 overflow-hidden bg-black perspective-2000">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
             
             {/* Text Content */}
             <div className="flex-1 text-center lg:text-left pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-brand-yellow mb-6">
                   <Smartphone size={14} />
                   <span>INTERACTIVE 3D DEMO</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white font-display mb-6 tracking-tight">
                   {t.ecosystem.app.title}
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                   Desliza para girar. <span className="text-white font-bold">Haz click para encender.</span>
                </p>
             </div>

             {/* 3D Interactive Area */}
             <div className="flex-1 relative flex justify-center items-center h-[700px] w-full perspective-1000">
                
                {/* Draggable Area Overlay - Full Freedom */}
                <motion.div 
                   className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
                   style={{ x, y }}
                   drag
                   dragElastic={0} // No elastic bounce back
                   dragMomentum={false} // Precise control
                   onDragEnd={() => {
                     // Optional: Add momentum here if desired
                   }}
                ></motion.div>

                {/* THE IPHONE 3D CONTAINER - IPHONE 17 PRO MAX REALISM */}
                <motion.div 
                   className="relative w-[310px] h-[640px]" // Slightly wider for Pro Max feel
                   style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                   onClick={handlePowerOn}
                >
                   {/* --- FRONT FACE (Screen) --- */}
                   <div 
                     className="absolute inset-0 bg-black rounded-[60px] overflow-hidden backface-hidden"
                     style={{ 
                       transform: "translateZ(14px)",
                       // Titanium Frame Effect (Front Edge)
                       border: "2px solid #6b5b50", // Darker bronze base
                       boxShadow: "inset 0 0 0 2px #2a2a2a, inset 0 0 0 4px #000" // Bezel layers
                     }}
                   >
                      {/* Screen Bezel (Ultra Thin) */}
                      <div className="absolute inset-[5px] bg-black rounded-[54px] overflow-hidden">
                          
                          {/* Glass Reflection (Curved Edge) */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent opacity-40 z-50 pointer-events-none rounded-[54px]"></div>
                          <div className="absolute top-0 right-0 w-[200px] h-[300px] bg-gradient-to-bl from-white/10 to-transparent opacity-30 blur-2xl z-50 pointer-events-none"></div>
                          
                          {/* Dynamic Island (Refined) */}
                          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[96px] h-[26px] bg-black rounded-full z-40 flex items-center justify-center gap-3 shadow-sm border border-[#1a1a1a]">
                             <div className="w-2.5 h-2.5 rounded-full bg-[#0f0f0f] shadow-[inset_0_0_4px_rgba(255,255,255,0.1)]"></div> {/* Camera */}
                             <div className="w-1.5 h-1.5 rounded-full bg-[#080808]"></div>
                          </div>

                          {/* --- STATE: OFF --- */}
                          {powerState === 'off' && (
                            <div className="absolute inset-0 bg-[#050505] flex flex-col items-center justify-center">
                               {/* Always On Display Date (Very Dim) */}
                               <div className="opacity-20 flex flex-col items-center">
                                  <h3 className="text-6xl font-bold text-white/50 font-display tracking-tight">09:41</h3>
                                  <p className="text-white/30 font-medium mt-2">Monday 5</p>
                               </div>
                               <p className="absolute bottom-10 text-[#333] font-mono text-[10px] tracking-widest animate-pulse">TOUCH TO WAKE</p>
                            </div>
                          )}

                          {/* --- STATE: BOOTING (Apple Logo) --- */}
                          {powerState === 'booting' && (
                            <div className="absolute inset-0 bg-black flex items-center justify-center">
                               <motion.div 
                                 initial={{ opacity: 0, scale: 0.8 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 transition={{ duration: 1 }}
                               >
                                 <svg viewBox="0 0 384 512" width="70" fill="white">
                                   <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
                                 </svg>
                               </motion.div>
                            </div>
                          )}

                          {/* --- STATE: ON (Starbiz App) --- */}
                          {powerState === 'on' && (
                            <motion.div 
                               className="absolute inset-0 bg-[#0A0A0A] flex flex-col"
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ duration: 0.5 }}
                            >
                               <div className="flex-1 relative">
                                  <img src="/images/ceo-junior.png" alt="App" className="w-full h-full object-cover opacity-60" />
                                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
                                  <div className="absolute top-20 left-6 right-6">
                                     <h4 className="text-white text-2xl font-display font-bold">Hola, Líder.</h4>
                                     <p className="text-brand-cyan text-sm">Nivel 7 Desbloqueado</p>
                                  </div>
                                  <div className="absolute bottom-10 left-6 right-6 flex flex-col gap-3">
                                     <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                                        <p className="text-white text-xs font-bold mb-1">RENDIMIENTO SEMANAL</p>
                                        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                                           <motion.div className="h-full bg-brand-orange" initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ delay: 0.5, duration: 1 }} />
                                        </div>
                                     </div>
                                     <div className="bg-brand-cyan text-black p-4 rounded-2xl font-bold text-center shadow-lg shadow-brand-cyan/20">CONTINUAR CURSO</div>
                                  </div>
                               </div>
                               <div className="h-1 w-1/3 bg-white rounded-full mx-auto mb-3 opacity-50"></div>
                            </motion.div>
                          )}
                      </div>
                   </div>

                   {/* --- THICKNESS (Titanium Frame - Natural Titanium/Orange Tint) --- */}
                   {/* Right Side */}
                   <div className="absolute top-0 right-0 w-[28px] h-full bg-gradient-to-l from-[#8B7D76] via-[#D6Cfc7] to-[#8B7D76] rounded-r-[16px]" 
                        style={{ transform: "rotateY(90deg) translateZ(-14px) translateX(14px)", transformOrigin: "right" }}></div>
                   {/* Left Side */}
                   <div className="absolute top-0 left-0 w-[28px] h-full bg-gradient-to-r from-[#8B7D76] via-[#D6Cfc7] to-[#8B7D76] rounded-l-[16px]" 
                        style={{ transform: "rotateY(-90deg) translateZ(-14px) translateX(-14px)", transformOrigin: "left" }}></div>
                   {/* Top Side */}
                   <div className="absolute top-0 left-0 w-full h-[28px] bg-gradient-to-b from-[#8B7D76] via-[#D6Cfc7] to-[#8B7D76] rounded-t-[24px]" 
                        style={{ transform: "rotateX(90deg) translateZ(-14px) translateY(-14px)", transformOrigin: "top" }}></div>
                   {/* Bottom Side */}
                   <div className="absolute bottom-0 left-0 w-full h-[28px] bg-gradient-to-t from-[#8B7D76] via-[#D6Cfc7] to-[#8B7D76] rounded-b-[24px]" 
                        style={{ transform: "rotateX(-90deg) translateZ(-14px) translateY(14px)", transformOrigin: "bottom" }}></div>


                   {/* --- BACK FACE (Matte Glass + Pro Camera) --- */}
                   <div 
                     className="absolute inset-0 bg-[#2e2a27] rounded-[60px]" // Dark Titanium/Desert color
                     style={{ 
                       transform: "translateZ(-14px) rotateY(180deg)",
                       backfaceVisibility: "visible",
                       boxShadow: "inset 0 0 40px rgba(0,0,0,0.5)"
                     }}
                   >
                      {/* Matte Texture */}
                      <div className="absolute inset-0 bg-white/5 rounded-[60px] backdrop-blur-[2px]"></div>
                      
                      {/* Apple Logo (Polished Mirror) */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 brightness-125">
                         <svg viewBox="0 0 384 512" width="64" fill="#e5e5e5">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
                         </svg>
                      </div>
                      
                      {/* CAMERA MODULE (Pro Triple Lens) */}
                      <div className="absolute top-5 left-5 w-[130px] h-[135px] bg-[#383330]/80 rounded-[38px] shadow-[0_10px_20px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md border border-white/5">
                         {/* Lens 1 (Top Left) */}
                         <div className="absolute top-3 left-3 w-16 h-16 rounded-full bg-[#1a1a1a] border-[3px] border-[#6b5b50] shadow-lg flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-[#050505] border border-[#333] flex items-center justify-center overflow-hidden">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a1a40] to-[#000] opacity-80 shadow-inner"></div>
                                <div className="absolute w-4 h-4 rounded-full bg-white/10 blur-sm top-3 left-3"></div>
                            </div>
                         </div>
                         {/* Lens 2 (Bottom Left) */}
                         <div className="absolute bottom-3 left-3 w-16 h-16 rounded-full bg-[#1a1a1a] border-[3px] border-[#6b5b50] shadow-lg flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-[#050505] border border-[#333] flex items-center justify-center overflow-hidden">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a1a40] to-[#000] opacity-80 shadow-inner"></div>
                                <div className="absolute w-4 h-4 rounded-full bg-white/10 blur-sm top-3 left-3"></div>
                            </div>
                         </div>
                         {/* Lens 3 (Right Center) */}
                         <div className="absolute top-1/2 -translate-y-1/2 right-3 w-16 h-16 rounded-full bg-[#1a1a1a] border-[3px] border-[#6b5b50] shadow-lg flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-[#050505] border border-[#333] flex items-center justify-center overflow-hidden">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a1a40] to-[#000] opacity-80 shadow-inner"></div>
                                <div className="absolute w-4 h-4 rounded-full bg-white/10 blur-sm top-3 left-3"></div>
                            </div>
                         </div>
                         {/* LiDAR / Flash */}
                         <div className="absolute bottom-4 right-5 w-4 h-4 rounded-full bg-[#888] opacity-50 border border-[#555]"></div>
                         <div className="absolute top-4 right-6 w-2 h-2 rounded-full bg-[#111] opacity-80 border border-[#333]"></div>
                      </div>
                   </div>

                </motion.div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default Ecosystem;