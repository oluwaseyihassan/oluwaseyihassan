import { navItems, profile } from '../data/content'
import { useLocalTime } from '../hooks/useLocalTime'

type SiteHeaderProps = {
  active: string
}

export function SiteHeader({ active }: SiteHeaderProps) {
  const time = useLocalTime(profile.timezone)

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            OH
          </span>
          <span className="brand-text">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-role">{profile.role}</span>
          </span>
          <span className="sr-only">— back to top</span>
        </a>

        <nav className="site-nav" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'location' : undefined}
            >
              <span className="nav-index" aria-hidden="true">
                {item.index}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <p className="header-status">
          <span className="status-dot" aria-hidden="true" />
          <span className="status-text">Available</span>
          <span className="status-sep" aria-hidden="true">
            /
          </span>
          <time>{time} WAT</time>
        </p>
      </div>
    </header>
  )
}
