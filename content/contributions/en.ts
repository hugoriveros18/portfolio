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
  'wallet-enhanced-experience': {
    name: 'Enhanced wallet checkout',
    company: companies.yuno.name,
    headline: 'Wallet payments, directly in checkout.',
    summary:
      'I designed and implemented the checkout extension and Payment Connector changes that brought Apple Pay, Google Pay and Samsung Pay directly into VTEX’s payment step. Shoppers could open their wallet without an intermediate Payment App screen, and merchants chose when to enable the experience. I later extended it with installments.',
    ownership: 'Technical design · Checkout application · Payment Connector',
    impact:
      'Shoppers gained a more direct wallet experience. Yuno could offer merchants an additional integration option, which was positively received and adopted by some stores. Supporting connector capabilities also enabled reuse in merchant-controlled frontends and mobile applications.',
    capabilities: [
      {
        id: 'direct-checkout',
        title: 'Direct entry, optional adoption',
        description:
          'The selected wallet’s button appeared inside checkout, replacing the generic pay action for that flow. Merchants enabled it through configuration, while stores keeping their existing setup continued using the earlier experience.',
      },
      {
        id: 'installments',
        title: 'Installments as the next step',
        description:
          'After delivering direct wallet buttons, I added the changes needed to support installment payments. The checkout could show available plans and financing details alongside the wallet payment action.',
      },
      {
        id: 'connector',
        title: 'Reusable payment integration',
        description:
          'I connected wallet tokenization to VTEX authorization through the Payment Connector. The exposed capabilities also supported merchants implementing their own checkout or mobile interfaces.',
      },
    ],
    comparison: {
      caption: 'Shopper journey · conceptual comparison',
      paths: [
        {
          id: 'previous',
          title: 'Previous experience',
          steps: [
            'Select a wallet',
            'Press VTEX’s generic pay button',
            'Open the intermediate Payment App',
            'Press the wallet’s pay button',
            'Confirm inside the wallet',
          ],
        },
        {
          id: 'enhanced',
          title: 'Enhanced experience',
          emphasized: true,
          steps: [
            'Select a wallet',
            'Press its button inside checkout',
            'Confirm inside the wallet',
          ],
        },
      ],
      description:
        'The change removes the intermediate screen and an additional payment-launch action. Confirmation inside the wallet remains part of the flow.',
    },
    gallery: {
      title: 'The experience in checkout',
      description: 'Delivered interfaces showing direct wallet entry and installment selection.',
      images: [
        {
          id: 'google-pay',
          src: '/images/contributions/wallet-checkout/google-pay-1.avif',
          width: 684,
          height: 323,
          modalMaxWidth: 718,
          alt: 'Google Pay selected in VTEX, with its payment button embedded in the payment-method area. Original interface in Portuguese.',
          caption: 'Google Pay: open the wallet from the checkout payment step.',
        },
        {
          id: 'apple-pay',
          src: '/images/contributions/wallet-checkout/apple-pay-3.avif',
          width: 1364,
          height: 990,
          alt: 'Apple Pay checkout showing a four-installment plan, financing details and the Apple Pay button. Original interface in Portuguese.',
          caption: 'Apple Pay: installment selection and financing details.',
        },
        {
          id: 'samsung-pay',
          src: '/images/contributions/wallet-checkout/samsung-pay-1.avif',
          width: 693,
          height: 714,
          alt: 'Samsung Pay checkout with an installment selector, financing details and its payment button. Original interface in Portuguese.',
          caption: 'Samsung Pay: the enhanced experience with installments.',
        },
      ],
    },
    details: [
      {
        id: 'context',
        title: 'The problem and my contribution',
        paragraphs: [
          'Product wanted to improve a fragmented wallet experience: shoppers pressed VTEX’s generic pay button, waited for Yuno’s Payment App and then pressed another button to open the wallet.',
          'VTEX controlled the checkout core and payment sequence. Drawing on checkout customizations I had implemented at ITGlobers, I identified a viable approach using VTEX’s checkout-script extension mechanism.',
          'I designed and built the injected application and supporting Payment Connector changes and endpoints. The application detected wallet selection, hid the generic VTEX button and rendered the wallet’s button within its payment-method area.',
        ],
      },
      {
        id: 'payment-flow',
        title: 'How wallet interaction connects to payment creation',
        paragraphs: [
          'Completing the wallet interaction generated a One Time Token (OTT) through Yuno’s SDK. At that stage the payment had not been created. The application sent the token to the Payment Connector, which stored it in VBase.',
          'The application then initiated VTEX authorization. When VTEX called the connector, it retrieved the OTT and used it to create the payment in Yuno and return the resulting status. Rejected payments kept the shopper at the payment step; successful payments proceeded to Order Placed.',
        ],
        diagram: {
          caption: 'Technical flow · tokenization before payment creation',
          stages: [
            {
              id: 'tokenize',
              nodes: [{ title: 'Wallet interaction → OTT', description: 'Yuno’s SDK generates the token; no payment exists yet.' }],
            },
            {
              id: 'store',
              nodes: [{ title: 'Application → Payment Connector', description: 'The connector stores the OTT in VBase.' }],
            },
            {
              id: 'authorize',
              nodes: [{ title: 'VTEX authorization → Payment Connector', description: 'The connector retrieves the OTT.' }],
            },
            {
              id: 'create-payment',
              emphasized: true,
              nodes: [{ title: 'Create payment in Yuno', description: 'Return its status to VTEX and continue checkout.' }],
            },
          ],
          description:
            'Wallet interaction happens earlier in checkout, while payment creation remains part of the connector’s response to VTEX authorization.',
        },
      },
      {
        id: 'evolution',
        title: 'Compatibility and the installment extension',
        paragraphs: [
          'Each merchant could opt in through a small checkout configuration. The previous Payment App flow continued to work for stores that kept their existing setup, making adoption a choice rather than a forced migration.',
          'The initial delivery focused on direct wallet buttons. In a subsequent phase, I implemented the changes required for installment payments. Both phases formed part of the same contribution.',
        ],
      },
      {
        id: 'validation',
        title: 'Validation and merchant adoption',
        paragraphs: [
          'I tested the different wallets in Yuno’s VTEX development account, covering approved and rejected payments and error scenarios. During development, I added and inspected Datadog logs to trace the data flow and identify failures at different steps.',
          'Merchants welcomed the additional integration option, and some migrated to it. The improvement was visible in the interaction itself: shoppers reached their wallet directly from the checkout payment step.',
        ],
      },
      {
        id: 'headless',
        title: 'Beyond the native VTEX checkout',
        paragraphs: [
          'The connector changes and endpoints also enabled merchants to reuse the integration in headless frontends and mobile applications communicating with VTEX through its APIs.',
          'Those merchants controlled their own interface and implementation instead of injecting the native-checkout script. My contribution was the supporting integration capability; the merchant teams built their own applications and UI.',
        ],
      },
    ],
    references: [
      {
        label: 'Yuno · Wallet enhanced experience',
        href: 'https://docs.y.uno/docs/plugins/vtex/apple-pay-google-pay-enhanced-experience',
      },
      {
        label: 'VTEX · Payment App integration model',
        href: 'https://developers.vtex.com/docs/guides/payments-integration-payment-app',
      },
    ],
  },
  'vtex-split-orders': {
    name: 'Multi-seller card payments',
    company: companies.yuno.name,
    headline: 'Card payments across multiple sellers.',
    summary:
      'I designed and implemented Payment Connector support for card purchases split into seller suborders in VTEX. The connector reused shared antifraud session context to process subsequent payments on the server when the Payment App could not be reopened.',
    ownership: 'Technical design · Payment Connector implementation · Integration testing',
    impact:
      'This delivery unblocked a major Brazilian marketplace’s migration of payment traffic to Yuno. It also removed an integration gap that could prevent other merchants operating with multiple sellers from choosing Yuno.',
    capabilities: [
      {
        id: 'shared-context',
        title: 'One purchase, shared antifraud context',
        description:
          'The connector linked seller suborders through their shared purchase reference and retrieved the existing Yuno record. This kept the browser-collected device context available for subsequent payments.',
      },
      {
        id: 'server-processing',
        title: 'Subsequent payments on the server',
        description:
          'After the first suborder succeeded, the connector could create the remaining payments as VTEX authorized them one at a time, without needing to open the Payment App again.',
      },
    ],
    diagram: {
      caption: 'Conceptual flow · sequential suborders',
      stages: [
        {
          id: 'first-suborder',
          nodes: [{
            title: 'First suborder · browser',
            description: 'Payment App + SDK: device context and 3DS when required',
          }],
        },
        {
          id: 'context-lookup',
          nodes: [{
            title: 'After success · recover context',
            description: 'Find the prior Yuno record using the shared purchase reference',
          }],
        },
        {
          id: 'server-payment',
          emphasized: true,
          nodes: [{
            title: 'Next suborder · server',
            description: 'Reuse the antifraud session context to create its payment',
          }],
        },
        {
          id: 'remaining-suborders',
          nodes: [{
            title: 'Continue one suborder at a time',
            description: 'Repeat the server path for the remaining seller suborders',
          }],
        },
      ],
      description:
        'If the first suborder fails, VTEX cancels the purchase and stops the sequence. Otherwise, subsequent suborders are authorized and processed separately, one after another.',
    },
    details: [
      {
        id: 'context',
        title: 'The marketplace requirement and integration constraint',
        paragraphs: [
          'A major Brazilian marketplace needed card payments across multiple sellers before moving its transaction traffic to Yuno. VTEX split those purchases into suborders and sent a separate authorization for each one.',
          'The existing integration relied on the Payment App and SDK to collect browser context for antifraud checks and handle 3DS when required. Only the first suborder could use that path; later authorizations arrived in seller accounts where the Payment App could not be reopened. Those subsequent suborders could not be processed and were cancelled.',
          'I identified the missing context handoff and implemented the connector changes in full, enabling subsequent payments to be created server-side using the antifraud session associated with the purchase.',
        ],
      },
      {
        id: 'session-correlation',
        title: 'Linking suborders to the browser session',
        paragraphs: [
          'Suborders shared a base purchase reference and used suffixes such as -01 and -02. Before processing an order, the connector checked Yuno for an associated record. For subsequent suborders, it found the information from the same purchase and reused its antifraud session context.',
          'The session identifier lets antifraud services associate each payment with device data collected in the shopper’s browser. Yuno’s documentation describes using the cart’s orderFormId consistently in the browser and connector. This session identifier and the shared purchase reference serve different purposes: device-context correlation and order lookup.',
        ],
      },
      {
        id: 'authorization',
        title: 'Sequential authorization and 3DS',
        paragraphs: [
          'VTEX processed the suborders sequentially. If the first suborder failed, VTEX cancelled the whole purchase. Once it succeeded, later suborders could use the existing purchase context while each payment was processed separately.',
          'When required, 3DS ran on the first suborder. Yuno internally handled the related payments using the same card within that purchase, so the shopper did not repeat the authentication for each seller. My implementation provided the connector-side context reuse for this flow.',
        ],
      },
      {
        id: 'validation',
        title: 'Validating a multi-seller purchase',
        paragraphs: [
          'I configured a Yuno VTEX development store with its own products and products from a test seller in another development account, reproducing the multi-seller scenario.',
          'I checked that the suborders shared the expected antifraud session and that the PSP could process their payments without declining them because that context was missing.',
        ],
      },
    ],
    references: [
      {
        label: 'Yuno · Split orders with multiple sellers',
        href: 'https://docs.y.uno/docs/plugins/vtex/advanced-features#split-orders-multiple-sellers',
      },
      {
        label: 'Yuno · Antifraud session and device fingerprints',
        href: 'https://docs.y.uno/docs/plugins/vtex/advanced-features#antifraud-session-device-fingerprints',
      },
      {
        label: 'VTEX · Payment App integration model',
        href: 'https://developers.vtex.com/docs/guides/payments-integration-payment-app',
      },
    ],
  },
}

export const contributionsEn = contributionIds.map((id) => ({ id, ...contributions[id] }))
