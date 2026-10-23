import type { PersonalProject, PersonalProjectId } from './types'
import { personalProjectIds } from './types'
import { orderReturnsManager as project } from './shared'

const customer = {
  ...project.images.customer,
  alt: 'Vista de cliente de Order Returns Manager con pedidos de ejemplo, productos comprados y cantidades.',
  caption: 'Vista de cliente: pedidos ficticios, cantidades compradas y elegibilidad de devolución.',
}
const administrator = {
  ...project.images.administrator,
  alt: 'Vista administrativa de Order Returns Manager con cola de devoluciones, producto solicitado, motivo, acciones de revisión e historial.',
  caption: 'Vista administrativa: la solicitud, su contexto, las decisiones disponibles y el historial con sus responsables.',
}
const selection = {
  ...project.images.selection,
  alt: 'Formulario de devolución del cliente con productos, cantidades disponibles y un campo para el motivo.',
  caption: 'Selección de devolución: cantidades disponibles y motivo de la solicitud.',
}
const history = {
  ...project.images.history,
  alt: 'Vista de una devolución recibida con su producto, motivo y eventos ordenados de creación, aprobación y recepción simulada.',
  caption: 'Devolución completada: recepción simulada e historial de acciones del cliente y administrador.',
}
const guide = {
  ...project.images.guide,
  alt: 'Mapa de estados que conecta la revisión pendiente con aprobación, recepción, rechazo y cancelación.',
  caption: 'Guía de devoluciones: transiciones permitidas, responsables y reserva o liberación de unidades.',
}

