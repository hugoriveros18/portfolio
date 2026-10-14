import type { PortfolioContent } from './types'
import { companies, roles } from './career'
import { contributionsEs } from './contributions/es'

export const es: PortfolioContent = {
  metadata: {
    title: 'Hugo Riveros | Ingeniero de software frontend',
    description:
      'Ingeniero de software frontend en Bogotá, Colombia. Aplicaciones web, integraciones y experiencias de usuario bien pensadas. Abierto a nuevas oportunidades.',
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
    role: 'Ingeniero de software frontend',
    headline: ['Interfaces con propósito.', 'Conexiones confiables.'],
    introduction:
      'Soy Hugo Riveros. Desarrollo aplicaciones web y conecto sistemas para crear experiencias claras y confiables.',
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
      'De las tiendas online a la tecnología de pagos, construyendo interfaces y las integraciones que las hacen funcionar.',
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
              'Desarrollé y mantuve SDKs, experiencias de checkout e integraciones de pagos, trabajando en las interfaces y la lógica de integración junto a equipos de Producto, Diseño y Backend.',
            contributions: [
              'Amplié el plugin de VTEX para soportar órdenes con múltiples vendedores, pagos recurrentes y cobros adicionales por cambios en el total después del checkout.',
              'Desarrollé una experiencia de Apple Pay y Google Pay que abre el flujo nativo de la wallet directamente desde el checkout de VTEX, eliminando una pantalla intermedia.',
              'Reforcé el manejo de errores del conector e incorporé un límite de respuesta de 20 segundos para mitigar fallos que contribuyen a activar el modo de contingencia de VTEX.',
              'Desarrollé, mantuve y publiqué el plugin de pagos para WooCommerce, incluyendo la resolución de observaciones de la revisión oficial del WordPress Plugin Directory.',
              'Creé Yunex para compartir conocimiento de la integración, apoyar investigaciones de incidentes y automatizar propuestas de actualización del conocimiento y reportes posteriores al despliegue. Conoce la contribución más abajo.',
              'Utilicé Claude Code y equipos de agentes para investigar, planificar, implementar y documentar.',
              'Construí herramientas reutilizables para visualizar flujos de pago y generar documentación, amplié la documentación pública de los plugins y el conocimiento interno, y validé cambios con pruebas, revisión de código y verificaciones en staging y producción.',
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
    moreLabel: 'Más contribuciones',
    referencesLabel: 'Material de apoyo',
    entries: contributionsEs,
  },
  about: {
    eyebrow: 'La persona detrás del trabajo',
    title: 'La curiosidad es un buen comienzo.',
    paragraphs: [
      'Llegué al desarrollo de software a través de un cambio de carrera, formación técnica y aprendizaje autodidacta. Ese camino sigue definiendo cómo abordo problemas nuevos: hacer preguntas, entender el contexto y seguir aprendiendo.',
      'Desde 2022 he trabajado en productos de e-commerce y tecnología de pagos. Disfruto conectar los detalles de una interfaz con la lógica de negocio y los sistemas que la soportan, y acompañar una solución desde la investigación hasta la entrega.',
      'Mi experiencia anterior en hotelería y atención al cliente aporta otra perspectiva: escuchar con atención, comunicar con claridad y cuidar los detalles que afectan la experiencia de las personas.',
    ],
    aiTitle: 'La IA como parte de la ingeniería.',
    aiParagraphs: [
      'Utilizo IA para investigar, planificar, implementar y documentar. Mi trabajo con Claude Code y equipos de agentes en Yuno incluyó Yunex, un asistente para consultas técnicas e investigación de incidentes.',
      'Construyo skills y flujos reutilizables, y actualmente exploro Codex. Mantengo la responsabilidad sobre las decisiones técnicas, la revisión de código, las pruebas y la validación.',
    ],
    skillsTitle: 'Herramientas y capacidades',
    skillGroups: [
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
        title: 'Plataformas e integraciones',
        items: [
          'Node.js',
          'VTEX IO',
          'FastStore',
          'GraphQL',
          'SDKs',
          'Conectores de pagos',
        ],
      },
      {
        title: 'Calidad y colaboración',
        items: [
          'Vitest',
          'Playwright',
          'Jest',
          'Git y GitHub',
          'Revisión de código',
          'Datadog',
          'Figma',
          'Jira',
        ],
      },
      {
        title: 'Ingeniería asistida por IA',
        items: [
          'Claude Code',
          'Skills reutilizables',
          'Flujos con agentes',
          'Codex · exploración',
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
      'Estoy buscando activamente mi próximo rol como Frontend Software Engineer, en distintos sectores. Si estás formando un equipo, tienes una oportunidad en mente o simplemente quieres intercambiar ideas, me encantará conversar.',
    action: 'Hablemos',
    resume: 'Descargar CV en español',
    emailLabel: 'También puedes escribirme directamente',
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
