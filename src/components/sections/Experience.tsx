import Badge from '../ui/Badge'
import SectionTitle from '../ui/SectionTitle'
import type { ResumeData } from '../../types'

interface ExperienceProps {
  data: ResumeData['experience']
}

export default function Experience({ data }: ExperienceProps) {
  const calculateMonths = (start: string, end: string) => {
    const workDuration = Math.floor((new Date(end).getTime() - new Date(start).getTime()) / (1000 * 60 * 60 * 24 * 30))
    const years = Math.floor(workDuration / 12)
    const months = workDuration % 12

    return `${years > 0 ? `${years}년 ` : ''}${months > 0 ? `${months}개월` : ''}`.trim()
  }
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-gray-50 py-20 dark:bg-gray-900/50 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          id="experience-heading"
          title="Experience"
          subtitle="경력 사항입니다"
        />

        {/* Timeline */}
        <ol className="relative border-l border-gray-200 dark:border-gray-800" aria-label="경력 타임라인">
          {data.map(item => (
            <li key={item.id} className="mb-10 ml-6 last:mb-0">
              {/* Timeline dot */}
              <span
                className={`absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border-2 ${item.current ? 'border-brand-500 bg-brand-500' : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900'}`}
                aria-hidden="true"
              />

              {/* Content */}
              <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                {/* Header */}
                <header className="mb-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {item.company}
                        {item.current && (
                          <span className="ml-2 inline-flex items-center rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                            현재
                          </span>
                        )}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                        {item.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <time className="text-sm text-gray-500 dark:text-gray-400 tracking-wide">
                        {item.period.start} – {item.period.end} ({calculateMonths(item.period.start, item.period.end)})
                      </time>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{item.location}</p>
                    </div>
                  </div>
                </header>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                {/* Achievements */}
                <ul className="mt-3 space-y-1.5" aria-label="주요 성과">
                  {item.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-1.5" aria-label="사용 기술">
                  {item.technologies.map(tech => (
                    <Badge key={tech} label={tech} variant="tech" />
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
