import { profile } from '../data/content'
import { useLocalTime } from '../hooks/useLocalTime'

export function Footer() {
  const time = useLocalTime(profile.timezone)

  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p>© 2026 {profile.name}</p>
        <p>
          {profile.location} — <time>{time} WAT</time>
        </p>
        <a className="to-top" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}
