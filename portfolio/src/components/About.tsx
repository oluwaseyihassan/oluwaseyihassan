import { profile, stack } from '../data/content'

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="shell">
        <header className="section-head">
          <p className="section-index">
            <span>04</span> About
          </p>
          <p className="section-aside">The short version</p>
        </header>

        <div className="about-grid">
          <div className="about-story">
            <h2 id="about-title" className="about-title reveal">
              Football brought me to software.{' '}
              <em>Shipping kept me here.</em>
            </h2>

            <p className="reveal">
              I’m a software engineer based in Osun, Nigeria. I got into programming
              through football: the tournaments around me ran on WhatsApp screenshots
              and paper tables, so I started building the tools I wanted to use.
            </p>

            <blockquote className="pull-quote reveal">
              “Boring infrastructure, interesting product.”
            </blockquote>

            <p className="reveal">
              That became ParaScores, where I own the whole stack: the schema, the API,
              the UI, payments, deployment and the unglamorous parts in between. I care
              about how an interface feels on a 3G connection, and how a payment fails
              gracefully when the network drops.
            </p>
            <p className="reveal">
              Before ParaScores I freelanced and interned at HNG Tech. I’m finishing a
              degree in Electronic & Electrical Engineering at Obafemi Awolowo
              University, and I’m looking for a remote team where I can own meaningful
              product surface.
            </p>
            <p className="signature reveal">— Oluwaseyi</p>
          </div>

          <aside className="about-side">
            <div className="now">
              <p className="mono-label">Currently</p>
              <ul>
                <li>
                  <span className="bullet" aria-hidden="true" />
                  Building ParaScores, full-time
                </li>
                <li>
                  <span className="bullet" aria-hidden="true" />
                  Open to remote full-stack roles
                </li>
                <li>
                  <span className="bullet" aria-hidden="true" />
                  Going deeper on distributed systems
                </li>
              </ul>
            </div>

            <div className="stack-block">
              <p className="mono-label">Toolkit</p>
              <dl className="stack-list">
                {stack.map((group) => (
                  <div key={group.label}>
                    <dt>{group.label}</dt>
                    <dd>{group.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="interests">
              <p className="mono-label">Interests</p>
              <p>
                Distributed systems, real-time event streams, performance profiling and
                sports analytics.
              </p>
              <p className="about-location">
                {profile.location} · UTC+1
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
