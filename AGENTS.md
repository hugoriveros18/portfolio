# Hugo Riveros portfolio

## Project and working agreements

This is Hugo Felipe Riveros Fajardo's professional portfolio for recruiters and
colleagues. It presents his profile, work experience, capabilities, education and
contact details. English is the default public language; Spanish is also supported.

- Write project documentation, comments, instructions and other internal material
  in English. Spanish is appropriate for localized portfolio content, its CV and
  the test expectations needed to verify that version. Keep official proper names.
- Use this single `AGENTS.md` as the repository's agent entry point. Do not create
  another file whose name differs only by letter case.
- Keep English and Spanish content consistent, including metadata, accessible
  labels and the corresponding CV download.
- Preserve the editorial graphite/terracotta identity, light and dark appearance,
  Onest typography and the general, technology-free hero introduction.
- Yuno ended in October 2026. The portfolio must communicate active availability
  for new frontend opportunities across industries.
- Follow the owner's latest clarification when supplied sources disagree. Complete
  storefront delivery and reusable responsive components belong to the Mid-level
  Frontend Developer role at ITGlobers. The earlier Frontend Developer role covers
  development, maintenance, features and improvements as described in LinkedIn.
- Show Platzi as continuing, self-directed software development learning from
  January 2022 to the present, rather than a completed degree or a dated course.
- Never invent achievements, percentages, ownership or dates. Summarize professional
  contributions within experience and explain completed cases in the Contributions
  section. Follow `docs/contributions/README.md` when adding or refining a case.
  Cover its full capability scope and team/business value. Supporting artifacts
  are optional; do not add a generic public disclaimer when they are unavailable.
- Preserve keyboard navigation, visible focus, reduced-motion support and content
  that remains readable without JavaScript. Avoid unnecessary dependencies.
- Use npm and the committed lockfile. Run the relevant checks documented in
  README.md and review content/layout changes in both languages on desktop/mobile.
- Do not deploy or push unless the user requests it.

## Current documentation

- [README.md](README.md): setup, commands and current project structure.
- [Architecture](docs/architecture.md): routing, components, themes and hosting.
- [Content maintenance](docs/content.md): sources, translations, CVs and photography.
- [Contributions](docs/contributions/README.md): intake, content contract and publishing workflow.
- [Add contribution skill](.agents/skills/add-contribution/SKILL.md): reusable contribution workflow for Codex.
- [Tooling](docs/tooling.md): dependencies, compatibility and maintenance.
- [Verification](docs/verification.md): checks, expected behavior and coverage.

Version-matched Next.js documentation is available at
`node_modules/next/dist/docs/`. Consult it before changing framework behavior.

## Current structure

- `app/[locale]/`: localized HTML document, portfolio page and Open Graph image.
- `app/globals.css`: typography, semantic colors, responsive layout and motion.
- `components/`: layout, section, appearance and shared interface components.
- `content/`: typed English/Spanish copy and shared career facts.
- `lib/`: locale, profile and initial-theme helpers.
- `public/`: the supplied photograph and matching CV PDFs.
- `tests/`: Playwright user flows for desktop and emulated mobile.
- `docs/`: current architecture, content, tooling and verification guidance.
- `.agents/skills/add-contribution/`: repository-scoped skill for adding and refining cases.

The site uses Next.js App Router, React, TypeScript, Tailwind CSS and Onest. It
does not require a custom business API, database, authentication or CMS. The
visible section order is Hero → About → Experience → Contributions → Contact.
Keep the hero's next-section link and both navigation menus aligned with that order.
Maintain current state documentation; use Git for historical versions rather than keeping an
inventory of superseded structures or a change log in these documents.
