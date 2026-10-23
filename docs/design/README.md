# Portfolio design

The current design uses Onest, a graphite/terracotta palette and light/dark
appearance. The reading order is Hero → About → Experience → Projects → Contributions → Contact.
Public copy and professional facts remain in the typed bilingual dictionaries;
the layout lives in `components/` and `app/globals.css`.

## Hierarchy and layout

- The hero keeps a general introduction, a two-line headline on wide screens and
  a large 4:5 portrait with subtly rounded corners. Preserve the original photograph
  and responsive framing.
- The sticky header keeps language, appearance, CV and native mobile navigation
  controls, with the `hr.` wordmark.
- About, Experience, Projects, Contributions and Contact are numbered 01–05. Numbers are
  decorative and do not repeat inside capabilities, the case index or stories.
- The AI approach and team-value panels use accent-soft surfaces and a terracotta
  edge. Skill groups use headings, rules and tags without proficiency ratings.
- Three professional contribution overviews remain initially visible. Their index
  links to stable anchors; a native View all contributions group exposes the
  remaining index and complete stories in editorial order; cards change border/background on hover without underlining.
- Case headings span the story width. Vertical diagram stages give text enough
  room, with the accent border and fill applied to the emphasized node itself.
  Two-capability lists use two equal columns, then stack on mobile.
- Contact has one email action, the localized CV and social links. Do not duplicate
  the action with a large email address.

## Links and disclosure controls

Technical details use native `details/summary`, styled with terracotta, pointer
cursors and directional arrows that turn downward when open. Hover and keyboard
focus make the controls identifiable. Supporting
documentation appears as a vertical list in the primary text color, with underline
and an external-link icon, so links are distinct from expandable controls. All
external web links open in a new tab with `rel="noopener noreferrer"`.

Wallet screenshots use a compact three-column gallery, two columns on tablets and
one on mobile. Images remain uncropped. Enlargement preserves the existing native
modal: caption, icon-only close button with a localized accessible label, Escape,
backdrop dismissal, keyboard containment, scroll locking and restored focus. Native
image links remain a fallback without JavaScript.

## Personal projects

Homepage entries use a short image/summary overview, selected technologies, a
focused engineering question and a View project link. Covers
are static and never open a modal. Desktop overview columns stack below 800px.
Up to three projects appear initially; further records use View all projects.

Each entry links to its localized case page. A prominent heading and brief purpose
lead into the optional native video, followed by grouped context, solution,
decisions, participation, results/lessons and evidence. The article uses bounded
reading widths and a sticky side index on desktop; below 800px the index becomes a
wrapped list above the content. Return links lead to the same portfolio entry.
Supporting documentation at the end is a vertical primary-text underlined list.
Additional gallery images retain the existing accessible image modal.

Keep labels useful: omit video duration, reading-time estimates, codec/resolution
badges and internal release/task details. The native player has manual controls,
preload none and playsinline; it never autoplays. Use an actual poster and a
localized caption explaining the demonstrated behavior. Preserve the supplied
footage rather than recreating its interface.

## Maintenance and review

Follow the [contribution workflow](../contributions/README.md) for case updates.
Review both languages, appearances and desktop/mobile layouts using the
[verification guidance](../verification.md). Keep visible focus, keyboard access,
reduced motion and readable server-rendered content.

`contribution-options.html` is a standalone exploration artifact, outside the
deployed site. The components, typed content and this guidance describe the
maintained design; the exploration is not the implementation specification.
