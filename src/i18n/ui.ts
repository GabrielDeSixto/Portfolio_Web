export const languages = {
    es: '🇲🇽',
    en: '🇺🇸',
  };

  export const defaultLang = 'es';

  export const ui = {
    es: {
      'layout.title': 'Desarrollador y Programador Web',
      'layout.description': 'Contrata a Gabriel Solano De Sixto para crear tu aplicación web o móvil. Especializado en crear aplicaciones únicas.',
      'nav.home':'Experiencia',
      'nav.projects':'Proyectos',
      'nav.about':'Sobre mí',
      'nav.contact':'Contacto',
      'hero.badge': 'Disponible para trabajar',
      'hero.title': 'Hey, soy Gabriel',
      'hero.bio': '+3 años de experiencia. <strong>Ingeniero de Software y Científico de datos</strong> de Puebla, México 🇲🇽. Especializado en el desarrollo de aplicaciones web únicas y análisis de datos.',
      'hero.mail': 'Contáctame',
      'hero.linkedin': 'LinkedIn',
      'hero.cv':'Descargar CV',
      'exp.title': 'Experiencia laboral',
      'projects.title': 'Proyectos',
      'technologies.title':'Tecnologias',
      'about.title': 'Sobre mí',
      'about.bio': `<p>Me llamo Gabriel pero mis amigos me llaman Gabo. Empecé en la programación desde secundaria, tenía 15 años. Actualmente estoy <strong>liderando un equipo de desarrollo para un emprendimiento</strong>.</p><p>Algunos de mis éxitos incluyen <strong>colaborar con OpenPyme para el desarrollo de un orquestador de servidores y automatizar tareas repetitivas</strong>. Hoy está desaparecido fue un gran avance en el mundo deldesarrollo web.</p><p>Como creador de contenido, <strong>cuento con el canal de habla hispana más visto del mundo en la categoría de <em class="italic">Software & Game Development</em> en Twitch</strong>. Mi objetivo es mejorar la empleabilidad de la comunidad hispana y el acceso a contenido de calidad.</p>`,
      'footer.rights': 'Casi todos los derechos reservados',
      exp: [
        {
          title: 'Creador de contenido',
          date: 'Actualmente...',
          company: 'Twitch',
          description: 'Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.',
          link: 'https://twitch.tv/midudev',
          linkLabel: 'Saber más',
        },
        {
          title: 'Principal Frontend Engineer',
          date: 'Septiembre 2022',
          company: 'Adevinta Spain',
          description: 'Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.'
        }
      ],
      projects: [
        {
          title: "SVGL - A beautiful library with SVG logos",
          description: "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
          link: "https://svgl.vercel.app/",
          github: "https://github.com/pheralb/svgl",
          image: "/projects/svgl.webp",
          tags: ["nextjs", "tailwindcss"],
        },
        {
          title: "AdventJS - Retos de programación con JavaScript y TypeScript",
          description: "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
          link: "https://adventjs.dev",
          image: "/projects/adventjs.webp",
          tags: ["nextjs", "tailwindcss"],
        },
      ]
    },
    en: {
      'layout.title' : ` Web Developer and Programmer`,
      'layout.description': 'Hire Gabriel Solano De Sixto to build your web or mobile application. Web Developer and Data Science. Specialized in creating unique applications.',
      'nav.home':'Experience',
      'nav.projects':'Projects',
      'nav.about':'About me',
      'nav.contact':'Contact',
      'hero.badge': 'Open to work',
      'hero.title': `Hey, I'm Gabriel`,
      'hero.bio': '+3 years of experience. <strong>Software Engineer and Data Science</strong> from Puebla, Mexico 🇲🇽. Specialized in the development of unique web applications.',
      'hero.mail': 'Contact me',
      'hero.linkedin': 'LinkedIn',
      'hero.cv':'Download CV',
      'exp.title': 'Professional Experience',
      'technologies.title':'Technologies',
      'projects.title': 'Projects',
      'about.title': 'About me',
      'about.bio': `<p>My name is Gabriel, but my friends call me Gabo. I started programming with an Amstrad when I was 10 years old. Currently, I'm <strong>leading development teams in multinational companies</strong>.</p><p>Some of my successes include <strong>collaborating with Mozilla on the development of the first apps for their FirefoxOS system</strong>. Although it's now gone, it was a significant advancement in the world of web development.</p><p>As a content creator, <strong>I have the most-watched Spanish-speaking channel in the world in the <em class="italic">Software & Game Development</em> category on Twitch</strong>. My goal is to improve employability within the Spanish-speaking community and provide access to quality content.</p>`,
      'footer.rights': 'Almost all rights reserved',
      exp: [
        {
          title: 'Content creator',
          date: 'Present...',
          company: "Twitch",
          description: 'I share about programming and web development on various platforms. Awarded as the best non-English content creator in 2022 and best community in 2023 by GitHub.',
          link: 'https://twitch.tv/midudev',
          linkLabel: 'Know more',

        },
        {
          title: 'Principal Frontend Engineer',
          date: 'September 2022',
          company: 'Adevinta Spain',
          description: 'Responsible for the platform, components, and utilities for the creation and development of web applications. Achieved a 30% improvement in software delivery. Implementation of continuous integration and deployment measures with A/B testing across more than 15 teams.'
        }
      ],
      projects: [
        {
          title: "SVGL - A beautiful library with SVG logos",
          description: "Library of SVG logos from the most popular brands. +10k visits per month. +2K SVGs downloaded. Created from scratch with Next.js, React, and Tailwind CSS.",
          link: "https://svgl.vercel.app/",
          github: "https://github.com/pheralb/svgl",
          image: "/projects/svgl.webp",
          tags: ["nextjs", "tailwindcss"],
        },
        {
          title: "AdventJS - Programming challenges with JavaScript and TypeScript",
          description: "Free platform with programming challenges. Over 1 million visits in a month. +50K challenges completed. Created from scratch with Next.js, React, and Tailwind CSS.",
          link: "https://adventjs.dev",
          image: "/projects/adventjs.webp",
          tags: ["nextjs", "tailwindcss"],
        },
      ]

    },

  } as const;
