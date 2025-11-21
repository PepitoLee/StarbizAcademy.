import React, { useState, useRef, useEffect } from 'react';
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
                   <div className="relative w-full aspect-video md:aspect-square max-w-[500px] mx-auto transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-6 will-change-transform">
                      <div className="absolute inset-0 bg-brand-cyan/20 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
                      <img 
                        src="/images/stareduca-community.png" 
                        alt="Comunidad StarEduca" 
                        loading="lazy"
                        decoding="async"
                        className="relative z-10 w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl shadow-brand-cyan/20 group-hover:shadow-brand-cyan/40 transition-all duration-500"
                      />
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
                   <div className="relative w-full aspect-video md:aspect-square max-w-[500px] mx-auto transform transition-transform duration-700 group-hover:-rotate-y-12 group-hover:rotate-x-6 will-change-transform">
                      <div className="absolute inset-0 bg-brand-orange/20 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
                      <img 
                        src="/images/parents-community.png" 
                        alt="Comunidad Padres 3.0" 
                        loading="lazy"
                        decoding="async"
                        className="relative z-10 w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl shadow-brand-orange/20 group-hover:shadow-brand-orange/40 transition-all duration-500"
                      />
                       <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 rounded-3xl pointer-events-none mix-blend-overlay"></div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- SECTION 3: STARBOOKS APP (Interactive iPhone from IPGONE file) --- */}
      <StarbooksAppSection t={t} />
    </div>
  );
};

