const Routes: any = {
  "oferta-educativa": [
    { params:
      {
        "level": "bachillerato",
        "levelRoute": "oferta-educativa/bachillerato/bachillerato",
        "config": {
          title: "Bachillerato",
          promo: {
            urlImage: {
              mobile: "https://assets.staging.bedu.org/UANE/oferta_bachillerato_movil_1f0d5cd934.jpg",
              desktop: "https://assets.staging.bedu.org/UANE/oferta_bachillerato_desk_654176bdbd.jpg"
            },
            text: "",
            icon: "arrow_forward",
            color: "#99E5E2",
            opacity: "multiply",
            height: "282px",
            enable: true,
            nobackground: false
          },
          banner: {
            image: {
              src: "https://www.uane.edu.mx/multi/images/programas/becas.jpg",
              alt: "alumnos"
            },
            description: {
              title: "Bachilleratos",
              subtitle: "Elige una lorem ipsum sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          },
          head: {
            title: "",
            description: "",
          },
        },
        "programs": [
          { params: { "program": "bachillerato", "nameProgram": "Bachillerato" } },
        ] 
      }
    },
    { params:
      {
        "level": "licenciatura",
        "levelRoute": "oferta-educativa/licenciatura",
        "config": {
          title: "Licenciaturas",
          promo: {
            urlImage: {
              mobile: "https://assets.staging.bedu.org/UANE/oferta_carreras_movil_b12eb60e44.jpg",
              desktop: "https://assets.staging.bedu.org/UANE/oferta_carreras_desk_4ef261dd15.jpg"
            },
            text: "",
            icon: "arrow_forward",
            color: "#F6B5AF",
            opacity: "multiply",
            height: "282px",
            enable: true,
            nobackground: false
          },
          banner: {
            image: {
              src: "https://www.uane.edu.mx/multi/images/programas/becas.jpg",
              alt: "alumnos"
            },
            description: {
              title: "Licenciaturas",
              subtitle: "Elige una lorem ipsum sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          },
          head: {
            title: "",
            description: "",
          },
        },
        "programs": [
          { params: { "program": "desarrollo-software", "nameProgram": "Ingeniería en Desarrollo de Software" } },
          { params: { "program": "psicologia-laboral", "nameProgram": "Licenciatura en Psicología Laboral" } },
          { params: { "program": "ingenieria-sistemas", "nameProgram": "Ingeniería en Sistemas" } },
          { params: { "program": "ingenieria-industrial-produccion", "nameProgram": "Ingeniería Industrial en Producción" } },
          { params: { "program": "administracion-liderazgo-empresarial", "nameProgram": "Licenciatura en Administración y Liderazgo Empresarial" } },
          { params: { "program": "contaduria", "nameProgram": "Licenciatura en Contaduría" } },
          { params: { "program": "gestion-deportiva", "nameProgram": "Licenciatura en Gestión Deportiva" } },
          { params: { "program": "administracion-empresas", "nameProgram": "Licenciatura en Administración de Empresas" } },
          { params: { "program": "idiomas", "nameProgram": "Licenciatura en Idiomas" } },
          { params: { "program": "diseno-grafico", "nameProgram": "Licenciatura en Diseño Gráfico" } },
          { params: { "program": "gastronomia", "nameProgram": "Licenciatura en Gastronomía" } },
          { params: { "program": "comercio-internacional", "nameProgram": "Licenciatura en Comercio Internacional" } },
          { params: { "program": "derecho-acentuacion-negocios-internacionales", "nameProgram": "Licenciatura en Derecho con Acentuación en Negocios Internacionales" } },
          { params: { "program": "psicologia", "nameProgram": "Licenciatura en Psicología" } },
          { params: { "program": "administracion-empresas-turisticas", "nameProgram": "Licenciatura en Administración de Empresas Turísticas" } },
          { params: { "program": "mecanica-procesos-inyeccion", "nameProgram": "Ingeniería Mecánica en Procesos de Inyección" } },
          { params: { "program": "ingenieria-industrial-sistemas", "nameProgram": "Ingeniería Industrial y de Sistemas" } },
          { params: { "program": "ciencias-educacion", "nameProgram": "Licenciatura en Ciencias de la Educación" } },
          { params: { "program": "nutricion", "nameProgram": "Licenciatura en Nutrición" } },
          { params: { "program": "derecho", "nameProgram": "Licenciatura en Derecho" } },
          { params: { "program": "administracion-recursos-humanos", "nameProgram": "Licenciatura en Administración de Recursos Humanos" } },
          { params: { "program": "arquitectura", "nameProgram": "Licenciatura en Arquitectura" } },
          { params: { "program": "contador-publico", "nameProgram": "Licenciatura en Contador Público" } },
          { params: { "program": "comunicacion", "nameProgram": "Licenciatura en Comunicación" } },
          { params: { "program": "sistemas-productividad-industrial", "nameProgram": "Ingenería en Sistemas y Productividad Industrial" } },
          { params: { "program": "mercadotecnia", "nameProgram": "Licenciatura en Mercadotecnia" } },
          { params: { "program": "administracion-estrategia-negocios", "nameProgram": "Licenciatura en Administración Estratégica de Negocios" } },
          { params: { "program": "negocios-internacionales", "nameProgram": "Licenciatura en Negocios Internacionales" } },
          { params: { "program": "negocios-digitales", "nameProgram": "Licenciatura en Negocios Digitales" } },
          { params: { "program": "ingenieria-ciencia-datos", "nameProgram": "Ingenieria en Ciencias de Datos" } },
        ]
      }
    },
    { params:
      {
        "level": "especialidad",
        "levelRoute": "oferta-educativa/especialidad",
        "config": {
          title: "Especialidades",
          promo: {
            urlImage: {
              mobile: "https://assets.staging.bedu.org/UANE/oferta_especialidades_movil_732aee5340.jpg",
              desktop: "https://assets.staging.bedu.org/UANE/oferta_especialidades_desk_b96619eea0.jpg"
            },
            text: "",
            icon: "arrow_forward",
            color: "#B9C3C8",
            opacity: "multiply",
            height: "282px",
            enable: true,
            nobackground: false
          },
          banner: {
            image: {
              src: "https://www.uane.edu.mx/multi/images/programas/becas.jpg",
              alt: "alumnos"
            },
            description: {
              title: "Especialidades",
              subtitle: "Elige una lorem ipsum sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          },
          head: {
            title: "",
            description: "",
          },
        },
        "programs": [
          { params: { "program": "administracion-liderazgo", "nameProgram": "Especialidad en Administración y Liderazgo" } },
          { params: { "program": "relaciones-juridico-laborales", "nameProgram": "Especialidad en Relaciones Jurídico Laborales" } },
          { params: { "program": "salud-ocupacional", "nameProgram": "Especialidad en Salud Ocupacional" } },
          { params: { "program": "gestion-desarrollo-recursos-humanos", "nameProgram": "Especialidad en Gestión y Desarrollo de Recursos Humanos" } },
          { params: { "program": "manufactura-esbelta", "nameProgram": "Especialidad en Manufactura Esbelta" } },
          { params: { "program": "logistica", "nameProgram": "Especialidad en Logística" } },
        ] 
      }
    },
    { params:
      {
        "level": "maestria",
        "levelRoute": "oferta-educativa/maestria",
        "config": {
          title: "Maestrías",
          promo: {
            urlImage: {
              mobile: "https://assets.staging.bedu.org/UANE/oferta_maestrias_movil_1b1ed5735a.jpg",
              desktop: "https://assets.staging.bedu.org/UANE/oferta_maestrias_desk_fd2e5b8460.jpg"
            },
            text: "",
            icon: "arrow_forward",
            color: "#E94537",
            opacity: "multiply",
            height: "282px",
            enable: true,
            nobackground: false
          },
          banner: {
            image: {
              src: "https://www.uane.edu.mx/multi/images/programas/becas.jpg",
              alt: "alumnos"
            },
            description: {
              title: "Maestrias",
              subtitle: "Elige una lorem ipsum sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          },
          head: {
            title: "",
            description: "",
          },
        },
        "programs": [
          { params: { "program": "derecho-fiscal", "nameProgram": "Maestría en Derecho Fiscal" } },
          { params: { "program": "nutricion-obesidad-diabetes", "nameProgram": "Maestría en Nutrición en Obesidad y Diabetes" } },
          { params: { "program": "efectividad-organizacional", "nameProgram": "Maestría en Efectividad Organizacional" } },
          { params: { "program": "impuestos", "nameProgram": "Maestría en Impuestos" } },
          { params: { "program": "gestion-servicios-salud", "nameProgram": "Maestría en Gestión en Servicios de Salud" } },
          { params: { "program": "salud-ocupacional", "nameProgram": "Maestría en Salud Ocupacional" } },
          { params: { "program": "derecho-laboral", "nameProgram": "Maestría en Derecho Laboral" } },
          { params: { "program": "terapia-familiar", "nameProgram": "Maestría en Terapia Familiar" } },
          { params: { "program": "justicia-administrativa", "nameProgram": "Maestría en Justicia Administrativa" } },
          { params: { "program": "derecho-mercantil", "nameProgram": "Maestría en Derecho Mercantil" } },
          { params: { "program": "gestion-ambiental", "nameProgram": "Maestría en Gestión Ambiental" } },
          { params: { "program": "docencia", "nameProgram": "Maestría en Docencia" } },
          { params: { "program": "educacion", "nameProgram": "Maestría en Educación" } },
          { params: { "program": "gestion-negocios-manufactura", "nameProgram": "Maestría en Gestión de Negocios de Manufactura" } },
          { params: { "program": "administracion-liderazgo", "nameProgram": "Maestría en Administración y Liderazgo" } },
          { params: { "program": "docencia-investigacion-educativa", "nameProgram": "Maestría en Docencia e Investigación Educativa" } },
          { params: { "program": "sistema-penal-acusatorio", "nameProgram": "Maestría en Sistema Penal Acusatorio" } },
          { params: { "program": "mercadotecnia-estrategica", "nameProgram": "Maestría en Mercadotecnia Estratégica" } },
          { params: { "program": "administracion", "nameProgram": "Maestría en Administración" } },
          { params: { "program": "comunicacion-empresarial", "nameProgram": "Maestría en Comunicación Empresarial" } },
          { params: { "program": "derecho", "nameProgram": "Maestría en Derecho" } },
          { params: { "program": "desarrollo-organizacional-talento-humano", "nameProgram": "Maestría en Desarrollo Organizacional y Talento Humano" } },
          { params: { "program": "mercadotecnia-digital", "nameProgram": "Maestría en Mercadotecnia Digital" } },
          { params: { "program": "gobierno-estrategia-publica", "nameProgram": "Maestría en Gobierno y Estrategia Pública" } },
        ] 
      }
    },
    { params:
      {
        "level": "doctorado",
        "levelRoute": "oferta-educativa/doctorado",
        "config": {
          title: "Doctorado",
          promo: {
            urlImage: {
              mobile: "https://assets.staging.bedu.org/UANE/oferta_doctorados_movil_247423d2d0.jpg",
              desktop: "https://assets.staging.bedu.org/UANE/oferta_doctorados_desk_e6f5d1e1ac.jpg"
            },
            text: "",
            icon: "arrow_forward",
            color: "#A57C1C",
            opacity: "multiply",
            height: "282px",
            enable: true,
            nobackground: false
          },
          banner: {
            image: {
              src: "https://www.uane.edu.mx/multi/images/programas/becas.jpg",
              alt: "alumnos"
            },
            description: {
              title: "Doctorados",
              subtitle: "Elige una lorem ipsum sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          },
          head: {
            title: "",
            description: "",
          },
        },
        "programs": [
          { params: { "program": "derecho", "nameProgram": "Doctorado en Derecho" } },
          { params: { "program": "planeacion-liderazgo-educativo", "nameProgram": "Doctorado en Planeación y Liderazgo Educativo" } },
        ] 
      }
    }
  ],
  "extension-universitaria": { 
    params: {
      "level": "extension-universitaria",
      "config": {
        title: "Extensión Universitaria",
        promo: {
          urlImage: {
            mobile: "https://assets.staging.bedu.org/UANE/oferta_educacion_continua_movil_1c7642bed7.jpg",
            desktop: "https://assets.staging.bedu.org/UANE/oferta_educacion_continua_desk_a06f62f5fa.jpg"
          },
          text: "",
          icon: "arrow_forward",
          color: "#6F7C83",
          opacity: "multiply",
          height: "282px",
          enable: true,
          nobackground: false
        },
        banner: {
          image: {
            src: "https://www.uane.edu.mx/multi/images/programas/becas.jpg",
            alt: "alumnos"
          },
          description: {
            title: "Extensión Universitaria",
            subtitle: "Elige una lorem ipsum sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        },
        head: {
          title: "",
          description: "",
        },
      },
      "programs": [
        { params: { "program": "ingles-pearson-a1", "nameProgram": "Cursos Inglés Pearson Nivel A1"} },
        { params: { "program": "ingles-pearson-a2", "nameProgram": "Cursos Inglés Pearson Nivel A2"} },
        { params: { "program": "ingles-pearson-b1", "nameProgram": "Cursos Inglés Pearson Nivel B1"} },
        { params: { "program": "ingles-pearson-b2", "nameProgram": "Cursos Inglés Pearson Nivel B2"} },
        { params: { "program": "ingles-pearson-c1", "nameProgram": "Cursos Inglés Pearson Nivel C1"} },
        { params: { "program": "ingles-pearson-c1+", "nameProgram": "Cursos Inglés Pearson Nivel C1+"} },
        { params: { "program": "certificacion-internacional-1", "nameProgram": "Certificacion Internacional (Nivel 1) Papel"} },
        { params: { "program": "certificacion-internacional-2", "nameProgram": "Certificacion Internacional (Nivel 2) Papel"} },
        { params: { "program": "certificacion-internacional-3", "nameProgram": "Certificacion Internacional (Nivel 3) Papel"} },
        { params: { "program": "certificacion-internacional-4", "nameProgram": "Certificacion Internacional (Nivel 4) Papel"} },
        { params: { "program": "certificacion-internacional-5", "nameProgram": "Certificacion Internacional (Nivel 5) Papel"} },
        { params: { "program": "certificacion-internacional-a1", "nameProgram": "Certificacion Internacional (Nivel A1) Online"} },
        { params: { "program": "certificacion-internacional-a2", "nameProgram": "Certificacion Internacional (Nivel A2) Online"} },
        { params: { "program": "certificacion-internacional-b1", "nameProgram": "Certificacion Internacional (Nivel B1) Online"} },
        { params: { "program": "certificacion-internacional-b2", "nameProgram": "Certificacion Internacional (Nivel B2) Online"} },
        { params: { "program": "certificacion-internacional-c1", "nameProgram": "Certificacion Internacional (Nivel C1) Online"} },
        { params: { "program": "certificacion-internacional-c2", "nameProgram": "Certificacion Internacional (Nivel C2) Online"} },
        { params: { "program": "bedu-emprendimiento", "nameProgram": "BEDU Curso en emprendimiento"} },
        { params: { "program": "bedu-productos-digitales", "nameProgram": "BEDU Curso en diseño de productos digitales"} },
        { params: { "program": "bedu-ciencia-de-datos", "nameProgram": "BEDU Diplomado en Ciencia de Datos"} },
        { params: { "program": "diplomado-innovacion-y-control", "nameProgram": "Diplomado en Innovación y control de calidad"} },
        { params: { "program": "examen-diagnostico-ingles", "nameProgram": "Examenes diagnóstico Inglés"} },
        { params: { "program": "diplomado-docencia-online", "nameProgram": "Diplomado en docencia en linea"} },
        { params: { "program": "diplomado-globalizacion", "nameProgram": "Diplomado en globalización"} },
        { params: { "program": "diplomado-desarrollo-talento", "nameProgram": "Diplomado en desarrollo del talento humano"} },
        { params: { "program": "adobe-after-effects", "nameProgram": "Certificación Oficial Adobe After Effects" } },
        { params: { "program": "adobe-photoshop", "nameProgram": "Certificación Oficial Adobe Photoshop" } },
        { params: { "program": "analisis-de-datos", "nameProgram": "Análisis de datos" } },
        { params: { "program": "comunicacion-publica-gestion-reputacion", "nameProgram": "Comunicación Publica y Gestión de la Reputación" } },
        { params: { "program": "derecho-autor-propiedad-intelectual", "nameProgram": "Derecho de Autor y Propiedad Intelectual" } },
        { params: { "program": "derechos-humanos-sostenibilidad", "nameProgram": "Derechos Humanos y Sostenibilidad" } },
        { params: { "program": "estrategias-tiendas-en-linea", "nameProgram": "Estrategias de tiendas en línea" } },
        { params: { "program": "mega-tendencias-globales", "nameProgram": "Mega tendencias Globales" } },
        { params: { "program": "mercadotecnia-entornos-virtuales", "nameProgram": "Mercadotecnia Aplicada A Entornos Virtuales" } },
        { params: { "program": "psicologia-consumidor", "nameProgram": "Psicología del consumidor" } },
        { params: { "program": "estructura-datos", "nameProgram": "Estructura de datos" } },
        { params: { "program": "gerencia-gestion-deportiva", "nameProgram": "Gerencia y Gestión Deportiva" } },
        { params: { "program": "higiene-seguridad-trabajo", "nameProgram": "Higiene y seguridad en el trabajo" } },
        { params: { "program": "liderazgo-trabajo-equipo", "nameProgram": "Liderazgo y Trabajo en Equipo" } },
        { params: { "program": "obligaciones-contratos", "nameProgram": "Obligaciones y Contratos" } },
        { params: { "program": "psicologia-comunicacion", "nameProgram": "Psicología y Comunicación" } },
        { params: { "program": "politicas-publicas-gobernanza", "nameProgram": "Políticas Públicas en Gobernanza" } },
        { params: { "program": "prodis-diseno-universal", "nameProgram": "Diseño Universal para el Aprendizaje y su Aplicación en el Aula (PRODIS)" } },
        { params: { "program": "prodis-estimulacion-sensorial", "nameProgram": "Estimulación sensorial en alumnado con necesidades de apoyo educativo (PRODIS)" } },
        { params: { "program": "prodis-saac", "nameProgram": "Estrategias para Potenciar la Comunicación a través de los Sistemas Aumentativos y Alternativos de Comunicación (SAAC) (PRODIS)" } },
        { params: { "program": "prodis-tic", "nameProgram": "Creación de Recursos Adaptados a través de las TIC en el Aula (PRODIS)" } },
        { params: { "program": "prodis-metodologia-investigacion-aplicada", "nameProgram": "Metodología de la investigación aplicada a la educación (PRODIS)" } },
      ] 
    }
  },
  "faq": [
    { params: { "section": "general" } },
    { params: { "section": "modalidad-presencial" } },
    { params: { "section": "modalidad-online" } },
    { params: { "section": "modalidad-flex" } },
  ],
  "blog": [
    { params:
      {
        "level": "entrada",
        "levelRoute": "extension-universitaria/",
        "config": {
          title: "entradas de blog",
          head: {
            title: "",
            description: "",
          },
        },
        "entries": [
          { params: { "entry": "convocatoria-investigacion-1" } },
          { params: { "entry": "convocatoria-investigacion-2" } },
          { params: { "entry": "convocatoria-investigacion-3" } },
          { params: { "entry": "convocatoria-investigacion-4" } },
          { params: { "entry": "convocatoria-investigacion-5" } },
          { params: { "entry": "convocatoria-investigacion-6" } },
          { params: { "entry": "convocatoria-investigacion-7" } },
          { params: { "entry": "convocatoria-investigacion-8" } },
          { params: { "entry": "convocatoria-investigacion-9" } },
          { params: { "entry": "convocatoria-investigacion-10" } },
          { params: { "entry": "convocatoria-investigacion-11" } },
          { params: { "entry": "convocatoria-investigacion-12" } },
        ] 
      }
    },
  ]
}

export default Routes