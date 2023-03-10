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
              mobile: "https://drive.google.com/uc?export=view&id=1IZB-O4PNo9wwRDtweld_gpoRxzmv6WhX",
              desktop: "https://drive.google.com/uc?export=view&id=1ooMLjk3zU7_8_A9W-NOdTOvjbGEw8qQW"
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
              mobile: "https://drive.google.com/uc?export=view&id=1zl9VvR13Y1Tk0f-EfvkOzkHUZjQ2gPH_",
              desktop: "https://drive.google.com/uc?export=view&id=1qB-SaPTknHUetoHA_e0CmcNQZxj2RZ2t"
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
          { params: { "program": "desarrollo-software", "nameProgram": "Ingenier??a en Desarrollo de Software" } },
          { params: { "program": "psicologia-laboral", "nameProgram": "Licenciatura en Psicolog??a Laboral" } },
          { params: { "program": "ingenieria-sistemas", "nameProgram": "Ingenier??a en Sistemas" } },
          { params: { "program": "ingenieria-industrial-produccion", "nameProgram": "Ingenier??a Industrial en Producci??n" } },
          { params: { "program": "administracion-liderazgo-empresarial", "nameProgram": "Licenciatura en Administraci??n y Liderazgo Empresarial" } },
          { params: { "program": "contaduria", "nameProgram": "Licenciatura en Contadur??a" } },
          { params: { "program": "gestion-deportiva", "nameProgram": "Licenciatura en Gesti??n Deportiva" } },
          { params: { "program": "administracion-empresas", "nameProgram": "Licenciatura en Administraci??n de Empresas" } },
          { params: { "program": "idiomas", "nameProgram": "Licenciatura en Idiomas" } },
          { params: { "program": "diseno-grafico", "nameProgram": "Licenciatura en Dise??o Gr??fico" } },
          { params: { "program": "gastronomia", "nameProgram": "Licenciatura en Gastronom??a" } },
          { params: { "program": "comercio-internacional", "nameProgram": "Licenciatura en Comercio Internacional" } },
          { params: { "program": "derecho-acentuacion-negocios-internacionales", "nameProgram": "Licenciatura en Derecho con Acentuaci??n en Negocios Internacionales" } },
          { params: { "program": "psicologia", "nameProgram": "Licenciatura en Psicolog??a" } },
          { params: { "program": "administracion-empresas-turisticas", "nameProgram": "Licenciatura en Administraci??n de Empresas Tur??sticas" } },
          { params: { "program": "mecanica-procesos-inyeccion", "nameProgram": "Ingenier??a Mec??nica en Procesos de Inyecci??n" } },
          { params: { "program": "ingenieria-industrial-sistemas", "nameProgram": "Ingenier??a Industrial y de Sistemas" } },
          { params: { "program": "ciencias-educacion", "nameProgram": "Licenciatura en Ciencias de la Educaci??n" } },
          { params: { "program": "nutricion", "nameProgram": "Licenciatura en Nutrici??n" } },
          { params: { "program": "derecho", "nameProgram": "Licenciatura en Derecho" } },
          { params: { "program": "administracion-recursos-humanos", "nameProgram": "Licenciatura en Administraci??n de Recursos Humanos" } },
          { params: { "program": "arquitectura", "nameProgram": "Licenciatura en Arquitectura" } },
          { params: { "program": "contador-publico", "nameProgram": "Licenciatura en Contador P??blico" } },
          { params: { "program": "comunicacion", "nameProgram": "Licenciatura en Comunicaci??n" } },
          { params: { "program": "sistemas-productividad-industrial", "nameProgram": "Ingener??a en Sistemas y Productividad Industrial" } },
          { params: { "program": "mercadotecnia", "nameProgram": "Licenciatura en Mercadotecnia" } },
          { params: { "program": "administracion-estrategia-negocios", "nameProgram": "Licenciatura en Administraci??n Estrat??gica de Negocios" } },
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
              mobile: "https://drive.google.com/uc?export=view&id=1jqW4m0V-UYJdCp2Ax0dqLxf04ansooLB",
              desktop: "https://drive.google.com/uc?export=view&id=1lksUFh99fwx12CS5NDhSzzOwqjE2nBCQ"
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
          { params: { "program": "administracion-liderazgo", "nameProgram": "Especialidad en Administraci??n y Liderazgo" } },
          { params: { "program": "relaciones-juridico-laborales", "nameProgram": "Especialidad en Relaciones Jur??dico Laborales" } },
          { params: { "program": "salud-ocupacional", "nameProgram": "Especialidad en Salud Ocupacional" } },
          { params: { "program": "gestion-desarrollo-recursos-humanos", "nameProgram": "Especialidad en Gesti??n y Desarrollo de Recursos Humanos" } },
          { params: { "program": "manufactura-esbelta", "nameProgram": "Especialidad en Manufactura Esbelta" } },
          { params: { "program": "logistica", "nameProgram": "Especialidad en Log??stica" } },
        ] 
      }
    },
    { params:
      {
        "level": "maestria",
        "levelRoute": "oferta-educativa/maestria",
        "config": {
          title: "Maestr??as",
          promo: {
            urlImage: {
              mobile: "https://drive.google.com/uc?export=view&id=1Y7pu9KD4hCZOM5MCQqYUf-cTkm6FjAxu",
              desktop: "https://drive.google.com/uc?export=view&id=19gyvlX5gfDtt2QeQ5pnc66BAgtV9X5ng"
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
          { params: { "program": "derecho-fiscal", "nameProgram": "Maestr??a en Derecho Fiscal" } },
          { params: { "program": "nutricion-obesidad-diabetes", "nameProgram": "Maestr??a en Nutrici??n en Obesidad y Diabetes" } },
          { params: { "program": "efectividad-organizacional", "nameProgram": "Maestr??a en Efectividad Organizacional" } },
          { params: { "program": "impuestos", "nameProgram": "Maestr??a en Impuestos" } },
          { params: { "program": "gestion-servicios-salud", "nameProgram": "Maestr??a en Gesti??n en Servicios de Salud" } },
          { params: { "program": "salud-ocupacional", "nameProgram": "Maestr??a en Salud Ocupacional" } },
          { params: { "program": "derecho-laboral", "nameProgram": "Maestr??a en Derecho Laboral" } },
          { params: { "program": "terapia-familiar", "nameProgram": "Maestr??a en Terapia Familiar" } },
          { params: { "program": "justicia-administrativa", "nameProgram": "Maestr??a en Justicia Administrativa" } },
          { params: { "program": "derecho-mercantil", "nameProgram": "Maestr??a en Derecho Mercantil" } },
          { params: { "program": "gestion-ambiental", "nameProgram": "Maestr??a en Gesti??n Ambiental" } },
          { params: { "program": "docencia", "nameProgram": "Maestr??a en Docencia" } },
          { params: { "program": "educacion", "nameProgram": "Maestr??a en Educaci??n" } },
          { params: { "program": "gestion-negocios-manufactura", "nameProgram": "Maestr??a en Gesti??n de Negocios de Manufactura" } },
          { params: { "program": "administracion-liderazgo", "nameProgram": "Maestr??a en Administraci??n y Liderazgo" } },
          { params: { "program": "docencia-investigacion-educativa", "nameProgram": "Maestr??a en Docencia e Investigaci??n Educativa" } },
          { params: { "program": "sistema-penal-acusatorio", "nameProgram": "Maestr??a en Sistema Penal Acusatorio" } },
          { params: { "program": "mercadotecnia-estrategica", "nameProgram": "Maestr??a en Mercadotecnia Estrat??gica" } },
          { params: { "program": "administracion", "nameProgram": "Maestr??a en Administraci??n" } },
          { params: { "program": "comunicacion-empresarial", "nameProgram": "Maestr??a en Comunicaci??n Empresarial" } },
          { params: { "program": "derecho", "nameProgram": "Maestr??a en Derecho" } },
          { params: { "program": "desarrollo-organizacional-talento-humano", "nameProgram": "Maestr??a en Desarrollo Organizacional y Talento Humano" } },
          { params: { "program": "mercadotecnia-digital", "nameProgram": "Maestr??a en Mercadotecnia Digital" } },
          { params: { "program": "gobierno-estrategia-publica", "nameProgram": "Maestr??a en Gobierno y Estrategia P??blica" } },
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
              mobile: "https://drive.google.com/uc?export=view&id=1Hkdd9ScYfqlaS3D0wXntZ87PKJyFRXMG",
              desktop: "https://drive.google.com/uc?export=view&id=1A-V4fwz_65l2Jrt20GxUOb22qshS7hqu"
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
          { params: { "program": "planeacion-liderazgo-educativo", "nameProgram": "Doctorado en Planeaci??n y Liderazgo Educativo" } },
        ] 
      }
    }
  ],
  "extension-universitaria": { 
    params: {
      "level": "extension-universitaria",
      "config": {
        title: "Extensi??n Universitaria",
        promo: {
          urlImage: {
            mobile: "https://drive.google.com/uc?export=view&id=1A4Xz8N7VdVR7qOFR5TtzerX1Qek2qgMu",
            desktop: "https://drive.google.com/uc?export=view&id=19Oe9R_hCPk8oY2t37VFiIHeZvWwUw3HL"
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
            title: "Extensi??n Universitaria",
            subtitle: "Elige una lorem ipsum sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        },
        head: {
          title: "",
          description: "",
        },
      },
      "programs": [
        { params: { "program": "ingles-pearson-a1", "nameProgram": "Cursos Ingl??s Pearson Nivel A1"} },
        { params: { "program": "ingles-pearson-a2", "nameProgram": "Cursos Ingl??s Pearson Nivel A2"} },
        { params: { "program": "ingles-pearson-b1", "nameProgram": "Cursos Ingl??s Pearson Nivel B1"} },
        { params: { "program": "ingles-pearson-b2", "nameProgram": "Cursos Ingl??s Pearson Nivel B2"} },
        { params: { "program": "ingles-pearson-c1", "nameProgram": "Cursos Ingl??s Pearson Nivel C1"} },
        { params: { "program": "ingles-pearson-c1+", "nameProgram": "Cursos Ingl??s Pearson Nivel C1+"} },
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
        { params: { "program": "bedu-productos-digitales", "nameProgram": "BEDU Curso en dise??o de productos digitales"} },
        { params: { "program": "bedu-ciencia-de-datos", "nameProgram": "BEDU Diplomado en Ciencia de Datos"} },
        { params: { "program": "diplomado-innovacion-y-control", "nameProgram": "Diplomado en Innovaci??n y control de calidad"} },
        { params: { "program": "examen-diagnostico-ingles", "nameProgram": "Examenes diagn??stico Ingl??s"} },
        { params: { "program": "diplomado-docencia-online", "nameProgram": "Diplomado en docencia en linea"} },
        { params: { "program": "diplomado-globalizacion", "nameProgram": "Diplomado en globalizaci??n"} },
        { params: { "program": "diplomado-desarrollo-talento", "nameProgram": "Diplomado en desarrollo del talento humano"} },
        { params: { "program": "adobe-after-effects", "nameProgram": "Certificaci??n Oficial Adobe After Effects" } },
        { params: { "program": "adobe-photoshop", "nameProgram": "Certificaci??n Oficial Adobe Photoshop" } },
        { params: { "program": "analisis-de-datos", "nameProgram": "An??lisis de datos" } },
        { params: { "program": "comunicacion-publica-gestion-reputacion", "nameProgram": "Comunicaci??n Publica y Gesti??n de la Reputaci??n" } },
        { params: { "program": "derecho-autor-propiedad-intelectual", "nameProgram": "Derecho de Autor y Propiedad Intelectual" } },
        { params: { "program": "derechos-humanos-sostenibilidad", "nameProgram": "Derechos Humanos y Sostenibilidad" } },
        { params: { "program": "estrategias-tiendas-en-linea", "nameProgram": "Estrategias de tiendas en l??nea" } },
        { params: { "program": "mega-tendencias-globales", "nameProgram": "Mega tendencias Globales" } },
        { params: { "program": "mercadotecnia-entornos-virtuales", "nameProgram": "Mercadotecnia Aplicada A Entornos Virtuales" } },
        { params: { "program": "psicologia-consumidor", "nameProgram": "Psicolog??a del consumidor" } },
        { params: { "program": "estructura-datos", "nameProgram": "Estructura de datos" } },
        { params: { "program": "gerencia-gestion-deportiva", "nameProgram": "Gerencia y Gesti??n Deportiva" } },
        { params: { "program": "higiene-seguridad-trabajo", "nameProgram": "Higiene y seguridad en el trabajo" } },
        { params: { "program": "liderazgo-trabajo-equipo", "nameProgram": "Liderazgo y Trabajo en Equipo" } },
        { params: { "program": "obligaciones-contratos", "nameProgram": "Obligaciones y Contratos" } },
        { params: { "program": "psicologia-comunicacion", "nameProgram": "Psicolog??a y Comunicaci??n" } },
        { params: { "program": "politicas-publicas-gobernanza", "nameProgram": "Pol??ticas P??blicas en Gobernanza" } },
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