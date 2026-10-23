import { useEffect, useState } from 'react'
import { profile } from '../data/content'

function copyWithFallback(text: string) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text)
  }

  const field = document.createElement('textarea')
  field.value = text
  field.setAttribute('readonly', '')
  field.style.position = 'fixed'
  field.style.opacity = '0'
  document.body.appendChild(field)
  field.select()
  document.execCommand('copy')
  document.body.removeChild(field)
  return Promise.resolve()
}

export function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(id)
  }, [copied])

  const handleCopy = async () => {
    try {
      await copyWithFallback(profile.email)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <svg
        className="pitch"
        viewBox="0 0 760 500"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g stroke="currentColor" strokeWidth="1.5">
          <rect x="20" y="20" width="720" height="460" />
          <path d="M380 20v460" />
          <circle cx="380" cy="250" r="70" />
          <circle cx="380" cy="250" r="2.5" fill="currentColor" stroke="none" />
          <rect x="20" y="120" width="110" height="260" />
          <rect x="20" y="180" width="45" height="140" />
          <rect x="630" y="120" width="110" height="260" />
          <rect x="695" y="180" width="45" height="140" />
          <path d="M130 190a60 60 0 0 1 0 120" />
          <path d="M630 190a60 60 0 0 0 0 120" />
          <path d="M20 40a20 20 0 0 0 20-20" />
          <path d="M720 40a20 20 0 0 1-20-20" />
          <path d="M20 460a20 20 0 0 1 20 20" />
          <path d="M720 460a20 20 0 0 0-20 20" />
        </g>
      </svg>

      <div className="shell contact-inner">
        <div className="contact-head">
          <p className="section-index">
            <span>05</span> Contact
          </p>
          <p className="contact-status">
            <span className="status-dot" aria-hidden="true" />
            Open to remote roles
          </p>
        </div>

        <h2 id="contact-title">
          Let’s build something
          <br />
          <em>worth using.</em>
        </h2>

        <p className="contact-lede">
          I’m open to remote full-stack and product engineering roles, plus select
          contract work. If you need someone to own a product from schema to
          deployment, my inbox is open.
        </p>

        <div className="contact-email-row">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button className="copy-btn" type="button" onClick={handleCopy}>
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {copied ? 'Email address copied to clipboard' : ''}
          </span>
        </div>

        <div className="contact-links">
          <a href={profile.linkedin}>
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={profile.github}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href={profile.parascores}>
            ParaScores <span aria-hidden="true">↗</span>
          </a>
          <a href="/Oluwaseyi-Hassan-Resume.pdf" download>
            Résumé (PDF) <span aria-hidden="true">↓</span>
          </a>
        </div>

        <p className="contact-footnote">
          Based in {profile.location}, UTC+1. Comfortable across EU and Africa
          timezones.
        </p>
      </div>
    </section>
  )
}
