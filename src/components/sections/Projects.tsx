import Badge from '../ui/Badge'
import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'
import type { ResumeData } from '../../types'

interface ProjectsProps {
  data: ResumeData['projects']
}

const ExternalLinkIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const GithubIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

export default function Projects({ data }: ProjectsProps) {
  const featured = data.filter(p => p.featured)

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-white py-20 dark:bg-gray-950 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          id="projects-heading"
          title="Projects"
          subtitle="주요 프로젝트입니다"
        />

        {/* Featured projects */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {featured.map(project => (
            <Card key={project.id} hover padding="md" className="flex flex-col">
              <div className="flex flex-1 flex-col">
                {/* Title */}
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {project.summary}
                </p>

                {project.highlights ? (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                      대표 작업
                    </p>
                    <ul className="mt-2 space-y-2.5">
                      {project.highlights.map(highlight => (
                        <li key={highlight.title} className="border-l-2 border-brand-200 pl-3 dark:border-brand-800">
                          <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                            {highlight.title}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                            {highlight.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="mt-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      <span className="mr-1" aria-hidden="true">🙋</span>
                      나의 기여
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.contribution}
                    </p>
                  </div>
                )}

                {/* Tech stack */}
                <div className="mt-3 flex flex-wrap gap-1.5" aria-label="기술 스택">
                  {project.technologies.map(tech => (
                    <Badge key={tech} label={tech} variant="tech" />
                  ))}
                </div>

                {(project.demoUrl || project.githubUrl) && (
                  <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                        aria-label={`${project.title} 데모 보기 (새 탭에서 열림)`}
                      >
                        <ExternalLinkIcon />
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                        aria-label={`${project.title} GitHub 저장소 (새 탭에서 열림)`}
                      >
                        <GithubIcon />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Other projects */}
        {/* {others.length > 0 && (
          <>
            <h3 className="mt-10 mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              기타 프로젝트
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {others.map(project => (
                <Card key={project.id} hover padding="md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">
                        {project.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {project.summary}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {project.technologies.map(tech => (
                          <Badge key={tech} label={tech} variant="tech" />
                        ))}
                      </div>
                    </div>
                    {(project.githubUrl || project.demoUrl) && (
                      <div className="flex shrink-0 items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            aria-label={`${project.title} GitHub`}
                          >
                            <GithubIcon />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-brand-500 dark:hover:text-brand-400"
                            aria-label={`${project.title} Demo`}
                          >
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )} */}
      </div>
    </section>
  )
}
