import { companies } from '../career'
import { contributionIds, type ContributionId, type ProfessionalContribution } from './types'

const contributions: Record<ContributionId, ProfessionalContribution> = {
  yunex: {
    name: 'Yunex',
    company: companies.yuno.name,
    headline: 'Specialist knowledge, working for the whole team.',
    summary:
      'I designed and built an AI-assisted tool for the Yuno–VTEX integration: shared answers and incident investigation, automated knowledge updates and post-deployment monitoring. Engineers used it in the terminal; colleagues across the company accessed its question-and-investigation agent in Slack.',
    ownership: 'Self-initiated · Design, implementation and continuous evaluation',
    impact:
      'The team gained direct access to integration knowledge, reducing dependency on a single specialist. Daily update proposals helped keep that knowledge current, while shared deployment reports gave the team visibility into production behavior. Colleagues reported saving time, and I observed considerably fewer direct questions.',
    capabilities: [
      {
        id: 'investigation',
        title: 'Answers and incident investigation',
        description:
          'Relevant knowledge, current code, Datadog logs, documentation and Jira context supported product questions and on-call investigations. The agent could state uncertainty and ask for missing information.',
      },
      {
        id: 'knowledge',
        title: 'Automated knowledge maintenance',
        description:
          'A daily Claude Routine collected product changes and incidents, proposed knowledge-base updates in a pull request and notified Slack for team review and approval.',
      },
      {
        id: 'monitoring',
        title: 'Post-deployment monitoring',
        description:
          'A locally executed skill reviewed production Datadog logs for one hour after a deployment, posting assessments every five minutes in Slack so the team could review findings and act.',
      },
    ],
    diagram: {
      caption: 'Conceptual view · access and investigation',
      stages: [
        {
          id: 'access',
          nodes: [
            { title: 'Team terminal', description: 'Existing Claude plugin' },
            { title: 'Company Slack', description: 'Internal company agent' },
          ],
        },
        {
          id: 'investigation',
          emphasized: true,
          nodes: [{ title: 'Yunex', description: 'Shared questions and investigation' }],
        },
        {
          id: 'sources',
          nodes: [
            { title: 'Knowledge base' },
            { title: 'Current code' },
            { title: 'Datadog logs' },
            { title: 'Documentation + Jira' },
          ],
        },
      ],
      description:
        'Both access channels used the same knowledge foundation. Knowledge maintenance and deployment monitoring were additional team workflows, with updates and reports shared in Slack.',
    },
    details: [
      {
        id: 'context',
        title: 'The problem and my contribution',
        paragraphs: [
          'Questions from TAMs, KAMs, PMs and engineers repeatedly depended on my SDK context and VTEX experience. Requests and on-call investigations competed with sprint work, and even simple questions could wait for my availability.',
          'I initiated and implemented Yunex end to end. I consolidated six months of tasks, discussions, documentation and incident history, cross-checked conflicting information and organized the knowledge into Markdown topic modules.',
          'I added Yunex to the existing Core Checkout Claude plugin and used the AI team’s company-agent platform to make questions and investigations accessible through Slack. The terminal workflow could also support engineers implementing sprint features.',
        ],
      },
      {
        id: 'decisions',
        title: 'Decisions behind the workflows',
        paragraphs: [
          'I chose shared access over a personal assistant so requests could reach the knowledge directly. Engineers kept a terminal workflow; nontechnical colleagues could use Slack without learning another interface.',
          'Conceptual questions started with relevant knowledge modules and targeted code checks. Incident investigations relied more heavily on current code and Datadog logs. Selecting sources according to the question was intended to avoid unnecessary retrieval and token use.',
          'Knowledge-update collection and proposal creation ran daily, while acceptance remained a human review step. Monitoring ran locally and reported its assessments to a shared Slack channel, giving the team visibility and a trace of the deployment review.',
        ],
      },
      {
        id: 'validation',
        title: 'Evaluation and continuous refinement',
        paragraphs: [
          'I compared responses with previously resolved questions and incidents, asked the agent not to use historical answers during those exercises and added new evaluation scenarios. I also supervised initial company-wide responses for correctness, freshness and possible hallucinations.',
          'The agent was instructed not to invent information, to communicate high, medium or low confidence in hypotheses and to request more context when needed. I personally investigated unresolved cases and refined the workflow based on missing information or an unsuitable investigation path.',
          'Colleagues increasingly came to me to validate an existing answer, which required less effort than handling the whole request. Nontechnical colleagues also reported saving time by clarifying questions directly in Slack.',
        ],
      },
      {
        id: 'incident',
        title: 'In practice: investigating order cancellations',
        paragraphs: [
          'Merchants reported order cancellations attributed to the plugin. Colleagues used Yunex to investigate and inspect logs, identifying intermittent VTEX API failures that prevented some payments from completing.',
          'The investigation helped distinguish an upstream platform failure from an error originating in the plugin, giving the team a clearer explanation of the reported behavior.',
        ],
      },
    ],
  },
}

export const contributionsEn = contributionIds.map((id) => ({ id, ...contributions[id] }))
