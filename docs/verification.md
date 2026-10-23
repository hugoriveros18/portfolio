# Verification

## User flow

A visitor opens the portfolio, reads the profile and experience in the selected
language, changes appearance and language, navigates to a section and downloads
the matching CV. Content comes from typed, prerendered dictionaries; documents
come from public files. There is no business API or database to verify.

## Commands

```bash
npm run lint -- --max-warnings 0
npm run typecheck
npm run build
npm run test:e2e
```

If a constrained environment prevents Turbopack from opening its worker port,
use the supported `npm run build -- --webpack` fallback. The default project
configuration remains Turbopack. Google Fonts access is still needed for Onest.

The browser suite runs against a production build. Build before testing source
changes, and restart an existing production server before reusing it. Playwright
can manage its own server at `127.0.0.1:3100`; setup instructions are in README.md.

## Expected behavior

- **Browser → language:** `/` redirects to English even with a Spanish
  `Accept-Language` header. `/es` produces `html lang="es"`, Spanish copy/metadata
  and the Spanish CV.
- **Language → content:** the experience shows the correct roles and dates, and
  contact expresses availability for both Fullstack and Frontend roles. The hero
  and localized metadata use the Fullstack professional title. Yuno retains its
  official Frontend Software Engineer title and includes Node.js backend services,
  payment integrations, production operations, Yunex and daily Claude Code use.
  Codex remains current exploration outside the Yuno role. The hero stays technology-free.
- **Role → contribution:** complete storefront delivery and reusable components
  belong to the ITGlobers Mid-level role. The Frontend Developer entry describes
  development, maintenance and feature improvements.
- **Contribution → full solution:** Yunex presents investigation, automated
  knowledge-update proposals and post-deployment monitoring as visible capabilities.
  The outcome describes team value. Context, decisions, evaluation and the incident
  example expand with native controls and remain usable without JavaScript.
  Case anchors remain valid when switching languages.
- **Wallet case → visual evidence:** the direct-wallet case compares the shopper
  journeys, explains later installment support and exposes the OTT/VBase sequence
  inside a native disclosure. Three original AVIF screenshots load through image
  optimization and open at full size in a modal on the same page. Check Escape,
  the close button, backdrop dismissal, keyboard containment, focus restoration
  and page scroll locking. Captions, controls and alternative text follow the
  selected language. Without JavaScript the image links still reach the originals.
  Yuno and VTEX documentation opens in new tabs, keeping the portfolio open.
- **Multi-seller case → sequential flow:** the third contribution explains
  shared antifraud context and server-side processing as two visible capabilities.
  Its diagram describes one suborder at a time and cancellation if the first fails.
  Native disclosures explain purchase lookup, the separate session identifier,
  Yuno-managed 3DS and development validation. They remain usable without JavaScript;
  changing language preserves the case anchor.
- **Remaining contributions → disclosure:** initially only the first three
  stories/index links are visible. View all contributions exposes the remaining
  index and full stories in editorial order. Keyboard collapse retains focus on
  the summary and does not change the fragment. Direct/nested fragments, language
  changes and Back/Forward reveal required groups/details before scrolling.
  Without JavaScript all five records are readable.
- **Case index → subscription payments:** expand the remaining group and visit
  the fourth case from its index or directly through `#contribution-vtex-subscriptions`.
  Language changes preserve the anchor and keep the overview visible. The two-phase
  comparison distinguishes initial payment-method preparation from server-side
  MIT renewals; technical details explain detection and cycle 0 as the first
  recurrence after checkout. Verify keyboard access and reading without JavaScript.
- **Case index → Jumbo checkout:** the fifth case is accessible through its
  index link or `#contribution-jumbo-checkout-modularization`.
  Switching languages preserves the case anchor. Both localized direct URLs
  reach the visible overview without JavaScript. Review the source/build diagram and native details.
  The experience reference belongs to the Mid-level ITGlobers role. Keep the
  client's development-time estimate and the team's qualitative feedback distinct
  from measured runtime performance.
