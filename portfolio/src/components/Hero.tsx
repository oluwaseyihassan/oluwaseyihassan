import type { CSSProperties } from 'react'
import { profile, stats } from '../data/content'

function delay(ms: number): CSSProperties {
  return { transitionDelay: `${ms}ms` }
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal">
              <span className="status-dot" aria-hidden="true" />
              Software engineer — {profile.location} · UTC+1
            </p>

            <h1 id="hero-title" className="reveal" style={delay(60)}>
              <span className="line">I build software</span>
              <span className="line">
                <em>people actually use</em>
                <span className="period">.</span>
              </span>
            </h1>

            <p className="hero-lede reveal" style={delay(140)}>
              I’m Oluwaseyi, a product-minded engineer with four years of TypeScript
              experience. I founded <a href={profile.parascores}>ParaScores</a>, a live
              tournament platform used by <strong>~500 players, organizers and fans</strong>{' '}
              across <strong>20+ competitions</strong> — and built every layer of it myself.
            </p>

            <div className="hero-actions reveal" style={delay(220)}>
              <a className="link-arrow" href="#work">
                See selected work
                <span aria-hidden="true">↓</span>
              </a>
              <a className="link-quiet" href="/Oluwaseyi-Hassan-Resume.pdf" download>
                Résumé <span aria-hidden="true">↓</span>
              </a>
              <a className="link-quiet" href="#contact">
                Get in touch
              </a>
            </div>
          </div>

          <aside className="field-card reveal" style={delay(280)} aria-label="At a glance">
            <div className="field-head">
              <span>At a glance</span>
              <span>№ 01</span>
            </div>
            <dl>
              <div className="field-row">
                <dt>Currently</dt>
                <dd>
                  Founder & sole engineer,{' '}
                  <a href={profile.parascores}>ParaScores</a>
                </dd>
              </div>
              <div className="field-row">
                <dt>Focus</dt>
                <dd>Real-time systems, APIs and product engineering</dd>
              </div>
              <div className="field-row">
                <dt>Working with</dt>
                <dd>TypeScript, NestJS, Nuxt, PostgreSQL, Redis</dd>
              </div>
              <div className="field-row">
                <dt>Status</dt>
                <dd className="availability">
                  <span className="status-dot" aria-hidden="true" />
                  Remote roles & select contract work
                </dd>
              </div>
            </dl>
            <p className="field-note">
              Sole engineer from the database schema to the 404 page.
            </p>
          </aside>
        </div>

        <dl className="stats">
          {stats.map((stat, index) => (
            <div className="stat reveal" style={delay(index * 70)} key={stat.label}>
              <dt className="stat-label">{stat.label}</dt>
              <dd className="stat-value">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
