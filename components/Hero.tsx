import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleGraphic = useTransform(scrollY, [0, 500], [1, 1.2]);
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
            style={{ y: yText, opacity: opacityText }}
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
              <a 
                href="#comunidades" 
                className="group relative px-8 py-4 bg-brand-orange overflow-hidden rounded-xl text-white font-bold font-display tracking-wider shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] hover:scale-105"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]"></div>
                {t.hero.cta_primary}
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
            style={{ scale: scaleGraphic }}
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
                   <div className="text-8xl z-20 drop-shadow-2xl">🚀</div>
                   
                   {/* Orbiting Elements */}
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-[-40px]"
                   >
                      <div className="w-8 h-8 bg-brand-cyan rounded-full shadow-[0_0_20px_cyan] absolute top-0 left-1/2 -translate-x-1/2" />
                   </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em]">{t.hero.scroll}</span>
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;