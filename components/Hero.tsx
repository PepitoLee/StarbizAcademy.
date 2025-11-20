import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-brand-orange/20 rounded-full blur-[80px]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

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
              {/* Floating Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute inset-${i * 10} rounded-full border border-brand-cyan/20`}
                  animate={{ 
                    rotateX: [0, 360], 
                    rotateY: [0, 180], 
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    duration: 15 + i * 5, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  style={{ borderStyle: i % 2 === 0 ? 'solid' : 'dashed' }}
                />
              ))}

              {/* Central Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ y: [-20, 20, -20] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-64 h-64 bg-black rounded-full flex items-center justify-center z-10 border-4 border-brand-orange shadow-[0_0_60px_rgba(255,107,0,0.3)]"
                >
                   {/* Inner Glow */}
                   <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-orange/20 to-brand-purple/20 animate-pulse" />
                   
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

                            {/* ROCKET SVG (Rotated 45deg) */}
                            <svg 
                              viewBox="0 0 100 200" // Taller viewBox to fit the massive flame
                              className="w-64 h-[500px] drop-shadow-[0_0_50px_rgba(255,77,0,0.6)]" // Much taller container
                              style={{ transform: "rotate(45deg) translateY(50px)" }} // Diagonal Tilt + Offset
                              preserveAspectRatio="xMidYMin slice"
                            >
                              <defs>
                                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#F8FAFC" /> 
                                  <stop offset="100%" stopColor="#CBD5E1" /> 
                                </linearGradient>
                                <linearGradient id="infernoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#FFFFFF" /> {/* White Hot */}
                                  <stop offset="10%" stopColor="#FEF08A" /> {/* Yellow */}
                                  <stop offset="30%" stopColor="#F97316" /> {/* Orange */}
                                  <stop offset="60%" stopColor="#EF4444" /> {/* Red */}
                                  <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                              </defs>

                              {/* --- MASSIVE FLAME TAIL --- */}
                              <g className="mix-blend-screen" transform="translate(0, -20)"> 
                                  {/* Core Blast */}
                                  <motion.path 
                                    d="M30 95 Q50 250 70 95" 
                                    fill="url(#infernoGrad)"
                                    style={{ filter: "blur(6px)" }}
                                    animate={{ d: ["M30 95 Q50 260 70 95", "M25 95 Q50 240 75 95", "M30 95 Q50 260 70 95"] }}
                                    transition={{ duration: 0.4, repeat: Infinity }}
                                  />
                                  {/* Inner Plasma */}
                                  <motion.path 
                                    d="M40 95 Q50 180 60 95" 
                                    fill="#FFF"
                                    style={{ filter: "blur(3px)" }}
                                    animate={{ d: ["M42 95 Q50 190 58 95", "M40 95 Q50 160 60 95", "M42 95 Q50 190 58 95"] }}
                                    transition={{ duration: 0.2, repeat: Infinity }}
                                  />
                              </g>

                              {/* --- ROCKET SHIP --- */}
                              <g transform="translate(0, 20)">
                                {/* Fins (Red) */}
                                <path d="M30 70 L15 90 L30 80 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="1" />
                                <path d="M70 70 L85 90 L70 80 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="1" />
                                <path d="M50 75 L50 90 L40 80 L60 80 Z" fill="#B91C1C" />

                                {/* Main Body */}
                                <path 
                                  d="M30 70 Q30 40 50 10 Q70 40 70 70 L70 75 Q50 75 30 75 Z" 
                                  fill="url(#bodyGrad)" 
                                  stroke="#475569" strokeWidth="0.5"
                                />

                                {/* Window (Blue) */}
                                <circle cx="50" cy="40" r="12" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
                                <path d="M50 40 A 12 12 0 0 1 58 32" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
                                
                                {/* Shine/Details */}
                                <path d="M50 10 L50 75" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="2 2" fill="none" opacity="0.5"/>
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