
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Activity, Heart, Users, Zap, DollarSign, Cpu, X, Sparkles, BookOpen, Target, Lightbulb, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SevenIntelligences: React.FC = () => {
  const { t, language } = useLanguage();
  const data = t.intelligences.list;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'fundamentos' | '7inteligencias' | 'ecosistema'>('fundamentos');
  const [expandedIntelligence, setExpandedIntelligence] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle ESC key to close video modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoModalOpen) {
        setIsVideoModalOpen(false);
      }
    };

    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoModalOpen]);

  // Pause video when modal closes
  useEffect(() => {
    if (!isVideoModalOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isVideoModalOpen]);

  // Configuration for each card to match the specific aesthetic of the reference image
  const cardConfig = [
    { 
      icon: Brain, 
      color: "text-purple-500", 
      borderColor: "group-hover:border-purple-500/50",
      bgIcon: "bg-purple-500/10",
      video: "/videos/mental-intelligence.mp4"
    },
    { 
      icon: Activity, // Using Activity for "Física" (Pulse)
      color: "text-orange-500", 
      borderColor: "group-hover:border-orange-500/50",
      bgIcon: "bg-orange-500/10",
      video: "/videos/physical-intelligence.mp4"
    },
    { 
      icon: Heart, 
      color: "text-pink-500", 
      borderColor: "group-hover:border-pink-500/50",
      bgIcon: "bg-pink-500/10",
      video: "/videos/emotional-intelligence.mp4"
    },
    { 
      icon: Users, 
      color: "text-blue-400", 
      borderColor: "group-hover:border-blue-400/50",
      bgIcon: "bg-blue-400/10",
      video: "/videos/social-intelligence.mp4"
    },
    { 
      icon: Zap, // Using Zap for "Espiritual" as per reference image (lightning bolt)
      color: "text-yellow-400", 
      borderColor: "group-hover:border-yellow-400/50",
      bgIcon: "bg-yellow-400/10",
      video: "/videos/spiritual-intelligence.mp4"
    },
    { 
      icon: DollarSign, 
      color: "text-emerald-400", 
      borderColor: "group-hover:border-emerald-400/50",
      bgIcon: "bg-emerald-400/10",
      video: "/videos/finance-intelligence.mp4"
    },
    { 
      icon: Cpu, 
      color: "text-cyan-400", 
      borderColor: "group-hover:border-cyan-400/50",
      bgIcon: "bg-cyan-400/10",
      video: "/videos/tech-intelligence.mp4"
    }
  ];

  // Styling configuration for each intelligence (icons and colors)
  const intelligenceStyling = [
    { icon: Zap, color: "purple", borderColor: "border-purple-500/20", bgColor: "bg-purple-500/10", textColor: "text-purple-400" },
    { icon: Brain, color: "blue", borderColor: "border-blue-500/20", bgColor: "bg-blue-500/10", textColor: "text-blue-400" },
    { icon: Activity, color: "orange", borderColor: "border-orange-500/20", bgColor: "bg-orange-500/10", textColor: "text-orange-400" },
    { icon: Heart, color: "pink", borderColor: "border-pink-500/20", bgColor: "bg-pink-500/10", textColor: "text-pink-400" },
    { icon: Users, color: "cyan", borderColor: "border-cyan-500/20", bgColor: "bg-cyan-500/10", textColor: "text-cyan-400" },
    { icon: DollarSign, color: "green", borderColor: "border-green-500/20", bgColor: "bg-green-500/10", textColor: "text-green-400" },
    { icon: Cpu, color: "indigo", borderColor: "border-indigo-500/20", bgColor: "bg-indigo-500/10", textColor: "text-indigo-400" }
  ];

  // Merge translations with styling
  const intelligencesData = t.modal.inteligencias.list.map((intelligence: any, index: number) => ({
    id: index + 1,
    ...intelligence,
    ...intelligenceStyling[index]
  }));

  return (
    <section id="metodologia" className="relative bg-[#030014] py-24 md:py-32 overflow-hidden">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Image Background */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20">
            <img 
              src="/images/intelligences-bg.png" 
              alt="Background" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover blur-sm scale-110" 
            />
         </div>
         <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-purple/20 blur-[120px] rounded-full opacity-40 mixed-blend-screen"></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 z-10"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014] z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-bold text-white font-display tracking-wide uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            {t.intelligences.section}: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">GÉNESIS 7</span><span className="text-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple normal-case" style={{ fontFamily: "'Pacifico', cursive" }}>i</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">™</span>
            <span className="block text-2xl md:text-4xl mt-2 text-brand-yellow font-bold tracking-[0.1em]">
              {t.modal.header.tagline}
            </span>
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto my-6 md:my-8 shadow-[0_0_15px_#FF6B00]"></div>
          <p className="text-gray-400 font-sans text-base md:text-lg tracking-wide max-w-3xl mx-auto leading-relaxed">
            {t.intelligences.description}
          </p>
        </div>

        {/* Grid Layout - Restored to vertical stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Render Intelligence Cards */}
          {data.map((item: any, index: number) => {
            const config = cardConfig[index];
            const Icon = config.icon;
            const numberStr = `0${index + 1}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  group relative 
                  bg-[#1A1A2E] 
                  border border-white/15 hover:border-white/30
                  rounded-3xl p-8 
                  h-[380px] flex flex-col
                  transition-all duration-300
                  overflow-hidden
                  shadow-lg hover:shadow-2xl
                  hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]
                `}
              >
                {/* --- VIDEO BACKGROUND (If available) --- */}
                {config.video && (
                   <>
                     <video 
                       autoPlay loop muted playsInline
                       className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                     >
                       <source src={config.video} type="video/mp4" />
                     </video>
                     {/* Overlay to ensure text legibility */}
                     <div className="absolute inset-0 bg-[#1A1A2E]/90 group-hover:bg-[#1A1A2E]/60 transition-colors duration-700 pointer-events-none"></div>
                   </>
                )}

                {/* Background Big Number */}
                <span className="absolute top-2 right-6 text-7xl font-display font-bold text-white group-hover:text-white transition-colors select-none pointer-events-none z-10">
                  {numberStr}
                </span>

                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-xl ${config.bgIcon} border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className={config.color.replace('text-', 'text-')} color="currentColor" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white font-display mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  
                  <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${config.color}`}>
                    {item.subtitle}
                  </p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-transparent to-${config.color.split('-')[1]}-500 transition-opacity duration-500 pointer-events-none`}></div>
              </motion.div>
            );
          })}

        </div>

        {/* Card: Conoce más sobre nuestra metodología */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#0A0A15] border border-white/10 hover:border-brand-cyan/40 rounded-2xl p-8 text-center transition-all duration-300 group shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 mx-auto mb-6 flex items-center justify-center">
                <BookOpen size={28} className="text-brand-cyan" />
              </div>

              <h3 className="text-2xl font-bold text-white font-display mb-3">
                {t.intelligences.learnMore.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                {t.intelligences.learnMore.desc}
              </p>

              {/* Contenedor de Botones - Layout Responsivo */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Botón Existente - Metodología */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group/btn relative inline-flex px-8 py-3 bg-gradient-to-r from-brand-cyan to-brand-purple text-white font-bold text-sm uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t.intelligences.learnMore.cta} <Sparkles size={16} />
                  </span>
                </button>

                {/* Nuevo Botón - Video Presentación */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group/btn relative inline-flex px-8 py-3 bg-gradient-to-r from-brand-orange to-brand-yellow text-white font-bold text-sm uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Play size={16} /> {t.intelligences.watchPresentation}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Modal: GÉNESIS 7i™ */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#030014]/95 backdrop-blur-xl"></div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A0A15] border border-white/10 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Header */}
              <div className="relative p-4 md:p-8 pb-4 md:pb-6 border-b border-white/10 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10">
                <div className="text-center">
                  <span className="text-brand-cyan font-mono text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 block">{t.modal.header.tag}</span>
                  <h2 className="text-3xl md:text-5xl font-bold font-display mb-2 break-words">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">GÉNESIS 7</span><span className="text-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple normal-case" style={{ fontFamily: "'Pacifico', cursive" }}>i</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">™</span>
                  </h2>
                  <p className="text-lg md:text-xl text-brand-yellow font-light italic break-words">"{t.modal.header.tagline}"</p>
                  <p className="text-gray-500 text-xs md:text-sm mt-3 break-words px-2">{t.modal.header.author}</p>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="border-b border-white/10 px-4 md:px-8 pt-4 md:pt-6 overflow-x-hidden">
                <div className="flex gap-1 md:gap-4 -mx-1">
                  <button
                    onClick={() => setActiveTab('fundamentos')}
                    className={`pb-3 px-2 md:px-6 font-bold text-xs md:text-base transition-all relative whitespace-nowrap ${
                      activeTab === 'fundamentos'
                        ? 'text-brand-cyan'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {t.modal.tabs.fundamentos}
                    {activeTab === 'fundamentos' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-purple"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('7inteligencias')}
                    className={`pb-3 px-2 md:px-6 font-bold text-xs md:text-base transition-all relative whitespace-nowrap ${
                      activeTab === '7inteligencias'
                        ? 'text-brand-cyan'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {t.modal.tabs.inteligencias}
                    {activeTab === '7inteligencias' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-purple"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('ecosistema')}
                    className={`pb-3 px-2 md:px-6 font-bold text-xs md:text-base transition-all relative whitespace-nowrap ${
                      activeTab === 'ecosistema'
                        ? 'text-brand-cyan'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {t.modal.tabs.ecosistema}
                    {activeTab === 'ecosistema' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-purple"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4 md:p-8">
                <AnimatePresence mode="wait">
                  {activeTab === 'fundamentos' && (
                    <motion.div
                      key="fundamentos"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      {/* Introducción General */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-start gap-2 break-words">
                          <Target size={18} className="text-brand-cyan flex-shrink-0 mt-1" />
                          <span className="break-words">{t.modal.fundamentos.intro.title}</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          {t.modal.fundamentos.intro.p1}
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                          {t.modal.fundamentos.intro.p2}
                        </p>
                      </div>

                      {/* Los 3 Pilares */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-start gap-2 break-words">
                          <Lightbulb size={18} className="text-brand-yellow flex-shrink-0 mt-1" />
                          <span className="break-words">{t.modal.fundamentos.pilares.title}</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-5">
                            <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mb-3">
                              <Zap size={20} className="text-brand-purple" />
                            </div>
                            <h4 className="text-white font-bold mb-2 text-lg">{t.modal.fundamentos.pilares.espiritual.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {t.modal.fundamentos.pilares.espiritual.desc}
                            </p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-5">
                            <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-3">
                              <Brain size={20} className="text-brand-cyan" />
                            </div>
                            <h4 className="text-white font-bold mb-2 text-lg">{t.modal.fundamentos.pilares.cientifico.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {t.modal.fundamentos.pilares.cientifico.desc}
                            </p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-5">
                            <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center mb-3">
                              <Target size={20} className="text-brand-orange" />
                            </div>
                            <h4 className="text-white font-bold mb-2 text-lg">{t.modal.fundamentos.pilares.practico.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {t.modal.fundamentos.pilares.practico.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Propósito del Autor */}
                      <div className="bg-gradient-to-br from-brand-purple/5 to-brand-cyan/5 border border-white/10 rounded-xl p-4 md:p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 break-words">{t.modal.fundamentos.proposito.title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-3">
                          {t.modal.fundamentos.proposito.p1}
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                          {t.modal.fundamentos.proposito.p2}
                        </p>
                      </div>

                      {/* Problema que Resuelve */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 break-words">{t.modal.fundamentos.problema.title}</h3>
                        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                          {t.modal.fundamentos.problema.items.map((item: any, idx: number) => (
                            <div key={idx} className="bg-[#1A1A2E] border border-red-500/20 rounded-xl p-4">
                              <h4 className="text-red-400 font-bold mb-2 text-sm md:text-base break-words">❌ {item.title}</h4>
                              <p className="text-gray-400 text-xs md:text-sm break-words">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Fundamento Espiritual */}
                      <div className="bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 border border-white/10 rounded-xl p-4 md:p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 break-words">{t.modal.fundamentos.fundamento.title}</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-brand-cyan font-bold mb-2 text-base md:text-lg break-words">{t.modal.fundamentos.fundamento.dios.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed break-words">
                              {t.modal.fundamentos.fundamento.dios.desc}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-brand-cyan font-bold mb-2 text-base md:text-lg break-words">{t.modal.fundamentos.fundamento.humano.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed break-words">
                              {t.modal.fundamentos.fundamento.humano.desc}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-brand-cyan font-bold mb-2 text-base md:text-lg break-words">{t.modal.fundamentos.fundamento.genesis.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed break-words">
                              {t.modal.fundamentos.fundamento.genesis.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Definición de Inteligencia */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 break-words">{t.modal.fundamentos.definicion.title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-3">
                          {t.modal.fundamentos.definicion.intro}
                        </p>
                        <div className="bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 border-l-4 border-brand-cyan p-4 md:p-5 rounded-r-xl">
                          <p className="text-white text-base md:text-lg font-semibold italic break-words">
                            "{t.modal.fundamentos.definicion.quote}"
                          </p>
                        </div>
                      </div>

                      {/* Orden Estructural */}
                      <div className="bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 border border-white/10 rounded-xl p-4 md:p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 break-words">{t.modal.fundamentos.orden.title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          {t.modal.fundamentos.orden.intro}
                        </p>
                        <ul className="space-y-3 text-gray-400">
                          {t.modal.fundamentos.orden.items.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-brand-cyan mt-1">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </motion.div>
                  )}

                  {activeTab === '7inteligencias' && (
                    <motion.div
                      key="7inteligencias"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-start gap-2 break-words">
                        <Sparkles size={20} className="text-brand-orange flex-shrink-0 mt-1" />
                        <span className="break-words">{t.modal.inteligencias.title}</span>
                      </h3>

                      <p className="text-gray-400 leading-relaxed mb-6">
                        {t.modal.inteligencias.intro}
                      </p>

                      {/* Expandable Intelligence Cards */}
                      <div className="space-y-3">
                        {intelligencesData.map((intelligence, index) => {
                          const Icon = intelligence.icon;
                          const isExpanded = expandedIntelligence === intelligence.id;

                          return (
                            <motion.div
                              key={intelligence.id}
                              className={`${intelligence.bgColor} ${intelligence.borderColor} border rounded-xl overflow-hidden transition-all`}
                              initial={false}
                            >
                              {/* Card Header - Always visible */}
                              <button
                                onClick={() => setExpandedIntelligence(isExpanded ? null : intelligence.id)}
                                className="w-full p-4 md:p-5 flex items-center justify-between hover:bg-white/5 transition-colors gap-2"
                              >
                                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${intelligence.bgColor} border ${intelligence.borderColor} flex items-center justify-center flex-shrink-0`}>
                                    <Icon size={20} className={intelligence.textColor} />
                                  </div>
                                  <div className="text-left min-w-0 flex-1">
                                    <h4 className="text-white text-base md:text-lg font-bold break-words">Inteligencia {intelligence.name}</h4>
                                    <p className={`text-xs md:text-sm ${intelligence.textColor} italic break-words line-clamp-2`}>"{intelligence.lema}"</p>
                                  </div>
                                </div>
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="flex-shrink-0"
                                >
                                  <Sparkles size={16} className={intelligence.textColor} />
                                </motion.div>
                              </button>

                              {/* Expandable Content */}
                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-4 md:px-5 pb-4 md:pb-5 pt-2 space-y-3 md:space-y-4 border-t border-white/10">
                                      {/* Dimensión Espiritual */}
                                      <div className="bg-[#1A1A2E]/50 rounded-lg p-4">
                                        <h5 className="text-brand-purple font-bold mb-2 flex items-center gap-2">
                                          <Zap size={16} className="text-brand-purple" />
                                          {intelligence.espiritual.title}
                                        </h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                          {intelligence.espiritual.content}
                                        </p>
                                      </div>

                                      {/* Dimensión Científica */}
                                      <div className="bg-[#1A1A2E]/50 rounded-lg p-4">
                                        <h5 className="text-brand-cyan font-bold mb-2 flex items-center gap-2">
                                          <Brain size={16} className="text-brand-cyan" />
                                          {intelligence.cientifica.title}
                                        </h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                          {intelligence.cientifica.content}
                                        </p>
                                      </div>

                                      {/* Dimensión Práctica */}
                                      <div className="bg-[#1A1A2E]/50 rounded-lg p-4">
                                        <h5 className="text-brand-orange font-bold mb-2 flex items-center gap-2">
                                          <Target size={16} className="text-brand-orange" />
                                          {intelligence.practica.title}
                                        </h5>
                                        <ul className="space-y-2">
                                          {intelligence.practica.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                                              <span className={`${intelligence.textColor} mt-1`}>•</span>
                                              <span>{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Synthesis Note */}
                      <div className="mt-6 md:mt-8 bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 border-l-4 border-brand-cyan p-4 md:p-5 rounded-r-xl">
                        <p className="text-white font-semibold mb-2">💡 {t.modal.inteligencias.synthesis.title}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {t.modal.inteligencias.synthesis.desc}
                        </p>
                      </div>

                    </motion.div>
                  )}

                  {activeTab === 'ecosistema' && (
                    <motion.div
                      key="ecosistema"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      {/* Ecosistema */}
                      <div className="bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 border border-white/10 rounded-xl p-4 md:p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center break-words">{t.modal.ecosistema.titulo}</h3>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-4 md:p-5">
                            <div className="text-2xl md:text-3xl mb-3">🎓</div>
                            <h4 className="text-white text-base md:text-lg font-bold mb-2 break-words">{t.modal.ecosistema.starbiz.title}</h4>
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed break-words">
                              {t.modal.ecosistema.starbiz.desc}
                            </p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-4 md:p-5">
                            <div className="text-2xl md:text-3xl mb-3">👨‍👩‍👧‍👦</div>
                            <h4 className="text-white text-base md:text-lg font-bold mb-2 break-words">{t.modal.ecosistema.padres.title}</h4>
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed break-words">
                              {t.modal.ecosistema.padres.desc}
                            </p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-4 md:p-5">
                            <div className="text-2xl md:text-3xl mb-3">🌐</div>
                            <h4 className="text-white text-base md:text-lg font-bold mb-2 break-words">{t.modal.ecosistema.stareduca.title}</h4>
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed break-words">
                              {t.modal.ecosistema.stareduca.desc}
                            </p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-4 md:p-5">
                            <div className="text-2xl md:text-3xl mb-3">📱</div>
                            <h4 className="text-white text-base md:text-lg font-bold mb-2 break-words">{t.modal.ecosistema.starbooks.title}</h4>
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed break-words">
                              {t.modal.ecosistema.starbooks.desc}
                            </p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-4 md:p-5 md:col-span-2">
                            <div className="text-2xl md:text-3xl mb-3">🚀</div>
                            <h4 className="text-white text-base md:text-lg font-bold mb-2 break-words">{t.modal.ecosistema.ceojr.title}</h4>
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed break-words">
                              {t.modal.ecosistema.ceojr.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Originalidad */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 break-words">{t.modal.originalidad.title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          {t.modal.originalidad.intro}
                        </p>
                        <div className="space-y-2 md:space-y-3">
                          {t.modal.originalidad.items.map((item: any, idx: number) => (
                            <div key={idx} className="flex items-start gap-2 md:gap-3 bg-[#1A1A2E] border border-white/5 rounded-lg p-3 md:p-4">
                              <span className="text-brand-cyan font-bold flex-shrink-0 text-sm md:text-base">{idx + 1}.</span>
                              <div className="min-w-0 flex-1">
                                <h4 className="text-white font-bold mb-1 text-sm md:text-base break-words">{item.title}</h4>
                                <p className="text-gray-400 text-xs md:text-sm break-words">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Autoría */}
                      <div className="bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 border border-white/10 rounded-xl p-4 md:p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 break-words">{t.modal.autoria.title}</h3>
                        <div className="space-y-3 text-gray-400">
                          <p className="leading-relaxed text-sm md:text-base break-words">
                            {t.modal.autoria.p1}
                          </p>
                          <p className="leading-relaxed text-sm md:text-base break-words">
                            {t.modal.autoria.p2}
                          </p>
                          <p className="leading-relaxed text-sm md:text-base break-words">
                            <span className="text-brand-cyan font-semibold">{t.modal.autoria.p3_label}</span> {t.modal.autoria.p3}
                          </p>
                          <p className="leading-relaxed text-sm md:text-base break-words">
                            <span className="text-brand-orange font-semibold">{t.modal.autoria.p4_label}</span> {t.modal.autoria.p4}
                          </p>
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Close Button */}
                <div className="text-center pt-4 md:pt-6 mt-4 md:mt-6 border-t border-white/10">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider rounded-full transition-colors"
                  >
                    {t.modal.close}
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Video Presentación */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
          >
            {/* Contenedor del Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-space-card rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
                aria-label="Cerrar modal de video"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Reproductor de Video */}
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full"
                  controls
                  autoPlay
                  controlsList="nodownload"
                  src={`/videos/presentation-video-${language}.mp4`}
                  key={language}
                >
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default SevenIntelligences;
