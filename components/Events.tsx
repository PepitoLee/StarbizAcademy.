
import React from 'react';
import { Calendar, Target, Users, ArrowUpRight, Microscope } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Events: React.FC = () => {
  const { t } = useLanguage();
  const e = t.events;

  return (
    <section id="eventos" className="py-32 bg-black relative border-t border-white/5">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20">
             <h2 className="text-4xl md:text-6xl font-bold text-white font-display">{e.title}</h2>
             <p className="text-gray-400 mt-2 max-w-2xl">{e.subtitle}</p>
          </div>

          {/* Events Directory List */}
          <div className="mb-24">
             <div className="grid gap-8">
                {/* Event Item 1 */}
                <div className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-8 hover:border-white/30 transition-colors">
                   <div className="flex items-start gap-6">
                      <div className="text-brand-purple mt-1">
                          <Calendar size={32} />
                      </div>
                      <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-brand-purple transition-colors">{e.masterclass.title}</h3>
                          <p className="text-gray-400 mt-2 max-w-md">{e.masterclass.desc}</p>
                      </div>
                   </div>
                   <div className="mt-4 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-white/5 rounded-full text-sm font-mono text-gray-300">{e.masterclass.freq}</span>
                   </div>
                </div>

                {/* Event Item 2 */}
                <div className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-8 hover:border-white/30 transition-colors">
                   <div className="flex items-start gap-6">
                      <div className="text-brand-orange mt-1">
                          <Target size={32} />
                      </div>
                      <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">{e.challenges.title}</h3>
                          <p className="text-gray-400 mt-2 max-w-md">{e.challenges.desc}</p>
                      </div>
                   </div>
                   <div className="mt-4 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-white/5 rounded-full text-sm font-mono text-gray-300">{e.challenges.freq}</span>
                   </div>
                </div>

                {/* Event Item 3 */}
                <div className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-8 hover:border-white/30 transition-colors">
                   <div className="flex items-start gap-6">
                      <div className="text-brand-cyan mt-1">
                          <Users size={32} />
                      </div>
                      <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">{e.meetup.title}</h3>
                          <p className="text-gray-400 mt-2 max-w-md">{e.meetup.desc}</p>
                      </div>
                   </div>
                   <div className="mt-4 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-white/5 rounded-full text-sm font-mono text-gray-300">{e.meetup.freq}</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Research Section (Minimal List) */}
          <div className="pt-12">
             <div className="flex items-center gap-3 mb-10 text-brand-cyan">
                <Microscope size={24} />
                <span className="font-display font-bold text-xl uppercase tracking-wider">{e.research.title}</span>
             </div>
             
             <div className="grid md:grid-cols-3 gap-12">
                {e.research.items.map((item: string, i: number) => (
                   <a key={i} href="#contacto" className="group block">
                      <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-2 group-hover:border-white/50 transition-colors">
                         <span className="text-xs font-mono text-gray-500">LOG_00{i+1}</span>
                         <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" size={16} />
                      </div>
                      <p className="text-lg text-gray-300 group-hover:text-white transition-colors font-light">
                         {item}
                      </p>
                   </a>
                ))}
             </div>
          </div>

       </div>
    </section>
  );
};

export default Events;
