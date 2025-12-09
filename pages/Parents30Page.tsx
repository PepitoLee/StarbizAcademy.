import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import CountdownTimer from '../components/landing/CountdownTimer';
import Starfield from '../components/Starfield';
import {
  Heart,
  Users,
  BookOpen,
  Video,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Brain,
  Compass,
  Smartphone,
  HelpCircle,
  Fingerprint,
  CheckCircle2,
  Quote,
  Hexagon,
  Star,
  Shield,
  Zap,
  Home,
  Play
} from 'lucide-react';

const Parents30Page: React.FC = () => {
  const { t, language } = useLanguage();
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const landing = t.parents30Landing;
  const targetDate = new Date('2025-01-05T00:00:00');

  const whatsappLink = `https://wa.me/13854564470?text=${encodeURIComponent(
    language === 'es'
      ? 'Hola, me interesa Padres 3.0'
      : 'Hi, I\'m interested in Parents 3.0'
  )}`;

  // Map icons for pain points
  const painPointIcons = [Users, Smartphone, HelpCircle, Heart];

  // Map icons for benefits
  const benefitIcons = [Users, BookOpen, Video, MessageCircle];
  const benefitColors = [
    'from-brand-orange to-amber-500',
    'from-amber-500 to-yellow-400',
    'from-yellow-400 to-brand-orange',
    'from-brand-orange to-red-500'
  ];

  // 7 Intelligences for the diagram
  const intelligences = [
    { name: language === 'es' ? 'Espiritual' : 'Spiritual', color: '#FF6B00', icon: Star },
    { name: language === 'es' ? 'Mental' : 'Mental', color: '#FF8C00', icon: Brain },
    { name: language === 'es' ? 'Física' : 'Physical', color: '#FFA500', icon: Zap },
    { name: language === 'es' ? 'Emocional' : 'Emotional', color: '#FFB347', icon: Heart },
    { name: language === 'es' ? 'Social' : 'Social', color: '#FF7F50', icon: Users },
    { name: language === 'es' ? 'Financiera' : 'Financial', color: '#FF6347', icon: Shield },
    { name: language === 'es' ? 'Tecnológica' : 'Technological', color: '#FF4500', icon: Smartphone }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Starfield />

      {/* Warm floating particles - Orange theme */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              background: `radial-gradient(circle, rgba(255,107,0,${0.3 + Math.random() * 0.3}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Navbar - Orange theme */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-brand-orange/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Starbiz" className="h-8 w-auto" />
            </a>
            <div className="flex items-center gap-4">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-brand-orange text-black rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-4 h-4" />
                {landing?.hero?.cta || 'Unirme'}
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - Impactful Orange Theme */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          {/* Large orange glow - top left */}
          <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-brand-orange/20 rounded-full blur-[150px]" />
          {/* Secondary glow - bottom right */}
          <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[120px]" />
          {/* Accent glow - center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[100px]" />
          {/* Diagonal stripe like main page */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-orange/5 -skew-x-12" />
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-orange/10 border border-brand-orange/40 mb-8"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-5 h-5 text-brand-orange" />
                </motion.div>
                <span className="text-brand-orange text-sm font-bold uppercase tracking-wider">{landing?.hero?.badge}</span>
              </motion.div>

              {/* Title - Big and impactful */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-[0.9]"
              >
                <span className="text-white">PADRES</span>
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange bg-clip-text text-transparent">
                    3.0
                  </span>
                  {/* Glow effect behind text */}
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange bg-clip-text text-transparent blur-2xl opacity-50">
                    3.0
                  </span>
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl text-white/90 mb-4 max-w-xl mx-auto lg:mx-0 font-medium"
              >
                {landing?.hero?.tagline}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                {landing?.hero?.description}
              </motion.p>

              {/* Feature pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
              >
                {['7 Inteligencias', 'Eneagrama', 'Comunidad', 'Mentoría'].map((feature, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-brand-orange/30 rounded-full text-sm text-white/80 backdrop-blur-sm"
                  >
                    {feature}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-brand-orange text-black rounded-xl font-bold text-lg uppercase tracking-wider flex items-center justify-center gap-3 overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(255,107,0,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    {landing?.hero?.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.a>

                <motion.a
                  href="#benefits"
                  className="px-8 py-4 bg-white/5 border border-white/20 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/10 hover:border-brand-orange/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5 text-brand-orange" />
                  {language === 'es' ? 'Conocer más' : 'Learn more'}
                </motion.a>
              </motion.div>

              {/* Countdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-brand-orange/80 text-sm font-medium mb-4 uppercase tracking-wider">
                  {language === 'es' ? 'Próxima cohorte inicia en' : 'Next cohort starts in'}
                </p>
                <CountdownTimer
                  targetDate={targetDate}
                  labels={{
                    days: language === 'es' ? 'Días' : 'Days',
                    hours: language === 'es' ? 'Horas' : 'Hours',
                    minutes: language === 'es' ? 'Min' : 'Min',
                    seconds: language === 'es' ? 'Seg' : 'Sec'
                  }}
                  variant="warm"
                />
              </motion.div>
            </div>

            {/* Right visual - Impactful family image section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main image container with 3D effect */}
                <motion.div
                  className="relative aspect-square rounded-3xl overflow-hidden"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-brand-orange/30 blur-3xl rounded-full" />

                  {/* Image */}
                  <div className="relative w-full h-full bg-gradient-to-br from-brand-orange/20 via-amber-500/10 to-transparent rounded-3xl border border-brand-orange/30 overflow-hidden">
                    <img
                      src="/images/parents-community.png"
                      alt="Comunidad Padres 3.0"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Floating elements around image */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-brand-orange/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-500/20 rounded-full blur-xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.4, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </motion.div>

                {/* Floating stat cards */}
                <motion.div
                  className="absolute -top-4 -left-4 px-5 py-3 bg-[#0a0a0a]/90 backdrop-blur-sm rounded-2xl border border-brand-orange/30 shadow-lg shadow-brand-orange/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-brand-orange text-3xl font-black">7</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{language === 'es' ? 'Inteligencias' : 'Intelligences'}</p>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 px-5 py-3 bg-[#0a0a0a]/90 backdrop-blur-sm rounded-2xl border border-amber-500/30 shadow-lg shadow-amber-500/20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <p className="text-amber-400 text-3xl font-black">∞</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{language === 'es' ? 'Potencial' : 'Potential'}</p>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-8 px-4 py-2 bg-brand-orange text-black rounded-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    <span className="font-bold text-sm">{language === 'es' ? 'Familias' : 'Families'}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-brand-orange/50 text-xs uppercase tracking-widest">{language === 'es' ? 'Descubre más' : 'Discover more'}</span>
            <ChevronDown className="w-6 h-6 text-brand-orange/50" />
          </div>
        </motion.div>
      </section>

      {/* Pain Points Section - Orange theme */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-brand-orange/5 to-[#050505]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-sm font-bold uppercase tracking-wider mb-6">
              {language === 'es' ? 'El Desafío' : 'The Challenge'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black mb-4">
              <span className="bg-gradient-to-r from-brand-orange to-amber-400 bg-clip-text text-transparent">
                {landing?.painPoints?.title}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{landing?.painPoints?.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {landing?.painPoints?.points?.map((point: any, index: number) => {
              const IconComponent = painPointIcons[index] || Users;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-orange/5 to-transparent border border-brand-orange/20 hover:border-brand-orange/40 transition-all hover:shadow-lg hover:shadow-brand-orange/10"
                >
                  <div className="relative flex items-start gap-4">
                    <motion.div
                      className="p-4 rounded-xl bg-brand-orange/10 border border-brand-orange/30 group-hover:bg-brand-orange/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-6 h-6 text-brand-orange" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section - GÉNESIS 7i Preview */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 skew-x-12" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-sm font-bold uppercase tracking-wider mb-6">
              {landing?.solution?.title}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black mb-6">
              <span className="bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange bg-clip-text text-transparent">
                {landing?.solution?.subtitle}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {landing?.solution?.desc}
            </p>
          </motion.div>

          {/* 7 Intelligences Diagram - Orange themed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-lg mx-auto aspect-square"
          >
            {/* Central glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-brand-orange/30 rounded-full blur-3xl" />
            </div>

            {/* Central circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-28 h-28 rounded-full bg-gradient-to-br from-brand-orange/30 to-amber-500/20 border-2 border-brand-orange/50 flex items-center justify-center backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(255,107,0,0.4)',
                    '0 0 50px rgba(255,107,0,0.6)',
                    '0 0 30px rgba(255,107,0,0.4)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Brain className="w-12 h-12 text-brand-orange" />
              </motion.div>
            </div>

            {/* Intelligence nodes */}
            {intelligences.map((intel, index) => {
              const angle = (index * 360 / 7 - 90) * (Math.PI / 180);
              const radius = 42;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              const IconComp = intel.icon;

              return (
                <motion.div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="relative"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 transition-all hover:scale-110"
                      style={{
                        backgroundColor: `${intel.color}20`,
                        borderColor: `${intel.color}60`,
                        boxShadow: `0 0 20px ${intel.color}30`
                      }}
                    >
                      <IconComp
                        className="w-7 h-7"
                        style={{ color: intel.color }}
                      />
                    </div>
                    <p
                      className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap uppercase tracking-wider"
                      style={{ color: intel.color }}
                    >
                      {intel.name}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,107,0,0.4)" />
                  <stop offset="100%" stopColor="rgba(255,165,0,0.2)" />
                </linearGradient>
              </defs>
              {intelligences.map((_, index) => {
                const angle1 = (index * 360 / 7 - 90) * (Math.PI / 180);
                const angle2 = ((index + 1) * 360 / 7 - 90) * (Math.PI / 180);
                const x1 = 50 + Math.cos(angle1) * 35;
                const y1 = 50 + Math.sin(angle1) * 35;
                const x2 = 50 + Math.cos(angle2) * 35;
                const y2 = 50 + Math.sin(angle2) * 35;

                return (
                  <motion.line
                    key={index}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  />
                );
              })}
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Orange theme */}
      <section id="benefits" className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-sm font-bold uppercase tracking-wider mb-6">
              {language === 'es' ? 'Beneficios' : 'Benefits'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black mb-4">
              <span className="bg-gradient-to-r from-brand-orange to-amber-400 bg-clip-text text-transparent">
                {landing?.benefits?.title}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{landing?.benefits?.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {landing?.benefits?.list?.map((benefit: any, index: number) => {
              const IconComponent = benefitIcons[index] || Users;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-brand-orange/40 transition-all hover:shadow-xl hover:shadow-brand-orange/10"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefitColors[index]} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Section - Orange theme */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-brand-orange/5 to-[#050505]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-sm font-bold uppercase tracking-wider mb-6">
              {language === 'es' ? 'Herramientas' : 'Tools'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black mb-4">
              <span className="bg-gradient-to-r from-brand-orange to-amber-400 bg-clip-text text-transparent">
                {landing?.tools?.title}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{landing?.tools?.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Enneagram Tool */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br from-brand-orange/10 to-transparent border-2 border-brand-orange/30 cursor-pointer transition-all hover:shadow-xl hover:shadow-brand-orange/20 ${
                expandedTool === 'enneagram' ? 'ring-2 ring-brand-orange' : ''
              }`}
              onClick={() => setExpandedTool(expandedTool === 'enneagram' ? null : 'enneagram')}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-brand-orange/20 border border-brand-orange/40">
                    <Fingerprint className="w-8 h-8 text-brand-orange" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-orange">
                    {landing?.tools?.enneagram?.title}
                  </h3>
                </div>
                {expandedTool === 'enneagram' ? (
                  <ChevronUp className="w-6 h-6 text-brand-orange" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-brand-orange" />
                )}
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">{landing?.tools?.enneagram?.desc}</p>
            </motion.div>

            {/* 7 Intelligences Tool */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border-2 border-amber-500/30 cursor-pointer transition-all hover:shadow-xl hover:shadow-amber-500/20 ${
                expandedTool === 'intelligences' ? 'ring-2 ring-amber-500' : ''
              }`}
              onClick={() => setExpandedTool(expandedTool === 'intelligences' ? null : 'intelligences')}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-amber-500/20 border border-amber-500/40">
                    <Sparkles className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-amber-400">
                    {landing?.tools?.intelligences?.title}
                  </h3>
                </div>
                {expandedTool === 'intelligences' ? (
                  <ChevronUp className="w-6 h-6 text-amber-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-amber-400" />
                )}
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">{landing?.tools?.intelligences?.desc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Orange theme */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-orange/5 -skew-x-12" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-sm font-bold uppercase tracking-wider mb-6">
              {language === 'es' ? 'Testimonios' : 'Testimonials'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black mb-4">
              <span className="bg-gradient-to-r from-brand-orange to-amber-400 bg-clip-text text-transparent">
                {landing?.testimonials?.title}
              </span>
            </h2>
            <p className="text-gray-400 text-lg">{landing?.testimonials?.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {landing?.testimonials?.list?.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-brand-orange/30 transition-all"
              >
                {/* Decorative quote */}
                <Quote className="absolute top-4 right-4 w-10 h-10 text-brand-orange/20" />

                <div className="relative">
                  <p className="text-gray-300 mb-6 italic leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center shadow-lg shadow-brand-orange/30">
                      <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">{testimonial.name}</p>
                      <p className="text-brand-orange text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section - Orange theme */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/10 via-[#050505] to-[#050505]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 sm:p-14 rounded-3xl bg-[#0a0a0a] border-2 border-brand-orange/40"
          >
            {/* Warm glow animation */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(255,107,0,0.2)',
                  '0 0 60px rgba(255,107,0,0.4)',
                  '0 0 30px rgba(255,107,0,0.2)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Users className="w-20 h-20 text-brand-orange mx-auto mb-8" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-6 text-white">
                {landing?.community?.title}
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                {landing?.community?.desc}
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {landing?.community?.features?.map((feature: string, i: number) => (
                  <span key={i} className="px-5 py-2.5 bg-brand-orange/10 border border-brand-orange/40 rounded-full text-brand-orange font-medium">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mb-10">
                <CountdownTimer
                  targetDate={targetDate}
                  labels={{
                    days: language === 'es' ? 'Días' : 'Days',
                    hours: language === 'es' ? 'Horas' : 'Hours',
                    minutes: language === 'es' ? 'Min' : 'Min',
                    seconds: language === 'es' ? 'Seg' : 'Sec'
                  }}
                  variant="warm"
                />
              </div>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-orange text-black rounded-xl font-bold text-xl uppercase tracking-wider hover:shadow-[0_0_50px_rgba(255,107,0,0.5)] transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-6 h-6" />
                {landing?.hero?.cta}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Orange theme */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/20 via-[#050505] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-16 h-16 text-brand-orange mx-auto mb-8" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black mb-6">
              <span className="bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange bg-clip-text text-transparent">
                {landing?.finalCta?.title}
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
              {landing?.finalCta?.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-brand-orange text-black rounded-2xl font-black text-xl uppercase tracking-wider overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: '0 0 60px rgba(255,107,0,0.6)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  {landing?.finalCta?.cta}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-6 bg-white/5 border-2 border-white/20 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-brand-orange/40 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-6 h-6 text-green-400" />
                {landing?.finalCta?.whatsapp}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Orange theme */}
      <footer className="relative py-12 border-t border-brand-orange/20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Starbiz Academy" className="h-8 w-auto" />
            </a>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Starbiz Academy. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-brand-orange/10 hover:bg-brand-orange/20 border border-brand-orange/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-brand-orange" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Parents30Page;
