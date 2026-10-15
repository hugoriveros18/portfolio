# Tooling and maintenance

## Runtime and dependencies

Use Node.js 24 and npm 11. `.nvmrc` and `package.json` declare the runtime
requirements. Direct dependencies are pinned; `package-lock.json` records the
resolved tree for reproducible installation with `npm ci`.

| Tool | Version | Purpose |
| --- | --- | --- |
| Next.js | 16.4.0 | App Router, prerendering, metadata and image/font handling. |
| React / React DOM | 19.3.1 | Server and client component rendering. |
| TypeScript | 5.9.3 | Strict application and content type checking. |
| Tailwind CSS / PostCSS adapter | 4.3.3 | CSS processing and base styles. |
| PostCSS | 8.5.30 | Stylesheet processing. |
| ESLint | 9.39.5 | Source checks. |
| eslint-config-next | 16.4.0 | Next.js, React and accessibility rules. |
| Playwright | 1.64.1 | Desktop and emulated-mobile browser tests. |

Turbopack powers both `next dev` and `next build`. Lint runs independently through
`eslint .`. `next typegen` and `tsc --noEmit` provide the explicit type check.
Tailwind uses `@tailwindcss/postcss` and `@import "tailwindcss"`; semantic CSS
variables define the visual system in `app/globals.css`.

`next.config.ts` sets `agentRules: false` so the development server does not edit
`AGENTS.md`. The repository maintains its own instructions, including the reference
to version-matched Next.js documentation bundled in `node_modules/next/dist/docs/`.

## Compatibility constraints

Keep Next.js and `eslint-config-next` aligned. Update React, React DOM and their
types as a compatible set. Review peer dependencies before changing major versions;
do not bypass conflicts with `--force` or `--legacy-peer-deps`.

TypeScript 5.9.3 is compatible with the installed `typescript-eslint` range
(below 6.1). ESLint 9 matches the declared peer range of the installed
`eslint-plugin-react`. ESLint 9 emits an end-of-support warning; upgrading the lint
stack requires compatible plugin versions. Review these constraints when planning
updates rather than selecting every package's latest major independently.

## Dependency auditing

```bash
npm audit --omit=dev
npm audit
```

The development dependency chain
`eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces`
contains `braces` 3.0.3. Its
[stack-exhaustion advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)
has no published patch in the installed range. npm propagates the advisory to
five packages in that development chain. It is not part of the site's production
dependency tree.

Keep this finding visible when reviewing audit output. Do not force a downgrade
of the framework's lint configuration to clear an advisory; check for a compatible
upstream fix and validate the dependency set together.

## Updating dependencies

1. Check the installed Next.js documentation at `node_modules/next/dist/docs/`
   and the relevant upstream release/compatibility documentation.
2. Choose compatible versions and update `package.json` and the lockfile together.
3. Confirm installation from the lockfile with `npm ci`.
4. Run lint, type checks and build, then the relevant browser flows.
5. Review both languages, appearance modes, CV downloads and responsive layout.
6. Keep this document aligned with the installed versions and active constraints.

The first installation/build needs network access to package sources and the
font supplied through `next/font/google`. Runtime content does not require a
business API, database or credentials.
