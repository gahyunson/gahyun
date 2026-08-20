import { useTheme } from './hooks/useTheme'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import { resumeData } from './data/resume'

export default function App() {
  const { theme, toggle } = useTheme()
  const { personal, about, skills, experience, projects, education } = resumeData

  return (
    <>
      {/* Skip to main content (accessibility) */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
      >
        본문으로 바로 가기
      </a>

      <Header theme={theme} onToggleTheme={toggle} />

      <main id="main-content">
        <Hero data={personal} />
        <About data={about} />
        <Projects data={projects} />
        <Experience data={experience} />
        <Skills data={skills} />
        <Education data={education} />
        <Contact data={personal} />
      </main>

      <Footer name={personal.name} github={personal.github} />
    </>
  )
}
