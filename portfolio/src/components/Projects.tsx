import { useState } from 'react'
import { profile, projects } from '../data/content'

export function Projects() {
  const [openProject, setOpenProject] = useState<string | null>(projects[0].id)

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="shell">
        <header className="section-head">
          <p className="section-index">
            <span>02</span> Other builds
          </p>
          <p className="section-aside">Side projects & client work</p>
        </header>

        <div className="projects-head">
          <h2 id="projects-title" className="reveal">
            Smaller builds, <em>same care.</em>
          </h2>
          <p className="reveal">
            Side projects and client work. The common thread: I wanted to know how a
            thing worked, so I built one.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => {
            const isOpen = openProject === project.id
            const panelId = `project-panel-${project.id}`
            const triggerId = `project-trigger-${project.id}`

            return (
              <article
                className="project reveal"
                data-open={isOpen}
                key={project.id}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <button
                  className="project-trigger"
                  id={triggerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenProject(isOpen ? null : project.id)}
                >
                  <span className="project-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="project-name">{project.name}</span>
                  <span className="project-summary">{project.summary}</span>
                  <span className="project-year">{project.year}</span>
                  <span className="project-tech">
                    {project.stack} · {project.year}
                  </span>
                  <span className="project-toggle" aria-hidden="true">
                    +
                  </span>
                </button>

                <div
                  className="project-panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className="project-panel-inner">
                    <div className="project-detail">
                      <div className="project-detail-copy">
                        <p>{project.details}</p>
                        {project.link ? (
                          <a className="text-underlined" href={project.link}>
                            View live site <span aria-hidden="true">↗</span>
                          </a>
                        ) : (
                          <span className="project-private">Personal build</span>
                        )}
                      </div>
                      <dl className="project-facts">
                        <div>
                          <dt>Stack</dt>
                          <dd>{project.stack}</dd>
                        </div>
                        <div>
                          <dt>Year</dt>
                          <dd>{project.year}</dd>
                        </div>
                        {project.linkLabel && (
                          <div>
                            <dt>Live at</dt>
                            <dd>{project.linkLabel}</dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="projects-footer reveal">
          <p>More experiments and client work live on GitHub.</p>
          <a className="link-arrow" href={profile.github}>
            github.com/oluwaseyihassan <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
