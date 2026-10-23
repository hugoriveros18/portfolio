import type { PersonalProject, PersonalProjectId } from './types'
import { personalProjectIds } from './types'
import { orderReturnsManager as project } from './shared'

const customer = {
  ...project.images.customer,
  alt: 'Order Returns Manager customer workspace showing sample orders, purchased products and quantities.',
  caption: 'Customer view: fictional orders, purchased quantities and return eligibility.',
}
const administrator = {
  ...project.images.administrator,
  alt: 'Order Returns Manager administrator view with a return request queue, requested item, reason, review actions and history.',
  caption: 'Administrator view: the request, its context, available decisions and attributable history.',
}
const selection = {
  ...project.images.selection,
  alt: 'Customer return form showing products, returnable quantities and a field for the return reason.',
  caption: 'Return selection: available quantities and the reason for the request.',
}
const history = {
  ...project.images.history,
  alt: 'Customer view of a received return, with its item, reason and ordered creation, approval and simulated receipt events.',
  caption: 'Completed return: simulated receipt and a history of customer and administrator actions.',
}
const guide = {
  ...project.images.guide,
  alt: 'Return-state map connecting pending review to approval, receipt, rejection and cancellation.',
  caption: 'Return guide: permitted transitions, action owners and how units are reserved or released.',
}

