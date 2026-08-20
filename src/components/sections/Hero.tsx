import Button from '../ui/Button'
import type { ResumeData } from '../../types'

interface HeroProps {
  data: ResumeData['personal']
}

const GithubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

const EmailIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const DownloadIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
)

export default function Hero({ data }: HeroProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="flex min-h-screen items-center bg-white pt-16 dark:bg-gray-950"
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="animate-fade-in">
          {/* Greeting chip */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 dark:border-brand-800/50 dark:bg-brand-900/20 dark:text-brand-300">
            {/* <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" aria-hidden="true" /> */}
            안녕하세요, 만나서 반갑습니다!
          </div>

          {/* Name */}
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl"
          >
            {data.name}
            <span className="text-brand-500">.</span>
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-xl font-medium text-gray-500 dark:text-gray-400 sm:text-2xl">
            {data.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2" aria-label="핵심 기술">
            <span className="mr-1 text-sm font-medium text-gray-500 dark:text-gray-400">핵심 기술</span>
            {data.coreTechnologies.map(technology => (
              <span
                key={technology}
                className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label="외부 링크">
            <Button
              as="a"
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              icon={<GithubIcon />}
            >
              GitHub
            </Button>

            <Button
              as="a"
              href={`mailto:${data.email}`}
              variant="outline"
              size="lg"
              icon={<EmailIcon />}
            >
              Email
            </Button>
            <div className="inline-flex" role="group" aria-label="Resume 다운로드">
              <Button
                as="a"
                href={data.resumePdfUrl}
                download
                variant="primary"
                size="lg"
                icon={<DownloadIcon />}
                className="rounded-r-none"
              >
                Resume PDF
              </Button>
              <Button
                as="a"
                href={data.resumeWordUrl}
                download
                variant="primary"
                size="lg"
                icon={<DownloadIcon />}
                className="rounded-l-none border-l border-white/30"
              >
                Word
              </Button>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 flex items-center gap-2 text-sm text-gray-400 dark:text-gray-600">
            <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <span>스크롤하여 더 보기</span>
          </div>
        </div>
      </div>
    </section>
  )
}
