import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'
import type { ResumeData } from '../../types'

interface AboutProps {
  data: ResumeData['about']
}

export default function About({ data }: AboutProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-gray-50 py-20 dark:bg-gray-900/50 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          id="about-heading"
          title="About"
          subtitle="저에 대해 소개합니다"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Paragraphs */}
          <div className="space-y-4">
            {data.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-gray-600 dark:text-gray-400"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Strength cards */}
          <div className="flex flex-col gap-4">
            {data.strengths.map((s, i) => (
              <Card key={i} hover padding="md">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-xl dark:bg-brand-900/30"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {s.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
