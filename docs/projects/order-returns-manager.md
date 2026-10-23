# Order Returns Manager: source notes

## Repository-verified facts

Inspected main revision `d6e851cdf7bd05cf9325c05cbdef25d79c58eb8c` on 2026-10-22.
The revision remained current when implementation began. Repository:
https://github.com/hugoriveros18/order-return-manager. Demo:
https://order-return-manager.vercel.app/.

| Source at that revision | Supported facts |
| --- | --- |
| README.md | Fullstack demonstration; ten fictional technology products, customer/admin role simulation, full/partial returns, eligibility/quantity checks, decisions, cancellation, simulated receipt, history, policy and independent resettable visitor environments. No real payments, refunds or logistics. |
| package.json and package-lock.json | Next.js 16.4.2, React 19.3.1, TypeScript 5.9.3, Prisma/client/pg adapter 7.10.1, Tailwind 4.3.3, Zod 4.6.7, Vitest 5.0.5, Playwright 1.64.1. Node engine ^22.12.0. |
| docs/spec-driven-development.md and specs/001-manage-order-returns/{spec,research,plan,tasks}.md | Versioned specification, clarification, decisions, task decomposition, validation and the repository's Spec Kit workflow. Codex/Spec Kit are workflow tools, not application dependencies. |
| src/features/demo/{cookies,context,transaction,reset,operations}.ts and prisma/schema.prisma | Server-resolved anonymous capability, scoped environment/generation, environment-row FOR UPDATE under READ COMMITTED, transaction-bound domain/history/receipts, generation fencing on reset. A retained reset acknowledgement is a documented replay exception. |
| src/features/returns/create.ts | Server rechecks eligibility and available quantities inside the environment transaction before request/items/history writes. |
| tests/integration/{return-concurrency,reset}.test.ts | Test definitions for twenty contenders for one unit, atomic reset rollback, stale generations/retries and preservation of another environment. Their presence is separate from execution evidence below. |

The selected lock simplifies reasoning but serializes scoped work within one demo.
Cookie loss loses continuity; tabs in the same context share an environment. The
capability identifies a demo, not a verified user; the simulated administrator is
not real authentication. Do not claim general production multi-tenant security.
Research considers per-item locking and serializable transactions as alternatives.

## Validation evidence and scope

Source: specs/001-manage-order-returns/validation.md at the inspected revision.

- Initial 2026-10-21 local baseline: 23 unit + 27 PostgreSQL integration + 19
  contract + 30 browser cases = 99 passing automated cases. Local PostgreSQL 17.10.
- Later 2026-10-22 interface refinement: 34 focused desktop/mobile browser cases,
  lint, typecheck and production build. Backend suites were not rerun for that UI work.
  These scopes are not added together or presented as a current aggregate total.
- Documented public Node 22 release: remote build, lifecycle smoke through simulated
  receipt/history, cross-context access refusal and database history corroboration.
  Production preparation reports PostgreSQL 18.6, distinct from local PostgreSQL 17.
- T097/T099 remain pending for isolated Preview configuration/flows, scheduled-cleanup
  operation and remaining release acceptance. The latest specification consolidation
  reran documentation checks rather than runtime suites and does not claim full MVP convergence.
- Portfolio design review: the public landing, fresh anonymous environment's customer
  orders and administrator queue were inspected and captured. Only provisioned
  fictional demo data was used; no existing visitor data was reset. This was not a
  new full public lifecycle or infrastructure acceptance check.

The portfolio links pinned source documents so the stated validation has a stable
scope. Do not turn local timings or passing cases into production reliability claims.
No Order Returns Manager application test suites were rerun while authoring the portfolio.

## Owner statements

The owner already uses AI agents routinely. After completing Platzi's SDD course,
he built the demo from scratch with Codex and GitHub Spec Kit to explore how SDD
could complement that workflow. He supplied the motivation, complete capability
scope, engineering decision, learning goals and five principal lessons. These are
firsthand statements; repository artifacts support the implementation, rather than
independently proving personal motivation or exact authorship.

The owner confirms Projects before Contributions, pointer/arrow disclosure cues,
a static cover without enlargement, and the shared accessible modal only for
additional images. The owner approved a dedicated case page, without video-duration labels or other
incidental media metadata. Final supporting links form a vertical underlined list.

## Editorial choices

Lead with a personal SDD experiment; describe the returns application as a functional
fictional setting. Use the independent environment decision to explain fullstack
engineering, relational modeling, APIs, consistency, concurrency and automated
validation through actual behavior. Preserve all five learning themes, including
clarification, ordered validation and defining constraints before implementation.
Do not imply that SDD is universally superior or that the app is a commercial product.

The short view selects Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Prisma
and GitHub Spec Kit;
the full stack and Codex participation remain in detail. No skill ratings,
certification claims, invented metrics or human/AI code percentages.

Real interface PNGs live under `public/images/projects/order-returns-manager/`.
The customer overview is the static cover, without an enlargement action.
The case gallery follows the flow through return selection, administrative review,
completed-return history and the return-state guide. Only gallery images enlarge
in the shared native modal. Captions/alt text are localized; original UI stays English.

The selection (1440×1240), history (1440×1196) and guide panel (1142×784) were
captured directly from the public application on 2026-10-23 in a fresh isolated
anonymous demo. The existing administrator capture (1440×1263) remains. Selection
and history preserve full page content; the guide capture frames its actual panel
to keep the state transitions legible, without changing the rendered interface.
Only seeded fictional data was viewed; no return was submitted, approved, rejected,
received or reset for these captures. The initial demo was provisioned explicitly.
The portfolio entry links to the case, repository and live demo. The video is
available inside the case.

## Supplied video and evidence scope

No essential factual gap blocks publication. The owner supplied `/tmp/order-return-manager-video-desktop/output/`
`order-returns-manager-linkedin.mp4` for presentation review. Inspected metadata:
40 seconds, 1920×1080, 30 fps, H.264/AAC, 3,338,207 bytes. The supplied video.jsx references
an instrumental track documented in MUSIC.md, without narration. Sampled actual frames
show an English introduction, return creation/review and a closing SDD workflow.
The approved case pages are `/en/projects/order-returns-manager` and
`/es/projects/order-returns-manager`. The unchanged supplied MP4 is published as
`public/videos/projects/order-returns-manager/demo.mp4`, with a frame from the
supplied footage as `public/images/projects/order-returns-manager/video-poster.png`.
Native playback sits near the beginning of the case, without duration/format badges.
A localized caption describes the request, administrative review and simulated
receipt. The soundtrack is instrumental; there is no speech to subtitle.
Use native controls, no autoplay, preload none and appropriate text alternatives.
The initial runtime versions and public-release status above are evidence at the
inspected revision, not promises about future repository/deployment changes.
