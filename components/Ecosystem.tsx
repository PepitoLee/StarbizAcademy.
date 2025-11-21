
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

                {/* THE IPHONE 3D CONTAINER - HYPER-REALISTIC HYBRID */}
                <motion.div 
                   className="relative w-[310px] h-[650px]"
                   style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                   onClick={handlePowerOn}
                >
                   {/* --- 1. FRONT FACE (Screen & Bezel) --- */}
                   <div 
                     className="absolute inset-0 bg-black rounded-[58px] backface-hidden overflow-hidden"
                     style={{ 
                       transform: "translateZ(15px)",
                       boxShadow: "inset 0 0 4px rgba(255,255,255,0.1), 0 0 2px rgba(0,0,0,0.8)" // Edge highlight
                     }}
                   >
                      {/* Bezel & Screen SVG Texture */}
                      <svg viewBox="0 0 310 650" className="absolute inset-0 w-full h-full">
                         <defs>
                            <linearGradient id="glassReflect" x1="0%" y1="0%" x2="100%" y2="100%">
                               <stop offset="0%" stopColor="white" stopOpacity="0.05" />
                               <stop offset="40%" stopColor="white" stopOpacity="0" />
                               <stop offset="60%" stopColor="white" stopOpacity="0" />
                               <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                            </linearGradient>
                         </defs>
                         {/* Black Glass Body */}
                         <rect width="310" height="650" rx="58" fill="#000" />
                         {/* Active Screen Area (Inner) */}
                         <rect x="10" y="10" width="290" height="630" rx="48" fill="#000" />
                         {/* Reflection Overlay */}
                         <rect width="310" height="650" rx="58" fill="url(#glassReflect)" />
                      </svg>

                      {/* Dynamic Island (Physical Element) */}
                      <div className="absolute top-7 left-1/2 -translate-x-1/2 w-[96px] h-[28px] bg-black rounded-full z-50 flex items-center justify-center gap-3 shadow-[0_0_1px_rgba(255,255,255,0.1)]">
                         <div className="w-16 h-full relative overflow-hidden rounded-full">
                            <div className="absolute top-1 left-2 w-3 h-3 rounded-full bg-[#1a1a1a] shadow-inner"></div> {/* Selfie Cam */}
                            <div className="absolute top-2 right-3 w-1.5 h-1.5 rounded-full bg-[#0f0f0f]"></div> {/* Sensor */}
                         </div>
                      </div>

                      {/* CONTENT LAYERS */}
                      {powerState === 'off' && (
                        <div className="absolute inset-[10px] rounded-[48px] flex flex-col items-center justify-center z-30 overflow-hidden">
                           <div className="opacity-20 flex flex-col items-center transform scale-90">
                              <h3 className="text-6xl font-bold text-[#e5e5e5] font-display tracking-tighter">09:41</h3>
                              <p className="text-[#a3a3a3] font-medium text-lg mt-2">Monday, June 5</p>
                           </div>
                           <p className="absolute bottom-10 text-[#333] font-mono text-[10px] tracking-widest animate-pulse">TOUCH TO WAKE</p>
                        </div>
                      )}

                      {/* BOOT & APP Layers... (Same as before) */}
                      {powerState === 'booting' && (
                        <div className="absolute inset-[10px] bg-black z-40 flex items-center justify-center rounded-[48px]">
                           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                             <svg viewBox="0 0 384 512" width="70" fill="white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
                           </motion.div>
                        </div>
                      )}
                      {powerState === 'on' && (
                        <motion.div className="absolute inset-[10px] bg-black z-30 flex flex-col rounded-[48px] overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                           <img src="/images/ceo-junior.png" alt="App" className="w-full h-full object-cover opacity-70" />
                           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
                           <div className="absolute top-16 left-4 right-4 text-white">
                              <h4 className="text-2xl font-display font-bold">Hola, Líder.</h4>
                              <p className="text-brand-cyan text-xs">Sistema Activo</p>
                           </div>
                           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white rounded-full"></div>
                        </motion.div>
                      )}
                   </div>

                   {/* --- 2. SIDES (Titanium Texture SVG) --- */}
                   <svg width="0" height="0">
                     <defs>
                       <linearGradient id="sideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                         <stop offset="0%" stopColor="#1A2630" />
                         <stop offset="50%" stopColor="#3E5563" />
                         <stop offset="100%" stopColor="#1A2630" />
                       </linearGradient>
                     </defs>
                   </svg>
                   {/* Right */}
                   <div className="absolute top-0 right-0 w-[30px] h-full rounded-r-[20px]" style={{ transform: "rotateY(90deg) translateZ(-15px) translateX(15px)", transformOrigin: "right", background: "#273642" }}>
                      <svg width="30" height="650" className="w-full h-full opacity-80"><rect width="100%" height="100%" fill="url(#sideGrad)"/></svg>
                   </div>
                   {/* Left */}
                   <div className="absolute top-0 left-0 w-[30px] h-full rounded-l-[20px]" style={{ transform: "rotateY(-90deg) translateZ(-15px) translateX(-15px)", transformOrigin: "left", background: "#273642" }}>
                      <svg width="30" height="650" className="w-full h-full opacity-80"><rect width="100%" height="100%" fill="url(#sideGrad)"/></svg>
                   </div>
                   {/* Top/Bottom Caps (Simplified for performance) */}
                   <div className="absolute top-0 left-0 w-full h-[30px] bg-[#2F4452] rounded-t-[20px]" style={{ transform: "rotateX(90deg) translateZ(-15px) translateY(-15px)", transformOrigin: "top" }}></div>
                   <div className="absolute bottom-0 left-0 w-full h-[30px] bg-[#2F4452] rounded-b-[20px]" style={{ transform: "rotateX(-90deg) translateZ(-15px) translateY(15px)", transformOrigin: "bottom" }}></div>

                   {/* --- 3. BACK FACE (Hyper-Realistic Camera) --- */}
                   <div 
                     className="absolute inset-0 bg-[#2F4452] rounded-[58px] backface-visible"
                     style={{ 
                       transform: "translateZ(-15px) rotateY(180deg)",
                       boxShadow: "inset 0 0 20px rgba(0,0,0,0.6)" // Depth
                     }}
                   >
                      {/* Matte Texture SVG */}
                      <svg className="absolute inset-0 w-full h-full rounded-[58px]">
                         <defs>
                            <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter>
                            <linearGradient id="backGrad" x1="0" y1="0" x2="1" y2="1">
                               <stop offset="0%" stopColor="#3E5563"/>
                               <stop offset="100%" stopColor="#2F4452"/>
                            </linearGradient>
                         </defs>
                         <rect width="100%" height="100%" fill="url(#backGrad)"/>
                         <rect width="100%" height="100%" filter="url(#noise)" opacity="0.05"/>
                      </svg>

                      {/* Apple Logo */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
                         <svg viewBox="0 0 384 512" width="64" fill="#1a1a1a"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
                      </div>

                      {/* CAMERA BUMP (3D CSS + SVG) */}
                      <div 
                        className="absolute top-6 left-6 w-[140px] h-[145px] rounded-[38px]"
                        style={{
                           background: "linear-gradient(135deg, #374a57, #2F4452)",
                           boxShadow: "0 8px 20px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1)",
                           border: "1px solid rgba(255,255,255,0.05)"
                        }}
                      >
                         {/* LENS 1 */}
                         <div className="absolute top-2 left-2 w-[56px] h-[56px] rounded-full bg-[#181818] border-[3px] border-[#4A6070] shadow-md flex items-center justify-center">
                            <div className="w-[46px] h-[46px] rounded-full bg-[#050505] flex items-center justify-center overflow-hidden relative">
                               <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a40] to-transparent opacity-60 rounded-full"></div> {/* Lens Flare */}
                               <div className="w-[20px] h-[20px] bg-[#000] rounded-full border border-[#222]"></div> {/* Pupil */}
                               <div className="absolute top-3 left-3 w-2 h-2 bg-white opacity-40 blur-[1px] rounded-full"></div> {/* Glint */}
                            </div>
                         </div>
                         {/* LENS 2 */}
                         <div className="absolute bottom-2 left-2 w-[56px] h-[56px] rounded-full bg-[#181818] border-[3px] border-[#4A6070] shadow-md flex items-center justify-center">
                            <div className="w-[46px] h-[46px] rounded-full bg-[#050505] flex items-center justify-center overflow-hidden relative">
                               <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a40] to-transparent opacity-60 rounded-full"></div>
                               <div className="w-[24px] h-[24px] bg-[#000] rounded-full border border-[#222]"></div>
                               <div className="absolute top-3 left-3 w-2 h-2 bg-white opacity-40 blur-[1px] rounded-full"></div>
                            </div>
                         </div>
                         {/* LENS 3 */}
                         <div className="absolute top-1/2 -translate-y-1/2 right-2 w-[56px] h-[56px] rounded-full bg-[#181818] border-[3px] border-[#4A6070] shadow-md flex items-center justify-center">
                            <div className="w-[46px] h-[46px] rounded-full bg-[#050505] flex items-center justify-center overflow-hidden relative">
                               <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a40] to-transparent opacity-60 rounded-full"></div>
                               <div className="w-[18px] h-[18px] bg-[#000] rounded-full border border-[#222]"></div>
                               <div className="absolute top-3 left-3 w-2 h-2 bg-white opacity-40 blur-[1px] rounded-full"></div>
                            </div>
                         </div>
                         {/* LiDAR */}
                         <div className="absolute bottom-4 right-4 w-[20px] h-[20px] rounded-full bg-[#111] border border-[#333] shadow-inner bg-[radial-gradient(#333,#000)]"></div>
                         {/* Flash */}
                         <div className="absolute top-4 right-4 w-[18px] h-[18px] rounded-full bg-[#fff] border border-[#ccc] shadow-[0_0_5px_white] opacity-80"></div>
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
