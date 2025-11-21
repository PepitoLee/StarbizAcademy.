
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

                {/* THE IPHONE 3D CONTAINER - PHOTOREALISTIC IPHONE 17 PRO MAX */}
                <motion.div 
                   className="relative w-[315px] h-[650px]" // Pro Max Dimensions
                   style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                   onClick={handlePowerOn}
                >
                   {/* --- FRONT FACE (Screen) --- */}
                   <div 
                     className="absolute inset-0 bg-black rounded-[64px] backface-hidden"
                     style={{ 
                       transform: "translateZ(16px)",
                       // Complex Titanium Frame Simulation
                       boxShadow: `
                         inset 0 0 0 2px #453F3C, /* Inner Frame Dark */
                         inset 0 0 0 4px #8B7D76, /* Titanium Highlight */
                         0 0 0 1px #2E2A27 /* Outer Seam */
                       ` 
                     }}
                   >
                      {/* Ultra-Thin Bezels (1.5mm simulation) */}
                      <div className="absolute inset-[6px] bg-black rounded-[58px] overflow-hidden border border-[#111]">
                          
                          {/* Display Panel (OLED Black) */}
                          <div className="absolute inset-0 bg-[#000000]"></div>

                          {/* Glass Reflections (Premium Anti-glare) */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-20 z-50 pointer-events-none rounded-[58px]"></div>
                          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[600px] bg-gradient-to-b from-white/5 to-transparent rotate-12 blur-3xl pointer-events-none z-50"></div>
                          
                          {/* Dynamic Island (Integrated) */}
                          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-40 flex items-center justify-between px-3 shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                             {/* FaceID Sensors */}
                             <div className="w-10 h-full flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-[#080808] shadow-[inset_0_0_2px_#1a1a1a]"></div>
                             </div>
                             {/* Selfie Cam */}
                             <div className="w-3 h-3 rounded-full bg-[#050505] shadow-[inset_0_0_4px_#222] border border-[#111]">
                                <div className="w-1 h-1 rounded-full bg-[#1a1a3a] opacity-60 ml-[1px] mt-[1px]"></div> {/* Lens glint */}
                             </div>
                          </div>

                          {/* --- SCREEN CONTENT LAYERS --- */}
                          
                          {/* STATE: OFF (Always On) */}
                          {powerState === 'off' && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
                               <div className="opacity-30 flex flex-col items-center transform scale-90">
                                  <h3 className="text-7xl font-bold text-[#e5e5e5] font-display tracking-tighter">09:41</h3>
                                  <p className="text-[#a3a3a3] font-medium text-lg mt-2">Monday, June 5</p>
                               </div>
                               <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-40 animate-pulse">
                                  <div className="w-12 h-1 bg-white/20 rounded-full"></div>
                               </div>
                            </div>
                          )}

                          {/* STATE: BOOTING */}
                          {powerState === 'booting' && (
                            <div className="absolute inset-0 bg-black z-40 flex items-center justify-center">
                               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                                 <svg viewBox="0 0 384 512" width="80" fill="#f5f5f5">
                                   <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
                                 </svg>
                               </motion.div>
                            </div>
                          )}

                          {/* STATE: ON (App) */}
                          {powerState === 'on' && (
                            <motion.div 
                               className="absolute inset-0 bg-black z-30 flex flex-col"
                               initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                            >
                               <img src="/images/ceo-junior.png" alt="App" className="w-full h-full object-cover opacity-80" />
                               <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
                               
                               {/* UI Overlay */}
                               <div className="absolute top-20 left-6 right-6 text-white">
                                  <h4 className="text-3xl font-display font-bold tracking-wide">Starbiz<span className="text-brand-orange">OS</span></h4>
                                  <p className="text-white/60 text-sm font-medium mt-1">Bienvenido, Henry.</p>
                               </div>
                               
                               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-white rounded-full"></div>
                            </motion.div>
                          )}
                      </div>
                   </div>

                   {/* --- THICKNESS (Polished Deep Purple Titanium - Seamless Corners) --- */}
                   {/* Right Side */}
                   <div className="absolute top-[20px] right-0 w-[32px] h-[calc(100%-40px)]" 
                        style={{ 
                          transform: "rotateY(90deg) translateZ(-15px) translateX(15px)", 
                          transformOrigin: "right",
                          background: "linear-gradient(90deg, #2e1065, #581c87 30%, #a855f7 50%, #581c87 70%, #2e1065)", 
                          boxShadow: "inset 2px 0 4px rgba(255,255,255,0.2)" 
                        }}></div>
                   {/* Left Side */}
                   <div className="absolute top-[20px] left-0 w-[32px] h-[calc(100%-40px)]" 
                        style={{ 
                          transform: "rotateY(-90deg) translateZ(-15px) translateX(-15px)", 
                          transformOrigin: "left",
                          background: "linear-gradient(90deg, #2e1065, #581c87 30%, #a855f7 50%, #581c87 70%, #2e1065)",
                          boxShadow: "inset -2px 0 4px rgba(255,255,255,0.2)"
                        }}></div>
                   {/* Top Side */}
                   <div className="absolute top-0 left-[20px] w-[calc(100%-40px)] h-[32px]" 
                        style={{ 
                          transform: "rotateX(90deg) translateZ(-15px) translateY(-15px)", 
                          transformOrigin: "top",
                          background: "linear-gradient(180deg, #2e1065, #581c87 30%, #a855f7 50%, #581c87 70%, #2e1065)",
                        }}></div>
                   {/* Bottom Side */}
                   <div className="absolute bottom-0 left-[20px] w-[calc(100%-40px)] h-[32px]" 
                        style={{ 
                          transform: "rotateX(-90deg) translateZ(-15px) translateY(15px)", 
                          transformOrigin: "bottom",
                          background: "linear-gradient(0deg, #2e1065, #581c87 30%, #a855f7 50%, #581c87 70%, #2e1065)",
                          display: "flex", justifyContent: "center", alignItems: "center", gap: "40px"
                        }}>
                          {/* Speaker Holes & Port */}
                          <div className="w-12 h-1 bg-[#1a0b2e] rounded-full shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]"></div> 
                          <div className="w-12 h-1 bg-[#1a0b2e] rounded-full shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]"></div> 
                          <div className="absolute w-16 h-2 bg-[#0f0518] rounded-full border border-[#3b0764]"></div> 
                        </div>

                   {/* --- CORNER FILLERS (Smooth Rounding) --- */}
                   {/* These small spheres fill the gaps at the rounded corners in 3D space */}
                   <div className="absolute top-0 right-0 w-[32px] h-[32px] rounded-full bg-[#581c87]" style={{ transform: "translateZ(-15px) rotateY(45deg) translate(10px, -10px)" }}></div> 
                   <div className="absolute top-0 left-0 w-[32px] h-[32px] rounded-full bg-[#581c87]" style={{ transform: "translateZ(-15px) rotateY(-45deg) translate(-10px, -10px)" }}></div>
                   <div className="absolute bottom-0 right-0 w-[32px] h-[32px] rounded-full bg-[#581c87]" style={{ transform: "translateZ(-15px) rotateY(45deg) translate(10px, 10px)" }}></div>
                   <div className="absolute bottom-0 left-0 w-[32px] h-[32px] rounded-full bg-[#581c87]" style={{ transform: "translateZ(-15px) rotateY(-45deg) translate(-10px, 10px)" }}></div>


                   {/* --- BACK FACE (Glossy Deep Purple Glass) --- */}
                   <div 
                     className="absolute inset-0 bg-[#3b0764] rounded-[64px]" // Deep Purple Base
                     style={{ 
                       transform: "translateZ(-15px) rotateY(180deg)",
                       backfaceVisibility: "visible",
                       boxShadow: "inset 0 0 60px rgba(0,0,0,0.6)" // Deep depth
                     }}
                   >
                      {/* Glossy Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-60 rounded-[64px] pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#581c87]/40 to-transparent rounded-b-[64px] pointer-events-none"></div>
                      
                      {/* Apple Logo (Chrome) */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 drop-shadow-lg">
                         <svg viewBox="0 0 384 512" width="68" fill="#e9d5ff">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
                         </svg>
                      </div>
                      
                      {/* CAMERA MODULE (Glass on Glass) */}
                      <div 
                        className="absolute top-6 left-6 w-[145px] h-[150px] bg-[#4c1d95]/90 rounded-[45px]"
                        style={{
                           boxShadow: "0 15px 35px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.3)",
                           border: "1px solid rgba(255,255,255,0.1)",
                           backdropFilter: "blur(10px)"
                        }}
                      >
                         {/* LENS 1 (Wide) */}
                         <div className="absolute top-3 left-3 w-[54px] h-[54px] rounded-full bg-[#1e1b4b] shadow-[0_5px_15px_rgba(0,0,0,0.6)] flex items-center justify-center border-[2px] border-[#7c3aed]">
                            <div className="w-[48px] h-[48px] rounded-full border border-[#555] flex items-center justify-center bg-[#000]">
                               <div className="w-[36px] h-[36px] rounded-full bg-[#0a0a0a] relative overflow-hidden shadow-inner">
                                  <div className="absolute inset-0 bg-gradient-to-tr from-[#4c1d95] to-[#000] opacity-60"></div>
                                  <div className="absolute w-4 h-2 bg-white/40 blur-sm rotate-45 top-3 left-2"></div>
                               </div>
                            </div>
                         </div>

                         {/* LENS 2 (Ultra Wide) */}
                         <div className="absolute bottom-3 left-3 w-[54px] h-[54px] rounded-full bg-[#1e1b4b] shadow-[0_5px_15px_rgba(0,0,0,0.6)] flex items-center justify-center border-[2px] border-[#7c3aed]">
                            <div className="w-[48px] h-[48px] rounded-full border border-[#555] flex items-center justify-center bg-[#000]">
                               <div className="w-[36px] h-[36px] rounded-full bg-[#0a0a0a] relative overflow-hidden shadow-inner">
                                  <div className="absolute inset-0 bg-gradient-to-tr from-[#4c1d95] to-[#000] opacity-60"></div>
                                  <div className="absolute w-4 h-2 bg-white/40 blur-sm rotate-45 top-3 left-2"></div>
                               </div>
                            </div>
                         </div>

                         {/* LENS 3 (Telephoto) */}
                         <div className="absolute top-1/2 -translate-y-1/2 right-3 w-[54px] h-[54px] rounded-full bg-[#1e1b4b] shadow-[0_5px_15px_rgba(0,0,0,0.6)] flex items-center justify-center border-[2px] border-[#7c3aed]">
                            <div className="w-[48px] h-[48px] rounded-full border border-[#555] flex items-center justify-center bg-[#000]">
                               <div className="w-[30px] h-[30px] rounded-full bg-[#000] relative overflow-hidden shadow-inner border border-[#222]">
                                  <div className="absolute inset-0 bg-gradient-to-tr from-[#4c1d95] to-[#000] opacity-60"></div>
                                  <div className="absolute w-3 h-3 bg-white/40 blur-sm top-2 left-2"></div>
                               </div>
                            </div>
                         </div>

                         {/* LiDAR / Flash */}
                         <div className="absolute bottom-5 right-5 w-[18px] h-[18px] rounded-full bg-[#2e1065] shadow-inner border border-[#581c87]"></div>
                         <div className="absolute top-5 right-6 w-[16px] h-[16px] rounded-full bg-[#f3e8ff] shadow-[0_0_8px_rgba(255,255,255,0.6)] border border-white flex items-center justify-center">
                            <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
                         </div>
                         
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