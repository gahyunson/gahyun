import SectionTitle from '../ui/SectionTitle'
import type { ResumeData } from '../../types'

interface EducationProps {
  data: ResumeData['education']
}

const typeConfig = {
  education:   { icon: '🎓', label: '학력',   bg: 'bg-brand-50 dark:bg-brand-900/20',   border: 'border-brand-200 dark:border-brand-800' },
  certificate: { icon: '📜', label: '자격증', bg: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'border-emerald-200 dark:border-emerald-800' },
  award:       { icon: '🏆', label: '수상',   bg: 'bg-amber-50 dark:bg-amber-900/20',   border: 'border-amber-200 dark:border-amber-800' },
}

export default function Education({ data }: EducationProps) {
  const grouped = {
    education:   data.filter(d => d.type === 'education'),
    certificate: data.filter(d => d.type === 'certificate'),
    award:       data.filter(d => d.type === 'award'),
  }

  const order = (['education', 'certificate', 'award'] as const).filter(
    k => grouped[k].length > 0
  )

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="bg-gray-50 py-20 dark:bg-gray-900/50 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          id="education-heading"
          title="Education & Certificates"
          subtitle="학력, 자격증, 수상 이력입니다"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {order.map(type => {
            const cfg = typeConfig[type]
            return (
              <div key={type}>
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  <span aria-hidden="true">{cfg.icon}</span>
                  {cfg.label}
                </h3>
                <ul className="space-y-3">
                  {grouped[type].map(item => (
                    <li
                      key={item.id}
                      className={`rounded-xl border p-4 ${cfg.bg} ${cfg.border}`}
                    >
                      <p className="font-medium text-gray-900 dark:text-gray-100">{item.title}</p>
                      <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
                        {item.institution}
                      </p>
                      <time className="mt-1 block text-xs text-gray-400 dark:text-gray-500">
                        {item.period}
                      </time>
                      {item.description && (
                        <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
