import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Starfield from './Starfield';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#020005]">
      
      {/* 1. Animated Starfield Background */}
      <Starfield />

      {/* 2. Deep Space Nebula Effects (Subtle) */}
      <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-brand-purple/10 rounded-full blur-[120px] animate-pulse-glow mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[120px] animate-float mix-blend-screen" />
      <div className="absolute top-[30%] left-[50%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] mix-blend-screen" />

      {/* 3. Vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-60 pointer-events-none"></div>

      {/* Grid Pattern Overlay (Very subtle tech feel) */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left relative z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-sm font-semibold mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              {t.hero.tag}
            </motion.div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9] text-white mb-8 font-display">
              {t.hero.title.line1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange bg-[200%_auto] animate-[gradient_3s_linear_infinite]">
                {t.hero.title.line2}
              </span><br />
              {t.hero.title.line3}
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              {/* SUPER CTA: PROGRAMS */}
              <a 
                href="#programas" 
                className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-xl text-white font-bold font-display tracking-widest text-lg shadow-[0_0_30px_rgba(255,107,0,0.6)] hover:shadow-[0_0_60px_rgba(255,107,0,0.8)] transition-all hover:scale-105"
              >
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-brand-orange via-red-500 to-brand-purple animate-[gradient_3s_linear_infinite]"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:border-white/80 transition-colors"></div>

                <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                  VER PROGRAMAS <span className="text-xl">→</span>
                </span>
              </a>
              
              <button className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 group-hover:border-brand-cyan transition-all">
                  <Play size={16} fill="currentColor" className="ml-1" />
                </div>
                <span className="font-display font-medium tracking-wide">{t.hero.cta_secondary}</span>
              </button>
            </div>
          </motion.div>

          {/* 3D Hero Graphic */}
          <motion.div 
            className="flex-1 relative w-full aspect-square max-w-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full h-full perspective-1000">
              {/* Floating Rings - Holographic Gyroscope */}
              
              {/* Ring 1: Cyber Data (Large, Dashed, Cyan) */}
              <motion.div
                className="absolute inset-[-40px] rounded-full border border-dashed border-brand-cyan/20"
                animate={{ rotateZ: [0, 360], rotateX: [60, 60], rotateY: [20, 20] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                 <div className="absolute top-0 left-1/2 w-2 h-2 bg-brand-cyan rounded-full shadow-[0_0_10px_#00FFFF]"></div>
              </motion.div>

              {/* Ring 2: Nebula Arc (Medium, Gradient, Purple) */}
              <motion.div
                className="absolute inset-[-20px] rounded-full border-[1px] border-transparent border-t-brand-purple/60 border-l-brand-purple/30"
                animate={{ rotateZ: [360, 0], rotateX: [-45, -45], rotateY: [10, 10] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ boxShadow: "0 0 20px rgba(168,85,247,0.2)" }}
              />

              {/* Ring 3: Solar Orbit (Close, Fast, Orange/Gold) */}
              <motion.div
                className="absolute inset-[0px] rounded-full border-[1px] border-white/10"
                animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                 {/* Orbiting Satellite */}
                 <motion.div 
                   className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-orange rounded-full shadow-[0_0_15px_#FF6B00]"
                   animate={{ scale: [1, 1.5, 1] }}
                   transition={{ duration: 2, repeat: Infinity }}
                 />
              </motion.div>

              {/* Central Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ y: [-20, 20, -20] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-64 h-64 flex items-center justify-center z-10"
                >
                   {/* --- COSMIC PORTAL DESIGN --- */}
                   
                   {/* 1. Spinning Energy Ring (Outer) */}
                   <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-cyan/40 via-brand-purple/40 to-brand-orange/40 blur-md animate-[spin_8s_linear_infinite]"></div>
                   
                   {/* 2. Structural Ring (Metallic/Glass border) */}
                   <div className="absolute inset-[2px] rounded-full bg-gradient-to-b from-white/20 to-white/5 border border-white/10 backdrop-blur-sm z-0 shadow-[0_0_50px_rgba(0,0,0,0.5)]"></div>

                   {/* 3. Deep Space Core (Background) */}
                   <div className="absolute inset-[6px] rounded-full bg-[#030005] overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.9)]">
                      {/* Internal Atmosphere */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.4),transparent_70%)]"></div>
                      <div className="absolute top-0 left-0 right-0 h-full bg-[linear-gradient(180deg,transparent,rgba(6,182,212,0.1))]"></div>
                      
                      {/* Subtle HUD Grid */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
                      
                      {/* Specular Highlight (Glass reflection) */}
                      <div className="absolute top-10 left-10 w-32 h-16 bg-white/5 rounded-full blur-2xl rotate-[-45deg]"></div>
                   </div>
                   
                   {/* --- INFERNO MODE ROCKET (Diagonal & Heavy Fire) --- */}
                   <div className="absolute inset-0 z-30 flex items-center justify-center">
                      
                      {/* 1. GLOBAL FIRE LIGHTING (The "Splash" on the Hero) */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
                      
                      <motion.div
                        // Steady Powerful Burn (Slower Rumble)
                        animate={{ 
                          x: [-1, 1, -0.5, 0.5, 0], 
                          y: [0.5, -0.5, 1, -1, 0] 
                        }}
                        transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
                        className="relative flex flex-col items-center group"
                      >
                            {/* 2. PARTICLE SYSTEM (Sparks/Embers falling back) */}
                            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-full h-[300px] overflow-visible pointer-events-none">
                               {[...Array(8)].map((_, i) => (
                                 <motion.div
                                   key={i}
                                   className="absolute top-0 left-1/2 w-2 h-2 bg-brand-yellow rounded-full blur-[1px]"
                                   animate={{ 
                                      y: [0, 200 + Math.random() * 100],
                                      x: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 150],
                                      opacity: [1, 0],
                                      scale: [1, 0] 
                                   }}
                                   transition={{ 
                                      duration: 1 + Math.random(), 
                                      repeat: Infinity, 
                                      delay: Math.random() * 0.5,
                                      ease: "easeOut"
                                   }}
                                   style={{ left: `calc(50% + ${(Math.random() - 0.5) * 40}px)` }}
                                 />
                               ))}
                            </div>

                            {/* ROCKET SVG (Rotated 45deg) - REDESIGNED SLEEK */}
                            <svg 
                              viewBox="0 0 100 200" 
                              className="w-64 h-[420px] drop-shadow-[0_0_30px_rgba(255,77,0,0.4)]" 
                              style={{ transform: "rotate(45deg) translateY(40px)" }}
                              preserveAspectRatio="xMidYMin slice"
                            >
                              <defs>
                                {/* Metallic Body Gradient */}
                                <linearGradient id="hullGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#E2E8F0" /> {/* Light Edge */}
                                  <stop offset="40%" stopColor="#F8FAFC" /> {/* Highlight */}
                                  <stop offset="60%" stopColor="#CBD5E1" /> {/* Shadow */}
                                  <stop offset="100%" stopColor="#94A3B8" /> {/* Dark Edge */}
                                </linearGradient>
                                
                                {/* Dark Tech Detail Gradient */}
                                <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#334155" />
                                  <stop offset="100%" stopColor="#0F172A" />
                                </linearGradient>

                                {/* Engine Plasma */}
                                <linearGradient id="plasmaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#FFFFFF" /> 
                                  <stop offset="20%" stopColor="#38BDF8" /> {/* Blue core */}
                                  <stop offset="50%" stopColor="#818CF8" /> {/* Purple mid */}
                                  <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                              </defs>

                              {/* --- ENGINE FLAME (Blue/Purple Tech Fire) --- */}
                              <g className="mix-blend-screen" transform="translate(0, -10)"> 
                                  <motion.path 
                                    d="M40 130 Q50 350 60 130" 
                                    fill="url(#plasmaGrad)"
                                    style={{ filter: "blur(8px)" }}
                                    animate={{ d: ["M40 130 Q50 360 60 130", "M38 130 Q50 320 62 130", "M40 130 Q50 360 60 130"] }}
                                    transition={{ duration: 0.15, repeat: Infinity }}
                                  />
                                  {/* Inner Plasma */}
                                  <motion.path 
                                    d="M45 130 Q50 250 55 130" 
                                    fill="#FFF"
                                    style={{ filter: "blur(4px)" }}
                                    animate={{ d: ["M45 130 Q50 260 55 130", "M44 130 Q50 230 56 130", "M45 130 Q50 260 55 130"] }}
                                    transition={{ duration: 0.1, repeat: Infinity }}
                                  />
                              </g>

                              {/* --- SLEEK SPACESHIP HULL --- */}
                              <g transform="translate(0, 30)">
                                
                                {/* Rear Landing Legs / Fins (Dark Tech) */}
                                <path d="M35 100 L20 140 L35 125 Z" fill="url(#techGrad)" />
                                <path d="M65 100 L80 140 L65 125 Z" fill="url(#techGrad)" />
                                
                                {/* Main Fuselage (Elongated Bullet Shape) */}
                                <path 
                                  d="M35 120 L35 60 Q35 10 50 0 Q65 10 65 60 L65 120 Q50 125 35 120 Z" 
                                  fill="url(#hullGrad)" 
                                  stroke="#64748B" strokeWidth="0.5"
                                />

                                {/* Engine Nozzle */}
                                <path d="M40 120 L40 128 L60 128 L60 120 Z" fill="#1E293B" />

                                {/* Vertical Cockpit/Sensor Strip */}
                                <path d="M48 20 L48 40 L52 40 L52 20 Q52 18 50 15 Q48 18 48 20 Z" fill="#0EA5E9" opacity="0.9" />
                                
                                {/* Branding Text "STAREDUCA" - Vertical Tech Font */}
                                <g transform="translate(53, 80) rotate(-90)">
                                   <text 
                                     fontSize="5.5" 
                                     fontFamily="sans-serif" 
                                     fontWeight="800" 
                                     fill="#334155"
                                     style={{ letterSpacing: "1.5px" }}
                                   >
                                     STAREDUCA
                                   </text>
                                </g>

                                {/* Hull Details / Panel Lines */}
                                <path d="M35 60 L65 60" stroke="#94A3B8" strokeWidth="0.3" />
                                <path d="M35 100 L65 100" stroke="#94A3B8" strokeWidth="0.3" />
                                <circle cx="50" cy="110" r="2" fill="#EF4444" opacity="0.8" /> {/* Status Light */}

                              </g>
                            </svg>
                      </motion.div>
                   </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;