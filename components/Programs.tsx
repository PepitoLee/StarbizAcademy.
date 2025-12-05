
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Programs: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="programas" className="bg-[#020205] relative overflow-hidden">
        {/* Esta sección ahora está vacía - CEO Junior se movió a Ecosystem.tsx */}
    </section>
  );
};

export default Programs;
