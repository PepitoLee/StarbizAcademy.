
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Activity, Heart, Users, Zap, DollarSign, Cpu, X, Sparkles, BookOpen, Target, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SevenIntelligences: React.FC = () => {
  const { t } = useLanguage();
  const data = t.intelligences.list;
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            METODOLOGÍA: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">GÉNESIS <span className="font-calligraphy text-[1.3em] relative -top-[0.05em]">i</span>7™</span>
            <span className="block text-2xl md:text-4xl mt-2 text-brand-yellow font-bold tracking-[0.1em]">
              7 Inteligencias, Mil Oportunidades
            </span>
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto my-6 md:my-8 shadow-[0_0_15px_#FF6B00]"></div>
          <p className="text-gray-400 font-sans text-base md:text-lg tracking-wide max-w-3xl mx-auto leading-relaxed">
            El mapa integral para formar adolescentes con propósito, carácter y mentalidad digital.
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
                Conoce más sobre nuestra metodología
              </h3>
              <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                Descubre GÉNESIS <span className="font-calligraphy text-[1.3em] relative -top-[0.05em]">i</span>7™, el sistema integral que transforma adolescentes y familias.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group/btn relative inline-flex px-8 py-3 bg-gradient-to-r from-brand-cyan to-brand-purple text-white font-bold text-sm uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  DESCUBRIR <Sparkles size={16} />
                </span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Modal: GÉNESIS I7™ */}
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
              <div className="relative p-8 pb-6 border-b border-white/10 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10">
                <div className="text-center">
                  <span className="text-brand-cyan font-mono text-xs uppercase tracking-[0.3em] mb-2 block">Metodología Exclusiva</span>
                  <h2 className="text-4xl md:text-5xl font-bold font-display mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">GÉNESIS <span className="font-calligraphy text-[1.3em] relative -top-[0.05em]">i</span>7™</span>
                  </h2>
                  <p className="text-xl text-brand-yellow font-light italic">"7 Inteligencias, Mil Oportunidades"</p>
                  <p className="text-gray-500 text-sm mt-3">Creado por Jimy Henry Orellana Domínguez • Utah, EE.UU. • 2025</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">

                {/* ¿Qué es? */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Target size={20} className="text-brand-cyan" />
                    ¿Qué es GÉNESIS <span className="font-calligraphy text-[1.3em] relative -top-[0.05em]">i</span>7™?
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Una metodología educativa integral diseñada para transformar la vida de adolescentes y sus familias en la era digital.
                    Basada en el desarrollo articulado de siete inteligencias esenciales que activan el propósito personal, fortalecen la
                    identidad espiritual y preparan a los jóvenes para enfrentar con éxito los desafíos del siglo XXI.
                  </p>
                </div>

                {/* Los 3 Pilares */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Lightbulb size={20} className="text-brand-yellow" />
                    Los 3 Pilares Fundamentales
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-4">
                      <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mb-3">
                        <Zap size={18} className="text-brand-purple" />
                      </div>
                      <h4 className="text-white font-bold mb-1">Espiritual</h4>
                      <p className="text-gray-500 text-sm">Dios como fuente de toda inteligencia y propósito eterno.</p>
                    </div>
                    <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-4">
                      <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-3">
                        <Brain size={18} className="text-brand-cyan" />
                      </div>
                      <h4 className="text-white font-bold mb-1">Científico</h4>
                      <p className="text-gray-500 text-sm">Neurociencia, psicología positiva y educación contemporánea.</p>
                    </div>
                    <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-4">
                      <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center mb-3">
                        <Target size={18} className="text-brand-orange" />
                      </div>
                      <h4 className="text-white font-bold mb-1">Práctico</h4>
                      <p className="text-gray-500 text-sm">Herramientas aplicables para la transformación real.</p>
                    </div>
                  </div>
                </div>

                {/* Las 7 Inteligencias */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles size={20} className="text-brand-orange" />
                    Las 7 Inteligencias
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 text-center">
                      <Zap size={20} className="text-purple-400 mx-auto mb-2" />
                      <h4 className="text-white text-sm font-bold">Espiritual</h4>
                      <p className="text-gray-500 text-xs">Fe y propósito</p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center">
                      <Brain size={20} className="text-blue-400 mx-auto mb-2" />
                      <h4 className="text-white text-sm font-bold">Mental</h4>
                      <p className="text-gray-500 text-xs">Pensamiento y metas</p>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 text-center">
                      <Activity size={20} className="text-orange-400 mx-auto mb-2" />
                      <h4 className="text-white text-sm font-bold">Física</h4>
                      <p className="text-gray-500 text-xs">Energía y salud</p>
                    </div>
                    <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-3 text-center">
                      <Heart size={20} className="text-pink-400 mx-auto mb-2" />
                      <h4 className="text-white text-sm font-bold">Emocional</h4>
                      <p className="text-gray-500 text-xs">Autocontrol y resiliencia</p>
                    </div>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3 text-center">
                      <Users size={20} className="text-cyan-400 mx-auto mb-2" />
                      <h4 className="text-white text-sm font-bold">Social</h4>
                      <p className="text-gray-500 text-xs">Conexión y liderazgo</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                      <DollarSign size={20} className="text-green-400 mx-auto mb-2" />
                      <h4 className="text-white text-sm font-bold">Financiera</h4>
                      <p className="text-gray-500 text-xs">Gestión del dinero</p>
                    </div>
                    <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-3 text-center col-span-2 md:col-span-2">
                      <Cpu size={20} className="text-indigo-400 mx-auto mb-2" />
                      <h4 className="text-white text-sm font-bold">Tecnológica</h4>
                      <p className="text-gray-500 text-xs">IA e innovación con propósito</p>
                    </div>
                  </div>
                </div>

                {/* Ecosistema */}
                <div className="bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Ecosistema Educativo</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl mb-1">🎓</div>
                      <p className="text-white text-sm font-bold">Starbiz Academy</p>
                      <p className="text-gray-500 text-xs">Centro de programas</p>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">👨‍👩‍👧‍👦</div>
                      <p className="text-white text-sm font-bold">Padres 3.0</p>
                      <p className="text-gray-500 text-xs">Comunidad de padres</p>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">🚀</div>
                      <p className="text-white text-sm font-bold">CEO Junior</p>
                      <p className="text-gray-500 text-xs">Adolescentes emprendedores</p>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">📱</div>
                      <p className="text-white text-sm font-bold">Starbooks App</p>
                      <p className="text-gray-500 text-xs">Plataforma educativa</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider rounded-full transition-colors"
                  >
                    Cerrar
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default SevenIntelligences;
