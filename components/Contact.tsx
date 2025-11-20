import React from 'react';
import { Mail, MessageSquare, MapPin, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-32 bg-black relative border-t border-white/10 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-brand-cyan/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Terminal Form */}
          <div className="bg-[#0A0A15] border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-orange" />
            
            <h2 className="text-4xl font-bold text-white mb-2 font-display tracking-wider">{t.contact.form_title}</h2>
            <p className="text-gray-500 mb-8 font-mono text-sm">{t.contact.form_subtitle}</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                   <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider group-focus-within:text-white transition-colors">{t.contact.labels.name}</label>
                   <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all font-mono" placeholder={t.contact.placeholders.name} />
                </div>
                <div className="space-y-2 group">
                   <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider group-focus-within:text-white transition-colors">{t.contact.labels.email}</label>
                   <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all font-mono" placeholder={t.contact.placeholders.email} />
                </div>
              </div>
              
              <div className="space-y-2 group">
                   <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider group-focus-within:text-white transition-colors">{t.contact.labels.subject}</label>
                   <select className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all appearance-none font-mono">
                      {t.contact.options.map((option: string, i: number) => (
                         <option key={i}>{option}</option>
                      ))}
                   </select>
              </div>

              <div className="space-y-2 group">
                   <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider group-focus-within:text-white transition-colors">{t.contact.labels.message}</label>
                   <textarea rows={5} className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all font-mono" placeholder={t.contact.placeholders.message}></textarea>
              </div>

              <button className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-brand-cyan transition-colors flex items-center justify-center gap-2 font-display tracking-widest uppercase">
                <Send size={18} /> {t.contact.btn_send}
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-7xl font-bold text-white/5 mb-12 font-display">{t.contact.info_title}</h3>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-black transition-all">
                     <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{t.contact.info_mail}</p>
                    <p className="text-white text-xl font-medium">henry.orellana@starbiz.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
                     <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{t.contact.info_phone}</p>
                    <p className="text-white text-xl font-medium">+1 (801) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                     <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{t.contact.info_loc}</p>
                    <p className="text-white text-xl font-medium">{t.contact.loc_val}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <div className="flex gap-4">
                 {[Instagram, Facebook, Twitter].map((Icon, i) => (
                   <a key={i} href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-black text-gray-400 transition-all">
                     <Icon size={20} />
                   </a>
                 ))}
               </div>
               <div className="mt-8 pt-8 border-t border-white/5 text-gray-600 text-sm font-mono">
                  SYSTEM STATUS: ONLINE <br/>
                  &copy; {new Date().getFullYear()} STARBIZ ACADEMY. ALL RIGHTS RESERVED.
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;