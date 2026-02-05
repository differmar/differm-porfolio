export type Language = "en" | "es";

const translations = {
  en: {
    // Navigation
    "nav.home": "HOME",
    "nav.aboutMe": "ABOUT ME",
    "nav.projects": "PROJECTS",
    "nav.experience": "EXPERIENCE",
    "nav.contact": "CONTACT",

    // Hero
    "hero.subtitle": "Software Developer & Creator",

    // Projects
    "projects.heading": "PROJECTS",
    "projects.makerflow.description":
      "MakerFlow is a production management platform built for small-scale 3D printing farms. It helps track material usage, calculate real printing costs, manage inventory, and monitor production metrics in one place.",
    "projects.makerflow.action": "Request Demo",

    // Skills
    "skills.heading": "SKILLS",
    "skills.developer": "Developer",
    "skills.creator": "Creator",
    "skills.empty": "No skills available in this category yet.",

    // Experience
    "experience.heading": "EXPERIENCE",
    "experience.present": "Present",
    "experience.remote": "Remote",

    // Months
    "month.1": "Jan",
    "month.2": "Feb",
    "month.3": "Mar",
    "month.4": "Apr",
    "month.5": "May",
    "month.6": "Jun",
    "month.7": "Jul",
    "month.8": "Aug",
    "month.9": "Sep",
    "month.10": "Oct",
    "month.11": "Nov",
    "month.12": "Dec",

    // About Me
    "aboutMe.heading": "ABOUT ME",
    "aboutMe.tagline": "Building digital experiences since 2020",
    "aboutMe.description": "I'm a software developer based in Colombia with over 5 years of experience building mobile and web applications. I specialize in React Native, React, and Next.js, and I'm passionate about creating products that solve real problems — from production management platforms to creative tools. When I'm not coding, you'll find me exploring 3D printing, video editing, or designing interfaces.",

    // Fallbacks
    "fallback.projectTitle": "Project",
    "fallback.projectDescription": "Project description",
  },
  es: {
    // Navigation
    "nav.home": "INICIO",
    "nav.aboutMe": "SOBRE MÍ",
    "nav.projects": "PROYECTOS",
    "nav.experience": "EXPERIENCIA",
    "nav.contact": "CONTACTO",

    // Hero
    "hero.subtitle": "Desarrollador de Software & Creador",

    // Projects
    "projects.heading": "PROYECTOS",
    "projects.makerflow.description":
      "MakerFlow es una plataforma de gestión de producción diseñada para granjas de impresión 3D a pequeña escala. Ayuda a rastrear el uso de materiales, calcular costos reales de impresión, gestionar inventario y monitorear métricas de producción en un solo lugar.",
    "projects.makerflow.action": "Solicitar Demo",

    // Skills
    "skills.heading": "HABILIDADES",
    "skills.developer": "Desarrollador",
    "skills.creator": "Creador",
    "skills.empty": "No hay habilidades disponibles en esta categoría.",

    // Experience
    "experience.heading": "EXPERIENCIA",
    "experience.present": "Actual",
    "experience.remote": "Remoto",

    // Months
    "month.1": "Ene",
    "month.2": "Feb",
    "month.3": "Mar",
    "month.4": "Abr",
    "month.5": "May",
    "month.6": "Jun",
    "month.7": "Jul",
    "month.8": "Ago",
    "month.9": "Sep",
    "month.10": "Oct",
    "month.11": "Nov",
    "month.12": "Dic",

    // About Me
    "aboutMe.heading": "SOBRE MÍ",
    "aboutMe.tagline": "Creando experiencias digitales desde 2020",
    "aboutMe.description": "Soy un desarrollador de software en Colombia con más de 5 años de experiencia construyendo aplicaciones móviles y web. Me especializo en React Native, React y Next.js, y me apasiona crear productos que resuelvan problemas reales — desde plataformas de gestión de producción hasta herramientas creativas. Cuando no estoy programando, me encuentras explorando impresión 3D, editando video o diseñando interfaces.",

    // Fallbacks
    "fallback.projectTitle": "Proyecto",
    "fallback.projectDescription": "Descripción del proyecto",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export default translations;
