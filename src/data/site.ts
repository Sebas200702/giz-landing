// Configuración central de conversión. Cambiar aquí conecta toda la página.

export const ZOHO_FORM_URL =
  "https://forms.zohopublic.com/fundacioncolombiaincluyen1/form/RegistroGiz/formperma/oC5vPstkpZxfKVxb8ZPLuADTvnIvuZ14OCRLif6amrU";


export const SITE = {
  name: "Talento Sin Fronteras",
  // SEO: title ≤60 caracteres (keyword primero, marca al final) y
  // description ~155 caracteres (límites de visualización en la SERP).
  title: "Talento Sin Fronteras | Empleo para migrantes y colombianos",
  description:
    "Programa gratuito de orientación laboral, formación certificada y conexión con empresas para migrantes y colombianos en Cúcuta, Bucaramanga y Bogotá D.C.",
  tagline: "Oportunidades para quienes construyen un nuevo comienzo.",
};

export const NAV_LINKS = [
  { label: "Participa", href: "#participa" },
  { label: "Programa", href: "#programa" },
  { label: "Empresas", href: "#empresas" },
  { label: "Preguntas", href: "#preguntas" },
];

export const HERO = {
  kicker: "Convocatoria abierta",
  title: "Cada trayecto merece una oportunidad",
  paragraph:
    "Un nuevo comienzo es posible. Te acompañamos con orientación, formación y conexión con empleos formales y dignos.",
  imageAlt:
    "Familia sonriente participante del programa Talento sin Fronteras",
};

export const ELIGIBILITY_TEXT =
  "Para mayores de 18 años, sin empleo · Cúcuta · Bucaramanga · Bogotá D.C. · Gratuito";

export const AUDIENCE = {
  kicker: "Para quién es",
  title: "¿Es para ti?",
  paragraph:
    "Buscamos a personas migrantes y colombianas que quieran dar el siguiente paso hacia un empleo formal.",
  cards: [
    {
      value: "+18",
      color: "teal",
      icon: "user-check",
      label: "Mayores de 18 años, en busca de empleo",
    },
    {
      value: "Todas y todos",
      color: "blue",
      icon: "users",
      label: "Personas migrantes y colombianas",
    },
    {
      value: "3 regiones",
      color: "coral",
      icon: "map-pin",
      label:
        "Áreas metropolitanas de Cúcuta y Bucaramanga, y Bogotá D.C.",
    },
  ],
  municipalities:
    "Cúcuta · Villa del Rosario · Los Patios · El Zulia · Bucaramanga · Floridablanca · Girón · Piedecuesta · Bogotá D.C. y municipios circundantes (Soacha, Chía)",
};

export const PROGRAM_STEPS = {
  kicker: "Qué ofrecemos",
  title: "Un camino completo hacia el empleo",
  paragraph:
    "Te damos las herramientas y generamos conexiones laborales para que tengas mejores oportunidades de acceder a un empleo formal.",
  note: "Todo el proceso con enfoque de género e inclusión.",
  steps: [
    {
      number: "01",
      icon: "user-check",
      color: "teal",
      title: "Orientación laboral personalizada",
      description:
        "Conocemos tu perfil, tus intereses y tu experiencia para trazar tu ruta.",
    },
    {
      number: "02",
      icon: "graduation-cap",
      color: "coral",
      title: "Formación gratuita y certificada",
      description: "60 horas 100% virtuales, a tu ritmo y desde tu celular.",
    },
    {
      number: "03",
      icon: "heart-check",
      color: "blue",
      title: "Acompañamiento psicosocial",
      description:
        "Un apoyo humano que cuida tu bienestar durante todo el proceso.",
    },
    {
      number: "04",
      icon: "briefcase",
      color: "yellow",
      title: "Conexión con empresas aliadas",
      description: "Te acercamos a empresas que están contratando ahora mismo.",
    },
  ],
};

export const TRAINING = {
  kicker: "La formación",
  title: "Estudia 100% virtual, a tu ritmo",
  paragraph:
    "Estudia desde tu celular, a la hora que puedas, y sigue con tus cosas mientras avanzas hacia un mejor empleo. Sin desplazarte y sin dejar de lado tu día a día.",
  checklist: [
    "100% virtual, sin desplazarte",
    "Estudia a tu ritmo, cuando quieras",
    "Con certificación al finalizar",
  ],
  routeLabel: "Tu ruta de formación",
  route: [
    {
      hours: "20h",
      color: "teal",
      title: "Habilidades para el empleo",
      description: "Herramientas para desenvolverte en cualquier trabajo",
    },
    {
      hours: "40h",
      color: "coral",
      title: "Habilidades técnicas",
      description: "Ventas, servicio al cliente y logística",
    },
  ],
  total: "60 horas de formación en total",
};

