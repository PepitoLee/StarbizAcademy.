import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import CountdownTimer from '../components/landing/CountdownTimer';
import Starfield from '../components/Starfield';
import {
  Rocket,
  Globe,
  Brain,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Code,
  Cpu,
  DollarSign,
  Plane,
  MessageCircle,
  Play,
  Star,
  Sparkles,
  ArrowRight,
  School,
  Compass,
  Briefcase,
  CheckCircle2
} from 'lucide-react';

const CEOJuniorPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);

  const landing = t.ceoJuniorLanding;
  const targetDate = new Date('2025-01-05T00:00:00');

  const whatsappLink = `https://wa.me/13854564470?text=${encodeURIComponent(
    language === 'es'
      ? 'Hola, me interesa CEO Junior 2026'
      : 'Hi, I\'m interested in CEO Junior 2026'
  )}`;

  // Map icons for modules
  const moduleIcons = [Globe, Code, Brain, Rocket];
  const moduleColors = [
    'from-blue-500 to-cyan-500',
    'from-cyan-500 to-brand-cyan',
    'from-purple-500 to-pink-500',
    'from-brand-orange to-brand-yellow'
  ];
  const moduleVideos = [
    '/videos/global-connection.mp4',
    '/videos/tech-intelligence.mp4',
    '/videos/mental-intelligence.mp4',
    '/videos/visionary.mp4'
  ];

  // Map icons for pain points
  const painPointIcons = [School, Compass, Globe, Briefcase];

  return (
    <div className="min-h-screen bg-space-black text-white overflow-x-hidden">
      <Starfield />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-space-black/80 backdrop-blur-md border-b border-brand-cyan/20">
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
                className="px-4 py-2 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full text-sm font-medium flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4" />
                {landing?.hero?.cta || 'Reservar'}
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 via-transparent to-brand-purple/5" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-purple/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 mb-6"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-brand-cyan rounded-full"
                />
                <span className="text-brand-cyan text-sm font-medium">{landing?.hero?.badge}</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-purple bg-clip-text text-transparent">
                  {landing?.hero?.title} <span className="text-brand-cyan">{landing?.hero?.year}</span>
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0"
              >
                {landing?.hero?.tagline}
              </motion.p>

              {/* Skills pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
              >
                {landing?.hero?.skills?.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              >
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Rocket className="w-5 h-5" />
                  {landing?.hero?.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Countdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-gray-400 text-sm mb-4">{landing?.hero?.countdown}</p>
                <CountdownTimer
                  targetDate={targetDate}
                  labels={{
                    days: language === 'es' ? 'Días' : 'Days',
                    hours: language === 'es' ? 'Horas' : 'Hours',
                    minutes: language === 'es' ? 'Min' : 'Min',
                    seconds: language === 'es' ? 'Seg' : 'Sec'
                  }}
                  variant="tech"
                />
              </motion.div>
            </div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Orbital rings */}
                <motion.div
                  className="absolute inset-0 border-2 border-brand-cyan/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 border-2 border-brand-purple/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-16 border-2 border-brand-orange/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Central element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 bg-brand-cyan/30 blur-3xl rounded-full scale-150" />
                    <div className="relative w-32 h-32 flex items-center justify-center bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 rounded-3xl border border-brand-cyan/30 backdrop-blur-sm">
                      <Rocket className="w-16 h-16 text-brand-cyan" />
                    </div>
                  </motion.div>
                </div>

                {/* Corner stats */}
                <motion.div
                  className="absolute top-0 right-0 px-4 py-2 bg-space-card/80 backdrop-blur-sm rounded-xl border border-brand-cyan/20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-brand-cyan text-2xl font-bold">12-17</p>
                  <p className="text-gray-400 text-xs">{language === 'es' ? 'años' : 'years'}</p>
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-0 px-4 py-2 bg-space-card/80 backdrop-blur-sm rounded-xl border border-brand-purple/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <p className="text-brand-purple text-2xl font-bold">4</p>
                  <p className="text-gray-400 text-xs">{language === 'es' ? 'módulos' : 'modules'}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-brand-cyan/50" />
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">
                {landing?.painPoints?.title}
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{landing?.painPoints?.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {landing?.painPoints?.points?.map((point: any, index: number) => {
              const IconComponent = painPointIcons[index] || School;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20 hover:border-red-500/40 transition-colors"
                >
                  <div className="relative flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
                      <IconComponent className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                      <p className="text-gray-400">{point.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 via-transparent to-brand-purple/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-sm font-medium mb-6">
              {landing?.solution?.title}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                {landing?.solution?.subtitle}
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {landing?.solution?.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {landing?.modules?.title}
              </span>
            </h2>
            <p className="text-gray-400">{landing?.modules?.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {landing?.modules?.list?.map((module: any, index: number) => {
              const IconComponent = moduleIcons[index] || Globe;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Video background on hover */}
                  <video
                    src={moduleVideos[index]}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />

                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${moduleColors[index]} opacity-10 group-hover:opacity-20 transition-opacity`} />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between bg-space-card/50 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-colors">
                    {/* Number watermark */}
                    <span className="absolute top-4 right-4 text-6xl sm:text-8xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors">
                      0{index + 1}
                    </span>

                    <div className="relative">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${moduleColors[index]} flex items-center justify-center mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                        {module.title}
                      </h3>
                      <p className="text-brand-cyan text-sm mb-3">{module.subtitle}</p>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {module.desc}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="flex items-center gap-2 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-4 h-4" />
                      <span className="text-sm">{language === 'es' ? 'Ver más' : 'Learn more'}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Focus Tracks Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-cyan to-brand-orange bg-clip-text text-transparent">
                {landing?.focusTracks?.title}
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{landing?.focusTracks?.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* AI Focus Track */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-cyan/10 to-transparent border border-brand-cyan/30 cursor-pointer transition-all ${
                expandedTrack === 'ai' ? 'ring-2 ring-brand-cyan' : ''
              }`}
              onClick={() => setExpandedTrack(expandedTrack === 'ai' ? null : 'ai')}
            >
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-brand-cyan/20 border border-brand-cyan/30">
                      <Cpu className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-brand-cyan">
                        {landing?.focusTracks?.ai?.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{landing?.focusTracks?.ai?.subtitle}</p>
                    </div>
                  </div>
                  {expandedTrack === 'ai' ? (
                    <ChevronUp className="w-5 h-5 text-brand-cyan" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-cyan" />
                  )}
                </div>
                <p className="text-gray-400 mb-4">{landing?.focusTracks?.ai?.desc}</p>

                <AnimatePresence>
                  {expandedTrack === 'ai' && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-2 overflow-hidden"
                    >
                      {landing?.focusTracks?.ai?.features?.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Finance Focus Track */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-orange/10 to-transparent border border-brand-orange/30 cursor-pointer transition-all ${
                expandedTrack === 'finance' ? 'ring-2 ring-brand-orange' : ''
              }`}
              onClick={() => setExpandedTrack(expandedTrack === 'finance' ? null : 'finance')}
            >
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-brand-orange/20 border border-brand-orange/30">
                      <TrendingUp className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-brand-orange">
                        {landing?.focusTracks?.finance?.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{landing?.focusTracks?.finance?.subtitle}</p>
                    </div>
                  </div>
                  {expandedTrack === 'finance' ? (
                    <ChevronUp className="w-5 h-5 text-brand-orange" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-orange" />
                  )}
                </div>
                <p className="text-gray-400 mb-4">{landing?.focusTracks?.finance?.desc}</p>

                <AnimatePresence>
                  {expandedTrack === 'finance' && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-2 overflow-hidden"
                    >
                      {landing?.focusTracks?.finance?.features?.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exchange Program Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 via-transparent to-brand-cyan/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-space-dark to-space-black" />

            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 text-center lg:text-left">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 mb-6"
                  >
                    <Star className="w-4 h-4 text-brand-yellow" />
                    <span className="text-brand-yellow text-sm font-medium">{landing?.exchange?.badge}</span>
                  </motion.span>

                  <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-white">
                    {landing?.exchange?.title}
                  </h2>
                  <p className="text-brand-cyan mb-2">{landing?.exchange?.location}</p>
                  <p className="text-lg text-gray-300 mb-6 max-w-xl">
                    {landing?.exchange?.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {landing?.exchange?.features?.map((feature: string, i: number) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <Plane className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Visual element */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="relative w-48 h-48 sm:w-64 sm:h-64"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 rounded-full blur-2xl" />
                    <div className="relative w-full h-full flex items-center justify-center bg-space-card/50 backdrop-blur-sm rounded-full border border-brand-yellow/30">
                      <Plane className="w-20 h-20 sm:w-24 sm:h-24 text-brand-yellow" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-cyan to-white bg-clip-text text-transparent">
                {landing?.testimonials?.title}
              </span>
            </h2>
            <p className="text-gray-400">{landing?.testimonials?.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {landing?.testimonials?.list?.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 sm:p-8 rounded-2xl bg-space-card/50 backdrop-blur-sm border border-white/10"
              >
                <div className="absolute top-4 left-4 text-5xl text-brand-cyan/20 font-serif">"</div>

                <div className="relative pt-6">
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.age} • {testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 via-brand-cyan/5 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-sm font-medium mb-6">
              {language === 'es' ? 'Inversión Accesible' : 'Affordable Investment'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                {language === 'es' ? 'Únete a la Comunidad' : 'Join the Community'}
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              {language === 'es'
                ? 'Accede a todo el contenido, mentoría y comunidad por un precio increíble'
                : 'Access all content, mentorship and community for an incredible price'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/20 via-brand-purple/20 to-brand-cyan/20 rounded-3xl blur-2xl opacity-50" />

            <div className="relative p-8 sm:p-12 rounded-3xl bg-space-card/80 backdrop-blur-sm border border-brand-cyan/30 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,240,255,0.5) 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }} />
              </div>

              <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Price display */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-4">
                    <span className="text-gray-400 text-2xl">{language === 'es' ? 'Solo' : 'Only'}</span>
                    <motion.span
                      className="text-6xl sm:text-7xl md:text-8xl font-display font-black bg-gradient-to-r from-brand-cyan via-white to-brand-purple bg-clip-text text-transparent"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      $9
                    </motion.span>
                    <span className="text-gray-400 text-xl">/{language === 'es' ? 'mes' : 'month'}</span>
                  </div>

                  <p className="text-lg text-gray-300 mb-6">
                    {language === 'es'
                      ? 'Acceso completo a CEO Junior 2026'
                      : 'Full access to CEO Junior 2026'}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 text-left max-w-sm mx-auto lg:mx-0">
                    {[
                      language === 'es' ? '4 módulos de formación' : '4 training modules',
                      language === 'es' ? 'Comunidad exclusiva' : 'Exclusive community',
                      language === 'es' ? 'Mentoría personalizada' : 'Personalized mentorship',
                      language === 'es' ? 'Acceso a eventos especiales' : 'Access to special events',
                      language === 'es' ? 'Certificado de participación' : 'Participation certificate'
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-brand-cyan" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA side */}
                <div className="flex-shrink-0 text-center">
                  <motion.div
                    className="relative w-40 h-40 mb-6 mx-auto"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 rounded-full blur-xl" />
                    <div className="relative w-full h-full flex items-center justify-center bg-space-card rounded-full border-2 border-brand-cyan/40">
                      <DollarSign className="w-16 h-16 text-brand-cyan" />
                    </div>
                  </motion.div>

                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-xl font-bold text-lg hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {language === 'es' ? 'Inscribirme Ahora' : 'Sign Up Now'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <p className="text-gray-500 text-sm mt-4">
                    {language === 'es' ? 'Pago seguro por WhatsApp' : 'Secure payment via WhatsApp'}
                  </p>
                </div>
              </div>

              {/* Bottom guarantee */}
              <div className="relative mt-8 pt-8 border-t border-white/10 text-center">
                <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  {language === 'es'
                    ? 'Garantía de satisfacción - Si no es para ti, te devolvemos tu dinero'
                    : 'Satisfaction guarantee - If it\'s not for you, we\'ll refund your money'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/10 via-brand-purple/10 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 sm:p-12 rounded-3xl bg-space-card/80 backdrop-blur-sm border border-brand-cyan/30"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-brand-cyan/50"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0,240,255,0.2)',
                  '0 0 40px rgba(0,240,255,0.4)',
                  '0 0 20px rgba(0,240,255,0.2)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="relative">
              <div className="flex justify-center gap-4 mb-6">
                <span className="px-3 py-1 bg-brand-cyan/20 border border-brand-cyan/30 rounded-full text-brand-cyan text-sm">
                  {landing?.urgency?.batch}
                </span>
                <span className="px-3 py-1 bg-brand-orange/20 border border-brand-orange/30 rounded-full text-brand-orange text-sm">
                  {landing?.urgency?.slots}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                {landing?.urgency?.title}
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                {landing?.urgency?.deadline}
              </p>

              <div className="mb-8">
                <CountdownTimer
                  targetDate={targetDate}
                  labels={{
                    days: language === 'es' ? 'Días' : 'Days',
                    hours: language === 'es' ? 'Horas' : 'Hours',
                    minutes: language === 'es' ? 'Min' : 'Min',
                    seconds: language === 'es' ? 'Seg' : 'Sec'
                  }}
                  variant="tech"
                />
              </div>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-xl font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                {landing?.urgency?.cta}
              </motion.a>

              <p className="text-gray-500 text-sm mt-4">{landing?.urgency?.guarantee}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {landing?.faq?.title}
              </span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {landing?.faq?.list?.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-space-card/50 hover:bg-space-card/70 transition-colors"
                >
                  <span className="text-left font-medium text-white">{item.q}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-space-dark/50 text-gray-300">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-cyan/10 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-brand-cyan mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-purple bg-clip-text text-transparent">
                {landing?.finalCta?.title}
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              {landing?.finalCta?.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-cyan bg-[length:200%_100%] rounded-2xl font-bold text-xl hover:shadow-[0_0_60px_rgba(0,240,255,0.5)] transition-all"
                whileHover={{ scale: 1.02, backgroundPosition: '100% 0' }}
                whileTap={{ scale: 0.98 }}
              >
                <Rocket className="w-6 h-6" />
                {landing?.finalCta?.cta}
                <ArrowRight className="w-6 h-6" />
              </motion.a>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white/5 border border-white/20 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                {landing?.finalCta?.whatsapp}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10">
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
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CEOJuniorPage;
