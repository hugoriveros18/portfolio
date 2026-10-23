import Image from 'next/image'
import type { ProjectsContent } from '@/content/projects/types'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { ProjectResourceLinks } from '@/components/ui/ProjectResourceLinks'
import { Icon } from '@/components/ui/Icon'

type Project = ProjectsContent['entries'][number]

export function ProjectStudy({ entry, text }: { entry: Project; text: ProjectsContent }) {
  const anchor = `project-${entry.id}`
  const resources = entry.resources
  const video = resources?.video
  const ai = entry.solution.aiAssistance
  const hasEvidence = Boolean(entry.results.validation?.length || resources?.gallery || resources?.documentation?.length)
  const chapters = [
    ...(video ? [{ id: 'video', label: text.videoLabel }] : []),
    { id: 'context', label: text.contextLabel },
    { id: 'solution', label: text.solutionLabel },
    ...(entry.decisions.length ? [{ id: 'decisions', label: text.decisionsLabel }] : []),
    { id: 'participation', label: text.participationLabel },
    { id: 'results', label: text.resultsLabel },
    ...(hasEvidence ? [{ id: 'validation', label: text.validationLabel }] : []),
  ]

  return (
    <article className="project-case" id={`${anchor}-study`} aria-labelledby={`${anchor}-heading`}>
      <header className="project-case-header">
        <p className="eyebrow">{entry.category}{entry.status ? ` · ${entry.status}` : ''}</p>
        <h1 id={`${anchor}-heading`}>{entry.name}</h1>
        <p className="project-case-lead">{entry.summary}</p>
        <ul className="tags">{entry.featuredTechnologies.map((name) => <li key={name}>{name}</li>)}</ul>
        <ProjectResourceLinks resources={resources} text={text} />
      </header>
      <div className="project-case-layout">
        <nav className="project-case-index" aria-label={text.indexLabel}>
          <p className="eyebrow">{text.indexLabel}</p>
          {chapters.map((chapter) => <a key={chapter.id} href={`#${anchor}-${chapter.id}`}>{chapter.label}</a>)}
        </nav>
        <div className="project-case-copy">
          {video ? (
            <section aria-labelledby={`${anchor}-video`}>
              <h2 id={`${anchor}-video`}>{text.videoLabel}</h2>
              <figure className="project-video">
                <video controls playsInline preload="none" poster={video.poster} aria-label={text.videoLabel} aria-describedby={`${anchor}-video-caption`}>
                  <source src={video.src} type="video/mp4" />
                  {video.captions?.map((track) => <track key={track.src} kind="captions" src={track.src} srcLang={track.language} label={track.label} />)}
                </video>
                <figcaption id={`${anchor}-video-caption`}>{video.caption}</figcaption>
                {video.transcript ? <details><summary>{text.transcriptLabel}</summary><p>{video.transcript}</p></details> : null}
              </figure>
            </section>
          ) : resources?.cover ? (
            <figure className="project-cover">
              <Image src={resources.cover.src} width={resources.cover.width} height={resources.cover.height} alt={resources.cover.alt} sizes="(max-width: 800px) 100vw, 70vw" />
              <figcaption>{resources.cover.caption}</figcaption>
            </figure>
          ) : null}
          <section aria-labelledby={`${anchor}-context`}>
            <h2 id={`${anchor}-context`}>{text.contextLabel}</h2>
            {entry.context.motivation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p>{entry.context.problemOrHypothesis}</p>
            <div className="project-focus"><p className="eyebrow">{text.focusLabel}</p><p>{entry.focus}</p></div>
            <h3>{text.objectivesLabel}</h3>
            <ul className="project-bullets">{entry.context.objectives.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section aria-labelledby={`${anchor}-solution`}>
            <h2 id={`${anchor}-solution`}>{text.solutionLabel}</h2>
            <p>{entry.solution.overview}</p>
            <ul className="project-capabilities">
              {entry.solution.capabilities.map((item) => <li key={item.id}><h3 id={`${anchor}-${item.id}`}>{item.title}</h3><p>{item.description}</p></li>)}
            </ul>
          </section>
          {entry.decisions.length ? (
            <section aria-labelledby={`${anchor}-decisions`}>
              <h2 id={`${anchor}-decisions`}>{text.decisionsLabel}</h2>
              {entry.decisions.map((decision) => (
                <div key={decision.id} className="project-decision">
                  <h3 id={`${anchor}-${decision.id}`}>{decision.title}</h3>
                  <p>{decision.constraint}</p><p>{decision.choice}</p>
                  {decision.alternatives?.length ? <><h4>{text.alternativesLabel}</h4><ul className="project-bullets">{decision.alternatives.map((item) => <li key={item}>{item}</li>)}</ul></> : null}
                  <h4>{text.tradeoffsLabel}</h4>
                  <ul className="project-bullets">{decision.tradeoffs.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </section>
          ) : null}
          <section aria-labelledby={`${anchor}-participation`}>
            <h2 id={`${anchor}-participation`}>{text.participationLabel}</h2>
            <p>{entry.solution.participation}</p>
            {ai ? <><p>{ai.use}</p><p>{ai.humanReview}</p><ul className="tags">{ai.tools.map((name) => <li key={name}>{name}</li>)}</ul></> : null}
            <h3 id={`${anchor}-engineering`}>{text.engineeringLabel}</h3>
            <ul className="project-engineering">
              {entry.solution.engineering.map((item) => <li key={item.id}><h4 id={`${anchor}-${item.id}`}>{item.title}</h4><p>{item.behavior}</p></li>)}
            </ul>
            <ul className="tags">{entry.solution.technologies.map((name) => <li key={name}>{name}</li>)}</ul>
          </section>
          <section aria-labelledby={`${anchor}-results`}>
            <h2 id={`${anchor}-results`}>{text.resultsLabel}</h2>
            {entry.results.observed.map((item) => <p key={item}>{item}</p>)}
            {entry.results.challenges?.length ? <><h3>{text.challengesLabel}</h3><ul className="project-bullets">{entry.results.challenges.map((item) => <li key={item}>{item}</li>)}</ul></> : null}
            <h3 id={`${anchor}-lessons`}>{text.lessonsLabel}</h3>
            <ul className="project-bullets">{entry.results.lessons.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          {hasEvidence ? (
            <section aria-labelledby={`${anchor}-validation`}>
              <h2 id={`${anchor}-validation`}>{text.validationLabel}</h2>
              {entry.results.validation?.length ? (
                <ul className="project-validation">
                  {entry.results.validation.map((item) => <li key={item.id} id={`${anchor}-${item.id}`}><p>{item.description}</p>{item.limitation ? <p>{item.limitation}</p> : null}</li>)}
                </ul>
              ) : null}
              {resources?.gallery ? <ImageGallery gallery={resources.gallery} imageAction={text.imageAction} imageClose={text.imageClose} headingLevel="h3" /> : null}
              {resources?.documentation?.length ? (
                <div className="contribution-references project-documentation" id={`${anchor}-resources`}>
                  <h3>{text.resourcesLabel}</h3>
                  <ul>
                    {resources.documentation.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}<Icon name="arrow-up-right" /><span className="sr-only"> ({text.externalLinkLabel})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>
          ) : null}
        </div>
      </div>
    </article>
  )
}
