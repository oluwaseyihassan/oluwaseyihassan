import { experience } from '../data/content'

export function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="shell">
        <header className="section-head">
          <p className="section-index">
            <span>03</span> Experience
          </p>
          <p className="section-aside">Remote-first since 2023</p>
        </header>

        <div className="exp-layout">
          <div className="exp-intro">
            <h2 id="experience-title" className="section-title reveal">
              Four years,
              <br />
              <em>shipped.</em>
            </h2>
            <p className="reveal">
              I’ve worked as a founder, a freelancer and an intern. The through-line
              is the same: get close to the problem, then own the build.
            </p>
            <a className="link-arrow reveal" href="/Oluwaseyi-Hassan-Resume.pdf" download>
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="jobs">
            {experience.map((job, index) => (
              <article
                className="job reveal"
                key={`${job.company}-${job.period}`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="job-top">
                  <span className="job-period">{job.period}</span>
                  <span className="job-place">{job.place}</span>
                </div>
                <h3>{job.role}</h3>
                <p className="job-company">
                  {job.href ? (
                    <a href={job.href}>{job.company}</a>
                  ) : (
                    <span>{job.company}</span>
                  )}
                </p>
                <ul className="job-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="education reveal">
          <span className="education-label">Education</span>
          <p>
            <strong>B.Sc. Electronic & Electrical Engineering</strong>
            <span>Obafemi Awolowo University — 2026</span>
          </p>
        </div>
      </div>
    </section>
  )
}
