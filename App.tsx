
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Starfield from './components/Starfield';
import About from './components/About';
import SevenIntelligences from './components/SevenIntelligences';
import Programs from './components/Programs';
import Ecosystem from './components/Ecosystem';
import Testimonials from './components/Testimonials';
import Events from './components/Events';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000); // Increased to 3s to let the new animation finish
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-[#020617] text-white selection:bg-brand-orange selection:text-white overflow-x-hidden">
          <Starfield />
          <Navbar />
          <main>
            <Hero />
            <About />
            <SevenIntelligences />
            <Ecosystem />
            <Programs />
            <Testimonials />
            <Events />
            <Contact />
          </main>
          
          {/* Mobile Floating CTA */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-orange p-4 z-40 shadow-2xl text-center">
             <a href="#contacto" className="font-bold text-white uppercase tracking-wide">Únete Gratis Ahora</a>
          </div>
        </div>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