export const CURRICULUM = {
  kicker: "Qué vas a aprender",
  title: "Dos formaciones que te preparan para el empleo",
  paragraph:
    "Todo 100% virtual desde tu celular, con rigor académico y lenguaje cercano. Estos son los temas de cada formación.",
  skillsLabel: "Habilidades para el empleo · 20 h",
  skillsTopics: [
    "Habilidades blandas para el empleo",
    "Cómo hacer tu hoja de vida",
    "Presentar una entrevista de trabajo exitosa",
    "Habilidades digitales",
    "Habilidades verdes para una vida sostenible",
    "Conexión y redes comunitarias",
  ],
  technicalLabel:
    "Habilidades técnicas · 40 h · Ventas, Servicio al cliente y Logística",
  modules: [
    {
      color: "teal",
      icon: "headset",
      badge: "Módulo 1 · 13,3 h",
      title: "Servicio al cliente",
      items: [
        "El cliente de hoy: quién es y cómo decide",
        "Momentos de verdad y ciclo del servicio",
        "Las cinco dimensiones de la calidad",
        "Comunicación asertiva en la atención",
        "Clientes difíciles: escuchar y resolver con calma",
        "PQRS y recuperación del servicio",
        "Medir el servicio: satisfacción y recomendación",
        "Derechos del consumidor en la atención",
      ],
    },
    {
      color: "coral",
      icon: "shopping-bag",
      badge: "Módulo 2 · 13,3 h",
      title: "Ventas",
      items: [
        "Por qué compramos: emociones y neuroventas",
        "El embudo de ventas y la conversión",
        "Venta consultiva: vender ayudando",
        "El método SPIN: preguntar para vender",
        "Argumentación y relato de producto",
        "Manejo de objeciones con respeto",
        "Técnicas de cierre con confianza",
        "Negociación de beneficio mutuo",
        "Posventa, fidelización y métricas",
      ],
    },
    {
      color: "blue",
      icon: "package",
      badge: "Módulo 3 · 13,3 h",
      title: "Logística y cadena de abastecimiento",
      items: [
        "La cadena de abastecimiento: el viaje del producto",
        "Recepción y verificación de mercancía",
        "Control de inventario: PEPS, UEPS y kardex",
        "Almacenamiento y rotación: orden que ahorra dinero",
        "Alistamiento y empaque de pedidos",
        "Distribución y entrega a tiempo",
        "Logística inversa: las devoluciones",
        "Indicadores logísticos: medir para mejorar",
      ],
    },
  ],
  chips: [
    "100% virtual desde tu celular",
    "Estudia a tu ritmo",
    "Certificación al finalizar",
  ],
};

export const COMPANIES = {
  kicker: "Para empresas",
  title: "¿Buscas talento comprometido?",
  paragraph:
    "Súmate como empresa aliada y conecta con personas formadas y motivadas, listas para aportar a tu equipo. Al mismo tiempo, generas impacto social real en tu región.",
  cta: "Quiero ser empresa aliada",
  benefits: [
    { icon: "users", color: "yellow", label: "Talento formado y motivado" },
    {
      icon: "check-square",
      color: "coral",
      label: "Acompañamiento en la vinculación",
    },
    { icon: "chart-up", color: "yellow", label: "Impacto social medible" },
    {
      icon: "globe",
      color: "coral",
      label: "Alianza con cooperación internacional",
    },
  ],
};

export const REGISTRATION = {
  kicker: "Inscripción",
  title: "Empieza tu nuevo comienzo hoy",
  paragraph: "Completa el formulario para inscribirte en el proyecto.",

};

export const FAQ = {
  kicker: "Preguntas frecuentes",
  title: "Resolvemos tus dudas",
  items: [
    {
      question: "¿Quién puede participar?",
      answer:
        "Personas mayores de 18 años, migrantes o colombianas, sin empleo, que residan en las áreas metropolitanas de Cúcuta (Cúcuta, Villa del Rosario, Los Patios, El Zulia), Bucaramanga (Bucaramanga, Floridablanca, Girón, Piedecuesta) o en Bogotá D.C. y municipios circundantes como Soacha y Chía.",
    },
    {
      question: "¿Tiene algún costo?",
      answer:
        "No. La formación y todo el acompañamiento son totalmente gratuitos.",
    },
    {
      question: "¿Cuánto tengo que estudiar?",
      answer:
        "Son 20 horas de habilidades para el empleo y 40 horas de habilidades técnicas. Completar la formación es clave para avanzar en la ruta hacia el empleo.",
    },
    {
      question: "¿Cómo me inscribo?",
      answer:
        "Completa el formulario de esta página para poder acceder a la formación.",
    },
  ],
};
