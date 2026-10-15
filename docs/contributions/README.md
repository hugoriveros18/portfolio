# Professional contribution workflow

## Purpose and presentation

Professional contributions explain completed work through its problem, individual
ownership, solution, decisions, validation and value for the team or business.
They are not limited to payment integrations or AI tools.

The selected presentation is an editorial section after Experience and before
Contact. The full page order is Hero → About → Experience → Contributions → Contact.
Each case has a stable anchor, visible overview, ownership, team value and core
capabilities. Optional diagrams explain the solution. Native disclosures contain
the deeper context, decisions, validation and practical examples.

Show every substantial capability in the visible capability list. A multi-purpose
tool must not be reduced to its most familiar feature. For Yunex, investigation,
knowledge maintenance and deployment monitoring are three distinct capabilities.
Technical implementation details can expand below those visible summaries.

The first three cases in the shared editorial order receive the full presentation.
Additional cases use named, expandable entries with the same underlying content.
This limits initial page growth without removing access to completed cases. There
are no empty cards, artificial metrics, carousels or filters for a single case.

## Intake

Read existing notes first and ask only for useful information that is missing.
Accept informal Spanish or English answers and group follow-up questions rather
than requiring the owner to complete a long questionnaire at once.

| Area | Information to establish |
| --- | --- |
| Context | The problem, affected users and what happened before the contribution. |
| Ownership | What Hugo initiated, designed, implemented or coordinated; what the team or an existing platform supplied. |
| Complete scope | Every meaningful capability, audience, access channel and supporting workflow. Check automation, maintenance and operational work as well as user-facing features. |
| Decisions | Alternatives, constraints, selection criteria and important tradeoffs. |
| Validation | How behavior was checked, how uncertainty or failure was handled and who reviewed or refined the work. |
| Value | What changed for users, the team or the company; distinguish observed changes from intended benefits. Qualitative outcomes are valid. |
| Supporting material | Optional links, screenshots, diagrams, examples or measurements that add clarity. |
| Editorial preferences | Appropriate naming, useful dates, anonymization and the desired emphasis. |

Do not require exact dates, numerical metrics or original screenshots to explain
a completed contribution. Do not ask again for facts already provided. Keep
unresolved details in working notes and omit unsupported public claims.

## Organize and review

1. Create or update `docs/contributions/<id>.md` in English. Separate confirmed
   facts, personal ownership, qualitative observations and remaining uncertainty.
2. Make an inventory of the whole solution. Map each substantial capability to
   a visible summary or deeper explanation so operational work is not lost.
3. Write a short overview and a team/business value statement. Describe delivered
   capabilities and observed benefits precisely; do not invent revenue, incident
   reductions, time savings, accuracy or token savings.
4. Identify diagrams that clarify the actual solution. They are optional; prefer
   text, HTML or SVG when appropriate. Do not create mock logs, fake screenshots
   or fabricated testimonials.
5. Review the organized narrative with the owner before integrating a new case
   when the session calls for a content-review stage. Preserve authorization and
   any staging preferences already established in the conversation.

Public case copy can state the owner's firsthand professional account directly.
Do not append a generic warning that screenshots, records or other evidence are
unavailable. Add genuine supporting material when available. Retain factual limits
in working notes, and keep the published wording within what the owner can support.

## Add or update a case

1. Add a stable lowercase identifier to `contributionIds` in
   `content/contributions/types.ts`, placing it in the desired editorial order.
2. Add the same record to `content/contributions/en.ts` and `es.ts`. TypeScript
   requires both language records for every shared identifier. Reuse company
   names from `content/career.ts` when appropriate.
3. Populate the common `ProfessionalContribution` contract:
   - `name`, `company`, `headline`, `summary` and `ownership` establish context.
   - `impact` explains team or business value, with precise attribution for
     qualitative observations.
   - `capabilities` lists the meaningful parts of the solution, using stable IDs.
   - `details` contains expandable context, decisions, validation or examples.
   - `diagram`, when useful, describes generic stages and nodes; it is not tied
     to Yunex, an AI assistant, Slack or a particular industry.
   - `comparison`, when useful, describes labelled paths with ordered steps,
     such as a before/after shopper journey. Keep detailed payment mechanics
     separate from the overview when they require more context.
   - `gallery` contains optional original screenshots with intrinsic dimensions,
     localized captions and alternative text. Preserve the supplied images and
     provide full-size access through the shared modal rather than requiring
     visitors to read thumbnails. Keep native image links as a no-JavaScript fallback.
     Set an image's optional `modalMaxWidth` (CSS pixels, including the dialog
     frame) when its resolution requires a smaller presentation on wide screens.
   - A detail entry may include its own `diagram`, rendered inside the native
     disclosure for technical depth without lengthening the initial overview.
   - `references` is optional and contains only real, suitable links. Omitting
     it produces no empty supporting-material area or absence notice. Supporting
     documentation opens in a new tab with a localized accessible indication.
4. Keep capability IDs, detail IDs and diagram-stage IDs aligned across languages.
   The case anchor is `#contribution-<id>`; the section anchor is `#contributions`.
5. The shared `Contributions` component renders the records. Adding an ordinary
   case does not require a new route, conditional markup or a special component.
   Introduce a new visual form only when the case genuinely needs it.
6. Keep the corresponding experience entry concise. Link or refer to the case
   rather than repeating its complete explanation. About describes the broader
   engineering approach.

Section-level labels live in `content/en.ts` and `es.ts`. The generic diagram and
story rendering live in `components/ui/ContributionDiagram.tsx` and
`components/sections/Contributions.tsx`; styles are in `app/globals.css`.

## Verification

Run lint, type checking, a production build and relevant browser flows as described
in README. Review English and Spanish in light/dark appearance, desktop/mobile,
and with JavaScript disabled. Check navigation, disclosure keyboard access, stable
anchors, optional material, company attribution and the full capability inventory.
When the list grows past three entries, check access to the additional cases.

## Case material

| Case | Source notes | Public status |
| --- | --- | --- |
| Yunex | [Working notes](yunex.md) | Integrated in both languages. |
| Direct wallet checkout on VTEX | [Source notes](wallet-enhanced-experience.md) | Integrated in both languages, including the flow comparison, technical detail and original screenshots. |

## Repository skill

Invoke `$add-contribution` in Codex to use the
[repository-scoped skill](../../.agents/skills/add-contribution/SKILL.md). It reads
this workflow as the source of truth, inspects the existing content contract and
relevant notes, asks targeted questions, organizes the complete case, prepares
both public languages and verifies the integrated result within the session's
authorized scope. It is instruction-only; add scripts only when repeated work
demonstrates a concrete need.

Maintain general rules here and the short skill procedure in its entry point,
without duplicating the standard or hardcoding Yunex's technologies. Refine both
from demonstrated corrections as new cases are added; changes are explicit Git
edits, not automatic learning from conversations.

Codex supports repository skills under `.agents/skills` and personal skills under
`~/.agents/skills`. Repository scope fits this portfolio-specific procedure and
keeps it available with a clone of the project. Personal scope is more suitable
if the workflow later becomes useful across unrelated repositories. See the
[official skill documentation](https://learn.chatgpt.com/docs/build-skills).
