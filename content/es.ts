import type { PortfolioContent } from './types'
import { companies, roles } from './career'
import { contributionsEs } from './contributions/es'

export const es: PortfolioContent = {
  metadata: {
    title: 'Hugo Riveros | Ingeniero de Software Fullstack',
    description:
      'Ingeniero de Software Fullstack en Bogotá, Colombia. Aplicaciones web, servicios backend e integraciones. Abierto a oportunidades Fullstack y Frontend.',
  },
  navigation: {
    label: 'Navegación principal',
    experience: 'Experiencia',
    contributions: 'Contribuciones',
    about: 'Sobre mí',
    contact: 'Contacto',
    resume: 'Descargar CV',
    skip: 'Saltar al contenido',
    openMenu: 'Abrir navegación',
    closeMenu: 'Cerrar navegación',
    switchLanguage: 'Read in English',
    lightTheme: 'Cambiar a modo claro',
    darkTheme: 'Cambiar a modo oscuro',
  },
  hero: {
    location: 'Bogotá, Colombia',
    availability: 'Abierto a nuevas oportunidades',
    role: 'Ingeniero de Software Fullstack',
    headline: ['Interfaces con propósito.', 'Conexiones confiables.'],
    introduction:
      'Soy Hugo Riveros. Desarrollo aplicaciones web, servicios backend e integraciones para crear experiencias claras y confiables.',
    description:
      'Transformo las necesidades de un producto en soluciones bien pensadas, con atención a la usabilidad, el rendimiento y la mantenibilidad.',
    contact: 'Conversemos',
    about: 'Conoce más sobre mí',
    portraitAlt:
      'Hugo Riveros sonriendo con los brazos cruzados y una camiseta negra.',
    portraitCaption: 'Curiosidad para explorar. Criterio para construir.',
  },
  experience: {
    eyebrow: 'La experiencia detrás de las palabras',
    title: 'Experiencia en la práctica.',
    introduction:
      'De las tiendas online a la tecnología de pagos, desarrollando aplicaciones, servicios backend e integraciones entre sistemas.',
    website: 'Visitar el sitio de la empresa',
    companies: [
      {
        ...companies.yuno,
        context: 'Tecnología de pagos',
        roles: [
          {
            ...roles.yuno,
            period: 'Feb 2026 — Oct 2026',
            summary:
              'Desarrollé y mantuve el Conector de Pagos de Yuno para VTEX, construido con Node.js, además de aplicaciones frontend, experiencias de checkout e integraciones de SDKs, en colaboración con Producto, Diseño y Backend.',
            contributions: [
              'Amplié la lógica de procesamiento del conector para órdenes con múltiples vendedores, renovaciones de suscripciones y cobros adicionales, añadiendo endpoints y trabajando con integraciones de APIs y persistencia de datos según las necesidades. Explora las contribuciones más abajo.',
              'Investigué incidentes de producción mediante logs e implementé correcciones en el conector. Optimicé interacciones con APIs, modularicé código y reforcé el manejo de errores, incluyendo un límite de respuesta de 20 segundos para mitigar fallos que contribuyen a activar el modo de contingencia de VTEX.',
              'Me encargué de los despliegues del conector y su monitoreo en producción, validando cambios en desarrollo, staging y producción. Construí herramientas reutilizables de visualización de pagos y documentación, y amplié la documentación pública de los plugins y el conocimiento interno.',
              'Desarrollé la extensión de checkout y los cambios del conector para pagos directos con Apple Pay, Google Pay y Samsung Pay en VTEX, y posteriormente añadí cuotas. Conoce la contribución más abajo.',
              'Desarrollé, mantuve y publiqué el plugin de pagos para WooCommerce, incluyendo la resolución de observaciones de la revisión oficial del WordPress Plugin Directory.',
              'Creé Yunex para compartir conocimiento de la integración, apoyar investigaciones de incidentes y automatizar propuestas de actualización del conocimiento y reportes posteriores al despliegue. Conoce la contribución más abajo.',
              'Utilicé Claude Code a diario para investigar, planificar, implementar, depurar y documentar. Desarrollé skills reutilizables y flujos con agentes, manteniendo la responsabilidad sobre las decisiones técnicas, la revisión de código y la validación.',
            ],
          },
        ],
      },
      {
        ...companies.itglobers,
        context: 'Aplicaciones de e-commerce',
        roles: [
          {
            ...roles.itglobersMid,
            period: 'Abr 2025 — Feb 2026',
            summary:
              'Desarrollé soluciones de e-commerce para clientes de Latinoamérica, Europa y Asia, adaptando interfaces y aplicaciones a sus necesidades de negocio.',
            contributions: [
              'Construí tiendas completas en VTEX, incluyendo páginas de inicio, listados y detalle de producto, checkout, confirmación de orden e inicio de sesión.',
              'Implementé componentes reutilizables y diseños adaptables junto a los equipos de diseño y desarrollo para mantener una experiencia consistente.',
              'Migré las personalizaciones del checkout de Jumbo a módulos mantenibles con React, TypeScript, Sass y una compilación con Webpack compatible con VTEX. Explora la contribución más abajo.',
              'Construí aplicaciones e integraciones con React, TypeScript, VTEX IO y GraphQL, con atención a la mantenibilidad y el rendimiento.',
              'Optimicé la carga de recursos y la respuesta de las interfaces, y corregí desplazamientos de contenido causados por renderizados tardíos.',
              'Participé en la estimación y planificación del desarrollo con equipos multidisciplinarios.',
            ],
          },
          {
            ...roles.itglobersFrontend,
            period: 'Oct 2022 — Abr 2025',
            summary:
              'Contribuí al desarrollo y mantenimiento de tiendas online basadas en VTEX, implementando interfaces y funcionalidades con React.',
            contributions: [
              'Desarrollé y mantuve interfaces de e-commerce, adaptándolas a los requerimientos funcionales y visuales de cada proyecto.',
              'Implementé funcionalidades y mejoras en tiendas VTEX, con atención a la calidad del código, el rendimiento y la consistencia visual.',
              'Colaboré con equipos multidisciplinarios para implementar soluciones y mejorar las experiencias de compra.',
            ],
          },
        ],
      },
    ],
  },
  contributions: {
    eyebrow: 'De un problema a una capacidad compartida',
    title: 'Contribuciones, en detalle.',
    introduction:
      'El contexto, las decisiones y el valor para el equipo detrás de aportes de los que me he hecho responsable.',
    impactLabel: 'Valor para el equipo',
    capabilitiesLabel: 'Lo que hizo posible la solución',
    detailsLabel: 'Contexto, decisiones y validación',
    referencesLabel: 'Material de apoyo',
    imageAction: 'Ampliar imagen',
    imageClose: 'Cerrar imagen',
    externalLinkLabel: 'se abre en una pestaña nueva',
    entries: contributionsEs,
  },
  about: {
    eyebrow: 'La persona detrás del trabajo',
    title: 'La curiosidad es un buen comienzo.',
    paragraphs: [
      'Llegué al desarrollo de software a través de un cambio de carrera, formación técnica y aprendizaje autodidacta. Ese camino sigue definiendo cómo abordo problemas nuevos: hacer preguntas, entender el contexto y seguir aprendiendo.',
      'Tengo cerca de cuatro años de experiencia profesional desarrollando aplicaciones web, servicios backend e integraciones en e-commerce y tecnología de pagos. Disfruto entender cómo funcionan los sistemas, traducir necesidades de negocio en soluciones confiables y hacerme cargo de funcionalidades desde la investigación hasta la entrega.',
      'Mi experiencia anterior en hotelería y atención al cliente aporta otra perspectiva: escuchar con atención, comunicar con claridad y cuidar los detalles que afectan la experiencia de las personas.',
    ],
    aiTitle: 'La IA como parte de la ingeniería.',
    aiParagraphs: [
      'En Yuno utilicé Claude Code a diario para investigar, planificar, implementar, depurar y documentar. Creé Yunex para conectar documentación técnica, código fuente y datos de observabilidad en investigaciones de incidentes y consultas compartidas, con propuestas de actualización del conocimiento y flujos de reportes.',
      'Construyo skills reutilizables y flujos con agentes, y actualmente exploro Codex y la ingeniería de software con agentes. Uso estas herramientas con criterio y mantengo la responsabilidad sobre las decisiones técnicas, la revisión de código, las pruebas y la validación.',
    ],
    skillsTitle: 'Herramientas y capacidades',
    skillGroups: [
      {
        title: 'Backend e integraciones',
        items: [
          'Node.js',
          'APIs REST',
          'GraphQL',
          'Conectores de pagos',
          'Integraciones de SDKs',
        ],
      },
      {
        title: 'Frontend',
        items: [
          'React',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'HTML y CSS',
          'Tailwind CSS',
          'Sass',
        ],
      },
      {
        title: 'Plataformas',
        items: [
          'VTEX IO',
          'FastStore',
          'WooCommerce',
        ],
      },
      {
        title: 'Pruebas y calidad',
        items: [
          'Vitest',
          'Playwright',
          'Jest',
          'Revisión de código',
          'Depuración',
          'Monitoreo en producción',
        ],
      },
      {
        title: 'IA y herramientas de desarrollo',
        items: [
          'Claude Code',
          'Flujos con agentes',
          'Skills reutilizables',
          'Codex · exploración',
          'Git y GitHub',
          'Datadog',
          'Figma',
          'Jira',
        ],
      },
    ],
    educationTitle: 'Formación',
    education: [
      {
        institution: 'Universidad Nacional de Colombia',
        qualification: 'Diplomado en desarrollo de software',
        period: 'Abr — Dic 2022',
      },
      {
        institution: 'Platzi',
        qualification: 'Aprendizaje autónomo en desarrollo de software',
        period: 'Ene 2022 — Actualidad',
      },
      {
        institution: 'Universidad Externado de Colombia',
        qualification: 'Administración Turística y Hotelera',
        period: '2014 — 2020',
      },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'C1 · Certificación IELTS' },
    ],
  },
  contact: {
    eyebrow: 'Un nuevo capítulo',
    title: 'Un buen proyecto empieza conversando.',
    description:
      'Estoy abierto a oportunidades como Fullstack Software Engineer y Frontend Software Engineer, en distintos sectores y con diferentes tecnologías. Si estás formando un equipo, tienes una oportunidad en mente o simplemente quieres intercambiar ideas, me encantará conversar.',
    action: 'Hablemos',
    resume: 'Descargar CV en español',
    socialLabel: 'Encuéntrame en',
  },
  footer: {
    location: 'Desde Bogotá, Colombia',
    note: 'Hecho con cuidado, por Hugo Riveros.',
    backToTop: 'Volver al inicio',
  },
  notFound: {
    title: 'Esta página tomó otro camino.',
    description: 'La página que buscas no está aquí. Volvamos al portafolio.',
    action: 'Volver al portafolio',
  },
}
