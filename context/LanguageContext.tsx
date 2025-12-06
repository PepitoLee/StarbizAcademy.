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
      intelligence: "Metodología",
      communities: "Comunidades",
      submenu: {
        ceojr: "CEO Junior",
        parents: "Padres 3.0"
      },
      cta: "CONTÁCTANOS"
    },
    hero: {
      tag: "Liderazgo Digital & IA",
      title: {
        line1: "EL DESPERTAR",
        line2: "DE LA NUEVA",
        line3: "GENERACIÓN Z"
      },
      description: "\"Formamos a la nueva generación de líderes y empresarios digitales globales, con el carácter y la visión para dominar la era de la IA.\"",
      cta_primary: "UNIRSE AHORA",
      cta_secondary: "VER VIDEO",
      cta_programs: "Ver Comunidad",
      scroll: "Explorar Sistema"
    },
    about: {
      title: "IDENTIDAD Y ORIGEN",
      main_title: "Descubre a Starbiz",
      intro_desc: "Starbiz Academy es la PRIMERA academia en el mundo en formar a jóvenes y adolescentes como empresarios digitales, fusionando el desarrollo personal, la tecnología a través de la Inteligencia Artificial, y los sólidos valores cristianos",
      card1: {
        title: "El Origen: StarbizAcademy",
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
      section: "METODOLOGÍA",
      description: "El mapa integral para formar adolescentes con propósito, carácter y mentalidad digital.",
      list: [
        { title: "Mental", subtitle: "Dominio Cognitivo", description: "Capacidad de análisis, pensamiento crítico y aprendizaje acelerado. La base neurocientífica para entender, procesar y usar la IA a tu favor." },
        { title: "Física", subtitle: "Energía y Vitalidad", description: "Hábitos de nutrición, ejercicio y sueño para optimizar la función cerebral. Sin un hardware biológico optimizado, no hay alto rendimiento." },
        { title: "Emocional", subtitle: "Resiliencia y EQ", description: "Gestión de emociones, superación del miedo al fracaso y toma de decisiones asertiva bajo presión. La antifragilidad del líder moderno." },
        { title: "Social", subtitle: "Networking e Influencia", description: "Habilidad para construir relaciones de valor, colaborar internacionalmente y comunicar con impacto. Tu red es tu patrimonio." },
        { title: "Espiritual", subtitle: "Propósito y Ética", description: "Ancla moral en valores cristianos, visión a largo plazo e integridad. El liderazgo ético es el único que perdura en el tiempo." },
        { title: "Financiera", subtitle: "Creación de Riqueza", description: "Dominio de la administración, la inversión inteligente y la generación de flujos de ingresos. De consumidor a creador de capital." },
        { title: "Tecnológica", subtitle: "Dominio Digital & IA", description: "Uso estratégico de la Inteligencia Artificial como socio para automatizar, innovar y escalar negocios en el mercado global." }
      ],
      learnMore: {
        title: "Conoce más sobre nuestra metodología",
        desc: "Descubre GÉNESIS 7i™, el sistema integral que transforma adolescentes y familias.",
        cta: "DESCUBRIR"
      },
      watchPresentation: "Ver Presentación"
    },
    programs: {
      title: "COMUNIDAD ELITE",
      urgent: "Jóvenes empresarios",
      deadline: "Inscripciones 15 de diciembre - Inicio 5 de enero",
      summer: {
        title: "CEO JUNIOR 2026",
        subtitle: "La comunidad de adolescentes empresarios más grande del mundo",
        desc: "Convierte a tu hijo en un líder con mentalidad CEO (Inglés • Tecnología • Negocios • Mentalidad)",
        features: ["Inglés Profesional Avanzado", "Desarrollo Web y Apps", "Mentalidad de Éxito", "Visión Empresarial Global"],
        cta: "ÚNETE"
      },
      ceo: {
        badge: "Comunidad Insignia",
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
      pretitle: "Ecosistema Starbiz",
      title: "COMUNIDADES",
      ceojr: {
        badge: "Comunidad Insignia",
        urgent: "Jóvenes empresarios",
        title: "CEO JUNIOR",
        subtitle: "La comunidad de adolescentes empresarios más grande del mundo",
        desc: "Convierte a tu hijo en un líder con mentalidad CEO (Inglés • Tecnología • Negocios • Mentalidad)",
        deadline: "Inscripciones 15 de diciembre - Inicio 5 de enero",
        highlight: "Incluye elegibilidad para el Programa de Intercambio en EE. UU.",
        f1_title: "Focus IA",
        f1_desc: "Automatización y creación de contenido avanzado.",
        f2_title: "Focus Finanzas",
        f2_desc: "Modelos de negocio y primeros ingresos.",
        modules_title: "Módulos del Programa",
        mod1: "Inglés Profesional Avanzado",
        mod2: "Desarrollo Web y Apps",
        mod3: "Mentalidad de Éxito",
        mod4: "Visión Empresarial Global",
        exchange_title: "Elegibilidad para Intercambio",
        exchange_desc: "Utah, USA • Experiencia inmersiva verificada",
        slots: "Cupos: Limitados",
        batch: "Lote: #2026_ALPHA",
        cta: "VER DETALLES COMPLETOS"
      },
      parents: {
        title: "PADRES 3.0",
        subtitle: "Una comunidad de padres conscientes",
        desc: "Donde aprenderán a ser padres profesionales y aprender nuevas herramientas modernas sobre la crianza de los hijos en la era digital.",
        community_title: "Padres 3.0™ – Comunidad privada de familias conscientes",
        community_desc: "Aquí aprenderás a activar estas 7 inteligencias en tu hogar con apoyo, mentoría, guías y contenido exclusivo.",
        cta: "UNIRME A PADRES 3.0™"
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
    video: {
      tag: "Presentación Oficial",
      title: "CONOCE NUESTRA VISIÓN",
      subtitle: "Descubre cómo estamos transformando el futuro de la educación empresarial hispana",
      playText: "Click para reproducir",
      cta: "Explorar Comunidad"
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
    },
    modal: {
      header: {
        tag: "Metodología Exclusiva",
        title: "GÉNESIS 7i™",
        tagline: "7 Inteligencias, Mil Oportunidades",
        author: "Creado por Jimy Henry Orellana Domínguez • Utah, EE.UU. • 2025"
      },
      tabs: {
        fundamentos: "Fundamentos",
        inteligencias: "7 Inteligencias",
        ecosistema: "Ecosistema"
      },
      fundamentos: {
        intro: {
          title: "¿Qué es GÉNESIS 7i™?",
          p1: "Una metodología educativa integral diseñada para transformar la vida de adolescentes y sus familias en la era digital. Basada en el desarrollo articulado de siete inteligencias esenciales que activan el propósito personal, fortalecen la identidad espiritual y preparan a los jóvenes para enfrentar con éxito los desafíos del siglo XXI.",
          p2: "GÉNESIS 7i™ es una metodología educativa integral que busca despertar y desarrollar en los adolescentes siete inteligencias fundamentales, cada una esencial para su éxito personal, profesional y espiritual en el mundo digital actual."
        },
        pilares: {
          title: "Los 3 Pilares Inseparables",
          espiritual: { title: "Fundamento Espiritual", desc: "Dios como fuente de toda inteligencia, propósito eterno y origen de nuestra identidad." },
          cientifico: { title: "Fundamento Científico", desc: "Neurociencia, psicología positiva, educación basada en evidencia y desarrollo contemporáneo." },
          practico: { title: "Fundamento Práctico", desc: "Herramientas aplicables, estrategias medibles y resultados tangibles para la transformación real." }
        },
        proposito: {
          title: "Propósito de Vida del Autor",
          p1: "Desde los 15 años sentí un llamado profundo: formar una nueva generación de adolescentes que se conviertan en empresarios digitales con valores cristianos, capaces de crear impacto económico y transformar sus familias.",
          p2: "Esta visión surge de mi propia crisis personal y búsqueda de sentido. GÉNESIS 7i™ nace como respuesta a una generación perdida, sin dirección clara ni herramientas para navegar la revolución digital actual."
        },
        problema: {
          title: "Problema que Resuelve",
          items: [
            { title: "Padres confundidos", desc: "No saben cómo guiar a sus hijos en la era digital sin principios claros." },
            { title: "Adolescentes sin dirección", desc: "Crecen sin propósito claro, navegando sin brújula moral o espiritual." },
            { title: "Escuela tradicional desconectada", desc: "No prepara para la realidad digital ni para el emprendimiento real." },
            { title: "Tecnología más rápida que educación", desc: "La velocidad del cambio supera la capacidad de adaptación educativa." }
          ]
        },
        fundamento: {
          title: "Fundamento Espiritual y Filosófico",
          dios: { title: "Dios como Inteligencia Suprema", desc: "La metodología reconoce a Dios no solo como creador, sino como la fuente infinita de toda inteligencia. Cada una de las 7 inteligencias encuentra su origen y máxima expresión en Su naturaleza divina." },
          humano: { title: "El ser humano como inteligencia eterna", desc: "No somos cuerpos que tienen un espíritu, sino espíritus eternos que habitan un cuerpo temporal. Esta identidad espiritual es el fundamento de nuestro propósito y potencial infinito." },
          genesis: { title: "Sentido de \"GÉNESIS\"", desc: "GÉNESIS significa principio, origen, creación. Esta metodología lleva a los adolescentes a su origen divino, a recordar quiénes son y por qué están aquí, activando su propósito desde el principio eterno." }
        },
        definicion: {
          title: "Definición de \"Inteligencia\" en GÉNESIS 7i™",
          intro: "La inteligencia NO es solo coeficiente intelectual o capacidad cognitiva. En GÉNESIS 7i™, definimos inteligencia como:",
          quote: "La chispa eterna que procede de Dios, manifestada en la capacidad de pensar, crear, sentir, decidir y amar."
        },
        orden: {
          title: "Orden Estructural: Inteligencia Espiritual como Génesis",
          intro: "El orden NO es arbitrario. La Inteligencia Espiritual es el génesis (el principio) de todas las demás porque:",
          items: [
            "Define la identidad eterna del adolescente (quién es realmente)",
            "Establece el propósito trascendente (por qué está aquí)",
            "Conecta con la fuente de sabiduría infinita (Dios)",
            "Produce un efecto cascada: cuando la espiritual está activa, todas las demás fluyen con mayor claridad"
          ]
        }
      },
      inteligencias: {
        title: "Las 7 Inteligencias: Sistema Integrado",
        intro: "Cada inteligencia tiene tres dimensiones inseparables: Espiritual (conexión con Dios), Científica (evidencia y método), y Práctica (herramientas aplicables). Haz clic en cada una para explorar su contenido completo.",
        list: [
          {
            name: "Espiritual",
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
            name: "Mental",
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
            name: "Física",
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
            name: "Emocional",
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
            name: "Social",
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
            name: "Financiera",
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
            name: "Tecnológica",
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
        ],
        synthesis: {
          title: "Síntesis Estructural",
          desc: "Las 7 inteligencias NO trabajan aisladas. Son un sistema integrado donde la Inteligencia Espiritual es el génesis (principio) que activa y da sentido a todas las demás. Cuando se desarrollan juntas, el efecto multiplicador transforma completamente la vida del adolescente."
        }
      },
      ecosistema: {
        titulo: "Ecosistema Educativo Completo",
        starbiz: { title: "Starbiz Academy LLC", desc: "El \"Silicon Valley educativo para Latinoamérica\" - Centro neurálgico donde se imparten todos los programas, recursos y metodologías educativas de vanguardia." },
        padres: { title: "Padres 3.0", desc: "Comunidad de padres conscientes que se capacitan para guiar a sus hijos en la era digital con valores cristianos y herramientas prácticas." },
        stareduca: { title: "Stareduca.com", desc: "Plataforma educativa digital donde se alojan cursos, recursos y contenido formativo para toda la comunidad." },
        starbooks: { title: "Starbooks (App)", desc: "Aplicación móvil educativa que facilita el aprendizaje continuo, seguimiento de progreso y conexión comunitaria." },
        ceojr: { title: "CEO Junior", desc: "Programa insignia para adolescentes emprendedores (13-18 años) que los transforma en líderes digitales con mentalidad de CEO, combinando valores cristianos con habilidades de emprendimiento digital." }
      },
      originalidad: {
        title: "Originalidad y Carácter Distintivo",
        intro: "GÉNESIS 7i™ es único en el mercado por 5 razones fundamentales:",
        items: [
          { title: "Integración Espíritu-Ciencia-Práctica", desc: "No separa lo espiritual de lo científico ni de lo práctico." },
          { title: "Enfoque en Identidad Eterna", desc: "No solo desarrolla habilidades, despierta identidad divina." },
          { title: "Diseñado para Era Digital", desc: "Nativo digital, no adaptación forzada de métodos antiguos." },
          { title: "Sistema Integrado de 7 Inteligencias", desc: "No trata cada inteligencia aislada, sino como sistema interconectado." },
          { title: "Orientación a Emprendimiento Digital", desc: "No solo educa, prepara para crear empresas digitales con impacto." }
        ]
      },
      autoria: {
        title: "Autoría y Propiedad Intelectual",
        p1: "Jimy Henry Orellana Domínguez declara ser el autor original de la metodología GÉNESIS 7i™.",
        p2: "Esta metodología surge de su experiencia personal, formación espiritual, estudios en educación y emprendimiento, y su compromiso con la transformación de la juventud latinoamericana.",
        p3_label: "Propiedad:",
        p3: "La metodología es propiedad de Starbiz Academy LLC, empresa legalmente constituida en Utah, Estados Unidos.",
        p4_label: "Finalidad:",
        p4: "Educativa, social y de transformación generacional. Se comparte para el beneficio de familias y adolescentes que buscan propósito en la era digital."
      },
      close: "Cerrar"
    }
  },
  en: {
    loader: {
      status: "Initiating Launch Sequence"
    },
    navbar: {
      home: "Home",
      about: "About Us",
      intelligence: "Methodology",
      communities: "Communities",
      submenu: {
        ceojr: "CEO Junior",
        parents: "Parents 3.0"
      },
      cta: "CONTACT US"
    },
    hero: {
      tag: "Digital Leadership & AI",
      title: {
        line1: "THE AWAKENING",
        line2: "OF THE NEW",
        line3: "GENERATION Z"
      },
      description: "\"Training the new generation of global digital leaders and entrepreneurs, with the character and vision to master the AI era.\"",
      cta_primary: "JOIN NOW",
      cta_secondary: "WATCH VIDEO",
      cta_programs: "View Community",
      scroll: "Explore System"
    },
    about: {
      title: "IDENTITY AND ORIGEN",
      main_title: "Discover Starbiz",
      intro_desc: "Starbiz Academy is the FIRST academy in the world to train youth and teenagers as digital entrepreneurs, merging personal development, technology through Artificial Intelligence, and solid Christian values.",
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
      section: "METHODOLOGY",
      description: "The comprehensive roadmap to form teenagers with purpose, character and digital mindset.",
      list: [
        { title: "Mental", subtitle: "Cognitive Mastery", description: "Analytical capacity and accelerated learning. The neuroscience basis for understanding and processing AI." },
        { title: "Physical", subtitle: "Energy & Vitality", description: "Nutrition, exercise, and sleep habits to optimize brain function. Without optimized biological hardware, there is no high performance." },
        { title: "Emotional", subtitle: "Resilience & EQ", description: "Emotion management and overcoming fear of failure. The antifragility of the modern leader." },
        { title: "Social", subtitle: "Networking & Influence", description: "Ability to build valuable relationships and communicate with impact. Your network is your net worth." },
        { title: "Spiritual", subtitle: "Purpose & Ethics", description: "Moral anchor in Christian values and long-term vision. Ethical leadership is the only kind that lasts." },
        { title: "Financial", subtitle: "Wealth Creation", description: "Mastery of administration, smart investment, and income stream generation. From consumer to capital creator." },
        { title: "Technological", subtitle: "Digital Mastery & AI", description: "Strategic use of Artificial Intelligence as a partner to automate, innovate, and scale businesses globally." }
      ],
      learnMore: {
        title: "Learn more about our methodology",
        desc: "Discover GENESIS 7i™, the comprehensive system that transforms teenagers and families.",
        cta: "DISCOVER"
      },
      watchPresentation: "Watch Presentation"
    },
    programs: {
      title: "ELITE COMMUNITY",
      urgent: "Young entrepreneurs",
      deadline: "Registration Dec 15 - Starts Jan 5",
      summer: {
        title: "CEO JUNIOR 2026",
        subtitle: "The world's largest community of teen entrepreneurs",
        desc: "Transform your child into a leader with a CEO mindset (English • Technology • Business • Mindset)",
        features: ["Advanced Business English", "Web & App Development", "Success Mindset", "Global Business Vision"],
        cta: "JOIN"
      },
      ceo: {
        badge: "Flagship Community",
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
      pretitle: "Starbiz Ecosystem",
      title: "COMMUNITIES",
      ceojr: {
        badge: "Flagship Community",
        urgent: "Young entrepreneurs",
        title: "CEO JUNIOR",
        subtitle: "The world's largest community of teen entrepreneurs",
        desc: "Transform your child into a leader with a CEO mindset (English • Technology • Business • Mindset)",
        deadline: "Registration Dec 15 - Starts Jan 5",
        highlight: "Includes eligibility for the U.S. Exchange Program.",
        f1_title: "AI Focus",
        f1_desc: "Automation and advanced content creation.",
        f2_title: "Finance Focus",
        f2_desc: "Business models and first income.",
        modules_title: "Program Modules",
        mod1: "Advanced Professional English",
        mod2: "Web & App Development",
        mod3: "Success Mindset",
        mod4: "Global Business Vision",
        exchange_title: "Exchange Eligibility",
        exchange_desc: "Utah, USA • Verified immersive experience",
        slots: "Slots: Limited",
        batch: "Batch: #2026_ALPHA",
        cta: "VIEW FULL DETAILS"
      },
      parents: {
        title: "PARENTS 3.0",
        subtitle: "A community of conscious parents",
        desc: "Where you'll learn to be professional parents and discover modern tools for raising children in the digital era.",
        community_title: "Parents 3.0™ – Private community for conscious families",
        community_desc: "Here you'll learn to activate these 7 intelligences in your home with support, mentorship, guides and exclusive content.",
        cta: "JOIN PARENTS 3.0™"
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
    video: {
      tag: "Official Presentation",
      title: "DISCOVER OUR VISION",
      subtitle: "Learn how we are transforming the future of Hispanic entrepreneurial education",
      playText: "Click to play",
      cta: "Explore Community"
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
    },
    modal: {
      header: {
        tag: "Exclusive Methodology",
        title: "GENESIS 7i™",
        tagline: "7 Intelligences, A Thousand Opportunities",
        author: "Created by Jimy Henry Orellana Domínguez • Utah, USA • 2025"
      },
      tabs: {
        fundamentos: "Foundations",
        inteligencias: "7 Intelligences",
        ecosistema: "Ecosystem"
      },
      fundamentos: {
        intro: {
          title: "What is GENESIS 7i™?",
          p1: "A comprehensive educational methodology designed to transform the lives of teenagers and their families in the digital age. Based on the articulated development of seven essential intelligences that activate personal purpose, strengthen spiritual identity and prepare young people to successfully face the challenges of the 21st century.",
          p2: "GENESIS 7i™ is a comprehensive educational methodology that seeks to awaken and develop in teenagers seven fundamental intelligences, each essential for their personal, professional and spiritual success in today's digital world."
        },
        pilares: {
          title: "The 3 Inseparable Pillars",
          espiritual: { title: "Spiritual Foundation", desc: "God as the source of all intelligence, eternal purpose and origin of our identity." },
          cientifico: { title: "Scientific Foundation", desc: "Neuroscience, positive psychology, evidence-based education and contemporary development." },
          practico: { title: "Practical Foundation", desc: "Applicable tools, measurable strategies and tangible results for real transformation." }
        },
        proposito: {
          title: "Author's Life Purpose",
          p1: "Since I was 15 years old I felt a deep calling: to form a new generation of teenagers who become digital entrepreneurs with Christian values, capable of creating economic impact and transforming their families.",
          p2: "This vision arises from my own personal crisis and search for meaning. GENESIS 7i™ is born as a response to a lost generation, without clear direction or tools to navigate the current digital revolution."
        },
        problema: {
          title: "Problem It Solves",
          items: [
            { title: "Confused Parents", desc: "They don't know how to guide their children in the digital age without clear principles." },
            { title: "Directionless Teenagers", desc: "Growing up without clear purpose, navigating without moral or spiritual compass." },
            { title: "Disconnected Traditional School", desc: "Doesn't prepare for digital reality or real entrepreneurship." },
            { title: "Technology Faster Than Education", desc: "The speed of change exceeds educational adaptation capacity." }
          ]
        },
        fundamento: {
          title: "Spiritual and Philosophical Foundation",
          dios: { title: "God as Supreme Intelligence", desc: "The methodology recognizes God not only as creator, but as the infinite source of all intelligence. Each of the 7 intelligences finds its origin and maximum expression in His divine nature." },
          humano: { title: "The human being as eternal intelligence", desc: "We are not bodies that have a spirit, but eternal spirits inhabiting a temporary body. This spiritual identity is the foundation of our purpose and infinite potential." },
          genesis: { title: "Meaning of \"GENESIS\"", desc: "GENESIS means beginning, origin, creation. This methodology leads teenagers to their divine origin, to remember who they are and why they are here, activating their purpose from the eternal beginning." }
        },
        definicion: {
          title: "Definition of \"Intelligence\" in GENESIS 7i™",
          intro: "Intelligence is NOT just intellectual quotient or cognitive capacity. In GENESIS 7i™, we define intelligence as:",
          quote: "The eternal spark that comes from God, manifested in the capacity to think, create, feel, decide and love."
        },
        orden: {
          title: "Structural Order: Spiritual Intelligence as Genesis",
          intro: "The order is NOT arbitrary. Spiritual Intelligence is the genesis (the beginning) of all others because:",
          items: [
            "It defines the teenager's eternal identity (who they really are)",
            "It establishes transcendent purpose (why they are here)",
            "It connects with the source of infinite wisdom (God)",
            "It produces a cascade effect: when the spiritual is active, all others flow with greater clarity"
          ]
        }
      },
      inteligencias: {
        title: "The 7 Intelligences: Integrated System",
        intro: "Each intelligence has three inseparable dimensions: Spiritual (connection with God), Scientific (evidence and method), and Practical (applicable tools). Click on each one to explore its complete content.",
        list: [
          {
            name: "Spiritual",
            lema: "Remember who you are and why you're here",
            espiritual: {
              title: "Spiritual Dimension",
              content: "It is the direct connection with God, the Father of spirits. It awakens eternal identity, faith and sense of mission. We remember that we are not bodies that have a spirit, but eternal spirits that inhabit a body."
            },
            cientifica: {
              title: "Scientific Dimension",
              content: "It relates to what is called 'transcendental consciousness': the brain's capacity to seek meaning, purpose and connection with something greater than oneself. It promotes inner peace, resilience and emotional balance."
            },
            practica: {
              title: "Practical Dimension",
              items: ["Daily prayer", "Mindful meditation", "Gratitude practice", "Service to others", "Purpose reflection", "Principle-based decisions"]
            }
          },
          {
            name: "Mental",
            lema: "The power to think as God thinks",
            espiritual: {
              title: "Spiritual Dimension",
              content: "God is supreme intelligence and source of all wisdom. Connecting with Him awakens mental clarity, discernment and elevated thoughts. The mind is the bridge between the spirit and the physical world."
            },
            cientifica: {
              title: "Scientific Dimension",
              content: "Includes critical thinking, memory, learning capacity, conscious attention and neuroplasticity. The brain can reorganize and strengthen itself through continuous learning."
            },
            practica: {
              title: "Practical Dimension",
              items: ["Effective study techniques", "SMART goal setting", "Mind maps and diagrams", "Daily active reading", "Problem solving", "Continuous learning"]
            }
          },
          {
            name: "Physical",
            lema: "The body: temple of purpose",
            espiritual: {
              title: "Spiritual Dimension",
              content: "The body is not an enemy or an object, it is a sacred temple that houses the spirit. Taking care of it is honoring God and preparing to fulfill life's mission with energy and vitality."
            },
            cientifica: {
              title: "Scientific Dimension",
              content: "Encompasses comprehensive health: regular physical activity, balanced nutrition, restorative rest and disease prevention. Science confirms the direct link between healthy body and mental/emotional performance."
            },
            practica: {
              title: "Practical Dimension",
              items: ["Regular exercise (minimum 30 min/day)", "Conscious and balanced eating", "Sleep 7-9 hours daily", "Adequate hydration", "Prevention and medical checkups", "Physical stress management"]
            }
          },
          {
            name: "Emotional",
            lema: "Master the heart before the world",
            espiritual: {
              title: "Spiritual Dimension",
              content: "Emotions are the language of the soul. God gave us emotions to feel, connect and act. Learning to manage them is developing self-control, one of the fruits of the Spirit."
            },
            cientifica: {
              title: "Scientific Dimension",
              content: "Includes emotional regulation, resilience, emotional intelligence (identify, understand and manage one's own and others' emotions). Directly influences decision-making and interpersonal relationships."
            },
            practica: {
              title: "Practical Dimension",
              items: ["Identify and name emotions", "Breathing and relaxation techniques", "Emotional journaling", "Anxiety and stress management", "Empathy development", "Resilience in adversity"]
            }
          },
          {
            name: "Social",
            lema: "Connect and lead with empathy",
            espiritual: {
              title: "Spiritual Dimension",
              content: "God is perfect relationship (Father, Son, Holy Spirit). We were created to connect, serve and lead with love. Social intelligence reflects our capacity to be light in community."
            },
            cientifica: {
              title: "Scientific Dimension",
              content: "Includes empathy, assertive communication, teamwork, leadership, negotiation and conflict resolution. Fundamental for personal and professional success in the digital age."
            },
            practica: {
              title: "Practical Dimension",
              items: ["Active listening", "Clear and respectful communication", "Collaborative work", "Service leadership", "Conscious networking", "Conflict management"]
            }
          },
          {
            name: "Financial",
            lema: "Manage with divine wisdom",
            espiritual: {
              title: "Spiritual Dimension",
              content: "God is abundance and perfect order. Money is a tool to bless, serve and fulfill purposes. Faithful stewardship honors God and multiplies resources for eternal impact."
            },
            cientifica: {
              title: "Scientific Dimension",
              content: "Includes financial decision-making, planning, investment, risk management and economic education. Develops strategic thinking and long-term vision."
            },
            practica: {
              title: "Practical Dimension",
              items: ["Monthly personal budget", "Systematic saving (10-20%)", "Conscious investment", "Multiple income generation", "Continuous financial education", "Strategic generosity"]
            }
          },
          {
            name: "Technological",
            lema: "Use technology to create, not to get lost",
            espiritual: {
              title: "Spiritual Dimension",
              content: "We are created in the image of the supreme Creator. Well-used technology reflects our divine capacity to create, innovate and transform. It is a tool to expand the Kingdom, not to get lost in the temporal."
            },
            cientifica: {
              title: "Scientific Dimension",
              content: "Includes digital competencies, programming, artificial intelligence, digital marketing, data analysis and technological literacy. Essential to compete in today's digital world."
            },
            practica: {
              title: "Practical Dimension",
              items: ["Conscious social media use", "Digital tools learning", "Basic digital marketing", "Programming and automation", "Applied AI", "Digital entrepreneurship"]
            }
          }
        ],
        synthesis: {
          title: "Structural Synthesis",
          desc: "The 7 intelligences DO NOT work in isolation. They are an integrated system where Spiritual Intelligence is the genesis (beginning) that activates and gives meaning to all others. When developed together, the multiplier effect completely transforms the teenager's life."
        }
      },
      ecosistema: {
        titulo: "Complete Educational Ecosystem",
        starbiz: { title: "Starbiz Academy LLC", desc: "The \"Silicon Valley of Education for Latin America\" - Nerve center where all programs, resources and cutting-edge educational methodologies are taught." },
        padres: { title: "Parents 3.0", desc: "Community of conscious parents who train to guide their children in the digital age with Christian values and practical tools." },
        stareduca: { title: "Stareduca.com", desc: "Digital educational platform where courses, resources and training content for the entire community are hosted." },
        starbooks: { title: "Starbooks (App)", desc: "Educational mobile application that facilitates continuous learning, progress tracking and community connection." },
        ceojr: { title: "CEO Junior", desc: "Flagship program for teenage entrepreneurs (13-18 years) that transforms them into digital leaders with CEO mindset, combining Christian values with digital entrepreneurship skills." }
      },
      originalidad: {
        title: "Originality and Distinctive Character",
        intro: "GENESIS 7i™ is unique in the market for 5 fundamental reasons:",
        items: [
          { title: "Spirit-Science-Practice Integration", desc: "Doesn't separate the spiritual from the scientific or the practical." },
          { title: "Focus on Eternal Identity", desc: "Not only develops skills, awakens divine identity." },
          { title: "Designed for Digital Era", desc: "Digital native, not forced adaptation of old methods." },
          { title: "Integrated System of 7 Intelligences", desc: "Doesn't treat each intelligence in isolation, but as an interconnected system." },
          { title: "Digital Entrepreneurship Orientation", desc: "Not only educates, prepares to create digital businesses with impact." }
        ]
      },
      autoria: {
        title: "Authorship and Intellectual Property",
        p1: "Jimy Henry Orellana Domínguez declares to be the original author of the GENESIS 7i™ methodology.",
        p2: "This methodology arises from his personal experience, spiritual formation, studies in education and entrepreneurship, and his commitment to the transformation of Latin American youth.",
        p3_label: "Property:",
        p3: "The methodology is property of Starbiz Academy LLC, legally established company in Utah, United States.",
        p4_label: "Purpose:",
        p4: "Educational, social and generational transformation. Shared for the benefit of families and teenagers seeking purpose in the digital age."
      },
      close: "Close"
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
