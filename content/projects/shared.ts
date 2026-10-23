const repository = 'https://github.com/hugoriveros18/order-return-manager'
const source = `${repository}/blob/d6e851cdf7bd05cf9325c05cbdef25d79c58eb8c`
const feature = `${source}/specs/001-manage-order-returns`

export const orderReturnsManager = {
  name: 'Order Returns Manager',
  repository,
  demo: 'https://order-return-manager.vercel.app/',
  specification: `${feature}/spec.md`,
  research: `${feature}/research.md`,
  validation: `${feature}/validation.md`,
  workflow: `${source}/docs/spec-driven-development.md`,
  featuredTechnologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'GitHub Spec Kit'],
  technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Zod', 'Vitest', 'Playwright', 'Vercel'],
  video: { src: '/videos/projects/order-returns-manager/demo.mp4', poster: '/images/projects/order-returns-manager/video-poster.png' },
  aiTools: ['Codex', 'GitHub Spec Kit'],
  images: {
    customer: { id: 'customer', src: '/images/projects/order-returns-manager/customer.png', width: 1440, height: 1001 },
    administrator: { id: 'administrator', src: '/images/projects/order-returns-manager/administrator.png', width: 1440, height: 1263 },
    selection: { id: 'return-selection', src: '/images/projects/order-returns-manager/return-selection.png', width: 1440, height: 1240 },
    history: { id: 'return-history', src: '/images/projects/order-returns-manager/return-history.png', width: 1440, height: 1196 },
    guide: { id: 'return-guide', src: '/images/projects/order-returns-manager/return-guide.png', width: 1142, height: 784 },
  },
}
