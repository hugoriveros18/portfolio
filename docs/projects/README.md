# Personal-project workflow

Personal projects explain why something was built, how engineering decisions were
made and what was learned. Keep this flow independent from professional contributions.

## Intake and evidence

Accept informal notes or a repository URL. Reuse session context and ask only
questions that materially affect truthful publication or presentation.

| Required narrative | Optional material |
| --- | --- |
| Identity, nature and brief purpose | Status and useful dates |
| Motivation, problem/hypothesis and objectives | Metrics and external validation |
| Solution, meaningful capabilities and stack | Cover, screenshots and video |
| Personal participation and applicable AI assistance | Public repository and demo |
| Substantial decisions/tradeoffs, observed results and lessons | Technical documents and diagrams |

Do not manufacture decisions or numbers to fill a template. Firsthand lessons and
qualitative results are valid. Missing optional media does not block a complete
narrative or justify a public absence notice. Essential gaps keep a case in draft.

Inspect README, manifest/lockfile, specifications/design, relevant code, tests and
the latest validation record. Record the inspected revision. Existing tests and
checked tasks are not execution evidence. Separate local, CI and public validation;
do not add counts from unrelated runs or turn local observations into production claims.

Maintain English notes in `docs/projects/<id>.md`, separating repository-verified
facts with paths/ref, owner statements, editorial choices and unresolved details.
Motivation and personal participation need the owner's account. Do not infer
exclusive authorship or percentages of AI-generated work from code or commit history.
Distinguish delivered behavior, observed outcomes and intended benefits.

Present the organized bilingual narrative and resources for approval before
integrating a new project. Honor review-only stages; approval already given for
the concrete proposal persists. Routine updates follow the session's authorization.

## Contract and presentation

The page order is Hero → About → Experience → Projects → Contributions → Contact.
Projects is 03, Contributions is 04 and Contact is 05. Each project has a localized,
prerendered case page at `/<locale>/projects/<id>`, generated from shared records.

- `content/projects/types.ts`: editorial IDs, project contract and localized labels.
- `content/projects/shared.ts`: common URLs, technologies, image/video paths and dimensions.
- `content/projects/en.ts`, `es.ts`: narratives keyed by the same shared IDs.
- `components/sections/Projects.tsx`: brief portfolio entries with static covers,
  a View project link; first three visible, remaining grouped.
- `components/sections/ProjectStudy.tsx`: shared server-rendered case article.
- `app/[locale]/projects/[projectId]/page.tsx`: static route generation and metadata.
- `components/ui/ProjectFragmentRedirect.tsx`: compatibility for old homepage topic links.
- `lib/project-path.ts`: shared localized route construction.

`PersonalProject` groups identity, a focused engineering question, context,
solution/capabilities, concrete engineering behaviors, participation/AI assistance,
decisions/tradeoffs and results/lessons/scoped validation. Resources are optional.
Use stable nested IDs aligned across languages. Connect skills to behavior rather
than ratings. Data fields do not all need visible labels or separate sections.

The portfolio entry remains short. Its case page groups the narrative into video
when available, motivation, delivered solution, decisions, participation/process,
results/lessons and validation/resources. A side index on desktop becomes a wrapped
index above the article on mobile. The native video appears before technical
reading; additional screenshots use the shared modal. Supporting links at the end
form a vertical list with primary text, underline and external-link icons.

Write for the visitor: explain purpose, behavior, reasoning and learning. Omit
video-duration badges, file size, codec/resolution labels, reading-time estimates,
internal task identifiers and incidental execution bookkeeping from public copy.
Keep technical media/evidence metadata in source notes. Include validation counts
only when they provide useful, scoped evidence; do not narrate every verification
iteration. Preserve meaningful limitations without generic absence notices.

Normal additions update data/resources, not custom route files or components.
The shared ID list generates the page in both languages and its sitemap entries.
Unknown project IDs return 404. Preserve canonical/alternate/OG metadata, theme,
locale switching within the current project/topic, and home section navigation
from case pages. Provide a clear return link to the matching portfolio entry.

Stable portfolio anchors remain `#projects` and `#project-<id>`. Case topics use
`#project-<id>-<topic>`. Old homepage topic fragments are replaced with their case
URL by a small client helper; the original entry remains a normal link without
JavaScript. All case reading, index links, resources, video controls and the return
link work without JavaScript. Image links then reach the original. Progressive
homepage tails remain readable without JavaScript and reveal on direct anchors
when enhanced. Do not invent projects to fill the section or add filters/carousels.

## Resources

Prefer actual interface captures; inspect originals for dimensions, legibility and
sensitive data. Capture only authorized isolated demo data. Preserve UI language;
localize alt text and captions. Store originals under `public/images/projects/<id>/`.
The project cover is a static presentation image, without a link, zoom control
or modal. Only additional gallery images share `ImageLightbox` and `ImageGallery`
with professional contributions: native modal, Escape, close control, backdrop, inert background,
scroll locking, restored focus and a native original-image link without JavaScript.

When supplied, inspect video content, duration, dimensions and audio before adding
it. Prefer reasonably sized MP4/WebM under `public/videos/projects/<id>/` or an
explicit external URL, native controls, `preload="none"`, no autoplay and a real
poster when available. Add captions/transcript for meaningful audio. Place video
near the beginning of the case page. Keep public captions focused on its content,
without duration, language or file-format badges. Do not generate footage, invent a URL or show an empty player.
Omit absent optional resources. External web links open separately with
`rel="noopener noreferrer"` and a localized accessible indication.

## Verification and invocation

Follow README's npm lint, typecheck, build and relevant Playwright checks. Review
both languages/themes at 320/390/768/1024/1440, keyboard/focus, reduced motion,
localized case routes/metadata, direct and legacy topic fragments, language
switching, Back/Forward, return navigation and no-JavaScript reading.
Check media loading, modal dismissal/focus, resource links and optional video.
Test changed tail behavior with multiple records without publishing fixtures.
Types do not replace editorial parity and attribution review.

```text
$add-personal-project Add this repository: <URL>. I built it because ...
$add-personal-project Update order-returns-manager with these lessons and captures: ...
$add-personal-project Prepare a proposal only from these incomplete notes: ...
```

The [local skill](../../.agents/skills/add-personal-project/SKILL.md) reads this
standard. Like add-contribution, it is authored locally; do not invent an external
source/hash in `skills-lock.json`. Preserve that file's external installation records.
Validate skill metadata and links on workflow changes. Report changes, checks and
factual gaps. Preserve branch, commit, push and deployment authorization boundaries.
