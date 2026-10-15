import { companies } from '../career'
import { contributionIds, type ContributionId, type ProfessionalContribution } from './types'

const contributions: Record<ContributionId, ProfessionalContribution> = {
  yunex: {
    name: 'Yunex',
    company: companies.yuno.name,
    headline: 'Conocimiento especializado al servicio del equipo.',
    summary:
      'Diseñé y desarrollé una herramienta asistida por IA para la integración Yuno–VTEX: consultas e investigación de incidentes, actualización automática del conocimiento y monitoreo posterior al despliegue. Ingeniería la utilizaba desde la terminal; otros compañeros accedían a su agente de consultas e investigación desde Slack.',
    ownership: 'Iniciativa propia · Diseño, implementación y evaluación continua',
    impact:
      'El equipo obtuvo acceso directo al conocimiento de la integración, reduciendo la dependencia de un único especialista. Las propuestas diarias de actualización ayudaban a mantenerlo vigente y los reportes compartidos de despliegues daban visibilidad del comportamiento en producción. Mis compañeros reportaron ahorro de tiempo y observé una reducción considerable de las consultas directas.',
    capabilities: [
      {
        id: 'investigation',
        title: 'Consultas e investigación de incidentes',
        description:
          'El conocimiento relevante, código actual, logs de Datadog, documentación y contexto de Jira apoyaban las consultas de producto y las investigaciones de on-call. El agente podía expresar incertidumbre y solicitar información faltante.',
      },
      {
        id: 'knowledge',
        title: 'Mantenimiento automático del conocimiento',
        description:
          'Una Routine diaria de Claude recopilaba cambios del producto e incidentes, proponía actualizaciones de la base de conocimiento en un PR y notificaba en Slack para revisión y aprobación del equipo.',
      },
      {
        id: 'monitoring',
        title: 'Monitoreo posterior al despliegue',
        description:
          'Una skill ejecutada localmente revisaba los logs de producción en Datadog durante una hora tras un despliegue y publicaba evaluaciones cada cinco minutos en Slack para que el equipo revisara los hallazgos y actuara.',
      },
    ],
    diagram: {
      caption: 'Vista conceptual · acceso e investigación',
      stages: [
        {
          id: 'access',
          nodes: [
            { title: 'Terminal del equipo', description: 'Plugin existente de Claude' },
            { title: 'Slack de la empresa', description: 'Agente interno' },
          ],
        },
        {
          id: 'investigation',
          emphasized: true,
          nodes: [{ title: 'Yunex', description: 'Consultas e investigación compartidas' }],
        },
        {
          id: 'sources',
          nodes: [
            { title: 'Base de conocimiento' },
            { title: 'Código actual' },
            { title: 'Logs de Datadog' },
            { title: 'Documentación + Jira' },
          ],
        },
      ],
      description:
        'Ambos canales utilizaban el mismo conocimiento. Su mantenimiento y el monitoreo de despliegues eran flujos adicionales del equipo, con actualizaciones y reportes compartidos en Slack.',
    },
    details: [
      {
        id: 'context',
        title: 'El problema y mi contribución',
        paragraphs: [
          'Las preguntas de TAMs, KAMs, PMs e ingeniería dependían repetidamente de mi contexto del SDK y experiencia en VTEX. Las consultas e investigaciones de on-call competían con las tareas del sprint, e incluso preguntas sencillas debían esperar a que tuviera disponibilidad.',
          'Propuse e implementé Yunex de principio a fin. Consolidé seis meses de tareas, conversaciones, documentación e incidentes, contrasté información contradictoria y organicé el conocimiento en módulos temáticos en Markdown.',
          'Añadí Yunex al plugin existente de Claude de Core Checkout y utilicé la plataforma de agentes del equipo de IA para ofrecer consultas e investigación desde Slack. El flujo de terminal también podía apoyar a ingeniería en la implementación de funcionalidades del sprint.',
        ],
      },
      {
        id: 'decisions',
        title: 'Las decisiones detrás de los flujos',
        paragraphs: [
          'Elegí ofrecer acceso compartido en lugar de un asistente personal para que las consultas llegaran directamente al conocimiento. Ingeniería conservaba un flujo en terminal y los roles no técnicos podían utilizar Slack sin aprender otra interfaz.',
          'Las consultas conceptuales partían de módulos relevantes y comprobaciones puntuales del código. Las investigaciones de incidentes se apoyaban más en el código actual y los logs de Datadog. Seleccionar las fuentes según la consulta buscaba evitar búsquedas y consumo de tokens innecesarios.',
          'La recopilación y propuesta de actualizaciones del conocimiento se ejecutaba diariamente, mientras la aceptación mantenía un paso de revisión humana. El monitoreo se ejecutaba localmente y compartía sus evaluaciones en Slack para dar visibilidad y trazabilidad de la revisión de cada despliegue.',
        ],
      },
      {
        id: 'validation',
        title: 'Evaluación y refinamiento continuo',
        paragraphs: [
          'Comparé las respuestas con consultas e incidentes resueltos, pedí al agente que no utilizara respuestas históricas durante esos ejercicios y añadí escenarios nuevos de evaluación. También supervisé las respuestas iniciales en Slack para comprobar su exactitud, vigencia y posibles alucinaciones.',
          'El agente tenía instrucciones de no inventar información, comunicar confianza alta, media o baja en las hipótesis y solicitar más contexto cuando fuera necesario. Investigué personalmente los casos sin resolver y refiné el flujo según la información faltante o el procedimiento utilizado.',
          'Mis compañeros acudían cada vez más a mí para validar una respuesta existente, lo cual requería menos esfuerzo que abordar la consulta completa. Los roles no técnicos también reportaron ahorro de tiempo al aclarar dudas directamente en Slack.',
        ],
      },
      {
        id: 'incident',
        title: 'En la práctica: investigar cancelaciones de órdenes',
        paragraphs: [
          'Los merchants reportaron cancelaciones de órdenes atribuidas al plugin. Mis compañeros utilizaron Yunex para investigar y revisar logs, identificando fallos intermitentes en las APIs de VTEX que impedían completar algunos pagos.',
          'La investigación ayudó a distinguir un fallo de la plataforma externa de un error originado en el plugin, dando al equipo una explicación más clara del comportamiento reportado.',
        ],
      },
    ],
  },
  'wallet-enhanced-experience': {
    name: 'Experiencia mejorada con wallets',
    company: companies.yuno.name,
    headline: 'Pagos con wallets directamente en el checkout.',
    summary:
      'Diseñé e implementé la extensión de checkout y los cambios del Conector de Pagos que llevaron Apple Pay, Google Pay y Samsung Pay directamente al paso de pago de VTEX. Los compradores podían abrir su wallet sin la pantalla intermedia del Payment App y los merchants elegían cuándo habilitar la experiencia. Posteriormente la amplié con cuotas.',
    ownership: 'Diseño técnico · Aplicación de checkout · Conector de Pagos',
    impact:
      'Los compradores obtuvieron una experiencia más directa. Yuno pudo ofrecer una alternativa de integración que tuvo buena recepción y fue adoptada por algunas tiendas. Las capacidades del conector también permitieron reutilizar la integración en frontends propios y aplicaciones móviles de los merchants.',
    capabilities: [
      {
        id: 'direct-checkout',
        title: 'Acceso directo y adopción opcional',
        description:
          'El botón de la wallet seleccionada aparecía dentro del checkout y reemplazaba la acción genérica de pagar para ese flujo. Cada merchant lo habilitaba mediante configuración; quienes conservaban su configuración seguían usando la experiencia anterior.',
      },
      {
        id: 'installments',
        title: 'Cuotas como siguiente etapa',
        description:
          'Después de entregar los botones directos, implementé los cambios necesarios para admitir pagos en cuotas. El checkout podía mostrar los planes disponibles y los detalles de financiación junto a la acción de pago de la wallet.',
      },
      {
        id: 'connector',
        title: 'Integración de pagos reutilizable',
        description:
          'Conecté la tokenización de las wallets con la autorización de VTEX mediante el Conector de Pagos. Las capacidades expuestas también apoyaron a merchants que implementaban su propio checkout o interfaz móvil.',
      },
    ],
    comparison: {
      caption: 'Recorrido del comprador · comparación conceptual',
      paths: [
        {
          id: 'previous',
          title: 'Experiencia anterior',
          steps: [
            'Seleccionar una wallet',
            'Pulsar el botón genérico de VTEX',
            'Abrir el Payment App intermedio',
            'Pulsar el botón de la wallet',
            'Confirmar dentro de la wallet',
          ],
        },
        {
          id: 'enhanced',
          title: 'Experiencia mejorada',
          emphasized: true,
          steps: [
            'Seleccionar una wallet',
            'Pulsar su botón en el checkout',
            'Confirmar dentro de la wallet',
          ],
        },
      ],
      description:
        'El cambio elimina la pantalla intermedia y una acción adicional para abrir el pago. La confirmación dentro de la wallet se mantiene.',
    },
    gallery: {
      title: 'La experiencia en el checkout',
      description: 'Interfaces implementadas que muestran el acceso directo a la wallet y la selección de cuotas.',
      images: [
        {
          id: 'google-pay',
          src: '/images/contributions/wallet-checkout/google-pay-1.avif',
          width: 684,
          height: 323,
          modalMaxWidth: 718,
          alt: 'Google Pay seleccionado en VTEX, con su botón de pago dentro del área del método. Interfaz original en portugués.',
          caption: 'Google Pay: abrir la wallet desde el paso de pago del checkout.',
        },
        {
          id: 'apple-pay',
          src: '/images/contributions/wallet-checkout/apple-pay-3.avif',
          width: 1364,
          height: 990,
          alt: 'Checkout de Apple Pay con un plan de cuatro cuotas, detalles de financiación y el botón de Apple Pay. Interfaz original en portugués.',
          caption: 'Apple Pay: selección de cuotas y detalles de financiación.',
        },
        {
          id: 'samsung-pay',
          src: '/images/contributions/wallet-checkout/samsung-pay-1.avif',
          width: 693,
          height: 714,
          alt: 'Checkout de Samsung Pay con selector de cuotas, detalles de financiación y su botón de pago. Interfaz original en portugués.',
          caption: 'Samsung Pay: experiencia mejorada con cuotas.',
        },
      ],
    },
    details: [
      {
        id: 'context',
        title: 'El problema y mi contribución',
        paragraphs: [
          'Producto buscaba mejorar una experiencia fragmentada: el comprador pulsaba el botón genérico de VTEX, esperaba al Payment App de Yuno y después pulsaba otro botón para abrir la wallet.',
          'VTEX controlaba el núcleo del checkout y la secuencia de pago. A partir de mi experiencia personalizando checkouts en ITGlobers, identifiqué una alternativa viable mediante el mecanismo de extensión con scripts que ofrecía la plataforma.',
          'Diseñé y desarrollé la aplicación inyectada y los cambios y endpoints del Conector de Pagos. La aplicación detectaba la selección de una wallet, ocultaba el botón genérico de VTEX y mostraba el botón de la wallet dentro del área de ese método de pago.',
        ],
      },
      {
        id: 'payment-flow',
        title: 'Cómo se conecta la wallet con la creación del pago',
        paragraphs: [
          'Al completar la interacción con la wallet se generaba un One Time Token (OTT) mediante el SDK de Yuno. En ese punto aún no se había creado el pago. La aplicación enviaba el token al Conector de Pagos, que lo almacenaba en VBase.',
          'La aplicación iniciaba después la autorización de VTEX. Cuando VTEX llamaba al conector, este recuperaba el OTT, lo utilizaba para crear el pago en Yuno y devolvía el estado resultante. Un rechazo mantenía al comprador en el paso de pago; un resultado exitoso lo llevaba a Order Placed.',
        ],
        diagram: {
          caption: 'Flujo técnico · tokenización antes de crear el pago',
          stages: [
            {
              id: 'tokenize',
              nodes: [{ title: 'Interacción con la wallet → OTT', description: 'El SDK de Yuno genera el token; aún no existe el pago.' }],
            },
            {
              id: 'store',
              nodes: [{ title: 'Aplicación → Conector de Pagos', description: 'El conector almacena el OTT en VBase.' }],
            },
            {
              id: 'authorize',
              nodes: [{ title: 'Autorización de VTEX → Conector de Pagos', description: 'El conector recupera el OTT.' }],
            },
            {
              id: 'create-payment',
              emphasized: true,
              nodes: [{ title: 'Crear el pago en Yuno', description: 'Devolver el estado a VTEX y continuar el checkout.' }],
            },
          ],
          description:
            'La interacción con la wallet ocurre antes en el checkout, mientras la creación del pago sigue formando parte de la respuesta del conector a la autorización de VTEX.',
        },
      },
      {
        id: 'evolution',
        title: 'Compatibilidad y ampliación con cuotas',
        paragraphs: [
          'Cada merchant podía activar la mejora mediante una pequeña configuración del checkout. El flujo anterior con Payment App seguía funcionando para las tiendas que conservaban su configuración; la adopción era opcional.',
          'La primera entrega se centró en los botones directos. En una fase posterior implementé los cambios necesarios para los pagos en cuotas. Ambas etapas forman parte de la misma contribución.',
        ],
      },
      {
        id: 'validation',
        title: 'Validación y adopción por merchants',
        paragraphs: [
          'Probé las diferentes wallets en la cuenta de desarrollo de VTEX de Yuno, cubriendo pagos aprobados, rechazados y escenarios de error. Durante el desarrollo añadí y revisé logs en Datadog para seguir el recorrido de los datos e identificar fallos en los distintos pasos.',
          'Los merchants recibieron positivamente esta alternativa y algunos migraron a ella. La mejora era visible en la propia interacción: el comprador accedía a su wallet directamente desde el paso de pago del checkout.',
        ],
      },
      {
        id: 'headless',
        title: 'Más allá del checkout nativo de VTEX',
        paragraphs: [
          'Los cambios y endpoints del conector también permitieron que los merchants reutilizaran la integración en frontends headless y aplicaciones móviles que se comunicaban con VTEX mediante sus APIs.',
          'Esos merchants controlaban su interfaz e implementación en lugar de inyectar el script del checkout nativo. Mi aporte fue la capacidad de integración que lo hacía posible; sus equipos construyeron sus propias aplicaciones e interfaces.',
        ],
      },
    ],
    references: [
      {
        label: 'Yuno · Experiencia mejorada con wallets',
        href: 'https://docs.y.uno/docs/plugins/vtex/apple-pay-google-pay-enhanced-experience',
      },
      {
        label: 'VTEX · Modelo de integración con Payment App',
        href: 'https://developers.vtex.com/docs/guides/payments-integration-payment-app',
      },
    ],
  },
}

export const contributionsEs = contributionIds.map((id) => ({ id, ...contributions[id] }))