const projects: Record<PersonalProjectId, PersonalProject> = {
  'order-returns-manager': {
    name: project.name,
    category: 'Fullstack · demo de aprendizaje',
    summary: 'Una demo fullstack para explorar el desarrollo basado en especificaciones con Codex y GitHub Spec Kit. Las devoluciones de pedidos ficticios permiten examinar reglas de negocio, consistencia de datos y entornos independientes por visitante.',
    focus: '¿Cómo pueden las especificaciones aportar estructura al desarrollo con agentes de IA?',
    featuredTechnologies: project.featuredTechnologies,
    context: {
      motivation: [
        'Ya utilizo agentes de IA en mi flujo de desarrollo. Después de completar el curso de Spec-Driven Development de Platzi, decidí aplicar sus conceptos construyendo una demo funcional desde cero.',
        'Mi objetivo era estudiar cómo SDD podía complementar ese flujo: qué ambigüedades ayuda a identificar, cómo organiza las decisiones y dónde sigue siendo necesario el criterio de ingeniería.',
      ],
      problemOrHypothesis: 'Un flujo de devoluciones ofrecía reglas concretas, operaciones concurrentes y dos roles simulados para explorar. El experimento se centró en el proceso de desarrollo y sus aprendizajes, sin buscar crear una plataforma comercial de devoluciones.',
      objectives: [
        'Mantener requisitos, aclaraciones y decisiones versionados junto a la implementación.',
        'Planificar y validar el desarrollo progresivamente mediante tareas ordenadas.',
        'Entregar un flujo fullstack utilizable, con información consistente y demos independientes por visitante.',
      ],
    },
    solution: {
      overview: 'La demo gestiona devoluciones completas y parciales sobre pedidos ficticios de e-commerce. Diez productos tecnológicos, clientes, pedidos e historiales de ejemplo sirven como punto de partida. No se realizan pagos, reembolsos ni operaciones logísticas reales.',
      capabilities: [
        { id: 'customer-flow', title: 'Pedidos y solicitudes de devolución', description: 'Consultar compras, solicitar devoluciones completas o parciales, validar elegibilidad y cantidades disponibles, cancelar solicitudes pendientes y seguir estados e historial.' },
        { id: 'review-flow', title: 'Revisión administrativa', description: 'Aprobar o rechazar solicitudes, confirmar una recepción ficticia y configurar el plazo de devolución para nuevas solicitudes.' },
        { id: 'independent-demos', title: 'Entornos independientes por visitante', description: 'Cada contexto de navegador recibe su propio entorno lógico. Los visitantes pueden explorar y reiniciar sus datos ficticios sin reiniciar la demo de otra persona.' },
      ],
      technologies: project.technologies,
      engineering: [
        { id: 'domain', title: 'APIs y reglas de negocio', behavior: 'Los contratos HTTP tipados y la validación con Zod comprueban cantidades, elegibilidad y transiciones permitidas en el servidor, más allá de los controles de interfaz.' },
        { id: 'data', title: 'Modelado relacional y consistencia', behavior: 'Prisma y las restricciones de PostgreSQL asocian los registros al mismo entorno y generación. Estado, unidades solicitadas, historial y registros de operación se confirman juntos.' },
        { id: 'concurrency', title: 'Concurrencia y validación automatizada', behavior: 'Las pruebas ejercitan solicitudes que compiten por la última unidad disponible, decisiones en conflicto, reintentos y reinicios. Esto relaciona la estrategia transaccional con invariantes explícitas.' },
        { id: 'interface', title: 'Diseño de interacciones responsive', behavior: 'Las vistas de cliente y administrador comparten un espacio adaptable, diálogos accesibles con teclado, mensajes contextuales y apariencia clara y oscura.' },
      ],
      participation: 'Desarrollé este proyecto personal de aprendizaje con Codex y GitHub Spec Kit, definiendo el objetivo y evaluando las decisiones de ingeniería resultantes.',
      aiAssistance: {
        tools: project.aiTools,
        use: 'Codex apoyó el desarrollo mediante un flujo con Spec Kit: especificación, aclaración, planificación, descomposición de tareas, implementación y validación.',
        humanReview: 'Mantuve la responsabilidad de definir restricciones, evaluar alternativas, revisar el trabajo y validar el comportamiento. La asistencia de IA no sustituyó ese criterio.',
      },
    },
    decisions: [
      {
        id: 'visitor-isolation',
        title: 'Demos independientes sin cuentas reales',
        constraint: 'Varios visitantes debían poder utilizar y reiniciar la demo pública sin interferir entre sí, manteniendo la autenticación real fuera del alcance.',
        choice: 'El servidor resuelve una cookie de acceso anónimo y delimita los datos de PostgreSQL por entorno y generación. Un bloqueo breve por entorno serializa las operaciones relacionadas. El reinicio recrea los datos ficticios de forma atómica y avanza la generación, rechazando escrituras de pestañas anteriores.',
        alternatives: ['El bloqueo por producto permitiría más trabajo paralelo dentro de una demo, pero requiere mayor disciplina en el orden de adquisición de bloqueos.', 'Las transacciones serializables con reintentos acotados eran otra opción; un bloqueo por entorno ofrecía un modelo de consistencia más sencillo para esta demo pequeña.'],
        tradeoffs: ['Las operaciones de un entorno esperan el mismo bloqueo; se priorizan consistencia y sencillez frente a mayor concurrencia dentro de la demo.', 'Las pestañas de un mismo contexto de navegador comparten entorno. Perder sus cookies rompe la continuidad; no hay recuperación entre dispositivos.', 'La cookie identifica una demo, no una persona verificada. Las vistas de cliente y administrador son roles simulados.'],
      },
    ],
    results: {
      observed: ['Una demo funcional permite recorrer el ciclo ficticio completo, desde la solicitud hasta la revisión administrativa y la recepción simulada.', 'Especificaciones, investigación, planes, tareas y registros de validación permanecen en el repositorio, conservando el razonamiento más allá del historial de una conversación.'],
      challenges: ['Mantener cantidades disponibles, estado e historial consistentes ante reintentos, acciones concurrentes y reinicios exigió reglas explícitas de transacción y generación.', 'Los registros de validación debían distinguir la base local inicial, las comprobaciones posteriores de interfaz y la evidencia del despliegue público conforme evolucionaba el proyecto.'],
      lessons: [
        'Las especificaciones y decisiones pueden mantenerse junto al proyecto, sin depender exclusivamente del historial de una conversación con la IA.',
        'La aclaración ayuda a identificar ambigüedades, restricciones y decisiones que conviene resolver antes de implementar.',
        'Un plan de tareas ordenadas permite implementar y validar progresivamente, sin intentar resolver todo en una sola pasada.',
        'Definir la necesidad y sus restricciones deja espacio para evaluar alternativas técnicas sin imponer cada detalle de implementación.',
        'El criterio de ingeniería sigue siendo esencial para formular problemas, evaluar soluciones y validar resultados. Son aprendizajes de esta experiencia, sin afirmar que SDD sea universalmente superior.',
      ],
      validation: [
        { id: 'local-baseline', scope: 'local', description: 'El registro local inicial documenta 99 casos automatizados aprobados: 23 unitarios, 27 de integración con PostgreSQL, 19 de contratos y 30 de navegador.', source: project.validation, checkedAt: '2026-10-21', limitation: 'Describe esa ejecución local; no demuestra rendimiento ni fiabilidad en producción.' },
        { id: 'interface-validation', scope: 'local', description: 'Los cambios posteriores de interfaz se comprobaron en desktop y mobile, incluyendo interacción con teclado, diseño responsive y comprobaciones automatizadas de accesibilidad.', source: project.validation, checkedAt: '2026-10-22', limitation: 'Estas comprobaciones de interfaz tienen un alcance distinto al de la base local inicial.' },
        { id: 'public-smoke', scope: 'public', description: 'Una comprobación pública documentada completó el ciclo hasta la recepción simulada y verificó que otro contexto de navegador no pudiera acceder a su solicitud.', source: project.validation, checkedAt: '2026-10-22', limitation: 'El aislamiento de Preview, la limpieza programada y otras comprobaciones del despliegue siguen pendientes en el registro de validación original.' },
      ],
    },
    resources: {
      repository: project.repository,
      demo: project.demo,
      cover: customer,
      video: { ...project.video, caption: 'Recorre una devolución desde la solicitud del cliente hasta la revisión administrativa y la recepción simulada.' },
      gallery: { title: 'La interfaz en práctica', images: [selection, administrator, history, guide] },
      documentation: [
        { label: 'Especificación y escenarios de aceptación', href: project.specification },
        { label: 'Decisiones técnicas y alternativas', href: project.research },
        { label: 'Flujo SDD utilizado en el proyecto', href: project.workflow },
        { label: 'Evidencias de validación y aceptación pendiente', href: project.validation },
      ],
    },
  },
}

export const projectsEs = personalProjectIds.map((id) => ({ id, ...projects[id] }))
