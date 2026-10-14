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

The browser suite runs against a production build. Build before testing source
changes, and restart an existing production server before reusing it. Playwright
can manage its own server at `127.0.0.1:3100`; setup instructions are in README.md.

## Expected behavior

- **Browser → language:** `/` redirects to English even with a Spanish
  `Accept-Language` header. `/es` produces `html lang="es"`, Spanish copy/metadata
  and the Spanish CV.
- **Language → content:** the experience shows the correct roles and dates, and
  contact expresses availability. Yuno includes product integrations, Yunex,
  operational automation and delivery practices. The hero stays technology-free.
- **Role → contribution:** complete storefront delivery and reusable components
  belong to the ITGlobers Mid-level role. The Frontend Developer entry describes
  development, maintenance and feature improvements.
- **Contribution → full solution:** Yunex presents investigation, automated
  knowledge-update proposals and post-deployment monitoring as visible capabilities.
  The outcome describes team value. Context, decisions, evaluation and the incident
  example expand with native controls and remain usable without JavaScript.
  Case anchors remain valid when switching languages.
- **Education → learning:** Platzi describes continuing self-directed learning
  with a start date and a localized present/current label.
- **Control → appearance:** switching, reloading and navigating between languages
  preserves the theme. The control also works with blocked storage.
- **Navigation → section:** switching languages preserves the fragment. Following
  a section closes mobile navigation; Escape returns focus to its control.
  Reading order is Hero → About → Experience → Contributions → Contact; desktop
  and mobile menus use About → Experience → Contributions → Contact. The hero's
  next-section link points to About in both languages.
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
language changes, contribution capabilities and detail reading, unavailable storage, JavaScript-disabled navigation, mobile
navigation, keyboard access, reduced motion, responsive widths and invalid routes.
The mobile-menu case is intentionally skipped in the desktop project and runs
in the mobile project.

Use browser inspection for editorial details such as attribution, wording and
visual density. Check documentation links and confirm instructions describe the
current files. Dependency audit guidance and active compatibility constraints are
in `tooling.md`.

## Limits

Automated flows use Chromium on desktop and emulated mobile. They do not replace
physical iPhone/Android tests or Safari/Firefox runs. Verify external link targets
without sending messages; email links use `mailto` navigation. Local build/test
results do not establish the state of a public deployment. Verify the deployed
URL separately when deployment is part of the task.
