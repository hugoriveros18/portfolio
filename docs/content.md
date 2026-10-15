# Content maintenance

## Sources and editorial rules

Professional content is based on the owner-supplied LinkedIn profile, English and
Spanish CVs, and the owner's direct clarifications. The latest owner clarification
takes precedence when supplied documents disagree.

- Write documentation, comments and internal project information in English.
  Preserve Spanish for localized public content, its CV and related test fixtures.
- Keep English and Spanish versions consistent, including metadata, navigation,
  accessible names and document downloads.
- Use a general introduction in the hero. Put technologies and specific technical
  contributions in experience and capabilities.
- State only supported responsibilities and outcomes. A technical constraint,
  such as a 20-second response deadline, is not a measured percentage improvement.
- Describe personal contributions without implying exclusive ownership of team
  products. Explain AI usage alongside responsibility for review and validation.

## Professional facts and role scope

| Entry | Dates | Scope |
| --- | --- | --- |
| Yuno · Frontend Software Engineer | Feb 2026–Oct 2026 | SDKs, checkout/payment integrations, native wallets, connector reliability, WooCommerce publication, Yunex, operational automation, AI-assisted engineering and delivery validation. |
| ITGlobers · Mid-level Frontend Developer | Apr 2025–Feb 2026 | Complete storefronts, reusable responsive components, custom applications/integrations, performance, estimation and planning. |
| ITGlobers · Frontend Developer | Oct 2022–Apr 2025 | Development and maintenance of interfaces, feature improvements, project requirements and multidisciplinary collaboration. |
| Platzi | Jan 2022–Present | Continuing, self-directed software development learning. |

Yuno is a completed role. The contact section communicates active availability
for frontend opportunities across industries. Platzi is ongoing learning rather
than a completed degree: use `Jan 2022 — Present` / `Ene 2022 — Actualidad`.

In Yuno, keep distinct contributions visible: product integrations, incident
investigation, monitoring/knowledge automation, reusable engineering tools,
documentation and validation. About gives a shorter overview of the engineering
approach rather than duplicating the implementation details.

## Copy and languages

1. Edit `content/en.ts` and `content/es.ts` together.
2. Declare new fields in `content/types.ts` and populate both dictionaries.
3. Maintain company names, URLs, ISO dates, official role titles and common
   technologies in `content/career.ts`. Translate visible period labels in each
   dictionary while keeping them aligned with the shared dates.
4. Keep `experience`, `contributions`, `about` and `contact` section anchors stable
   across languages, along with each `contribution-<id>` anchor.
5. Translate navigation, accessible names, metadata and alternative text as well.

Official role titles remain in English, as in the CVs. Technology/product names
and institutions' proper names do not need translation. Content is not
machine-translated at runtime.

## CV files

| Language | Public file | Download filename |
| --- | --- | --- |
| English | `public/files/hugo-riveros-cv-en.pdf` | `hugo-riveros-cv-en.pdf` |
| Spanish | `public/files/hugo-riveros-cv-es.pdf` | `hugo-riveros-cv-es.pdf` |

The PDFs are the owner-supplied documents. Their ITGlobers responsibility grouping
and Platzi dates do not fully match the confirmed website copy. Keep this
consistency issue visible when preparing replacement PDFs; use the confirmed role
scope above for the website.

Replace the corresponding PDF while keeping its filename when updating a CV.
If renaming it, update `lib/profile.ts` and the download expectations in the tests.
Download buttons use the currently selected language. Check the website and both
CVs together when updating professional information.

## Portrait

`public/images/hugo-riveros.png` is the supplied 1096 × 1435 px photograph.
`Hero` declares its intrinsic dimensions and `sizes` so Next.js can generate an
appropriate optimized image for each screen.

CSS framing lives in `.portrait-frame` and `.portrait-image` in `app/globals.css`.
Try adjusting the CSS framing before modifying the original file. Update the
component if source dimensions change. Check the face, hair and arms on desktop
and mobile. Do not distort the image or apply filters that alter the person's
appearance.

## Experience and case studies

Contributions have concise references within experience and a dedicated editorial
section with reusable stories, optional diagrams and expandable detail. The site
does not expose separate case pages or a personal-project section. Publish a case or project only
when there is sufficient completed work and supporting information to explain its
problem, context, individual contribution, collaboration, decisions, validation
and outcome. Diagrams should explain an actual decision.

The [contribution workflow](contributions/README.md) defines intake, editorial
rules, bilingual data entry, presentation and verification for every case.
Public records live in `content/contributions/en.ts` and `es.ts`.

The wallet contribution includes optional before/after paths, a technical diagram
inside a disclosure and original AVIF checkout screenshots under
`public/images/contributions/wallet-checkout/`. Keep their dimensions and localized
captions/alternative text aligned with the typed gallery records. Screenshots
preserve the original Portuguese UI; the surrounding explanation is localized.

The multi-seller card-payment contribution uses a sequential diagram and two
visible capabilities. Its [source notes](contributions/vtex-split-orders.md) cover
the shared purchase lookup, antifraud session context, first-suborder cancellation,
Yuno-managed 3DS, development validation and marketplace outcome. Keep the session
identifier distinct from the purchase reference and preserve connector attribution.

The [VTEX subscription case](contributions/vtex-subscriptions.md) is the fourth
entry under the additional-contributions disclosure. Its two-phase comparison
shows initial PSP preparation and later server-side MIT payments. Preserve cycle 0
as the first recurrence after the initial purchase, and keep the VTEX subscription
context, PSP stored-method handling and connector implementation distinct.

The [Yunex contribution notes](contributions/yunex.md) organize the owner's
firsthand account, decisions, validation, evidence limits and conceptual diagrams.
These working notes are not rendered by the website. Supporting artifacts are
optional: add suitable links when available and omit generic public notices about
missing evidence. Keep every substantial capability visible and describe the value
to users, the team or the business without inventing numerical results.

## Verifying content

Run the checks in README and inspect `/en` and `/es` on desktop and mobile.
Check dates, availability, role scope, ongoing learning, links, downloads,
line breaks and translations. Change appearance and language, reload, and confirm
that navigation remains useful.