// --- SUB-COMPONENT: Interactive 3D iPhone Section (Ported from ipgone) ---
const StarbooksAppSection = ({ t }: { t: any }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0); // 0: Idle, 1: Boot, 2: Home, 3: App
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const scene = sceneRef.current;
    const container = containerRef.current;
    if (!scene || !container) return;

    let rotX = -10;
    let rotY = 0;
    let curRotX = -10;
    let curRotY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let animationFrameId: number;

    const updateTransform = () => {
      curRotX += (rotX - curRotX) * 0.1;
      curRotY += (rotY - curRotY) * 0.1;
      
      if (scene) {
          if(phase === 0) {
             scene.style.transform = `rotateX(${curRotX}deg) rotateY(${curRotY}deg) scale(1)`;
             if (!isDragging) rotY += 0.2; // Auto rotate
          } else {
             // Centered and locked when active
             scene.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
          }
      }
      animationFrameId = requestAnimationFrame(updateTransform);
    };
    updateTransform();

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      if (phase !== 0) return;
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      startX = clientX;
      startY = clientY;
      scene.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || phase !== 0) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      const deltaX = clientX - startX;
      const deltaY = clientY - startY;
      
      rotY += deltaX * 0.5;
      rotX -= deltaY * 0.5;
      
      startX = clientX;
      startY = clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
      if(scene) scene.style.cursor = 'grab';
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchstart', handleMouseDown);
    window.addEventListener('touchmove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [phase]);

  const handleScreenClick = () => {
    if (phase > 0) return;
    setPhase(1); // Start sequence
    setIsLocked(true);
    
    // Sequence Logic
    setTimeout(() => setPhase(2), 2000); // Show Home after 2s
    setTimeout(() => setPhase(3), 5000); // Show App after 5s
  };

  const handleReset = () => {
    setPhase(0);
    setIsLocked(false);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-black" ref={containerRef}>
       {/* CSS Styles embedded for the 3D iPhone */}
       <style>{`
        .iphone-scene { perspective: 1200px; width: 300px; height: 600px; position: relative; transform-style: preserve-3d; cursor: grab; }
        .iphone-body { position: absolute; width: 100%; height: 100%; transform-style: preserve-3d; }
        .face { position: absolute; background-color: #1a1a1a; border: 1px solid #333; backface-visibility: visible; }
        
        .face-front { width: 300px; height: 600px; border-radius: 48px; transform: translateZ(15px); background: #000; border: 4px solid #2c2c2c; overflow: hidden; display: flex; justify-content: center; align-items: center; }
        .face-back { width: 300px; height: 600px; border-radius: 48px; transform: translateZ(-15px) rotateY(180deg); background: linear-gradient(135deg, #1c1c1c 0%, #111 100%); border: 1px solid #2a2a2a; }
        
        .face-right { width: 30px; height: 540px; top: 30px; left: 135px; background: linear-gradient(to right, #2c2c2c, #1a1a1a, #2c2c2c); transform: rotateY(90deg) translateZ(148px); }
        .face-left { width: 30px; height: 540px; top: 30px; left: 135px; background: linear-gradient(to right, #2c2c2c, #1a1a1a, #2c2c2c); transform: rotateY(-90deg) translateZ(148px); }
        .face-top { width: 240px; height: 30px; left: 30px; top: 285px; background: linear-gradient(to bottom, #2c2c2c, #1a1a1a, #2c2c2c); transform: rotateX(90deg) translateZ(298px); }
        .face-bottom { width: 240px; height: 30px; left: 30px; top: 285px; background: linear-gradient(to bottom, #2c2c2c, #1a1a1a, #2c2c2c); transform: rotateX(-90deg) translateZ(298px); }
        
        .screen-content { width: 100%; height: 100%; background: #000; position: relative; overflow: hidden; }
        .dynamic-island { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); width: 90px; height: 28px; background: #000; border-radius: 20px; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 0 8px; }
        .island-cam { width: 10px; height: 10px; background: #1a1a1a; border-radius: 50%; box-shadow: inset 0 0 2px #333; }
        
        .screen-layer { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; transition: opacity 0.5s ease; pointer-events: none; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .screen-layer.active { opacity: 1; pointer-events: auto; }
        
        /* App Grid */
        .app-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px 10px; padding: 20px; margin-top: 50px; width: 100%; }
        .app-icon { width: 55px; height: 55px; background: rgba(255,255,255,0.2); border-radius: 14px; margin: 0 auto; }
        .star-app-icon { width: 70px; height: 70px; background: linear-gradient(135deg, #ff0080, #ff6600); border-radius: 16px; display: flex; justify-content: center; align-items: center; font-size: 35px; margin-top: 30px; animation: pulse-icon 2s infinite; }
        
        @keyframes pulse-icon { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(255,0,128,0.5); } }
       `}</style>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Instructions */}
          <div className="flex-1 text-center lg:text-left pointer-events-none z-20">
             <h2 className="text-5xl font-bold text-white font-display mb-4">{t.ecosystem.app.title}</h2>
             <p className="text-xl text-gray-400 mb-8">
                {phase === 0 ? "Arrastra para rotar. Haz click en la pantalla para iniciar." : "Experiencia interactiva iniciada."}
             </p>
             {phase === 3 && (
                <button onClick={handleReset} className="bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full pointer-events-auto hover:bg-white/20 transition-colors">
                   Reiniciar
                </button>
             )}
          </div>

          {/* 3D Scene */}
          <div className="flex-1 flex justify-center h-[700px] items-center perspective-1200">
             <div id="scene" ref={sceneRef} className="iphone-scene">
                <div className="iphone-body">
                   {/* Front */}
                   <div className="face face-front">
                      <div className="screen-content" onClick={handleScreenClick}>
                         <div className="dynamic-island"><div className="island-cam"></div></div>
                         
                         {/* Boot Layer */}
                         <div className={`screen-layer ${phase === 1 ? 'active' : ''}`} style={{ background: '#000' }}>
                            <svg width="80" viewBox="0 0 384 512" fill="white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 102.1 78 102.1 18 0 25.8-12.5 59.5-12.5 32.9 0 40.6 12.5 62.6 12.5 32 0 61.7-56 75.2-82.7-47-22.2-55.6-73.5-15-105.4zM249.4 92c18.9-27.4 30.4-63.9 26.4-92-24.4 2.6-60.3 20.8-81.2 48.1-19.2 24.7-31.1 61-26.1 90.9 29.4 3.5 62.3-20.1 80.9-47z"/></svg>
                         </div>

                         {/* Home Layer */}
                         <div className={`screen-layer ${phase === 2 ? 'active' : ''}`} style={{ background: 'linear-gradient(180deg, #4c1d95 0%, #2563eb 100%)', justifyContent: 'flex-start' }}>
                            <div className="app-grid">
                               {[...Array(8)].map((_,i) => <div key={i} className="app-icon"></div>)}
                            </div>
                            <div className="star-app-icon">⭐</div>
                         </div>

                         {/* App Layer */}
                         <div className={`screen-layer ${phase === 3 ? 'active' : ''}`} style={{ background: '#0f0c29' }}>
                            <h3 className="text-3xl font-bold text-white font-display">StarBiz</h3>
                            <p className="text-brand-cyan">PRÓXIMAMENTE</p>
                         </div>
                         
                         {/* Idle/Off Layer */}
                         <div className={`screen-layer ${phase === 0 ? 'active' : ''}`} style={{ background: '#000' }}>
                            <h3 className="text-6xl font-bold text-white/30 font-mono">09:41</h3>
                         </div>
                      </div>
                   </div>

                   {/* Back */}
                   <div className="face face-back">
                      <svg width="60" viewBox="0 0 384 512" fill="#333"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 102.1 78 102.1 18 0 25.8-12.5 59.5-12.5 32.9 0 40.6 12.5 62.6 12.5 32 0 61.7-56 75.2-82.7-47-22.2-55.6-73.5-15-105.4zM249.4 92c18.9-27.4 30.4-63.9 26.4-92-24.4 2.6-60.3 20.8-81.2 48.1-19.2 24.7-31.1 61-26.1 90.9 29.4 3.5 62.3-20.1 80.9-47z"/></svg>
                   </div>

                   {/* Sides */}
                   <div className="face face-right"></div>
                   <div className="face face-left"></div>
                   <div className="face face-top"></div>
                   <div className="face face-bottom"></div>
                </div>
             </div>
          </div>

       </div>
    </section>
  );
};

export default Ecosystem;