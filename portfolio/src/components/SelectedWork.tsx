import { caseStudy } from '../data/content'
import { ArchitectureMap } from './ArchitectureMap'

export function SelectedWork() {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="shell">
        <header className="section-head">
          <p className="section-index">
            <span>01</span> Selected work
          </p>
          <p className="section-aside">Case study · 2025 to now</p>
        </header>

        <div className="work-intro">
          <h2 id="work-title" className="reveal">
            ParaScores<span className="period">.</span>
          </h2>
          <div className="work-intro-side reveal">
            <p>
              Live tournament software for grassroots football: organizers run the
              competition, fans follow every goal, and the table updates itself.
            </p>
            <dl className="work-meta">
              <div>
                <dt>Role</dt>
                <dd>{caseStudy.role}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{caseStudy.timeline}</dd>
              </div>
              <div>
                <dt>Built with</dt>
                <dd>TypeScript, NestJS, Nuxt 4, PostgreSQL, Redis</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="work-visual reveal">
          <div className="browser">
            <div className="browser-bar">
              <span className="browser-url">
                <span className="browser-dot" aria-hidden="true" />
                parascores.com
              </span>
              <span className="browser-label">Public portal</span>
              <span className="browser-live">
                <span className="browser-live-dot" aria-hidden="true" />
                live
              </span>
            </div>
            <img
              src="/images/parascores-home.webp"
              width="1800"
              height="1125"
              alt="ParaScores home page with recommended football tournaments and live competition cards"
              loading="lazy"
            />
          </div>

          <figure className="phone">
            <img
              src="/images/parascores-mobile.webp"
              width="760"
              height="1645"
              alt="ParaScores on a phone, showing a tournament page and match details"
              loading="lazy"
            />
          </figure>

          <div className="work-caption">
            <span>Fig. 01 — Fan home feed, live competitions</span>
            <span>The portal, built for slow connections</span>
          </div>
        </div>

        <dl className="scoreboard" aria-label="ParaScores by the numbers">
          {caseStudy.scoreboard.map((item) => (
            <div className="score" key={item.label}>
              <dt className="score-label">{item.label}</dt>
              <dd className="score-value">{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="case-grid">
          <div className="case-copy">
            <h3>The problem</h3>
            <p>{caseStudy.problem}</p>

            <h3>What I built</h3>
            <ul>
              {caseStudy.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="case-links">
              <a className="case-link" href={caseStudy.link}>
                Visit parascores.com <span aria-hidden="true">↗</span>
              </a>
              <span className="case-note">Built solo. Still shipping.</span>
            </div>
          </div>

          <ArchitectureMap />
        </div>

        <div className="work-gallery">
          <figure className="reveal">
            <img
              src="/images/parascores-bracket-detail.webp"
              width="1800"
              height="644"
              alt="Knockout bracket on ParaScores showing the round of 16, quarter-finals and semi-finals for the Bull Carabao Cup"
              loading="lazy"
            />
            <figcaption>
              <span>
                <span className="fig-index">Fig. 02</span>
                Knockout bracket — Bull Carabao Cup, hosted at Obafemi Awolowo
                University.
              </span>
              <span className="fig-note">Round of 16 through the final, updated as results land.</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
