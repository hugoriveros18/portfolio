# Jumbo checkout modularization — source notes

## Status and sources

Integrated in English and Spanish as the fifth case, under additional contributions,
with the stable ID `jumbo-checkout-modularization`. These notes are not rendered
by the website. The owner supplied a firsthand account and a Notion implementation document.
Hugo confirmed complete migration ownership during his Mid-level Frontend Developer
role and qualitative team feedback. Runtime code splitting cannot be confirmed
and is excluded from the public narrative.

- [Owner-supplied implementation document](https://app.notion.com/p/Modularizaci-n-checkout-12a9cb3cff578022b91fe9772b972902?source=copy_link):
  fetched successfully through the connected Notion app. It describes the problem,
  source organization, build pipeline, checkout events and workspace workflow.
  Three embedded images were inspected: the repository root, initial-load event
  dispatch and hash-change dispatch. They have not been selected as public assets.
  The page's edit timestamp is not an established project delivery date.
- Owner's current account: assignment, alternatives, complete incremental migration,
  WebP optimization, client-estimated development-time improvement and team feedback.
  Runtime on-demand loading is unconfirmed; runtime performance feedback is qualitative.
- [Webpack output](https://webpack.js.org/concepts/output/),
  [code splitting](https://webpack.js.org/guides/code-splitting/) and
  [TypeScript integration](https://webpack.js.org/guides/typescript/): technical
  context for the build decision, not evidence of the project's exact configuration.
- [LCP optimization](https://web.dev/articles/optimize-lcp),
  [FID definition](https://web.dev/articles/fid) and
  [image performance](https://web.dev/learn/performance/image-performance): context
  for performance mechanisms and the limits of inferring metric changes.

## Central story and scope

As a Mid-level Frontend Developer at ITGlobers, Hugo was assigned to modularize
the customizations in Jumbo's VTEX checkout for Cencosud in Colombia. Development
and debugging had become difficult because substantial JavaScript and CSS
customizations were maintained in very
large files. The work prioritized developer experience and maintainability, with
an additional objective of improving customer-facing performance.

The strongest angle is separating maintainable source architecture from VTEX's
required delivery format. Developers could work with modules and familiar tools,
while a build pipeline produced the assets the native checkout expected.
Do not imply that VTEX required the source repository itself to be monolithic,
or that Hugo replaced the underlying VTEX checkout platform.

## Problem and scale

- The owner's account reports more than 8,000 JavaScript lines and 6,000 CSS lines.
  The Notion page gives the more specific CSS lower bound of 6,500 lines. Public
  wording can use 8,000+ JavaScript and 6,000+ CSS lines, consistent with both.
- The team found changes slower, code harder to understand and bugs more difficult
  to trace. The client was committing more development resources to checkout work.
- Preserve the distinction between source size and delivered bytes: line counts
  explain maintenance scale, not a measured transfer-size or runtime improvement.

## Approach and confirmed capability inventory

### Analysis and incremental migration

Hugo reviewed functionality and styles across cart, profile, shipping and payment,
mapped customizations and identified unused code. The owner's account describes
migrating functionality section by section and removing obsolete implementation.
No count of removed lines or precise final source size has been supplied.

### Source organization and native checkout lifecycle

The Notion document describes checkout modules for cart, profile, shipping,
payment, order summary and global behavior, with reusable hooks and styles grouped
by section and shared variables. Its entry point dispatches work on initial DOM
load, VTEX order-form updates and URL hash changes. It retains jQuery event
integration with the existing checkout environment.

The inspected hash-change image calls section-specific functions directly, and
the initial-load image calls initialization functions for all six modules. This
establishes event-based dispatch, not the internal cost of each function or the
loading mechanism inside it. It does not prove that React rendered the entire
native checkout.

### Build pipeline and development workflow

The team chose React, TypeScript and Sass after comparing that approach with
modular vanilla JavaScript/CSS. The former required more initial setup and team
knowledge; its alignment with familiar tools and long-term development experience
were the deciding factors. Framework choice alone is not a performance result.

Webpack coordinated the build and emitted the JavaScript and CSS assets required
by VTEX. The Notion document describes Babel-based transformations, module aliases,
JavaScript/CSS minification and a watch process paired with VTEX workspace linking.
Describe TypeScript, JSX and Sass support through the configured toolchain rather
than attributing every transformation directly to Webpack itself. Babel-based
TypeScript transpilation alone does not establish a separate type-checking step.

The public narrative does not need the exact generated filenames or command names.

### Runtime loading and images

The owner cannot reliably recall the runtime-loading mechanism and accepts
omitting code splitting. The Notion text describes consolidated primary output
files and event-based dispatch. Together with the inspected screenshots, this
is consistent with modular source compiled into the main bundle and functions
invoked for the relevant checkout events. Treat that loading model as an
inference, not a recovered fact about the entire build.

Public copy describes section-based modularization and lifecycle integration.
Do not claim deferred chunk downloads, a smaller initial JavaScript payload or
on-demand network loading. The screenshots contain no visible dynamic import
at those dispatch points, but do not rule out lazy loading elsewhere.

The owner converted suitable images to WebP. Describe this as an image delivery
optimization; avoid calling WebP the universally most efficient format. Modern
formats, including WebP and AVIF, have content- and configuration-dependent tradeoffs.

## Why Webpack fits this case

The defensible technical rationale is control over the build outputs needed by
an existing host platform, integration of the chosen source types and established
optimization tooling. Webpack also supports on-demand chunks where configured.
These are capabilities that fit the task, not proof of unique superiority over
other bundlers or of an actual benchmark comparison.

Do not claim that Vite, Rollup or other tools could not meet the same requirements,
that Webpack was the fastest builder, or that alternative bundlers were evaluated
unless the owner confirms those facts. The established team decision compared
vanilla JavaScript/CSS with a React/TypeScript/Sass workflow.

## Results and performance claim boundaries

| Item | Available account | Public treatment |
| --- | --- | --- |
| Development time | Owner reports client feedback of approximately 40% less checkout development time about six months after completion. No measurement method was provided. | Present as an approximate client-reported estimate, separate from measured performance metrics. Do not turn it into a personally measured benchmark or a conversion/revenue result. |
| Team experience | Team reported greater satisfaction and less reluctance to change the checkout. | Describe improved maintainability and development experience qualitatively. |
| Perceived performance | Owner clarifies that Jumbo colleagues described a smoother checkout and faster perceived loading, without actual performance measurement. | Attribute the perception to the team. Omit claims of improved LCP/FID and numerical runtime gains. |
| Commercial outcome | More efficient use of development resources was reported. | Do not infer exact cost savings, conversion growth or sales lift. |

Potential performance mechanisms can be explained conditionally:

- Removing unnecessary code and reducing initial JavaScript work can lessen
  main-thread contention. Deferred downloads help only when actual loading is
  deferred; splitting source files alone does not establish this benefit.
- Smaller images can shorten resource loading. An LCP improvement depends on
  whether the optimized resource or work was on the critical rendering path.
- Less main-thread blocking can reduce input delay. No LCP/FID percentage or
  millisecond change can be calculated from source line counts or format choice.

FID is a historical responsiveness metric; INP replaced it as a Core Web Vital in
2024. Preserve a genuinely measured historical FID result if confirmed, but do not
relabel it as an INP result or infer FID from an unspecified laboratory score.

## Ownership and validation

Hugo confirms that he performed the complete migration during his Mid-level
Frontend Developer role. Jumbo team members explained the legacy code and
answered occasional questions about behavior he needed to clarify. Credit him
with the migration and credit the team with domain/code context and the shared
technology decision. His latest role clarification takes precedence over any
inference from the Notion page's edit timestamp.

The team supplied qualitative feedback after delivery: the checkout felt smoother,
development was easier and loading seemed faster. Functional regression coverage,
staging/release review and specific test scenarios were not described. Keep that
unspecified instead of inventing automated tests or browser/device/payment coverage.

## Public narrative

**Title:** A maintainable checkout for Jumbo's development team.

**Overview:** At ITGlobers, I modularized Jumbo's VTEX checkout customizations,
organizing functionality and styles by checkout section and introducing a
React, TypeScript and Sass workflow with Webpack. The build retained VTEX's
required delivery format while making the source easier to extend and debug.

**Value:** About six months later, the client estimated that checkout development
time had fallen by approximately 40%. The team reported easier development and
maintenance, along with a smoother checkout and faster perceived loading.

The three visible capabilities cover section-based architecture, the integrated
build/workspace workflow and image optimization. Keep code splitting and claims
of measured LCP/FID improvement out of the public case. Qualitative feedback is
useful when attributed directly; it needs no generic public absence-of-evidence
disclaimer.

## Supporting visuals and publication

The shared stage/node diagram shows checkout modules and shared logic/styles
feeding the Webpack build, which produces VTEX-compatible JavaScript and CSS.
It explains source organization and delivery rather than runtime chunk loading.

The Notion source includes configuration and repository screenshots. They remain
source material rather than public assets or references: connected Notion access
does not establish anonymous visitor access. The code-native diagram explains
the architecture without copying these screenshots.

The case follows the existing four entries and uses the shared additional-case
disclosure. Its reference belongs to the ITGlobers Mid-level experience entry.
The three featured cases retain their order. Native disclosures expose context,
technology decisions, migration/lifecycle integration and client/team feedback.

## Editorial boundaries

The supplied account is sufficient for a public case centered on maintainability,
complete migration ownership, a compatible build pipeline and attributed client
and team feedback. Omit unconfirmed loading mechanics and unspecified test
coverage. No runtime metric estimates or general missing-evidence notice appear
in the public case.
