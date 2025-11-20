
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING");

  // Simulation of loading process
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment for organic feel
        const increment = Math.floor(Math.random() * 3) + 1; 
        return Math.min(prev + increment, 100);
      });
    }, 30);

    // Cycle through status texts based on progress
    const textInterval = setInterval(() => {
      setProgress((currentProgress) => {
        if (currentProgress < 30) setStatusText("CALIBRATING NEURAL LINK");
        else if (currentProgress < 60) setStatusText("LOADING 7 INTELLIGENCES");
        else if (currentProgress < 90) setStatusText("SYNCING GLOBAL DATABASE");
        else setStatusText("ACCESS GRANTED");
        return currentProgress;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020205] text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1, 
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
    >
      {/* Background Texture (Scanlines) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] animate-pulse"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-6">
        
        {/* THE CORE: Abstract Gyroscope Animation */}
        <div className="relative w-32 h-32 mb-12">
           {/* Outer Ring */}
           <motion.div 
             className="absolute inset-0 border border-white/10 border-t-brand-cyan border-r-brand-cyan rounded-full"
             animate={{ rotate: 360 }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
           />
           {/* Inner Ring */}
           <motion.div 
             className="absolute inset-4 border border-white/10 border-b-brand-orange border-l-brand-orange rounded-full"
             animate={{ rotate: -360 }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           />
           {/* Core Pulse */}
           <motion.div 
             className="absolute inset-[35%] bg-white rounded-full blur-md"
             animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
             transition={{ duration: 1.5, repeat: Infinity }}
           />
           <div className="absolute inset-[35%] bg-white rounded-full mix-blend-overlay"></div>
        </div>

        {/* Typography & Status */}
        <div className="text-center w-full">
          <div className="flex items-end justify-between mb-2 border-b border-white/10 pb-2">
             <h1 className="font-display font-bold text-2xl tracking-[0.2em] text-white">
               STARBIZ
             </h1>
             <span className="font-mono text-4xl font-bold text-brand-cyan tabular-nums">
               {progress}%
             </span>
          </div>
          
          <div className="flex justify-between items-center mt-2">
             <AnimatePresence mode='wait'>
               <motion.p 
                 key={statusText}
                 initial={{ opacity: 0, y: 5 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -5 }}
                 className="font-mono text-xs text-brand-orange tracking-widest uppercase"
               >
                 {'>'} {statusText}
               </motion.p>
             </AnimatePresence>
             
             <div className="flex gap-1">
               {[...Array(3)].map((_, i) => (
                 <motion.div 
                   key={i}
                   className="w-1 h-1 bg-gray-500 rounded-full"
                   animate={{ opacity: [0.2, 1, 0.2] }}
                   transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                 />
               ))}
             </div>
          </div>
        </div>

        {/* Bottom Progress Bar Line */}
        <div className="w-full h-[2px] bg-white/5 mt-8 rounded-full overflow-hidden relative">
           <motion.div 
             className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-cyan via-white to-brand-orange"
             initial={{ width: "0%" }}
             animate={{ width: `${progress}%` }}
             transition={{ type: "spring", stiffness: 50 }}
           />
        </div>
        
        <div className="mt-8 font-mono text-[10px] text-gray-600 tracking-[0.5em] uppercase">
           Secure Connection // v2.6.0
        </div>

      </div>
    </motion.div>
  );
};

export default Loader;
