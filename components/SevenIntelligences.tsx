
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Activity, Heart, Users, Zap, DollarSign, Cpu, X, Sparkles, BookOpen, Target, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SevenIntelligences: React.FC = () => {
  const { t } = useLanguage();
  const data = t.intelligences.list;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'fundamentos' | '7inteligencias' | 'ecosistema'>('fundamentos');
  const [expandedIntelligence, setExpandedIntelligence] = useState<number | null>(null);

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

  // Complete data for the 7 intelligences
  const intelligencesData = [
    {
      id: 1,
      name: "Espiritual",
      icon: Zap,
      color: "purple",
      borderColor: "border-purple-500/20",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-400",
      lema: "Recordar quién eres y por qué estás aquí",
      espiritual: {
        title: "Dimensión Espiritual",
        content: "Es la conexión directa con Dios, el Padre de los espíritus. Despierta identidad eterna, fe y sentido de misión. Recordamos que no somos cuerpos que tienen un espíritu, sino espíritus eternos que habitan un cuerpo."
      },
      cientifica: {
        title: "Dimensión Científica",
        content: "Se relaciona con la llamada 'conciencia trascendental': la capacidad del cerebro para buscar sentido, propósito y conexión con algo más grande que uno mismo. Favorece paz interior, resiliencia y equilibrio emocional."
      },
      practica: {
        title: "Dimensión Práctica",
        items: ["Oración diaria", "Meditación consciente", "Práctica de gratitud", "Servicio a otros", "Reflexión sobre propósito", "Decisiones basadas en principios"]
      }
    },
    {
      id: 2,
      name: "Mental",
      icon: Brain,
      color: "blue",
      borderColor: "border-blue-500/20",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-400",
      lema: "El poder de pensar como Dios piensa",
      espiritual: {
        title: "Dimensión Espiritual",
        content: "Dios es inteligencia suprema y fuente de toda sabiduría. Conectar con Él despierta claridad mental, discernimiento y pensamientos elevados. La mente es el puente entre el espíritu y el mundo físico."
      },
      cientifica: {
        title: "Dimensión Científica",
        content: "Incluye pensamiento crítico, memoria, capacidad de aprendizaje, atención consciente y neuroplasticidad. El cerebro puede reorganizarse y fortalecerse mediante el aprendizaje continuo."
      },
      practica: {
        title: "Dimensión Práctica",
        items: ["Técnicas de estudio efectivas", "Fijación de objetivos SMART", "Mapas mentales y esquemas", "Lectura activa diaria", "Resolución de problemas", "Aprendizaje continuo"]
      }
    },
    {
      id: 3,
      name: "Física",
      icon: Activity,
      color: "orange",
      borderColor: "border-orange-500/20",
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-400",
      lema: "El cuerpo: templo del propósito",
      espiritual: {
        title: "Dimensión Espiritual",
        content: "El cuerpo no es un enemigo ni un objeto, es un templo sagrado que alberga el espíritu. Cuidarlo es honrar a Dios y prepararse para cumplir la misión de vida con energía y vitalidad."
      },
      cientifica: {
        title: "Dimensión Científica",
        content: "Abarca salud integral: actividad física regular, nutrición balanceada, descanso reparador y prevención de enfermedades. La ciencia confirma el vínculo directo entre cuerpo saludable y rendimiento mental/emocional."
      },
      practica: {
        title: "Dimensión Práctica",
        items: ["Ejercicio regular (mínimo 30 min/día)", "Alimentación consciente y balanceada", "Dormir 7-9 horas diarias", "Hidratación adecuada", "Prevención y chequeos médicos", "Manejo del estrés físico"]
      }
    },
    {
      id: 4,
      name: "Emocional",
      icon: Heart,
      color: "pink",
      borderColor: "border-pink-500/20",
      bgColor: "bg-pink-500/10",
      textColor: "text-pink-400",
      lema: "Dominar el corazón antes que el mundo",
      espiritual: {
        title: "Dimensión Espiritual",
        content: "Las emociones son el lenguaje del alma. Dios nos dio emociones para sentir, conectar y actuar. Aprender a gestionarlas es desarrollar dominio propio, uno de los frutos del Espíritu."
      },
      cientifica: {
        title: "Dimensión Científica",
        content: "Comprende regulación emocional, resiliencia, inteligencia emocional (identificar, comprender y gestionar emociones propias y ajenas). Influye directamente en toma de decisiones y relaciones interpersonales."
      },
      practica: {
        title: "Dimensión Práctica",
        items: ["Identificar y nombrar emociones", "Técnicas de respiración y relajación", "Journaling emocional", "Manejo de ansiedad y estrés", "Desarrollo de empatía", "Resiliencia ante adversidades"]
      }
    },
    {
      id: 5,
      name: "Social",
      icon: Users,
      color: "cyan",
      borderColor: "border-cyan-500/20",
      bgColor: "bg-cyan-500/10",
      textColor: "text-cyan-400",
      lema: "Conectar y liderar con empatía",
      espiritual: {
        title: "Dimensión Espiritual",
        content: "Dios es relación perfecta (Padre, Hijo, Espíritu Santo). Fuimos creados para conectar, servir y liderar con amor. La inteligencia social refleja nuestra capacidad de ser luz en comunidad."
      },
      cientifica: {
        title: "Dimensión Científica",
        content: "Incluye empatía, comunicación asertiva, trabajo en equipo, liderazgo, negociación y resolución de conflictos. Fundamental para el éxito personal y profesional en la era digital."
      },
      practica: {
        title: "Dimensión Práctica",
        items: ["Escucha activa", "Comunicación clara y respetuosa", "Trabajo colaborativo", "Liderazgo de servicio", "Networking consciente", "Gestión de conflictos"]
      }
    },
    {
      id: 6,
      name: "Financiera",
      icon: DollarSign,
      color: "green",
      borderColor: "border-green-500/20",
      bgColor: "bg-green-500/10",
      textColor: "text-green-400",
      lema: "Administrar con sabiduría divina",
      espiritual: {
        title: "Dimensión Espiritual",
        content: "Dios es abundancia y orden perfecto. El dinero es una herramienta para bendecir, servir y cumplir propósitos. La mayordomía fiel honra a Dios y multiplica recursos para impacto eterno."
      },
      cientifica: {
        title: "Dimensión Científica",
        content: "Comprende toma de decisiones financieras, planificación, inversión, gestión de riesgos y educación económica. Desarrolla pensamiento estratégico y visión a largo plazo."
      },
      practica: {
        title: "Dimensión Práctica",
        items: ["Presupuesto personal mensual", "Ahorro sistemático (10-20%)", "Inversión consciente", "Generación de ingresos múltiples", "Educación financiera continua", "Generosidad estratégica"]
      }
    },
    {
      id: 7,
      name: "Tecnológica",
      icon: Cpu,
      color: "indigo",
      borderColor: "border-indigo-500/20",
      bgColor: "bg-indigo-500/10",
      textColor: "text-indigo-400",
      lema: "Usar la tecnología para crear, no para perderse",
      espiritual: {
        title: "Dimensión Espiritual",
        content: "Somos creados a imagen del Creador supremo. La tecnología bien usada refleja nuestra capacidad divina de crear, innovar y transformar. Es una herramienta para expandir el Reino, no para perdernos en lo temporal."
      },
      cientifica: {
        title: "Dimensión Científica",
        content: "Incluye competencias digitales, programación, inteligencia artificial, marketing digital, análisis de datos y alfabetización tecnológica. Esencial para competir en el mundo digital actual."
      },
      practica: {
        title: "Dimensión Práctica",
        items: ["Uso consciente de redes sociales", "Aprendizaje de herramientas digitales", "Marketing digital básico", "Programación y automatización", "IA aplicada", "Emprendimiento digital"]
      }
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
            METODOLOGÍA: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">GÉNESIS 7</span><span className="text-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple normal-case" style={{ fontFamily: "'Pacifico', cursive" }}>i</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">™</span>
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
                Descubre GÉNESIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple font-bold">7</span><span className="text-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple font-bold normal-case" style={{ fontFamily: "'Pacifico', cursive" }}>i</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple font-bold">™</span>, el sistema integral que transforma adolescentes y familias.
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
              <div className="relative p-8 pb-6 border-b border-white/10 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10">
                <div className="text-center">
                  <span className="text-brand-cyan font-mono text-xs uppercase tracking-[0.3em] mb-2 block">Metodología Exclusiva</span>
                  <h2 className="text-4xl md:text-5xl font-bold font-display mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">GÉNESIS 7</span><span className="text-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple normal-case" style={{ fontFamily: "'Pacifico', cursive" }}>i</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">™</span>
                  </h2>
                  <p className="text-xl text-brand-yellow font-light italic">"7 Inteligencias, Mil Oportunidades"</p>
                  <p className="text-gray-500 text-sm mt-3">Creado por Jimy Henry Orellana Domínguez • Utah, EE.UU. • 2025</p>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="border-b border-white/10 px-8 pt-6">
                <div className="flex gap-2 md:gap-4">
                  <button
                    onClick={() => setActiveTab('fundamentos')}
                    className={`pb-3 px-4 md:px-6 font-bold text-sm md:text-base transition-all relative ${
                      activeTab === 'fundamentos'
                        ? 'text-brand-cyan'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Fundamentos
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
                    className={`pb-3 px-4 md:px-6 font-bold text-sm md:text-base transition-all relative ${
                      activeTab === '7inteligencias'
                        ? 'text-brand-cyan'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Las 7 Inteligencias
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
                    className={`pb-3 px-4 md:px-6 font-bold text-sm md:text-base transition-all relative ${
                      activeTab === 'ecosistema'
                        ? 'text-brand-cyan'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Ecosistema
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
              <div className="p-8">
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
                        <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                          <Target size={20} className="text-brand-cyan" />
                          ¿Qué es GÉNESIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">7</span><span className="text-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple normal-case" style={{ fontFamily: "'Pacifico', cursive" }}>i</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">™</span>?
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          Una metodología educativa integral diseñada para transformar la vida de adolescentes y sus familias en la era digital.
                          Basada en el desarrollo articulado de siete inteligencias esenciales que activan el propósito personal, fortalecen la
                          identidad espiritual y preparan a los jóvenes para enfrentar con éxito los desafíos del siglo XXI.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                          GÉNESIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">7</span><span className="text-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple normal-case" style={{ fontFamily: "'Pacifico', cursive" }}>i</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">™</span> es una metodología educativa integral que busca despertar y desarrollar en los adolescentes siete inteligencias fundamentales,
                          cada una esencial para su éxito personal, profesional y espiritual en el mundo digital actual.
                        </p>
                      </div>

                      {/* Los 3 Pilares */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                          <Lightbulb size={20} className="text-brand-yellow" />
                          Los 3 Pilares Inseparables
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-5">
                            <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mb-3">
                              <Zap size={20} className="text-brand-purple" />
                            </div>
                            <h4 className="text-white font-bold mb-2 text-lg">Fundamento Espiritual</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              Dios como fuente de toda inteligencia, propósito eterno y origen de nuestra identidad.
                            </p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-5">
                            <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-3">
                              <Brain size={20} className="text-brand-cyan" />
                            </div>
                            <h4 className="text-white font-bold mb-2 text-lg">Fundamento Científico</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              Neurociencia, psicología positiva, educación basada en evidencia y desarrollo contemporáneo.
                            </p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-5">
                            <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center mb-3">
                              <Target size={20} className="text-brand-orange" />
                            </div>
                            <h4 className="text-white font-bold mb-2 text-lg">Fundamento Práctico</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              Herramientas aplicables, estrategias medibles y resultados tangibles para la transformación real.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Propósito del Autor */}
                      <div className="bg-gradient-to-br from-brand-purple/5 to-brand-cyan/5 border border-white/10 rounded-xl p-6">
                        <h3 className="text-2xl font-bold text-white mb-4">Propósito de Vida del Autor</h3>
                        <p className="text-gray-400 leading-relaxed mb-3">
                          Desde los 15 años sentí un llamado profundo: formar una nueva generación de adolescentes que se conviertan en
                          <span className="text-brand-cyan font-semibold"> empresarios digitales con valores cristianos</span>, capaces de crear impacto económico y transformar sus familias.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                          Esta visión surge de mi propia crisis personal y búsqueda de sentido. GÉNESIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">7</span><span className="text-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple normal-case" style={{ fontFamily: "'Pacifico', cursive" }}>i</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">™</span> nace como respuesta a una generación
                          perdida, sin dirección clara ni herramientas para navegar la revolución digital actual.
                        </p>
                      </div>

                      {/* Problema que Resuelve */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Problema que Resuelve</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-[#1A1A2E] border border-red-500/20 rounded-xl p-5">
                            <h4 className="text-red-400 font-bold mb-2">❌ Padres confundidos</h4>
                            <p className="text-gray-400 text-sm">No saben cómo guiar a sus hijos en la era digital sin principios claros.</p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-red-500/20 rounded-xl p-5">
                            <h4 className="text-red-400 font-bold mb-2">❌ Adolescentes sin dirección</h4>
                            <p className="text-gray-400 text-sm">Crecen sin propósito claro, navegando sin brújula moral o espiritual.</p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-red-500/20 rounded-xl p-5">
                            <h4 className="text-red-400 font-bold mb-2">❌ Escuela tradicional desconectada</h4>
                            <p className="text-gray-400 text-sm">No prepara para la realidad digital ni para el emprendimiento real.</p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-red-500/20 rounded-xl p-5">
                            <h4 className="text-red-400 font-bold mb-2">❌ Tecnología más rápida que educación</h4>
                            <p className="text-gray-400 text-sm">La velocidad del cambio supera la capacidad de adaptación educativa.</p>
                          </div>
                        </div>
                      </div>

                      {/* Fundamento Espiritual */}
                      <div className="bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 border border-white/10 rounded-xl p-6">
                        <h3 className="text-2xl font-bold text-white mb-4">Fundamento Espiritual y Filosófico</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-brand-cyan font-bold mb-2">Dios como Inteligencia Suprema</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              La metodología reconoce a Dios no solo como creador, sino como la fuente infinita de toda inteligencia.
                              Cada una de las 7 inteligencias encuentra su origen y máxima expresión en Su naturaleza divina.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-brand-cyan font-bold mb-2">El ser humano como inteligencia eterna</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              No somos cuerpos que tienen un espíritu, sino espíritus eternos que habitan un cuerpo temporal.
                              Esta identidad espiritual es el fundamento de nuestro propósito y potencial infinito.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-brand-cyan font-bold mb-2">Sentido de "GÉNESIS"</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              GÉNESIS significa principio, origen, creación. Esta metodología lleva a los adolescentes a su origen divino,
                              a recordar quiénes son y por qué están aquí, activando su propósito desde el principio eterno.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Definición de Inteligencia */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Definición de "Inteligencia" en GÉNESIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">7</span><span className="text-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple normal-case" style={{ fontFamily: "'Pacifico', cursive" }}>i</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">™</span></h3>
                        <p className="text-gray-400 leading-relaxed mb-3">
                          La inteligencia NO es solo coeficiente intelectual o capacidad cognitiva. En GÉNESIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">7</span><span className="text-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple normal-case" style={{ fontFamily: "'Pacifico', cursive" }}>i</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">™</span>, definimos inteligencia como:
                        </p>
                        <div className="bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 border-l-4 border-brand-cyan p-5 rounded-r-xl">
                          <p className="text-white text-lg font-semibold italic">
                            "La chispa eterna que procede de Dios, manifestada en la capacidad de pensar, crear, sentir, decidir y amar."
                          </p>
                        </div>
                      </div>

                      {/* Orden Estructural */}
                      <div className="bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 border border-white/10 rounded-xl p-6">
                        <h3 className="text-2xl font-bold text-white mb-4">Orden Estructural: Inteligencia Espiritual como Génesis</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          El orden NO es arbitrario. La Inteligencia Espiritual es el <span className="text-brand-cyan font-semibold">génesis</span> (el principio)
                          de todas las demás porque:
                        </p>
                        <ul className="space-y-3 text-gray-400">
                          <li className="flex items-start gap-3">
                            <span className="text-brand-cyan mt-1">→</span>
                            <span>Define la identidad eterna del adolescente (quién es realmente)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-brand-cyan mt-1">→</span>
                            <span>Establece el propósito trascendente (por qué está aquí)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-brand-cyan mt-1">→</span>
                            <span>Conecta con la fuente de sabiduría infinita (Dios)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-brand-cyan mt-1">→</span>
                            <span>Produce un efecto cascada: cuando la espiritual está activa, todas las demás fluyen con mayor claridad</span>
                          </li>
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
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Sparkles size={24} className="text-brand-orange" />
                        Las 7 Inteligencias: Sistema Integrado
                      </h3>

                      <p className="text-gray-400 leading-relaxed mb-6">
                        Cada inteligencia tiene tres dimensiones inseparables: Espiritual (conexión con Dios), Científica (evidencia y método),
                        y Práctica (herramientas aplicables). Haz clic en cada una para explorar su contenido completo.
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
                                className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition-colors"
                              >
                                <div className="flex items-center gap-4">
                                  <div className={`w-12 h-12 rounded-lg ${intelligence.bgColor} border ${intelligence.borderColor} flex items-center justify-center`}>
                                    <Icon size={24} className={intelligence.textColor} />
                                  </div>
                                  <div className="text-left">
                                    <h4 className="text-white text-lg font-bold">Inteligencia {intelligence.name}</h4>
                                    <p className={`text-sm ${intelligence.textColor} italic`}>"{intelligence.lema}"</p>
                                  </div>
                                </div>
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Sparkles size={20} className={intelligence.textColor} />
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
                                    <div className="px-5 pb-5 pt-2 space-y-4 border-t border-white/10">
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
                      <div className="mt-8 bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 border-l-4 border-brand-cyan p-5 rounded-r-xl">
                        <p className="text-white font-semibold mb-2">💡 Síntesis Estructural</p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Las 7 inteligencias NO trabajan aisladas. Son un <span className="text-brand-cyan font-semibold">sistema integrado</span> donde
                          la Inteligencia Espiritual es el génesis (principio) que activa y da sentido a todas las demás.
                          Cuando se desarrollan juntas, el efecto multiplicador transforma completamente la vida del adolescente.
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
                      <div className="bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 border border-white/10 rounded-xl p-6">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Ecosistema Educativo Completo</h3>
                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-5">
                            <div className="text-3xl mb-3">🎓</div>
                            <h4 className="text-white text-lg font-bold mb-2">Starbiz Academy LLC</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              El "Silicon Valley educativo para Latinoamérica" - Centro neurálgico donde se imparten todos los programas,
                              recursos y metodologías educativas de vanguardia.
                            </p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-5">
                            <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
                            <h4 className="text-white text-lg font-bold mb-2">Padres 3.0</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              Comunidad de padres conscientes que se capacitan para guiar a sus hijos en la era digital con valores
                              cristianos y herramientas prácticas.
                            </p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-5">
                            <div className="text-3xl mb-3">🌐</div>
                            <h4 className="text-white text-lg font-bold mb-2">Stareduca.com</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              Plataforma educativa digital donde se alojan cursos, recursos y contenido formativo para toda la comunidad.
                            </p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-5">
                            <div className="text-3xl mb-3">📱</div>
                            <h4 className="text-white text-lg font-bold mb-2">Starbooks (App)</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              Aplicación móvil educativa que facilita el aprendizaje continuo, seguimiento de progreso y conexión comunitaria.
                            </p>
                          </div>
                          <div className="bg-[#1A1A2E] border border-white/5 rounded-xl p-5 md:col-span-2">
                            <div className="text-3xl mb-3">🚀</div>
                            <h4 className="text-white text-lg font-bold mb-2">CEO Junior</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              Programa insignia para adolescentes emprendedores (13-18 años) que los transforma en líderes digitales
                              con mentalidad de CEO, combinando valores cristianos con habilidades de emprendimiento digital.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Originalidad */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Originalidad y Carácter Distintivo</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          GÉNESIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">7</span><span className="text-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple normal-case" style={{ fontFamily: "'Pacifico', cursive" }}>i</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">™</span> es único en el mercado por 5 razones fundamentales:
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 bg-[#1A1A2E] border border-white/5 rounded-lg p-4">
                            <span className="text-brand-cyan font-bold">1.</span>
                            <div>
                              <h4 className="text-white font-bold mb-1">Integración Espíritu-Ciencia-Práctica</h4>
                              <p className="text-gray-400 text-sm">No separa lo espiritual de lo científico ni de lo práctico.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 bg-[#1A1A2E] border border-white/5 rounded-lg p-4">
                            <span className="text-brand-cyan font-bold">2.</span>
                            <div>
                              <h4 className="text-white font-bold mb-1">Enfoque en Identidad Eterna</h4>
                              <p className="text-gray-400 text-sm">No solo desarrolla habilidades, despierta identidad divina.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 bg-[#1A1A2E] border border-white/5 rounded-lg p-4">
                            <span className="text-brand-cyan font-bold">3.</span>
                            <div>
                              <h4 className="text-white font-bold mb-1">Diseñado para Era Digital</h4>
                              <p className="text-gray-400 text-sm">Nativo digital, no adaptación forzada de métodos antiguos.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 bg-[#1A1A2E] border border-white/5 rounded-lg p-4">
                            <span className="text-brand-cyan font-bold">4.</span>
                            <div>
                              <h4 className="text-white font-bold mb-1">Sistema Integrado de 7 Inteligencias</h4>
                              <p className="text-gray-400 text-sm">No trata cada inteligencia aislada, sino como sistema interconectado.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 bg-[#1A1A2E] border border-white/5 rounded-lg p-4">
                            <span className="text-brand-cyan font-bold">5.</span>
                            <div>
                              <h4 className="text-white font-bold mb-1">Orientación a Emprendimiento Digital</h4>
                              <p className="text-gray-400 text-sm">No solo educa, prepara para crear empresas digitales con impacto.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Autoría */}
                      <div className="bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 border border-white/10 rounded-xl p-6">
                        <h3 className="text-2xl font-bold text-white mb-4">Autoría y Propiedad Intelectual</h3>
                        <div className="space-y-3 text-gray-400">
                          <p className="leading-relaxed">
                            <span className="text-white font-semibold">Jimy Henry Orellana Domínguez</span> declara ser el autor original
                            de la metodología GÉNESIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">7</span><span className="text-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple normal-case" style={{ fontFamily: "'Pacifico', cursive" }}>i</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">™</span>.
                          </p>
                          <p className="leading-relaxed">
                            Esta metodología surge de su experiencia personal, formación espiritual, estudios en educación y emprendimiento,
                            y su compromiso con la transformación de la juventud latinoamericana.
                          </p>
                          <p className="leading-relaxed">
                            <span className="text-brand-cyan font-semibold">Propiedad:</span> La metodología es propiedad de Starbiz Academy LLC,
                            empresa legalmente constituida en Utah, Estados Unidos.
                          </p>
                          <p className="leading-relaxed">
                            <span className="text-brand-orange font-semibold">Finalidad:</span> Educativa, social y de transformación generacional.
                            Se comparte para el beneficio de familias y adolescentes que buscan propósito en la era digital.
                          </p>
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Close Button */}
                <div className="text-center pt-6 mt-6 border-t border-white/10">
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
