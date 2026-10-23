import type { PortfolioContent } from './types'
import { companies, roles } from './career'
import { contributionsEn } from './contributions/en'
import { projectsEn } from './projects/en'

export const en: PortfolioContent = {
  metadata: {
    title: 'Hugo Riveros | Fullstack Software Engineer',
    description:
      'Fullstack Software Engineer based in Bogotá, Colombia. Web applications, backend services and system integrations. Open to Fullstack and Frontend opportunities.',
  },
  navigation: {
    label: 'Main navigation',
    experience: 'Experience',
    contributions: 'Contributions',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    resume: 'Download CV',
    skip: 'Skip to content',
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation',
    switchLanguage: 'Leer en español',
    lightTheme: 'Switch to light mode',
    darkTheme: 'Switch to dark mode',
  },
  hero: {
    location: 'Bogotá, Colombia',
    availability: 'Open to new opportunities',
    role: 'Fullstack Software Engineer',
    headline: ['Thoughtful interfaces.', 'Reliable connections.'],
    introduction:
      "I'm Hugo Riveros. I build web applications, backend services and integrations to create clear, reliable experiences.",
    description:
      'I turn product needs into thoughtful solutions, with a focus on usability, performance and maintainability.',
    contact: "Let's talk",
    about: 'Get to know me',
    portraitAlt:
      'Hugo Riveros smiling with his arms crossed, wearing a black shirt.',
    portraitCaption: 'A curious mind. A considered approach.',
  },
  experience: {
    eyebrow: 'The work behind the words',
    title: 'Experience, in practice.',
    introduction:
      'From online storefronts to payment technology, building applications, backend services and the integrations that connect them.',
    website: 'Visit company website',
    companies: [
      {
        ...companies.yuno,
        context: 'Payment technology',
        roles: [
          {
            ...roles.yuno,
            period: 'Feb 2026 — Oct 2026',
            summary:
              'Developed and maintained Yuno’s Node.js-based VTEX Payment Connector, alongside frontend applications, checkout experiences and SDK integrations, collaborating with Product, Design and Backend teams.',
            contributions: [
              'Extended the connector’s payment-processing logic for multi-seller orders, subscription renewals and additional charges, adding API endpoints and working with integrations and data persistence as needed. Explore the contributions below.',
              'Investigated production incidents through logs and implemented connector fixes. Optimized API interactions, modularized code and strengthened error handling, including a 20-second response deadline to mitigate failures that contribute to VTEX Contingency Mode activation.',
              'Handled connector deployments and production monitoring, validating changes across development, staging and production. Built reusable payment-flow visualization and documentation tools, and expanded public plugin documentation and internal knowledge.',
              'Built the checkout extension and connector changes for direct Apple Pay, Google Pay and Samsung Pay payments on VTEX, later adding installment support. Explore the contribution below.',
              'Developed, maintained and published the WooCommerce payment plugin, including addressing feedback from the WordPress Plugin Directory review.',
              'Created Yunex to share integration knowledge, support incident investigations and automate knowledge-update proposals and post-deployment reports. Explore the contribution below.',
              'Used Claude Code daily for research, planning, implementation, debugging and documentation, developing reusable skills and agent workflows while retaining responsibility for technical decisions, code review and validation.',
            ],
          },
        ],
      },
      {
        ...companies.itglobers,
        context: 'E-commerce applications',
        roles: [
          {
            ...roles.itglobersMid,
            period: 'Apr 2025 — Feb 2026',
            summary:
              'Built e-commerce solutions for clients across Latin America, Europe and Asia, adapting interfaces and applications to business needs.',
            contributions: [
              'Built complete VTEX storefronts, including home, product listing, product detail, checkout, order confirmation and login pages.',
              'Implemented reusable components and responsive layouts with design and development teams to maintain a consistent user experience.',
              'Migrated Jumbo’s checkout customizations into maintainable modules with React, TypeScript, Sass and a VTEX-compatible Webpack build. Explore the contribution below.',
              'Developed custom applications and integrations with React, TypeScript, VTEX IO and GraphQL, focusing on maintainability and performance.',
              'Optimized resource loading and interface responsiveness, and resolved layout shifts caused by late rendering.',
              'Contributed to development estimation and planning with multidisciplinary teams.',
            ],
          },
          {
            ...roles.itglobersFrontend,
            period: 'Oct 2022 — Apr 2025',
            summary:
              'Contributed to the development and maintenance of VTEX-based online stores, implementing interfaces and functionality with React.',
            contributions: [
              'Developed and maintained e-commerce interfaces, adapting them to each project’s functional and visual requirements.',
              'Implemented features and improvements in VTEX storefronts, with attention to code quality, performance and visual consistency.',
              'Collaborated with multidisciplinary teams to implement solutions and improve shopping experiences.',
            ],
          },
        ],
      },
    ],
  },
  contributions: {
    showMoreLabel: 'View all contributions',
    showLessLabel: 'Show fewer contributions',
    eyebrow: 'From a problem to a shared capability',
    title: 'Contributions, in depth.',
    introduction:
      'The context, decisions and team value behind work I have taken ownership of.',
    impactLabel: 'Value for the team',
    capabilitiesLabel: 'What the solution made possible',
    detailsLabel: 'Context, decisions and validation',
    referencesLabel: 'Supporting material',
    imageAction: 'Enlarge image',
    imageClose: 'Close image',
    externalLinkLabel: 'opens in a new tab',
    entries: contributionsEn,
  },
  projects: {
    eyebrow: 'Personal projects',
    title: 'Build. Question. Learn.',
    introduction: 'Independent projects that put engineering ideas into practice, with room to examine the decisions and lessons behind them.',
    focusLabel: 'The engineering question',
    viewProjectLabel: 'View project',
    backLabel: 'Back to projects',
    indexLabel: 'In this project',
    videoLabel: 'The demo in action',
    showMoreLabel: 'View all projects',
    showLessLabel: 'Show fewer projects',
    contextLabel: 'Why build it?',
    objectivesLabel: 'What I set out to explore',
    solutionLabel: 'What I built',
    engineeringLabel: 'Engineering in practice',
    decisionsLabel: 'Decisions and tradeoffs',
    alternativesLabel: 'Alternatives considered',
    tradeoffsLabel: 'Tradeoffs',
    participationLabel: 'My participation and AI assistance',
    resultsLabel: 'Results and learning',
    challengesLabel: 'Challenges encountered',
    lessonsLabel: 'What I learned',
    validationLabel: 'Validation and its scope',
    resourcesLabel: 'Technical documentation',
    repositoryLabel: 'GitHub',
    demoLabel: 'Explore demo',
    transcriptLabel: 'Read transcript',
    imageAction: 'Enlarge image',
    imageClose: 'Close image',
    externalLinkLabel: 'opens in a new tab',
    entries: projectsEn,
  },
  about: {
    eyebrow: 'The person behind the work',
    title: 'Curiosity is a good starting point.',
    paragraphs: [
      'I moved into software development through a career change, technical training and self-directed learning. That path continues to shape how I approach unfamiliar problems: ask questions, understand the context and keep learning.',
      'I have around four years of professional experience building web applications, backend services and system integrations in e-commerce and payment technology. I enjoy understanding how systems work, translating business requirements into reliable solutions and taking features from investigation through delivery.',
      'My earlier experience in hospitality and customer service brings another perspective: listen carefully, communicate clearly and pay attention to the details that affect people’s experience.',
    ],
    aiTitle: 'AI as part of the engineering process.',
    aiParagraphs: [
      'At Yuno, I used Claude Code daily for research, planning, implementation, debugging and documentation. I created Yunex to connect technical documentation, source code and observability data for incident investigations and knowledge sharing, with knowledge-update proposals and reporting workflows.',
      'I build reusable skills and agent workflows, and I’m currently exploring Codex and agentic software engineering. I use these tools with engineering judgment and retain responsibility for technical decisions, code review, testing and validation.',
    ],
    skillsTitle: 'Tools & capabilities',
    skillGroups: [
      {
        title: 'Backend & integrations',
        items: [
          'Node.js',
          'REST APIs',
          'GraphQL',
          'Payment connectors',
          'SDK integrations',
        ],
      },
      {
        title: 'Frontend',
        items: [
          'React',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'HTML & CSS',
          'Tailwind CSS',
          'Sass',
        ],
      },
      {
        title: 'Platforms',
        items: [
          'VTEX IO',
          'FastStore',
          'WooCommerce',
        ],
      },
      {
        title: 'Testing & quality',
        items: [
          'Vitest',
          'Playwright',
          'Jest',
          'Code review',
          'Debugging',
          'Production monitoring',
        ],
      },
      {
        title: 'AI & development tools',
        items: [
          'Claude Code',
          'Agent workflows',
          'Reusable skills',
          'Codex · exploring',
          'Git & GitHub',
          'Datadog',
          'Figma',
          'Jira',
        ],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        institution: 'Universidad Nacional de Colombia',
        qualification: 'Software Development Diploma',
        period: 'Apr — Dec 2022',
      },
      {
        institution: 'Platzi',
        qualification: 'Self-directed learning in software development',
        period: 'Jan 2022 — Present',
      },
      {
        institution: 'Universidad Externado de Colombia',
        qualification: 'Tourism and Hospitality Management',
        period: '2014 — 2020',
      },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'C1 · IELTS certification' },
    ],
  },
  contact: {
    eyebrow: 'A new chapter',
    title: 'Good work starts with a conversation.',
    description:
      'I’m open to Fullstack Software Engineer and Frontend Software Engineer opportunities across industries and technology stacks. If you’re building a team, have an opportunity in mind or simply want to exchange ideas, I’d be glad to hear from you.',
    action: 'Get in touch',
    resume: 'Download CV in English',
    socialLabel: 'Find me online',
  },
  footer: {
    location: 'Based in Bogotá, Colombia',
    note: 'Built with care, by Hugo Riveros.',
    backToTop: 'Back to top',
  },
  notFound: {
    title: 'This page took a different path.',
    description:
      'The page you’re looking for isn’t here. Let’s get you back to the portfolio.',
    action: 'Back to the portfolio',
  },
}
