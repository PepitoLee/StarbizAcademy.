import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t.navbar.home, href: '#inicio' },
    { name: t.navbar.about, href: '#quienes-somos' },
    { name: t.navbar.intelligence, href: '#metodologia' },
    { name: t.navbar.programs, href: '#programas' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-6'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          scrolled ? 'bg-space-black/80 backdrop-blur-xl border-b border-white/10' : ''
        } rounded-none sm:rounded-2xl`}>
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO CONTAINER */}
          <a href="#inicio" className="relative w-[260px] h-[60px] flex items-center justify-center group select-none">
            
            {/* --- Rocket Orbit Layer --- */}
            {/* This container handles the path movement and z-index switching */}
            <div className="rocket-orbit-container absolute inset-0 w-full h-full pointer-events-none">
               {/* This wrapper handles the alignment to the path */}
               <div className="rocket-positioner w-full h-full">
                  {/* This wrapper handles the wobble/3D rotation */}
                  <div className="rocket-3d-rotate">
                      {/* Improved 3D Rocket SVG */}
                      <svg viewBox="0 0 50 50" className="w-10 h-10 overflow-visible drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                        <defs>
                           <linearGradient id="fuselage" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#cbd5e1" /> {/* Slate-300 */}
                              <stop offset="50%" stopColor="#f8fafc" /> {/* Slate-50 */}
                              <stop offset="100%" stopColor="#64748b" /> {/* Slate-500 */}
                           </linearGradient>
                           <linearGradient id="fire" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#a5f3fc" /> {/* Cyan-200 */}
                              <stop offset="50%" stopColor="#00F0FF" /> {/* Brand Cyan */}
                              <stop offset="100%" stopColor="transparent" />
                           </linearGradient>
                           <filter id="glow-rocket">
                              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                              <feMerge>
                                 <feMergeNode in="coloredBlur" />
                                 <feMergeNode in="SourceGraphic" />
                              </feMerge>
                           </filter>
                        </defs>
                        
                        {/* Rotation Group to point rocket correctly (Right) */}
                        <g transform="rotate(90, 25, 25)">
                           {/* Engine Flame */}
                           <path d="M25 42 Q28 52 25 60 Q22 52 25 42" fill="url(#fire)" className="animate-pulse" style={{ mixBlendMode: 'screen' }} />
                           
                           {/* Left Fin (Back) */}
                           <path d="M15 35 L8 45 L15 40 Z" fill="#b91c1c" />
                           {/* Right Fin (Back) */}
                           <path d="M35 35 L42 45 L35 40 Z" fill="#b91c1c" />
                           
                           {/* Main Body */}
                           <path d="M25 5 C15 5 12 20 12 35 L25 42 L38 35 C38 20 35 5 25 5 Z" fill="url(#fuselage)" filter="url(#glow-rocket)" />
                           
                           {/* Center Vertical Fin (Front) */}
                           <path d="M25 30 L25 42" stroke="#ef4444" strokeWidth="1.5" />
                           
                           {/* Cockpit Window */}
                           <circle cx="25" cy="20" r="5" fill="#0891b2" stroke="#e2e8f0" strokeWidth="1.5" />
                           <circle cx="27" cy="18" r="1.5" fill="white" opacity="0.8" />
                        </g>
                      </svg>
                  </div>
               </div>
            </div>

            {/* --- Text Layer --- */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
               <svg viewBox="0 0 260 50" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>
                  </defs>
                  <text 
                    x="50%" y="55%" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    className="font-display font-bold text-[28px] tracking-widest"
                    fill="url(#textGrad)"
                    style={{ textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}
                  >
                     STARBIZ <tspan fill="#00F0FF" fontWeight="800">ACADEMY</tspan>
                  </text>
               </svg>
            </div>

            {/* Styles for the Animation */}
            <style>{`
              .rocket-positioner {
                 /* Path: Start Left -> Bottom Arc (Front) -> Right -> Top Arc (Back) -> Left */
                 offset-path: path("M 20,30 C 20,60 240,60 240,30 C 240,0 20,0 20,30");
                 animation: orbitMove 8s linear infinite;
              }
              
              .rocket-3d-rotate {
                 /* Slight wobble/roll to simulate 3D movement */
                 animation: rocketWobble 4s ease-in-out infinite alternate;
              }

              @keyframes orbitMove {
                /* FRONT PASS (Left to Right) */
                0% { 
                  offset-distance: 0%; 
                  z-index: 20; 
                  transform: scale(0.9); /* Coming from back */
                }
                25% { 
                  transform: scale(1.3); /* Center Front - Largest */
                }
                49% { 
                  z-index: 20; 
                }
                
                /* BACK PASS (Right to Left) */
                50% { 
                  offset-distance: 50%; 
                  z-index: 1; /* Switch behind text */
                  transform: scale(0.9); /* Turning back */
                }
                75% { 
                  transform: scale(0.6); /* Center Back - Smallest/Farthest */
                }
                99% { 
                  z-index: 1; 
                }
                100% { 
                  offset-distance: 100%; 
                  z-index: 20; 
                  transform: scale(0.9); 
                }
              }

              /* Apply Z-Index to the parent container based on animation phase is tricky in CSS alone 
                 unless we animate the container's z-index. 
                 We use the .rocket-orbit-container for z-index toggling.
              */
              .rocket-orbit-container {
                 animation: orbitLayer 8s linear infinite;
              }

              @keyframes orbitLayer {
                 0% { z-index: 20; }
                 49% { z-index: 20; }
                 50% { z-index: 5; } /* Below text z-index (10) */
                 99% { z-index: 5; }
                 100% { z-index: 20; }
              }

              @keyframes rocketWobble {
                 0% { transform: rotate(0deg) scaleY(1); }
                 100% { transform: rotate(5deg) scaleY(0.95); }
              }
            `}</style>
          </a>

          {/* Desktop HUD Menu */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full px-1 border border-white/5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
             {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-bold tracking-wider text-gray-300 hover:text-white"
            >
              <Globe size={14} className={language === 'en' ? 'text-brand-cyan' : 'text-brand-orange'} />
              <span className={language === 'es' ? 'text-white' : 'text-gray-500'}>ES</span>
              <span className="text-gray-600">/</span>
              <span className={language === 'en' ? 'text-white' : 'text-gray-500'}>EN</span>
            </button>

             <a
              href="#contacto"
              className="relative inline-flex group"
            >
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <button className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-white transition-all duration-200 bg-space-black font-display rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 uppercase">
                {t.navbar.cta}
              </button>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-gray-300"
            >
              <span className={language === 'es' ? 'text-brand-orange' : ''}>ES</span>
              <span>/</span>
              <span className={language === 'en' ? 'text-brand-cyan' : ''}>EN</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-space-card border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl z-50"
          >
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="mt-4 text-center bg-brand-orange text-white px-4 py-3 rounded-xl font-bold font-display uppercase tracking-wider"
              >
                {t.navbar.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;