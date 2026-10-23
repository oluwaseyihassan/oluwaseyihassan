import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { SelectedWork } from './components/SelectedWork'
import { SiteHeader } from './components/SiteHeader'
import { useActiveSection } from './hooks/useActiveSection'
import { useReveal } from './hooks/useReveal'
import { useScrollProgress } from './hooks/useScrollProgress'

const SECTION_IDS = ['work', 'experience', 'about', 'contact'] as const

export default function App() {
  const progressRef = useScrollProgress<HTMLSpanElement>()
  const active = useActiveSection(SECTION_IDS)

  useReveal()

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>

      <SiteHeader active={active} />

      <main id="top">
        <Hero />
        <SelectedWork />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
