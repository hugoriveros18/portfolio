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
}

export const contributionsEs = contributionIds.map((id) => ({ id, ...contributions[id] }))
