import React, { useState, useRef, useEffect } from 'react';
import { Users, Sparkles, Smartphone, ArrowRight, X } from 'lucide-react';
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

      {/* --- SECTION 3: STARBOOKS APP (Interactive iPhone) --- */}
      <section className="relative py-32 overflow-hidden bg-black" style={{ background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)' }}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               
               {/* Text Content */}
               <div className="flex-1 text-center lg:text-left z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-brand-cyan mb-6">
                     <Smartphone size={14} />
                     <span>APP STORE EXCLUSIVE</span>
                  </div>
                  
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                     {t.ecosystem.app.desc_part1} <span className="text-white font-bold">{t.ecosystem.app.desc_part2}</span> {t.ecosystem.app.desc_part3}
                  </p>
                  <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                     {t.ecosystem.app.cta}
                  </button>
               </div>

               {/* Interactive iPhone Container */}
               <div className="flex-1 w-full flex justify-center">
                  <StarbooksAppSection t={t} />
               </div>

            </div>
         </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENT: Custom IPGONE Design ---
const StarbooksAppSection = ({ t }: { t: any }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);
  const resetBtnRef = useRef<HTMLButtonElement>(null);
  const screenContentRef = useRef<HTMLDivElement>(null);
  
  const stateRef = useRef({
    rotX: -10,
    rotY: 0,
    curRotX: -10,
    curRotY: 0,
    scale: 1,
    isDragging: false,
    startX: 0,
    startY: 0,
    autoRotate: true,
    isLocked: false,
    sequencePhase: 0
  });

  useEffect(() => {
    const scene = sceneRef.current;
    const container = containerRef.current;
    const uiText = uiRef.current;
    const resetBtn = resetBtnRef.current;
    const screenContent = screenContentRef.current;
    
    if (!scene || !container || !uiText || !resetBtn || !screenContent) return;

    let animationFrameId: number;

    const updateTransform = () => {
      const s = stateRef.current;
      s.curRotX += (s.rotX - s.curRotX) * 0.1;
      s.curRotY += (s.rotY - s.curRotY) * 0.1;
      
      if (!s.isLocked) {
          scene.style.transform = `rotateX(${s.curRotX}deg) rotateY(${s.curRotY}deg) scale(${s.scale})`;
      } else {
          scene.style.transform = `rotateX(0deg) rotateY(0deg) scale(${Math.max(1, s.scale)})`;
      }
      
      if (s.autoRotate && !s.isDragging && !s.isLocked) {
          s.rotY += 0.3;
      }
      
      animationFrameId = requestAnimationFrame(updateTransform);
    };
    updateTransform();

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      if (stateRef.current.isLocked) return;
      if (e.target === resetBtn) return;

      stateRef.current.isDragging = true;
      stateRef.current.autoRotate = false;
      
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      stateRef.current.startX = clientX;
      stateRef.current.startY = clientY;
      scene.classList.add('grabbing');
      if(uiText) uiText.style.opacity = '0';
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!stateRef.current.isDragging || stateRef.current.isLocked) return;
      
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      const deltaX = clientX - stateRef.current.startX;
      const deltaY = clientY - stateRef.current.startY;
      
      stateRef.current.rotY += deltaX * 0.5;
      stateRef.current.rotX -= deltaY * 0.5;
      
      stateRef.current.rotX = Math.max(-60, Math.min(60, stateRef.current.rotX));
      
      stateRef.current.startX = clientX;
      stateRef.current.startY = clientY;
    };

    const handleMouseUp = () => {
      stateRef.current.isDragging = false;
      scene.classList.remove('grabbing');
    };

    const handleWheel = (e: WheelEvent) => {
       if(stateRef.current.isLocked) return;
       e.preventDefault();
       stateRef.current.scale += e.deltaY * -0.001;
       stateRef.current.scale = Math.min(Math.max(0.5, stateRef.current.scale), 1.5);
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleMouseDown, { passive: true });
    window.addEventListener('touchmove', handleMouseMove, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  const initParticles = () => {
     const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement;
     if(!canvas) return;
     const ctx = canvas.getContext('2d');
     if(!ctx) return;
     
     canvas.width = 300;
     canvas.height = 600;
     
     const particles: any[] = [];
     for(let i=0; i<30; i++) {
        particles.push({
           x: Math.random() * canvas.width,
           y: canvas.height + Math.random() * 100,
           speed: 1 + Math.random() * 2,
           size: Math.random() * 2,
           alpha: 0.1 + Math.random() * 0.4
        });
     }
     
     const animate = () => {
        if(stateRef.current.sequencePhase !== 1 && document.getElementById('app-layer')?.classList.contains('active')) {
           ctx.clearRect(0, 0, canvas.width, canvas.height);
           particles.forEach(p => {
              p.y -= p.speed;
              if(p.y < -10) {
                 p.y = canvas.height + Math.random() * 100;
                 p.x = Math.random() * canvas.width;
              }
              ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
              ctx.fillRect(p.x, p.y, 1, p.size * 5);
           });
           requestAnimationFrame(animate);
        }
     };
     animate();
  };

  const handleReset = () => {
     const s = stateRef.current;
     s.isLocked = false;
     s.sequencePhase = 0;
     s.autoRotate = true;
     s.curRotX = -10; s.curRotY = 0; s.rotX = -10; s.rotY = 0;
     
     const scene = sceneRef.current;
     const uiText = uiRef.current;
     const resetBtn = resetBtnRef.current;
     const container = containerRef.current;
     const backdrop = document.getElementById('immersive-backdrop');
     
     if(scene) {
        scene.classList.remove('locked');
        scene.style.transform = `rotateX(-10deg) rotateY(0deg) scale(1)`;
     }

     if (container) {
        container.style.position = 'relative';
        container.style.zIndex = 'auto';
        container.style.width = '100%';
        container.style.height = '700px';
        container.style.transform = 'none';
     }
     if (backdrop) {
        backdrop.style.opacity = '0';
        backdrop.style.pointerEvents = 'none';
     }
     
     const layers = document.querySelectorAll('.screen-layer');
     layers.forEach(l => l.classList.remove('active'));
     const idleLayer = document.getElementById('idle-layer');
     if(idleLayer) idleLayer.classList.add('active');

     if(uiText) {
        uiText.style.display = 'flex';
        setTimeout(() => uiText.style.opacity = '1', 100);
     }
     if(resetBtn) resetBtn.classList.remove('visible');
  };

  const handleScreenClick = () => {
    const s = stateRef.current;
    if (s.sequencePhase > 0) return;
    
    s.sequencePhase = 1;
    s.isLocked = true;
    const scene = sceneRef.current;
    const uiText = uiRef.current;
    const resetBtn = resetBtnRef.current;
    const screenContent = screenContentRef.current;
    const container = containerRef.current;
    const backdrop = document.getElementById('immersive-backdrop');

    if(scene) scene.classList.add('locked');
    if(uiText) uiText.style.display = 'none';

    if (container) {
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.zIndex = '60';
        container.style.transform = 'scale(1.1)';
        container.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    }
    if (backdrop) {
        backdrop.style.opacity = '1';
        backdrop.style.pointerEvents = 'auto';
    }
    
    if(screenContent) {
       screenContent.style.filter = "brightness(1.5)";
       setTimeout(() => screenContent.style.filter = "brightness(1)", 200);
    }

    const updateLayers = (idx: number) => {
       const layers = document.querySelectorAll('.screen-layer');
       layers.forEach(l => l.classList.remove('active'));
       const target = document.getElementById(
          idx === 0 ? 'boot-layer' : idx === 1 ? 'home-layer' : idx === 2 ? 'app-layer' : 'idle-layer'
       );
       if(target) target.classList.add('active');
    };

    setTimeout(() => updateLayers(0), 1000);
    setTimeout(() => updateLayers(1), 4000);

    setTimeout(() => {
       const starApp = document.querySelector('.star-app-icon');
       if(starApp && screenContent) {
          const expander = document.createElement('div');
          expander.classList.add('app-opening-animation');
          expander.style.background = 'linear-gradient(135deg, #ff0080, #ff6600)';
          screenContent.appendChild(expander);
          
          setTimeout(() => {
             updateLayers(2);
             if(expander.parentNode) expander.parentNode.removeChild(expander);
             if(resetBtn) resetBtn.classList.add('visible');
             initParticles();
          }, 800);
       }
    }, 8000);
  };

  return (
    <>
    {/* Immersive Backdrop (Global) */}
    <div id="immersive-backdrop" onClick={handleReset} style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'rgba(0,0,0,0.95)', zIndex: 50, opacity: 0, pointerEvents: 'none',
        transition: 'opacity 0.8s ease', cursor: 'pointer'
    }}>
        <div style={{position: 'absolute', top: '20px', right: '20px', color: 'white', opacity: 0.5}}>Click anywhere to close</div>
    </div>

    <div className="relative w-full h-[700px] flex items-center justify-center perspective-1200" ref={containerRef}>
       <div id="ui-layer" ref={uiRef}>
          <div className="instruction-pill" id="instruction-text">
              <svg className="hand-icon" viewBox="0 0 24 24">
                  <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74z"/>
                  <path d="M17.5 11c-.83 0-1.5-.67-1.5-1.5 0-.39.15-.74.39-1.01-.25-.27-.4-.63-.4-1.01 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .38-.15.74-.4 1.01.25.27.39.62.39 1.01 0 .83-.67 1.5-1.5 1.5zM11.5 1C7.91 1 5 3.91 5 7.5c0 2.13 1.09 4.02 2.76 5.2-.3.41-.55.85-.74 1.32l-2.86 7.15C4.05 21.56 4.33 22 4.75 22h13.5c.42 0 .7-.44.59-.83l-2.86-7.15c-.19-.47-.44-.91-.74-1.32C16.91 11.52 18 9.63 18 7.5 18 3.91 15.09 1 11.5 1z"/>
              </svg>
              <span>Arrastra para rotar &bull; Click pantalla para iniciar</span>
          </div>
          <button id="reset-btn" ref={resetBtnRef} onClick={handleReset}>Reiniciar Experiencia</button>
       </div>

       <div id="scene-container">
          <div id="scene" ref={sceneRef}>
              <div className="iphone-body">
                  {/* Cara FRONTAL */}
                  <div className="face face-front">
                      <div id="screen-content" ref={screenContentRef} onClick={handleScreenClick}>
                          <div className="dynamic-island">
                              <div className="island-cam"></div>
                          </div>

                          {/* 1. Capa de Inicio (Negra / Boot) */}
                          <div id="boot-layer" className="screen-layer">
                              <svg id="apple-logo-svg" viewBox="0 0 384 512">
                                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 102.1 78 102.1 18 0 25.8-12.5 59.5-12.5 32.9 0 40.6 12.5 62.6 12.5 32 0 61.7-56 75.2-82.7-47-22.2-55.6-73.5-15-105.4zM249.4 92c18.9-27.4 30.4-63.9 26.4-92-24.4 2.6-60.3 20.8-81.2 48.1-19.2 24.7-31.1 61-26.1 90.9 29.4 3.5 62.3-20.1 80.9-47z"/>
                              </svg>
                          </div>

                          {/* 2. Capa Home iOS */}
                          <div id="home-layer" className="screen-layer">
                              <div className="status-bar">
                                  <span>9:41</span>
                                  <span>🔋 100%</span>
                              </div>
                              <div className="app-grid">
                                  <div className="app-icon">📞</div>
                                  <div className="app-icon">💬</div>
                                  <div className="app-icon">📷</div>
                                  <div className="app-icon">🎵</div>
                                  <div className="app-icon">🧭</div>
                                  <div className="app-icon">⚙️</div>
                                  <div className="app-icon">📧</div>
                                  <div className="app-icon">☁️</div>
                              </div>
                              <div className="featured-app-container" id="trigger-app">
                                  <div className="star-app-icon">⭐</div>
                                  <div className="app-label">StarBiz</div>
                              </div>
                          </div>

                          {/* 3. Capa App Final */}
                          <div id="app-layer" className="screen-layer">
                              <canvas id="particles-canvas"></canvas>
                              
                              {/* BOTÓN CERRAR APP */}
                              <button 
                                onClick={(e) => { e.stopPropagation(); handleReset(); }}
                                className="absolute top-4 left-4 z-50 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                              >
                                 <X size={20} color="white" />
                              </button>

                              <div className="app-content">
                                  <span className="final-logo">⭐</span>
                                  <div className="brand-name">StarBizAcademi</div>
                                  <div className="coming-soon" data-text="PRÓXIMAMENTE">PRÓXIMAMENTE</div>
                                  <div className="divider-line"></div>
                                  <div className="subtext">Algo grande está por venir...</div>
                              </div>
                              <div className="ripple-container">
                                  <div className="ripple"></div>
                                  <div className="ripple"></div>
                                  <div className="ripple"></div>
                              </div>
                          </div>

                          {/* 0. Idle Layer (Default) */}
                          <div id="idle-layer" className="screen-layer active" style={{ background: '#000' }}>
                             <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff'}}>
                                <h3 style={{fontSize: '60px', fontWeight: 'bold', opacity: 0.3}}>09:41</h3>
                                <p style={{opacity: 0.2}}>Touch to Start</p>
                             </div>
                          </div>

                      </div>
                  </div>

                  {/* Cara TRASERA */}
                  <div className="face face-back">
                      <svg className="camera-bump-svg" viewBox="0 0 120 130">
                          <defs>
                              <linearGradient id="lensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#333" stopOpacity="1" />
                                  <stop offset="50%" stopColor="#000" stopOpacity="1" />
                                  <stop offset="100%" stopColor="#222" stopOpacity="1" />
                              </linearGradient>
                              <filter id="dropShadow">
                                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.5"/>
                              </filter>
                          </defs>
                          <rect x="0" y="0" width="120" height="130" rx="25" fill="#1f1f1f" filter="url(#dropShadow)" stroke="#333" strokeWidth="1"/>
                          <circle cx="35" cy="35" r="22" fill="url(#lensGrad)" stroke="#444" strokeWidth="2"/>
                          <circle cx="35" cy="95" r="22" fill="url(#lensGrad)" stroke="#444" strokeWidth="2"/>
                          <circle cx="85" cy="65" r="22" fill="url(#lensGrad)" stroke="#444" strokeWidth="2"/>
                          <circle cx="85" cy="25" r="8" fill="#fff" opacity="0.8"/>
                          <circle cx="85" cy="105" r="4" fill="#000"/>
                          <circle cx="35" cy="35" r="8" fill="#0f1b33" opacity="0.8"/>
                          <circle cx="35" cy="95" r="8" fill="#0f1b33" opacity="0.8"/>
                          <circle cx="85" cy="65" r="8" fill="#0f1b33" opacity="0.8"/>
                      </svg>
                      
                      <svg width="50" height="60" viewBox="0 0 384 512" style={{opacity: 0.3, fill: 'white'}}>
                          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 102.1 78 102.1 18 0 25.8-12.5 59.5-12.5 32.9 0 40.6 12.5 62.6 12.5 32 0 61.7-56 75.2-82.7-47-22.2-55.6-73.5-15-105.4zM249.4 92c18.9-27.4 30.4-63.9 26.4-92-24.4 2.6-60.3 20.8-81.2 48.1-19.2 24.7-31.1 61-26.1 90.9 29.4 3.5 62.3-20.1 80.9-47z"/>
                      </svg>
                  </div>

                  {/* LADOS */}
                  <div className="face face-right">
                      <div className="button btn-power"></div>
                  </div>
                  <div className="face face-left"></div>
                  <div className="face face-top"></div>
                  <div className="face face-bottom"></div>
              </div>
          </div>
       </div>
    </div>
    </>
  );
};

export default Ecosystem;