- **Projects → case page:** View project reaches the localized static article.
  The video is available inside the case. The short portfolio entry has no study
  disclosure; the case groups motivation, solution, decisions, participation,
  results/lessons and evidence with a topic index and return links. Unknown IDs
  return 404, metadata/sitemap contain both localized case routes, and the language
  switch preserves the case/topic. Header section links return to the portfolio.
  Old homepage topic fragments reach the same section on the case page.
- **Case → video:** the supplied MP4 supports range requests, manual native playback,
  seeking, playsinline and preload none. No autoplay or public duration/file-metadata
  badges. Its poster and explanatory caption load correctly in both languages.
- **Case → resources:** final documentation links form one vertical list, preserving
  primary text, underline, icons and external-link behavior. The initial 99-case
  local baseline remains scoped; later interface and public checks are separate.
- **Project images → modal:** the portfolio cover is static. Only additional images
  enlarge through the shared native modal. Check original loading, Escape/close/
  backdrop, keyboard containment, focus restoration, scroll lock and translated
  labels. Order Returns Manager has four gallery images covering selection, review,
  history and the state guide. Without JavaScript image links reach originals; full case reading,
  index links, video controls and return navigation still work.
- **Disclosure → affordance:** project and contribution summaries use pointer
  cursors, directional arrows, hover surfaces and visible keyboard focus. Open
  arrows point down; reduced motion disables their transitions.
- **Education → learning:** Platzi describes continuing self-directed learning
  with a start date and a localized present/current label.
- **Control → appearance:** switching, reloading and navigating between languages
  preserves the theme. The control also works with blocked storage.
- **Navigation → section:** switching languages preserves the fragment. Following
  a section closes mobile navigation; Escape returns focus to its control.
  Reading order is Hero → About → Experience → Projects → Contributions → Contact; desktop
  and mobile menus use About → Experience → Projects → Contributions → Contact. The hero's
  next-section link points to About in both languages.
- **Visual hierarchy → reading:** only main sections are numbered. Case-index
  cards use company/name labels and a border/background hover, without underline.
  Supporting links use primary text and underline; expandable technical details
  use terracotta. Verify this distinction in both appearances. Check vertical
  diagrams, full-width two-capability lists and the compact wallet gallery.
- **Link → document:** downloads use the selected language's PDF and filename.
  Served bytes match the repository file and use the correct PDF content type.
- **Metadata → resource:** canonical URLs and language alternatives match the
  locale. Open Graph routes return PNGs; robots, sitemap and icon resources respond.
- **Preferences → presentation:** keyboard navigation, skip link and reduced motion
  work. Content remains readable with JavaScript disabled.
- **Viewport → layout:** both languages fit widths of 320, 390, 768, 1024 and
  1440 px without horizontal overflow. Review light and dark screenshots.

## Automated coverage

`tests/portfolio.spec.ts` covers default-language routing, localized profiles,
actual downloads and byte checks, metadata/sharing images, theme persistence,
language changes, contribution capabilities and detail reading, case-index
keyboard access and deep links, progressive contribution visibility/collapse focus,
nested fragment revelation and history, localized project routes/metadata, native
video playback and range requests, legacy project links, image modals and vertical
documentation lists,
external-link targets, a single contact email action,
sticky navigation, unavailable storage, JavaScript-disabled navigation, mobile
navigation, keyboard access, reduced motion, responsive widths and invalid routes.
The mobile-menu case is intentionally skipped in the desktop project and runs
in the mobile project.

Use browser inspection for editorial details such as attribution, wording and
visual density. Check documentation links and confirm instructions describe the
current files. Dependency audit guidance and active compatibility constraints are
in `tooling.md`.

## Browser extensions and hydration

If a hydration warning identifies an extra `cz-shortcut-listen="true"` attribute
on `body`, check ColorZilla's access to the local site. This extension-injected
attribute is documented in the [Next.js issue
tracker](https://github.com/vercel/next.js/issues/72031).
Disable the extension for localhost and reload, or reproduce in a clean browser
profile. Keep application hydration diagnostics enabled rather than suppressing
all mismatches on `body`.

## Limits

Automated flows use Chromium on desktop and emulated mobile. They do not replace
physical iPhone/Android tests or Safari/Firefox runs. Verify external link targets
without sending messages; email links use `mailto` navigation. Local build/test
results do not establish the state of a public deployment. Verify the deployed
URL separately when deployment is part of the task.
