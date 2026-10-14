# Hugo Riveros · Professional portfolio

Hugo Felipe Riveros Fajardo's professional portfolio. Hugo is a Frontend Software
Engineer based in Bogotá, Colombia, actively looking for new opportunities.
The site presents his experience, approach to engineering, capabilities, education
and contact information.

**Live portfolio:** [hugoriverosdev.vercel.app](https://hugoriverosdev.vercel.app/)

The portfolio supports **English and Spanish**, with English as the default,
an editorial graphite/terracotta design, light and dark appearance, and a matching
CV download for each language. Contributions have concise references in experience
and a dedicated editorial section with optional diagrams and expandable context;
the About section adds personal context, capabilities, education and languages.
The reading order is Hero → About → Experience → Contributions → Contact.

## Local development

Requirements: Node.js 24 and npm 11. The repository includes `.nvmrc` and
`package-lock.json`.

```bash
nvm use
npm ci
npm run dev
```

Open [English](http://localhost:3000/en) or [Spanish](http://localhost:3000/es).
The root always redirects to `/en`. Switching languages preserves the current
section; appearance persists across navigation and reloads. Without an explicit
appearance preference, the site follows the operating system.

No environment variables, credentials or external services are needed to run the
site. The first installation/build needs network access for dependencies and the
Google Fonts source; Next.js then serves the font itself.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server using Next.js and Turbopack. |
| `npm run lint` | ESLint with Next.js and accessibility rules. |
| `npm run typecheck` | Route type generation and strict TypeScript checks. |
| `npm run build` | Production build and static generation of `/en` and `/es`. |
| `npm start` | Production server; requires an existing build. |
| `npm run test:e2e` | Playwright user flows for desktop and emulated mobile. |

## Validation

```bash
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

If browser system libraries are missing on Linux, run
`npx playwright install --with-deps chromium`.

Playwright starts the production server at `127.0.0.1:3100` and stops it afterward.
Locally, it can reuse an existing server on that port. After changing source code,
rebuild and restart any existing production server before testing to avoid checking
an older version.

Tests use Chromium on desktop and emulated mobile. They cover the default language,
profile, actual CV downloads, metadata and sharing images, language/appearance
switching, blocked storage, JavaScript-disabled browsing, mobile navigation,
keyboard access, reduced motion and widths from 320 to 1440 px. The mobile-menu
case is intentionally skipped in the desktop project. Reports and failure traces
are written to Git-ignored directories.

## Structure

```text
app/
  [locale]/          HTML document, page and Open Graph image per language
  globals.css        visual system and responsive styles
  icon.svg           site identity
  robots.ts          indexing instructions
  sitemap.ts         public URLs and language alternatives
components/
  layout/            header and footer
  sections/          introduction, about, experience, contributions and contact
  theme/             appearance control
  ui/                shared interface elements
content/
  en.ts, es.ts       localized copy
  career.ts          shared professional facts
  contributions/     shared case contract, order and bilingual case records
  types.ts           content contract
lib/                 locale, profile and initial-theme helpers
public/
  files/             English and Spanish CVs
  images/            original portrait
tests/               browser user flows
docs/                architecture, content, tooling and verification guidance
.agents/skills/      repository-scoped contribution authoring skill
```

## Updating information

- Copy: `content/en.ts` and `content/es.ts`.
- Companies, ISO dates and official role titles: `content/career.ts`.
- Contributions: `content/contributions/`; follow `docs/contributions/README.md`.
- Contact details, social links, public domain and CV paths: `lib/profile.ts`.
- CVs: `public/files/hugo-riveros-cv-en.pdf` and `hugo-riveros-cv-es.pdf`.
- Portrait: `public/images/hugo-riveros.png`; CSS framing in `app/globals.css`.
- Palette and layout: CSS variables and component styles in `app/globals.css`.

Write documentation and internal project information in English. Preserve Spanish
where it serves the localized portfolio, CV or related test expectations.
Do not publish unverified metrics or achievements. Keep both languages consistent
and follow the [content maintenance guide](docs/content.md).

Use `$add-contribution` in Codex to add or refine a professional contribution.
The [repository skill](.agents/skills/add-contribution/SKILL.md) gathers missing
context, organizes the complete case and follows the documented bilingual
presentation standard. It respects content-review stages requested in the session.

## Documentation

- [Agent instructions](AGENTS.md): the single entry point for project conventions
  and the current structure.
- [Architecture](docs/architecture.md): routes, components, appearance and hosting.
- [Content](docs/content.md): translations, CVs, photography and sources.
- [Contributions](docs/contributions/README.md): adding cases, editorial standard and verification.
- [Tooling](docs/tooling.md): dependencies, compatibility and maintenance.
- [Verification](docs/verification.md): checks, expected behavior and coverage.

The project uses App Router and the standard Next.js hosting workflow. If the
public domain changes, update `siteUrl` in `lib/profile.ts` for canonical URLs,
language alternatives, robots and sitemap.
