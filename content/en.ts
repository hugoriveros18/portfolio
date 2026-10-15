import type { PortfolioContent } from './types'
import { companies, roles } from './career'
import { contributionsEn } from './contributions/en'

export const en: PortfolioContent = {
  metadata: {
    title: 'Hugo Riveros | Frontend Software Engineer',
    description:
      'Frontend Software Engineer based in Bogotá, Colombia. Web applications, system integrations and thoughtful user experiences. Open to new opportunities.',
  },
  navigation: {
    label: 'Main navigation',
    experience: 'Experience',
    contributions: 'Contributions',
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
    role: 'Frontend Software Engineer',
    headline: ['Thoughtful interfaces.', 'Reliable connections.'],
    introduction:
      "I'm Hugo Riveros. I build web applications and connect systems to create clear, reliable experiences.",
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
      'From online storefronts to payment technology, building interfaces and the integrations that make them work.',
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
              'Developed and maintained SDKs, checkout experiences and payment integrations, working across user interfaces and integration logic with Product, Design and Backend teams.',
            contributions: [
              'Extended the VTEX plugin to support multi-seller orders, recurring payments and additional charges when order totals change after checkout.',
              'Built the checkout extension and connector changes for direct Apple Pay, Google Pay and Samsung Pay payments on VTEX, later adding installment support. Explore the contribution below.',
              'Strengthened connector error handling and introduced a 20-second response deadline to mitigate failures that contribute to VTEX Contingency Mode activation.',
              'Developed, maintained and published the WooCommerce payment plugin, including addressing feedback from the WordPress Plugin Directory review.',
              'Created Yunex to share integration knowledge, support incident investigations and automate knowledge-update proposals and post-deployment reports. Explore the contribution below.',
              'Used Claude Code and agent teams for research, planning, implementation and documentation.',
              'Built reusable tools for payment-flow visualization and documentation, expanded public plugin documentation and internal knowledge, and validated changes through testing, code review, and staging and production checks.',
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
    eyebrow: 'From a problem to a shared capability',
    title: 'Contributions, in depth.',
    introduction:
      'The context, decisions and team value behind work I have taken ownership of.',
    impactLabel: 'Value for the team',
    capabilitiesLabel: 'What the solution made possible',
    detailsLabel: 'Context, decisions and validation',
    moreLabel: 'More contributions',
    referencesLabel: 'Supporting material',
    imageAction: 'Enlarge image',
    imageClose: 'Close image',
    externalLinkLabel: 'opens in a new tab',
    entries: contributionsEn,
  },
  about: {
    eyebrow: 'The person behind the work',
    title: 'Curiosity is a good starting point.',
    paragraphs: [
      'I moved into software development through a career change, technical training and self-directed learning. That path continues to shape how I approach unfamiliar problems: ask questions, understand the context and keep learning.',
      'Since 2022, I’ve worked on e-commerce products and payment technology. I enjoy connecting the details of an interface with the business logic and systems behind it, and following a solution from investigation through delivery.',
      'My earlier experience in hospitality and customer service brings another perspective: listen carefully, communicate clearly and pay attention to the details that affect people’s experience.',
    ],
    aiTitle: 'AI as part of the engineering process.',
    aiParagraphs: [
      'I use AI for research, planning, implementation and documentation. My work with Claude Code and agent teams at Yuno included Yunex, an assistant for technical questions and incident investigations.',
      'I build reusable skills and workflows, and I’m currently exploring Codex. I retain ownership of technical decisions, code review, testing and validation.',
    ],
    skillsTitle: 'Tools & capabilities',
    skillGroups: [
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
        title: 'Platforms & integrations',
        items: [
          'Node.js',
          'VTEX IO',
          'FastStore',
          'GraphQL',
          'SDKs',
          'Payment connectors',
        ],
      },
      {
        title: 'Quality & collaboration',
        items: [
          'Vitest',
          'Playwright',
          'Jest',
          'Git & GitHub',
          'Code review',
          'Datadog',
          'Figma',
          'Jira',
        ],
      },
      {
        title: 'AI-assisted engineering',
        items: [
          'Claude Code',
          'Reusable skills',
          'Agent workflows',
          'Codex · exploring',
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
      'I’m actively looking for my next Frontend Software Engineer role, across industries. If you’re building a team, have an opportunity in mind or simply want to exchange ideas, I’d be glad to hear from you.',
    action: 'Get in touch',
    resume: 'Download CV in English',
    emailLabel: 'Or write to me directly',
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
