import React from 'react';
import { motion } from 'framer-motion';

// --- 1. THE GOLDEN ECLIPSE (Cinematic & Elegant) ---
export const Loader1 = () => (
  <div className="flex flex-col items-center justify-center relative w-full h-full bg-black">
      <div className="relative w-48 h-48 flex items-center justify-center">
          {/* The Eclipse Shadow */}
          <div className="absolute inset-2 bg-black rounded-full z-20"></div>
          
          {/* The Corona (Ring of Fire) */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-orange via-yellow-500 to-brand-purple blur-md"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-0 rounded-full bg-brand-orange blur-xl opacity-50"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* The Reveal Text */}
          <motion.div 
             className="relative z-30 text-4xl font-bold text-white font-display tracking-[0.2em] mix-blend-difference"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
             STARBIZ
          </motion.div>
      </div>
      <span className="mt-8 text-[10px] text-gray-500 uppercase tracking-[0.5em] font-mono">Eclipse Protocol</span>
  </div>
);

// --- 2. LIQUID NEON (Organic Tech) ---
export const Loader2 = () => (
  <div className="flex flex-col items-center justify-center relative w-full h-full">
      <div className="relative">
         {/* Liquid Blobs */}
         {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute top-0 left-0 w-32 h-32 bg-brand-cyan/30 rounded-full mix-blend-screen blur-xl"
              animate={{ 
                x: [0, (i%2===0? 50 : -50), 0],
                y: [0, (i%2===0? -50 : 50), 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
            />
         ))}
         
         {/* Main Text with Liquid Mask Effect */}
         <motion.h1 
           className="relative z-10 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-brand-cyan to-brand-purple drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]"
           animate={{ filter: ["blur(0px)", "blur(2px)", "blur(0px)"] }}
           transition={{ duration: 2, repeat: Infinity }}
         >
           STARBIZ
         </motion.h1>
      </div>
      <div className="h-1 w-24 bg-gray-800 rounded-full mt-6 overflow-hidden">
         <motion.div 
           className="h-full bg-brand-cyan"
           animate={{ x: ["-100%", "100%"] }}
           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
         />
      </div>
  </div>
);

// --- 3. DATA VORTEX (Clean Tech) ---
export const Loader3 = () => (
  <div className="flex flex-col items-center justify-center relative w-full h-full">
      <div className="relative w-40 h-40">
         {/* Spinning Data Rings */}
         {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-white/20 rounded-full"
              style={{ borderTopColor: i % 2 === 0 ? '#FF6B00' : '#00F0FF', borderWidth: '1px' }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 0.8, 1] }}
              transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
            />
         ))}
         
         {/* Center Convergence */}
         <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{ height: [2, 40, 2] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.div 
              className="w-2 h-2 bg-white rounded-full absolute"
              animate={{ width: [2, 40, 2] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
         </div>
      </div>
      <div className="mt-4 font-mono text-xs text-brand-orange">
        PROCESSING_ASSETS<motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>_</motion.span>
      </div>
  </div>
);

// --- 4. CINEMATIC TYPOGRAPHY (Film Style) ---
export const Loader4 = () => (
  <div className="flex flex-col items-center justify-center relative w-full h-full bg-black">
      <div className="overflow-hidden flex">
         {"STARBIZ".split("").map((char, i) => (
            <motion.span
              key={i}
              className="text-6xl md:text-8xl font-bold text-white font-display inline-block"
              initial={{ y: 100, opacity: 0, rotateX: 90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                repeat: Infinity, 
                repeatDelay: 2,
                type: "spring"
              }}
              style={{ textShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
            >
              {char}
            </motion.span>
         ))}
      </div>
      <motion.div 
        className="w-full max-w-[300px] h-[1px] bg-gradient-to-r from-transparent via-brand-purple to-transparent mt-8"
        animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
  </div>
);

// --- 5. THE PULSE CORE (Living AI) ---
export const Loader5 = () => (
  <div className="flex flex-col items-center justify-center relative w-full h-full">
      <div className="relative">
         {/* The Core */}
         <motion.div 
           className="w-16 h-16 bg-white rounded-xl rotate-45 z-20 relative shadow-[0_0_50px_rgba(255,255,255,0.5)]"
           animate={{ scale: [1, 0.9, 1] }}
           transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
         >
            <div className="absolute inset-1 bg-black rounded-lg flex items-center justify-center">
               <div className="w-4 h-4 bg-brand-cyan rounded-full animate-ping"></div>
            </div>
         </motion.div>

         {/* Expanding Squares */}
         {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-brand-cyan/30 rounded-xl rotate-45"
              initial={{ width: 64, height: 64, opacity: 1 }}
              animate={{ width: 200, height: 200, opacity: 0, rotate: 90 }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
            />
         ))}
      </div>
      <h2 className="mt-16 text-xl font-bold text-white tracking-[0.3em] uppercase">System Active</h2>
  </div>
);