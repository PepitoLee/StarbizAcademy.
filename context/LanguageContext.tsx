import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: any;
}

const translations = {
  es: {
    loader: {
      status: "Iniciando Secuencia de Lanzamiento"
    },
    navbar: {
      home: "Inicio",
      about: "Quiénes Somos",
      intelligence: "7 Inteligencias",
      programs: "Programas",
      cta: "ÚNETE GRATIS"
    },
    hero: {
      tag: "Liderazgo Digital & IA",
      title: {
        line1: "EL DESPERTAR",
        line2: "DE LAS 7",
        line3: "INTELIGENCIAS"
      },
      description: "\"Formamos a la nueva generación de líderes y empresarios digitales hispanos, con el carácter y la visión para dominar la era de la IA.\"",
      cta_primary: "UNIRSE AHORA",
      cta_secondary: "VER VIDEO",
      scroll: "Explorar Sistema"
    },
    about: {
      title: "IDENTIDAD Y ORIGEN",
      main_title: "Descubre a Starbiz",
      intro_desc: "Starbiz Academy es la PRIMERA academia en el mundo hispano en formar a jóvenes y adolescentes como empresarios digitales, fusionando el desarrollo personal, la tecnología a través de la Inteligencia Artificial, y los sólidos valores cristianos",
      card1: {
        title: "El Origen: Henry Orellana",
        desc: "Starbiz Academy no es solo una institución; es el resultado de la visión de su fundador, Henry Orellana. Tras años de experiencia, Henry identificó una desconexión: el sistema tradicional no prepara para la velocidad de la IA. Por eso nace Starbiz: donde el potencial brillante (Star) se convierte en ejecución empresarial (Biz).",
        tag1: "Primera Academia Hispana Digital",
        tag2: "Valores Cristianos"
      },
      card2: {
        title: "Sede Utah & Intercambio",
        desc: "Legalmente constituidos en Utah, EE. UU., epicentro de Excelencia Educativa y Valores Cristianos. Ofrecemos un PROGRAMA DE INTERCAMBIO EXCLUSIVO para vivir una inmersión cultural y de networking global.",
        status: "Status",
        status_val: "Intercambio Activo"
      },
      mission: {
        title: "Misión",
        desc: "Equipar a la próxima generación de jóvenes empresarios digitales con las 7 Inteligencias y principios cristianos y científicos fundamentales para el éxito integral."
      },
      vision: {
        title: "Visión",
        desc: "Ser el referente global en la formación de líderes que utilizan la Inteligencia Artificial como herramienta para la creación de valor, la abundancia ética y un mundo mejor."
      },
      values: {
        title: "Valores",
        desc: "Fe y Propósito (Valores Cristianos), Excelencia Científica (Neurociencia y IA), Liderazgo Integral, Abundancia y Servicio."
      }
    },
    intelligences: {
      title: "LAS 7 INTELIGENCIAS",
      subtitle: "Nuestro mapa comprobado para forjar empresarios digitales con propósito. Mil Oportunidades™ para el éxito integral.",
      list: [
        { title: "Mental", subtitle: "Dominio Cognitivo", description: "Capacidad de análisis, pensamiento crítico y aprendizaje acelerado. La base neurocientífica para entender, procesar y usar la IA a tu favor." },
        { title: "Física", subtitle: "Energía y Vitalidad", description: "Hábitos de nutrición, ejercicio y sueño para optimizar la función cerebral. Sin un hardware biológico optimizado, no hay alto rendimiento." },
        { title: "Emocional", subtitle: "Resiliencia y EQ", description: "Gestión de emociones, superación del miedo al fracaso y toma de decisiones asertiva bajo presión. La antifragilidad del líder moderno." },
        { title: "Social", subtitle: "Networking e Influencia", description: "Habilidad para construir relaciones de valor, colaborar internacionalmente y comunicar con impacto. Tu red es tu patrimonio." },
        { title: "Espiritual", subtitle: "Propósito y Ética", description: "Ancla moral en valores cristianos, visión a largo plazo e integridad. El liderazgo ético es el único que perdura en el tiempo." },
        { title: "Financiera", subtitle: "Creación de Riqueza", description: "Dominio de la administración, la inversión inteligente y la generación de flujos de ingresos. De consumidor a creador de capital." },
        { title: "Tecnológica", subtitle: "Dominio Digital & IA", description: "Uso estratégico de la Inteligencia Artificial como socio para automatizar, innovar y escalar negocios en el mercado global." }
      ]
    },
    programs: {
      title: "PROGRAMAS ELITE",
      urgent: "¡URGENTE!",
      deadline: "Cierre: 15 de Diciembre",
      summer: {
        title: "VERANO 2026",
        subtitle: "Curso Intensivo de Verano (45 Días)",
        desc: "Tu Lanzamiento de 45 Días hacia el Mindset de CEO. Del 5 de Enero al 15 de Febrero.",
        features: ["Inglés Profesional Avanzado", "Desarrollo Web y Apps", "Mentalidad de Éxito", "Visión Empresarial Global"],
        cta: "ASEGURAR CUPO"
      },
      ceo: {
        badge: "Programa Insignia",
        title: "CEO JUNIOR",
        desc: "La Inmersión Total. El adolescente no solo aprende, sino que aplica la metodología para diseñar, lanzar y escalar un proyecto digital real.",
        highlight: "Incluye elegibilidad para el Programa de Intercambio en EE. UU.",
        f1_title: "Focus IA",
        f1_desc: "Automatización y creación de contenido avanzado.",
        f2_title: "Focus Finanzas",
        f2_desc: "Modelos de negocio y primeros ingresos.",
        cta: "VER DETALLES COMPLETOS"
      }
    },
    ecosystem: {
      pretitle: "Ecosistema Stareduca",
      title: "COMUNIDADES",
      stareduca: {
        title: "STAREDUCA",
        subtitle: "Jóvenes Empresarios",
        desc: "¡Acceso Gratuito! La Plataforma Educativa Oficial. Un espacio de alto rendimiento donde el joven se forma en las 7 Inteligencias.",
        features: ["Foros Privados con Mentores", "Retos Semanales Prácticos", "Masterclass Mensuales", "Espacio de Ideas de Negocio"],
        cta: "UNIRSE GRATIS"
      },
      parents: {
        title: "PADRES 3.0",
        subtitle: "Liderazgo Parental",
        desc: "Comunidad especializada para líderes del hogar. Accede a herramientas científicas para entender y potenciar el éxito de tus hijos.",
        f1_title: "Eneagrama & PNL",
        f1_desc: "Reprograma patrones mentales y mejora la comunicación.",
        f2_title: "Neurociencia Aplicada",
        f2_desc: "Entiende el cerebro adolescente para optimizar el aprendizaje.",
        cta: "DESCUBRIR ACCESO"
      },
      app: {
        title: "STARBOOKS APP",
        desc_part1: "La plataforma más revolucionaria para aprender. Convertimos la sabiduría de los mejores libros en",
        desc_part2: "habilidades digitales",
        desc_part3: "ejecutables.",
        cta: "ACCESO EXCLUSIVO"
      }
    },
    testimonials: {
      title: "EVIDENCIA DEL IMPACTO",
      subtitle: "Resultados reales en un mundo digital.",
      historical: {
        title: "Impacto Histórico 2021",
        desc: "En plena pandemia, capacitamos a más de 500 jóvenes en Marketing Digital. Los negocios de sus padres no solo sobrevivieron, prosperaron.",
        quote: "\"Los jóvenes se convirtieron en socios estratégicos de sus padres.\""
      },
      list: [
        {
          role: "Padre 3.0 (Inteligencia Social)",
          quote: "\"Por fin entiendo a mi hija. Gracias al Eneagrama y Padres 3.0, sé cómo motivarla sin frustrarla. Es mi mejor herramienta de crianza.\""
        },
        {
          role: "Joven Empresario (Inteligencia Tecnológica)",
          quote: "\"Soy un CEO a los 17. En Stareduca encontré un socio en otro país para lanzar mi app. Ahora uso la IA para mi marketing.\""
        },
        {
          role: "Madre Comprometida (Inteligencia Financiera)",
          quote: "\"Mi hijo, con solo 16 años, ya está desarrollando sitios web y tiene una visión financiera clara. Esto es lo que la escuela no enseña.\""
        }
      ]
    },
    events: {
      title: "EVENTOS & INVESTIGACIÓN",
      subtitle: "Interacción en vivo y rigor científico.",
      masterclass: {
        title: "Masterclass Exclusivas",
        desc: "Sesiones en vivo con Henry Orellana sobre IA, Finanzas y Liderazgo.",
        freq: "Mensual"
      },
      challenges: {
        title: "Retos Comunitarios",
        desc: "Desafíos prácticos de ejecución rápida para medir resultados reales.",
        freq: "Semanal"
      },
      meetup: {
        title: "Encuentro Anual Utah",
        desc: "Networking presencial y mentoría intensiva en nuestra sede de EE. UU.",
        freq: "Anual"
      },
      research: {
        title: "Blog Científico",
        items: [
          "Investigación original sobre neurociencia adolescente.",
          "Guías de Eneagrama y Psicología Positiva.",
          "Ética en la era de la Inteligencia Artificial."
        ]
      }
    },
    contact: {
      form_title: "CONÉCTATE DIRECTAMENTE",
      form_subtitle: "// Inicia tu transformación hoy.",
      labels: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        subject: "Asunto / Programa",
        message: "Mensaje"
      },
      placeholders: {
        name: "Tu nombre",
        email: "tucorreo@ejemplo.com",
        message: "Escribe tu mensaje aquí..."
      },
      options: [
        "Inscripción Curso de Verano 2026",
        "Consulta Programa CEO Junior",
        "Consulta Programa de Intercambio EE. UU.",
        "Comunidad Padres 3.0",
        "Mensaje para Henry Orellana"
      ],
      btn_send: "Enviar Mensaje",
      info_title: "CONTACTO",
      info_mail: "Email Oficial",
      info_phone: "WhatsApp Business",
      info_loc: "Sede Corporativa",
      loc_val: "Utah, Estados Unidos"
    }
  },
  en: {
    loader: {
      status: "Initiating Launch Sequence"
    },
    navbar: {
      home: "Home",
      about: "About Us",
      intelligence: "7 Intelligences",
      programs: "Programs",
      cta: "JOIN FREE"
    },
    hero: {
      tag: "Digital Leadership & AI",
      title: {
        line1: "THE AWAKENING",
        line2: "OF THE 7",
        line3: "INTELLIGENCES"
      },
      description: "\"Training the new generation of Hispanic digital leaders and entrepreneurs, with the character and vision to master the AI era.\"",
      cta_primary: "JOIN NOW",
      cta_secondary: "WATCH VIDEO",
      scroll: "Explore System"
    },
    about: {
      title: "IDENTITY AND ORIGEN",
      main_title: "Discover Starbiz",
      intro_desc: "Starbiz Academy is the FIRST academy in the Hispanic world to train youth and teenagers as digital entrepreneurs, merging personal development, technology through Artificial Intelligence, and solid Christian values.",
      card1: {
        title: "The Origin: Henry Orellana",
        desc: "Starbiz Academy is the result of founder Henry Orellana's vision. Identifying a disconnect in traditional education regarding AI speed, Starbiz was born: where brilliant potential (Star) becomes business execution (Biz).",
        tag1: "First Hispanic Digital Academy",
        tag2: "Christian Values"
      },
      card2: {
        title: "Utah HQ & Exchange",
        desc: "Legally established in Utah, USA, an epicenter of Educational Excellence. We offer an EXCLUSIVE EXCHANGE PROGRAM for cultural immersion and global networking.",
        status: "Status",
        status_val: "Active Exchange"
      },
      mission: {
        title: "Mission",
        desc: "Equip the next generation of young digital entrepreneurs with the 7 Intelligences and fundamental Christian and scientific principles."
      },
      vision: {
        title: "Vision",
        desc: "To be the global benchmark in training leaders who use AI for value creation, ethical abundance, and a better world."
      },
      values: {
        title: "Values",
        desc: "Faith & Purpose (Christian Values), Scientific Excellence (Neuroscience & AI), Integral Leadership, Abundance and Service."
      }
    },
    intelligences: {
      title: "THE 7 INTELLIGENCES",
      subtitle: "Our proven map to forge digital entrepreneurs with purpose. A Thousand Opportunities™ for integral success.",
      list: [
        { title: "Mental", subtitle: "Cognitive Mastery", description: "Analytical capacity and accelerated learning. The neuroscience basis for understanding and processing AI." },
        { title: "Physical", subtitle: "Energy & Vitality", description: "Nutrition, exercise, and sleep habits to optimize brain function. Without optimized biological hardware, there is no high performance." },
        { title: "Emotional", subtitle: "Resilience & EQ", description: "Emotion management and overcoming fear of failure. The antifragility of the modern leader." },
        { title: "Social", subtitle: "Networking & Influence", description: "Ability to build valuable relationships and communicate with impact. Your network is your net worth." },
        { title: "Spiritual", subtitle: "Purpose & Ethics", description: "Moral anchor in Christian values and long-term vision. Ethical leadership is the only kind that lasts." },
        { title: "Financial", subtitle: "Wealth Creation", description: "Mastery of administration, smart investment, and income stream generation. From consumer to capital creator." },
        { title: "Technological", subtitle: "Digital Mastery & AI", description: "Strategic use of Artificial Intelligence as a partner to automate, innovate, and scale businesses globally." }
      ]
    },
    programs: {
      title: "ELITE PROGRAMS",
      urgent: "URGENT!",
      deadline: "Closes: Dec 15",
      summer: {
        title: "SUMMER 2026",
        subtitle: "Intensive Summer Course (45 Days)",
        desc: "Your 45-Day Launch to CEO Mindset. Jan 5th to Feb 15th.",
        features: ["Advanced Business English", "Web & App Development", "Success Mindset", "Global Business Vision"],
        cta: "SECURE SPOT"
      },
      ceo: {
        badge: "Flagship Program",
        title: "JUNIOR CEO",
        desc: "Total Immersion. The teen not only learns but applies the methodology to design, launch, and scale a real digital project.",
        highlight: "Includes eligibility for Exchange Program in the USA.",
        f1_title: "AI Focus",
        f1_desc: "Automation and advanced content creation.",
        f2_title: "Finance Focus",
        f2_desc: "Business models and first income.",
        cta: "VIEW FULL DETAILS"
      }
    },
    ecosystem: {
      pretitle: "Stareduca Ecosystem",
      title: "COMMUNITIES",
      stareduca: {
        title: "STAREDUCA",
        subtitle: "Young Entrepreneurs",
        desc: "Free Access! The Official Educational Platform. A high-performance space where youth are trained in the 7 Intelligences.",
        features: ["Private Mentor Forums", "Weekly Practical Challenges", "Monthly Masterclasses", "Business Idea Space"],
        cta: "JOIN FREE"
      },
      parents: {
        title: "PARENTS 3.0",
        subtitle: "Parental Leadership",
        desc: "Specialized community for household leaders. Access scientific tools to understand and empower your children's success.",
        f1_title: "Enneagram & NLP",
        f1_desc: "Reprogram mental patterns and improve communication.",
        f2_title: "Applied Neuroscience",
        f2_desc: "Understand the teen brain to optimize learning.",
        cta: "DISCOVER ACCESS"
      },
      app: {
        title: "STARBOOKS APP",
        desc_part1: "The most revolutionary learning platform. We convert wisdom from the best books into",
        desc_part2: "digital skills",
        desc_part3: "you can execute.",
        cta: "EXCLUSIVE ACCESS"
      }
    },
    testimonials: {
      title: "EVIDENCE OF IMPACT",
      subtitle: "Real results in a digital world.",
      historical: {
        title: "Historical Impact 2021",
        desc: "During the pandemic, we trained over 500 youths in Digital Marketing. Their parents' businesses didn't just survive, they thrived.",
        quote: "\"Youth became strategic partners to their parents.\""
      },
      list: [
        {
          role: "Parent 3.0 (Social Intelligence)",
          quote: "\"I finally understand my daughter. Thanks to Enneagram and Parents 3.0, I know how to motivate her without frustration.\""
        },
        {
          role: "Young Entrepreneur (Tech Intelligence)",
          quote: "\"I'm a CEO at 17. In Stareduca I found a partner abroad to launch my app. Now I use AI for my marketing.\""
        },
        {
          role: "Committed Mother (Financial Intelligence)",
          quote: "\"My son, only 16, is already developing websites and has a clear financial vision. Schools don't teach this.\""
        }
      ]
    },
    events: {
      title: "EVENTS & RESEARCH",
      subtitle: "Live interaction and scientific rigor.",
      masterclass: {
        title: "Exclusive Masterclass",
        desc: "Live sessions with Henry Orellana on AI, Finance, and Leadership.",
        freq: "Monthly"
      },
      challenges: {
        title: "Community Challenges",
        desc: "Practical, quick-execution challenges to measure real results.",
        freq: "Weekly"
      },
      meetup: {
        title: "Annual Utah Meetup",
        desc: "In-person networking and intensive mentorship at our US HQ.",
        freq: "Annual"
      },
      research: {
        title: "Scientific Blog",
        items: [
          "Original research on adolescent neuroscience.",
          "Enneagram and Positive Psychology guides.",
          "Ethics in the Artificial Intelligence era."
        ]
      }
    },
    contact: {
      form_title: "CONNECT DIRECTLY",
      form_subtitle: "// Begin your transformation today.",
      labels: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject / Program",
        message: "Message"
      },
      placeholders: {
        name: "Your Name",
        email: "youremail@example.com",
        message: "Write your message here..."
      },
      options: [
        "Summer Course 2026 Registration",
        "Junior CEO Program Inquiry",
        "USA Exchange Program Inquiry",
        "Parents 3.0 Community",
        "Message for Henry Orellana"
      ],
      btn_send: "Send Message",
      info_title: "CONTACT",
      info_mail: "Official Email",
      info_phone: "WhatsApp Business",
      info_loc: "Corporate HQ",
      loc_val: "Utah, United States"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