const projects: Record<PersonalProjectId, PersonalProject> = {
  'order-returns-manager': {
    name: project.name,
    category: 'Fullstack · learning demo',
    summary: 'A fullstack demo to explore specification-driven development with Codex and GitHub Spec Kit. Fictional order returns provide a concrete setting for examining business rules, data consistency and independent visitor environments.',
    focus: 'How can specifications bring more structure to development with AI agents?',
    featuredTechnologies: project.featuredTechnologies,
    context: {
      motivation: [
        'I already use AI agents in my development workflow. After completing Platzi’s Spec-Driven Development course, I decided to put its concepts into practice by building a functional demo from scratch.',
        'My goal was to examine how SDD could complement that workflow: which ambiguities it helps surface, how it organizes decisions and where engineering judgment remains necessary.',
      ],
      problemOrHypothesis: 'An order-return flow offered concrete rules, competing operations and two simulated roles to explore. The experiment focused on the development process and its lessons, rather than creating a commercial returns platform.',
      objectives: [
        'Keep requirements, clarifications and decisions versioned alongside the implementation.',
        'Plan and validate the work progressively through ordered tasks.',
        'Deliver a usable fullstack flow with consistent data and independent visitor demos.',
      ],
    },
    solution: {
      overview: 'The demo manages full and partial returns against fictional e-commerce orders. Ten technology products, sample customers, orders and return histories provide a starting point for exploration. No real payments, refunds or logistics are performed.',
      capabilities: [
        { id: 'customer-flow', title: 'Orders and return requests', description: 'Browse purchases, request full or partial returns, check eligibility and available quantities, cancel pending requests and follow status and history.' },
        { id: 'review-flow', title: 'Administrative review', description: 'Approve or reject requests, confirm simulated receipt and configure the return window for new requests.' },
        { id: 'independent-demos', title: 'Independent visitor environments', description: 'Each browser context receives its own logical environment. Visitors can explore and reset their fictional data without resetting another visitor’s demo.' },
      ],
      technologies: project.technologies,
      engineering: [
        { id: 'domain', title: 'APIs and business rules', behavior: 'Typed HTTP contracts and Zod validation enforce quantities, eligibility and allowed state transitions on the server, beyond the interface controls.' },
        { id: 'data', title: 'Relational modeling and consistency', behavior: 'Prisma and PostgreSQL constraints associate records with the same environment and generation. State, requested units, history and operation receipts commit together.' },
        { id: 'concurrency', title: 'Concurrency and automated validation', behavior: 'Tests exercise competing requests for the last available unit, conflicting decisions, retries and resets. This connects the transaction strategy to explicit invariants.' },
        { id: 'interface', title: 'Responsive interaction design', behavior: 'Customer and administrator views share a responsive workspace, keyboard-accessible dialogs, contextual feedback and light/dark appearance.' },
      ],
      participation: 'I developed this personal learning project with Codex and GitHub Spec Kit, framing the objective and evaluating the resulting engineering choices.',
      aiAssistance: {
        tools: project.aiTools,
        use: 'Codex assisted development through a Spec Kit workflow: specification, clarification, planning, task decomposition, implementation and validation.',
        humanReview: 'I retained responsibility for defining constraints, evaluating alternatives, reviewing the work and validating behavior. AI assistance did not replace that judgment.',
      },
    },
    decisions: [
      {
        id: 'visitor-isolation',
        title: 'Independent demos without real accounts',
        constraint: 'Several visitors needed to use and reset the public demo without interfering with each other, while keeping real authentication outside its scope.',
        choice: 'The server resolves an anonymous capability cookie and scopes PostgreSQL data by environment and generation. A short environment-row lock serializes related operations. Reset recreates the fictional data atomically and advances the generation, fencing writes from older tabs.',
        alternatives: ['Per-item locking could allow more parallel work within a demo, but requires more lock-order discipline.', 'Serializable transactions with bounded retries were another option; one environment lock offered a simpler consistency model for this small demo.'],
        tradeoffs: ['Operations within one environment wait on the same lock; this favors consistency and simplicity over within-demo throughput.', 'Tabs in one browser context share an environment. Losing its cookies loses continuity; cross-device recovery is not provided.', 'The cookie identifies a demo, not a verified person. Customer and administrator views are simulated roles.'],
      },
    ],
    results: {
      observed: ['A functional demo supports the complete fictional return lifecycle, from request through administrative review and simulated receipt.', 'Specifications, research, plans, tasks and validation records remain in the repository, making the reasoning available beyond a conversation history.'],
      challenges: ['Keeping quantity availability, state and history consistent across retries, competing actions and resets required explicit transaction and generation rules.', 'Validation records needed to distinguish the initial local baseline, later interface checks and public release evidence as the project evolved.'],
      lessons: [
        'Specifications and decisions can live alongside the project instead of depending exclusively on an AI conversation history.',
        'Clarification helps identify ambiguities, constraints and decisions worth resolving before implementation.',
        'An ordered task plan supports progressive implementation and validation instead of attempting the entire solution in one pass.',
        'Defining the need and its constraints leaves room to evaluate technical alternatives without prescribing every implementation detail.',
        'Engineering judgment remains essential to frame problems, evaluate solutions and validate results. These are lessons from this experience, not evidence that SDD is universally superior.',
      ],
      validation: [
        { id: 'local-baseline', scope: 'local', description: 'The initial local record reports 99 passing automated cases: 23 unit, 27 PostgreSQL integration, 19 contract and 30 browser tests.', source: project.validation, checkedAt: '2026-10-21', limitation: 'This describes that local run; it does not establish production performance or reliability.' },
        { id: 'interface-validation', scope: 'local', description: 'Later interface work was checked on desktop and mobile, including keyboard interaction, responsive layouts and automated accessibility checks.', source: project.validation, checkedAt: '2026-10-22', limitation: 'These interface checks have a different scope from the initial local test baseline.' },
        { id: 'public-smoke', scope: 'public', description: 'A documented public release check completed the return lifecycle through simulated receipt and verified that another browser context could not access its request.', source: project.validation, checkedAt: '2026-10-22', limitation: 'Preview environment isolation, scheduled cleanup and remaining release checks are still pending in the source validation record.' },
      ],
    },
    resources: {
      repository: project.repository,
      demo: project.demo,
      cover: customer,
      video: { ...project.video, caption: 'Follow a return from the customer’s request through administrative review and simulated receipt.' },
      gallery: { title: 'The interface in practice', images: [selection, administrator, history, guide] },
      documentation: [
        { label: 'Specification and acceptance scenarios', href: project.specification },
        { label: 'Technical decisions and alternatives', href: project.research },
        { label: 'SDD workflow used in the project', href: project.workflow },
        { label: 'Validation evidence and remaining acceptance', href: project.validation },
      ],
    },
  },
}

export const projectsEn = personalProjectIds.map((id) => ({ id, ...projects[id] }))
