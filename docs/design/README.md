# Contribution presentation

The selected design is option 2: a reusable editorial section after Experience
and before Contact. About comes before Experience. The portfolio implementation lives in
`components/sections/Contributions.tsx` and uses the bilingual records in
`content/contributions/`. Follow the [contribution workflow](../contributions/README.md)
for new cases and editorial refinements.

`contribution-options.html` is a standalone, interactive comparison using the
portfolio's Onest typography and graphite/terracotta palette. It is not a Next.js
route and is not included in the deployed website. The embedded font keeps the
preview independent of network access and generated build paths.

Open the HTML directly, or serve it locally from the repository root:

```bash
python3 -m http.server 3200 --bind 127.0.0.1 --directory docs/design
```

Visit `http://localhost:3200/contribution-options.html`. The preview defaults to
English and option 2, and includes Spanish and light/dark controls. Its layout
adapts to the browser width. Query parameters support reproducible views:
`?variant=2&lang=es&theme=dark`.

| Option | Placement and reading flow | Tradeoff |
| --- | --- | --- |
| 1. Within experience | Yunex is a contribution within Yuno, with a visible summary and outcome and an expandable explanation. | Compact, but less prominent within employment history. |
| 2. Featured editorial story (selected) | A section after Experience and before Contact shows the overview, ownership, team value, an optional conceptual diagram and the complete capability inventory. Context, decisions and validation are expandable. | Makes contributions visible without requiring another page. Reusable records and additional expandable cases support growth. |
| 3. Independent case study | A homepage card links to a full article with section navigation, decisions, validation and outcome. The prototype simulates this navigation locally. | Supports deeper reading and future cases; requires navigation beyond the homepage summary. |

The three options use the same owner-supplied Yunex account. There are no invented
metrics, testimonials, future project cards, screenshots or live agent demos.
Diagrams reconstruct the described workflow and are labelled as conceptual.

The comparison illustrates the three reading structures. The typed public records
and production components are the maintained source for the selected design.
Experience keeps a concise Yunex reference instead of duplicating the case.
