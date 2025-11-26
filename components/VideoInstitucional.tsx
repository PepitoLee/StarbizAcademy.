import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, VolumeX, Maximize, Pause } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const VideoInstitucional: React.FC = () => {
  const { t, language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [progress, setProgress] = useState(0);

  // Get video source based on language
  const getVideoSource = () => {
    return `/videos/institutional-video-${language}.mp4`;
  };

  // Reset video when language changes
  useEffect(() => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const wasPlaying = isPlaying;

      videoRef.current.load(); // Reload video with new source

      if (wasPlaying) {
        videoRef.current.currentTime = currentTime;
        videoRef.current.play();
      } else {
        setShowOverlay(true);
        setIsPlaying(false);
      }
    }
  }, [language]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowOverlay(false);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowOverlay(true);
    setProgress(0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      videoRef.current.currentTime = percentage * videoRef.current.duration;
    }
  };

  return (
    <section id="video-institucional" className="relative py-24 md:py-32 overflow-hidden bg-[#020005]">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Nebula glow top-left */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[150px] animate-pulse-glow" />
        {/* Nebula glow bottom-right */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-brand-cyan/15 rounded-full blur-[120px] animate-float" />
        {/* Center accent */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/5 text-brand-orange text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            {t.video?.tag || 'Presentación Oficial'}
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white font-display mb-4">
            {t.video?.title || 'CONOCE NUESTRA VISIÓN'}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            {t.video?.subtitle || 'Descubre cómo estamos transformando el futuro de la educación empresarial hispana'}
          </p>
        </motion.div>

        {/* Video Container - Cinematic Frame */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Outer Glow Frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-orange rounded-2xl blur-sm opacity-60 animate-pulse-glow" />

          {/* Video Frame */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl shadow-brand-purple/20 border border-white/10">

            {/* Aspect Ratio Container */}
            <div className="relative aspect-video">

              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
                onClick={togglePlay}
                playsInline
                preload="metadata"
                poster="/videos/institutional-poster.png"
                key={language}
              >
                <source src={getVideoSource()} type="video/mp4" />
                {language === 'es' ? 'Tu navegador no soporta el elemento de video.' : 'Your browser does not support the video element.'}
              </video>

              {/* Play Overlay */}
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center cursor-pointer z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onClick={handlePlay}
                  >
                    {/* Animated rings */}
                    <div className="absolute">
                      <div className="w-32 h-32 rounded-full border border-white/20 animate-ping" style={{ animationDuration: '2s' }} />
                    </div>
                    <div className="absolute">
                      <div className="w-40 h-40 rounded-full border border-white/10 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                    </div>

                    {/* Play Button */}
                    <motion.button
                      className="relative w-24 h-24 rounded-full bg-gradient-to-br from-brand-orange to-brand-purple flex items-center justify-center shadow-lg shadow-brand-orange/50 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Play size={40} className="text-white ml-2" fill="white" />
                    </motion.button>

                    {/* Text under button */}
                    <p className="absolute bottom-[20%] text-white/70 text-sm font-medium tracking-wider uppercase">
                      {t.video?.playText || 'Click para reproducir'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Video Controls (shown when playing) */}
              <AnimatePresence>
                {isPlaying && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    {/* Progress Bar */}
                    <div
                      className="w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer group"
                      onClick={handleProgressClick}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-brand-orange to-brand-cyan rounded-full relative transition-all"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={togglePlay}
                          className="text-white hover:text-brand-cyan transition-colors"
                        >
                          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                        </button>
                        <button
                          onClick={toggleMute}
                          className="text-white hover:text-brand-cyan transition-colors"
                        >
                          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                        </button>
                      </div>
                      <button
                        onClick={handleFullscreen}
                        className="text-white hover:text-brand-cyan transition-colors"
                      >
                        <Maximize size={24} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pause overlay (click anywhere to pause) */}
              {isPlaying && !showOverlay && (
                <div
                  className="absolute inset-0 z-10 cursor-pointer"
                  onClick={togglePlay}
                />
              )}
            </div>

            {/* Bottom decorative line */}
            <div className="h-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-orange" />
          </div>

          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-brand-cyan rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-brand-orange rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-brand-orange rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-brand-cyan rounded-br-lg" />
        </motion.div>

        {/* CTA below video */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#programas"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white font-bold uppercase tracking-wider hover:bg-white/5 hover:border-brand-cyan transition-all group"
          >
            <span>{t.video?.cta || 'Explorar Programas'}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default VideoInstitucional;
