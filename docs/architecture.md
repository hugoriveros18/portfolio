# Architecture

The portfolio is a Next.js App Router application with static pages in two
languages. It does not require a custom API, database, authentication, secrets or CMS.

## Visitor flow

1. `next.config.ts` redirects `/` to `/en`, regardless of browser language.
2. `app/[locale]/layout.tsx` validates the locale, sets `html lang`, loads Onest
   and initializes appearance before the first paint.
3. `app/[locale]/page.tsx` loads the localized content and renders four sections.
4. Downloads point to the matching language's files in `public/files/`.
5. The language switch navigates to the other URL, preserving the section fragment.

`en` and `es`, defined in `lib/i18n.ts`, are the only supported locales. They are
prerendered through `generateStaticParams`; unsupported locales return 404.
The `params` APIs are awaited as required by Next.js 16.

## Section order

The current editorial layout uses Hero → Experience → About → Contact.
The hero introduces Hugo and his work at a general level. Experience follows to
prioritize professional evidence for the current recruiting goal. About then adds
personal context, the engineering approach, capabilities, education and languages.

This is an editorial choice for this portfolio, not a universal usability rule.
An About-first sequence would emphasize the personal story before the career.
Keep navigation consistent with the actual document order if it changes.

## Responsibilities

| Path | Responsibility |
| --- | --- |
| `app/[locale]/layout.tsx` | HTML document, font, initial theme, header and footer. |
| `app/[locale]/page.tsx` | Content composition and localized metadata. |
| `app/[locale]/opengraph-image.tsx` | Sharing image generated with localized text. |
| `app/globals.css` | Palette, typography, layout, breakpoints and motion. |
| `app/icon.svg` | Vector site identity. |
| `app/robots.ts`, `app/sitemap.ts` | Indexing resources and language alternatives. |
| `components/sections/` | Server-rendered Hero, Experience, About and Contact. |
| `components/layout/` | Interactive header and footer. |
| `components/theme/` | Light/dark control and preference synchronization. |
| `components/ui/` | Icons, social links and section introductions. |
| `content/en.ts`, `content/es.ts` | Localized copy following a shared contract. |
| `content/types.ts` | Content contract; TypeScript detects missing fields. |
| `content/career.ts` | Shared companies, links, dates and role titles. |
| `lib/profile.ts` | Identity, contact, public address and CV paths by locale. |
| `lib/theme.ts` | Storage key and pre-paint initialization script. |
| `tests/portfolio.spec.ts` | Real browser user-flow verification. |

## Server and client boundaries

Professional content is delivered as HTML. Its visibility does not depend on
JavaScript observing scroll. Full content dictionaries are not sent to the client;
the header receives only its labels.

`Header` is a client component so it can close mobile navigation with Escape or
after following a section, and preserve the fragment when switching languages.
Navigation uses native `details/summary`, so it also works without JavaScript.
It is an inline disclosure rather than a modal dialog.

`ThemeToggle` uses `useSyncExternalStore` with a document-level appearance
preference. With no saved choice, appearance follows the system; explicit choices
are stored locally and synchronized between tabs. The initialization script avoids
a flash of the wrong appearance. If storage is blocked, the control still works
during the visit. Without JavaScript, CSS follows the system color scheme.

## Design and accessibility

- Graphite/terracotta palette with semantic CSS color variables.
- Onest throughout, using size and weight to establish hierarchy.
- Sticky header, mobile navigation at 800 px and a single-column layout at 600 px.
  There are no device-detection resize listeners.
- A 350 ms entry transform that never hides the content.
- `prefers-reduced-motion` disables animations and smooth scrolling.
- Skip link, visible focus, alternative text and semantic headings. External links
  include `noopener noreferrer`.
- `next/image` uses intrinsic dimensions and CSS framing in a 4:5 portrait frame.
  The supplied PNG remains unchanged.

## Hosting

The project uses the standard Next.js `build`/`start` hosting workflow.
Open Graph images are generated on demand by the server; professional page content
is prerendered.

The public address is centralized in `lib/profile.ts`. Update it when the domain
changes to keep canonical URLs, language alternatives, robots and sitemap correct.
`next/font/google` retrieves the font at build time, so the initial build requires
access to that source and to package dependencies.
