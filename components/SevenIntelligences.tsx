
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, Heart, Users, Zap, DollarSign, Cpu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SevenIntelligences: React.FC = () => {
  const { t } = useLanguage();
  const data = t.intelligences.list;

  // Configuration for each card to match the specific aesthetic of the reference image
  const cardConfig = [
    { 
      icon: Brain, 
      color: "text-purple-500", 
      borderColor: "group-hover:border-purple-500/50",
      bgIcon: "bg-purple-500/10"
    },
    { 
      icon: Activity, // Using Activity for "Física" (Pulse)
      color: "text-orange-500", 
      borderColor: "group-hover:border-orange-500/50",
      bgIcon: "bg-orange-500/10"
    },
    { 
      icon: Heart, 
      color: "text-pink-500", 
      borderColor: "group-hover:border-pink-500/50",
      bgIcon: "bg-pink-500/10"
    },
    { 
      icon: Users, 
      color: "text-blue-400", 
      borderColor: "group-hover:border-blue-400/50",
      bgIcon: "bg-blue-400/10"
    },
    { 
      icon: Zap, // Using Zap for "Espiritual" as per reference image (lightning bolt)
      color: "text-yellow-400", 
      borderColor: "group-hover:border-yellow-400/50",
      bgIcon: "bg-yellow-400/10"
    },
    { 
      icon: DollarSign, 
      color: "text-emerald-400", 
      borderColor: "group-hover:border-emerald-400/50",
      bgIcon: "bg-emerald-400/10"
    },
    { 
      icon: Cpu, 
      color: "text-cyan-400", 
      borderColor: "group-hover:border-cyan-400/50",
      bgIcon: "bg-cyan-400/10"
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
            7 INTELIGENCIAS
            <span className="block text-2xl md:text-4xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple font-bold tracking-[0.1em]">
              MIL OPORTUNIDADES
            </span>
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto my-6 md:my-8 shadow-[0_0_15px_#FF6B00]"></div>
          <p className="text-brand-yellow font-mono text-xs md:text-base tracking-[0.3em] uppercase">
            Nuestro mapa comprobado para forjar empresarios digitales con propósito, carácter y abundancia. El desarrollo integral es la clave del éxito sostenible.
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
                {/* Background Big Number */}
                <span className="absolute top-2 right-6 text-7xl font-display font-bold text-white group-hover:text-white transition-colors select-none pointer-events-none">
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

          {/* The 8th Card: Call To Action ("Tu Turno") */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="
              relative 
              bg-[#1A1A2E] 
              border border-brand-orange/30 hover:border-brand-orange/60
              rounded-3xl p-8 
              h-[380px] flex flex-col items-center justify-center text-center
              transition-all duration-300
              group
              shadow-lg
              shadow-brand-orange/5
            "
          >
            {/* Center Icon */}
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-brand-orange mb-8 flex items-center justify-center group-hover:rotate-90 transition-transform duration-700">
               <X size={32} className="text-brand-orange" />
            </div>

            <h3 className="text-3xl font-bold text-white font-display mb-2">
              Tu Turno
            </h3>
            <p className="text-gray-400 text-sm mb-8">
              Activa el protocolo completo.
            </p>

            <a 
              href="#contacto" 
              className="bg-brand-orange text-black font-bold font-display px-8 py-3 rounded-full hover:bg-white transition-colors uppercase tracking-wider shadow-lg shadow-brand-orange/20"
            >
              INICIAR
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SevenIntelligences;
